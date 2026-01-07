import { AxiosInstance } from "axios";
import { IUsersApi } from "./IUsersApi";
import { IUsersRequest } from "./IUsersRequest";
import { IUsersResponse } from "./IUsersResponse";

export class UsersApi implements IUsersApi {
    constructor(private readonly client: AxiosInstance) {}

    async create(body: IUsersRequest): Promise<IUsersResponse> {
        const response = await this.client.post<IUsersResponse>("/users", body);
        return response.data;
    }
};
