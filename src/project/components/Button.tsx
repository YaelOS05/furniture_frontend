import React from 'react'

export default function Button({type}: {type:string}) {
  return (
    <div className="submit-button">
        <div>{type}</div>
    </div>
  )
}
