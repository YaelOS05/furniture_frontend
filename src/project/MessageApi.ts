import { AxiosInstance } from "axios";
import { IMessageApi } from "./ImessageApi";
import { Message } from "./Message";

export class MessageApi implements IMessageApi {
    constructor(private readonly client: AxiosInstance) {}

    async getAll(): Promise<Message> {
        const response = await this.client.get<Message>("/furniture");
        return response.data;
    }
}