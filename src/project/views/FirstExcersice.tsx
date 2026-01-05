import React from 'react'
import Title from '../components/Title.tsx'
import Box from '../components/Box.tsx'

export default function FirstExcersice() {
  return (
    <>
      <div className="container">
          <Title text={"FirstExcersice"}/>
          <div className='first-excersice-body'>
              <Box number={1}/>
              <Box number={2}/>
              <Box number={3}/>
              <div></div>
              <Box number={4}/>
              <div></div>
              <Box number={5}/>
              <Box number={6}/>
              <Box number={7}/>
          </div>
      </div>
    </>
  )
}
