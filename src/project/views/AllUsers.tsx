import React, { useEffect, useState } from 'react'
import { IUsersResponse } from '../IUsersResponse'
import { ApiFactory } from '../ApiFactory.ts';
import Title from '../components/Title.tsx';
import Button from '../components/Button.tsx';
import SignUp from './SignUp.tsx';
import { useNavigate } from 'react-router-dom';
import CardUserData from '../components/CardUserData.tsx';
import { ApiError } from '../ApiError.ts';

export default function AllUsers() {
    const [users, setUsers] = useState<IUsersResponse[]>([]);
    // const[userId, setUserId] = useState();
    const [error, setError] = useState<string | null>(null);

    const deleteUser = async (userId: string) => {
      try{
        const userApi = ApiFactory.getUserApi();
        await userApi.deleteUser(userId);
        await fetchUsers();
      }catch(err){
        if(err instanceof ApiError){ setError(err.getUserMessage());}
              else {setError("No waited error");}
      }
    }

    const fetchUsers = async () => {
        try {
          const userApi = ApiFactory.getUserApi();
          const response = await userApi.getAllUsers();

          setUsers(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {

    fetchUsers();
    }, []);

    const navigate = useNavigate();

    const editUser = (userId: string) => {
      navigate(`/signup/${userId}`);
    }

  return (
    <>
        <div className = "container">
          <Title text = {"Get all users"}/>
          <article className = "elements">
            {users.map(user => (
              <CardUserData user={user} editUser={editUser} deleteUser={deleteUser}/>
            ))}
          </article>
        </div>
    </>
  )
}
