import React from 'react'
import Title from '../components/Title.tsx'
import Box from '../components/Box.tsx'

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="title">
          <Title text={"Login"}/>
        </div>
        <div className="login-body">
          <Box number={1}/>
          <Box number={2}/>
        </div>
      </div>
    </>
  )
}
