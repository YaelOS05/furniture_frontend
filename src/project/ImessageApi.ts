import { Message } from "./Message";

export interface IMessageApi {
    getAll(): Promise<Message>;
}