import React from 'react'
import Title from '../components/Title.tsx'
import Box from '../components/Box.tsx'

export default function Attendance() {
  return (
    <div className="container">
      <div>
        <Title text="Attendance"/>
      </div>
      <div className='attendance-body'>
        <div><Box number={1}/></div>
        <div>
          <Box number={2}/>
          <Box number={2}/>
          <Box number={2}/>
        </div>
        <div><Box number={3}/></div>
      </div>
    </div>
  )
}
