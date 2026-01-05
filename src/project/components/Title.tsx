import React from 'react'
// type TitleProps ={
//     text: string;
// };
export default function Title({text}: {text: string}) {
  return (
    <header>
        <h1>{text}</h1>
    </header>
  )
}
