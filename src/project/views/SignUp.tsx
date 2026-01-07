import React, { useState } from 'react'
import Title from '../components/Title.tsx';
import InputText from '../components/InputText.tsx';
import Button from '../components/Button.tsx';
import { IUsersRequest } from '../IUsersRequest.ts';
import { ApiFactory } from '../ApiFactory.ts';
import { ApiError } from '../ApiError.ts';

export default function SignUp() {
  const[form, setForm] = useState<IUsersRequest>({
    name: "",
    lastName: "",
    type: "USER",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try{
      const userApi = ApiFactory.getUserApi();
      await userApi.create(form);
      alert("Created user successfully");
    }catch(err) {
      if(err instanceof ApiError){setError(err.details.message || "Error creating user");} 
      else {setError("error no waited");}
    }
    finally {setLoading(false);}
  };
  return (
    <div className="container">
        <Title text={"Sign Up"}/>
        <div className="signup-form">
            <form className="form" onSubmit={handleSubmit}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                    <InputText
                      onChange={handleChange}
                      value={form.name}
                      name={"name"}
                      field={"Name"}
                      type={"text"}/>
                    <InputText  onChange={handleChange} value={form.name} name={"lastName"} field={"Last Name"} type={"text"}/>
                    <InputText  onChange={handleChange} value={form.name} name={"email"} field={"Email"} type={"text"}/>
                    <InputText  onChange={handleChange} value={form.name} name={"password"} field={"Password"} type={"password"}/>
                    <Button type={"Submit"}/>
            </form>
        </div>
    </div>
  )
}
