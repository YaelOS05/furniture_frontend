import React, { useEffect, useState } from 'react'
import { IUsersResponse } from '../IUsersResponse'
import { ApiFactory } from '../ApiFactory.ts';
import Title from '../components/Title.tsx';

export default function AllUsers() {
    const [users, setUsers] = useState<IUsersResponse[]>([]);
    // const [loading, setLoading] = useState(true);

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
            </div>))}
          </article>
        </div>
    </>
  )
}
