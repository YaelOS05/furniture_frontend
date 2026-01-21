import React, { useEffect, useState } from 'react'
import { IUsersResponse } from '../IUsersResponse'
import { ApiFactory } from '../ApiFactory.ts';

export default function AllUsers() {
    const [users, setUsers] = useState<IUsersResponse[]>();
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
        const userApi = ApiFactory.getUserApi();
        const response = await userApi.getAllUsers();

        setUsers(response.data); // 👈 aquí llega la LISTA
        } catch (error) {
        console.error(error);
        }
    };

    fetchUsers();
    console.log(users);
    }, []);
  return (
    <>
        <div>

        </div>
    </>
  )
}
