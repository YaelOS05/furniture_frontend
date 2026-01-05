import React from 'react'

export default function InputText({field, type}: {field: string, type:string}) {
  return (
    <div className="input-text">
        <input type={type}
          required 
          placeholder=" " 
          className="input"/>
        <label className="label-form">{field}</label>
    </div>
  )
}
