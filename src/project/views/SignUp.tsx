import React from 'react'
import Title from '../components/Title.tsx';
import InputText from '../components/InputText.tsx';
import Button from '../components/Button.tsx';

export default function SignUp() {
  return (
    <div className="container">
        <Title text={"Sign Up"}/>
        <div className="signup-form">
            <form className="form">
                form
                    <InputText  field={"Name"} type={"text"}/>
                    <InputText  field={"Last Name"} type={"text"}/>
                    <InputText  field={"Email"} type={"text"}/>
                    <InputText  field={"Password"} type={"password"}/>
                    <Button type={"Submit"}/>
            </form>
        </div>
    </div>
  )
}
