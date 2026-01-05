import React from 'react'

export default function Box({number}: {number: number}) {
  return (
    <div className='Box'>
      <div>
        Box {number}
      </div>
    </div>
  )
}
