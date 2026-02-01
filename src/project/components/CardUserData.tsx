import React from 'react'
import { IUsersResponse } from '../IUsersResponse'
import Button from './Button.tsx'

export default function CardUserData({user, editUser, deleteUser}:{user: IUsersResponse, editUser: (id: string) => void, deleteUser: (id: string) => void}) {

    return (
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
            <Button onClick={() => deleteUser(user.id)} type='button'>Delete</Button>
        </section>
    </div>
    )
}
