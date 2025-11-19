import React, {useState, useEffect} from "react";
import { Message } from "./Message";
import { ApiFactory } from "./ApiFactory.ts";
import { ApiError } from "./ApiError.ts";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    const [message, setMessage] = useState<Message>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMessage = async () => {
        try {
            const messageApi = ApiFactory.getMessageApi();
            const result = await messageApi.getAll();
            setMessage(result);
        } catch(err) {
            if(err instanceof ApiError) {
            console.error("Error detailed: ",  err.details);
            setError(`Error (${err.status}): ${err.message}`);
            } else {
            setError("Unexpected error");
            }
        }
        };

        fetchMessage();
    }, []);

    return (
      <>
        <div className="p-4">
          <h2>Users</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <h1>{message?.message}</h1>
        </div>
        <Link to = "/">Home</Link>
      </>
  );
};