import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { IFullUpdateUsersRequest } from '../IFullUpdateUsersRequest.ts';
import { IUpdatePasswordRequest } from '../IUpdatePasswordRequest.ts';

export default function SignUp({isView=false}){
  const[form, setForm] = useState<IUsersRequest>({
    name: "",
    lastName: "",
    type: "USER",
    email: "",
    password: ""
  });

  const[updateForm, setUpdateForm] = useState<IFullUpdateUsersRequest>({
    name: "",
    lastName: "",
    type: "USER",
    email: ""
  });

  const[updatePassword, setUpdatePassword] = useState<IUpdatePasswordRequest>({
    password: ""
  });

  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse<IUsersResponse> | null>();
  const [message, setMessage] = useState<string | null>(null);
  const { userId } = useParams<{ userId: string}>();

  type FormMode = "create" | "edit" | "view";
  const formMode: FormMode = userId
    ? isView
      ? "view"
      : "edit"
    : "create";
  const isEditable = formMode !== "view";
  const isPasswordRequired = formMode === "create";
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setUpdateForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setUpdatePassword({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetValueDefaultsNewRequest();

    try{
      const userApi = ApiFactory.getUserApi();

      let data: ApiResponse<IUsersResponse>;

      if(userId){ 
        data = await userApi.updateFullUser(userId, updateForm);
        if(updatePassword.password && updatePassword.password.trim() !== "") await userApi.updatePassword(userId, updatePassword);
      }else{
        data =  await userApi.create(form);
      }

      setMessage(HttpSuccessMessages[data.status]);
      setResponse(data);

    }catch(err) {
      if(err instanceof ApiError){ setError(err.getUserMessage());}
      else {setError("No waited error");}
    }

    function resetValueDefaultsNewRequest() {
      // setLoading(true);
      setError(null);
      setResponse(null);
      setMessage(null);
    }
  };

  useEffect(() => {
    if(!userId) return;
    const fetchUser = async () => {
      try{
        const userApi = ApiFactory.getUserApi();
        const data = await userApi.getUserById(userId);

        setForm({
          name: data.data.name,
          lastName: data.data.lastName,
          type: data.data.type,
          email: data.data.email,
          password: ""
        });
      }catch(error) {
        console.error("Error al cargar el usuario", error);
      }
    };

    fetchUser();
  }, [userId])

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
                    <InputText  onChange={handleChange} value={form.password} name={"password"} field={
                      formMode === "create" ?
                      "Password": "New password (optional)"}
                      required={isPasswordRequired}
                      disabled={!isEditable}
                      type={"password"}/>
                    <Button  type={"submit"}>Submit</Button>
                    <Feedback message={message} error={error} />
            </form>
        </div>
    </div>
  )
}
