import React from 'react'

interface InputTextProps {
  field: string;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  required?: boolean;
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({ 
  field,
  type = "text",
  name,
  value,
  required = false,
  disabled = false,
  onChange}: InputTextProps
) {
  return (
    <div className="input-text">
        <input type={type}
          required ={required}
          placeholder=" " 
          className="input"
          name={name} 
          value={value}
          disabled={disabled}
          onChange={onChange}
          />
        <label className="label-form">{field}</label>
    </div>
  )
}
