import React, { useState } from 'react';
import { ApiError } from '../ApiError.ts';
import { ApiFactory } from '../ApiFactory.ts';
import { ApiResponse } from '../ApiResponse.ts';
import Button from '../components/Button.tsx';
import InputText from '../components/InputText.tsx';
import Title from '../components/Title.tsx';
import { HttpSuccessMessages } from '../HttpSuccessMessages.ts';
import { IUsersRequest } from '../IUsersRequest.ts';
import { IUsersResponse } from '../IUsersResponse.ts';
import { Feedback } from '../components/FeedBack.tsx';

export default function SignUp() {
  const[form, setForm] = useState<IUsersRequest>({
    name: "",
    lastName: "",
    type: "USER",
    email: "",
    password: ""
  });

  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse<IUsersResponse> | null>();
  const [message, setMessage] = useState<string | null>(null);

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
    resetValueDefaultsNewRequest();

    try{
      const userApi = ApiFactory.getUserApi();
      const data = await userApi.create(form);

      setMessage(HttpSuccessMessages[data.status]);
      setResponse(data);

    }catch(err) {
      if(err instanceof ApiError){ setError(err.getUserMessage());}
      else {setError("No waited error");}
    } finally {}

    function resetValueDefaultsNewRequest() {
      // setLoading(true);
      setError(null);
      setResponse(null);
      setMessage(null);
    }
  };
  return (
    <div className="container">
        <Title text={"Sign Up"}/>
        <div className="signup-form">
            <form className="form" onSubmit={handleSubmit}>
                    <InputText
                      onChange={handleChange}
                      value={form.name}
                      name={"name"}
                      field={"Name"}
                      type={"text"}/>
                    <InputText  onChange={handleChange} value={form.lastName} name={"lastName"} field={"Last Name"} type={"text"}/>
                    <InputText  onChange={handleChange} value={form.email} name={"email"} field={"Email"} type={"text"}/>
                    <InputText  onChange={handleChange} value={form.password} name={"password"} field={"Password"} type={"password"}/>
                    <Button  type={"submit"}>Submit</Button>
                    <Feedback message={message} error={error} />
            </form>
        </div>
    </div>
  )
}
