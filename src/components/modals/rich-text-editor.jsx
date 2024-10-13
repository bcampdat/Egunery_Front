import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    if (value) {
      setEditorValue(value);
    }
  }, [value]);

  const handleChange = (content) => {
    setEditorValue(content);
    onChange(content);
  };

  return (
    <ReactQuill
      value={editorValue}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ 'font': [] }],
          ["bold", "italic", "underline", "strike"],
          [{ 'color': [] }, { 'background': [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ 'align': [] }],
          ["image"],
        ],
      }}
      placeholder="Escribe tu contenido aquí..."
    />
  );
};


RichTextEditor.propTypes = {
  value: PropTypes.string, 
  onChange: PropTypes.func.isRequired, 
};

export default RichTextEditor;
