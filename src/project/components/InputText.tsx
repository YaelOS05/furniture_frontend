import React from 'react'

interface InputTextProps {
  field: string;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({ 
  field,
  type = "text",
  name,
  value,
  onChange,}: InputTextProps
) {
  return (
    <div className="input-text">
        <input type={type}
          required 
          placeholder=" " 
          className="input"
          name={name} 
          value={value}
          onChange={onChange}
          />
        <label className="label-form">{field}</label>
    </div>
  )
}
