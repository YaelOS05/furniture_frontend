import React, { useEffect, useState } from 'react'
import { IUsersResponse } from '../IUsersResponse'
import { ApiFactory } from '../ApiFactory.ts';
import Title from '../components/Title.tsx';
import Button from '../components/Button.tsx';
import SignUp from './SignUp.tsx';
import { useNavigate } from 'react-router-dom';

export default function AllUsers() {
    const [users, setUsers] = useState<IUsersResponse[]>([]);
    // const[userId, setUserId] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
        try {
          const userApi = ApiFactory.getUserApi();
          const response = await userApi.getAllUsers();

          setUsers(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    fetchUsers();
    }, []);

    const navigate = useNavigate();

    const editUser = (userId: string) => {
      navigate(`/signup/${userId}`);
    }

    const deleteUser = (userId: string) => void {

    }
  return (
    <>
        <div className = "container">
          <Title text = {"Get all users"}/>
          <article className = "elements">
            {users.map(user => (
              <div className = "card-box">
                <section className="card-header">
                  <h3>{user.email}</h3>
                </section>
                <section className="card-footer">
                  <div className="full-name">
                    <div>{user.name}</div> <div>{user.lastName}</div>
                  </div>
                  <div className="type">
                    <h5>{user.type}</h5>
                  </div>
                </section>
                <section className="card-footer">
                  <div className="card-id">
                    <h6>{user.id}</h6>
                  </div>
                </section>
                <section className = "card-button">
                  <Button onClick={() => editUser(user.id)} type='button'>Edit</Button>
                  <Button onClick={deleteUser(user.id)} type='button'>Delete</Button>
                </section>
              </div>
            ))}
          </article>
        </div>
    </>
  )
}
