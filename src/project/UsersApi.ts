import { AxiosInstance } from "axios";
import { IUsersApi } from "./IUsersApi";
import { IUsersRequest } from "./IUsersRequest.ts";
import { IUsersResponse } from "./IUsersResponse";
import { ApiResponse } from "./ApiResponse";

export class UsersApi implements IUsersApi {
    constructor(private readonly client: AxiosInstance) {}

    async create(body: IUsersRequest): Promise<ApiResponse<IUsersResponse>> {
        const response = await this.client.post<IUsersResponse>("/api/users", body);
        return {data: response.data, status: response.status}
    }

    async getAllUsers(): Promise<ApiResponse<IUsersResponse[]>> {
        const response = await this.client.get<IUsersResponse[]>("/api/users");
        return{
            data: response.data,
            status: response.status
        }
    }

    async getUserById(userId: string): Promise<ApiResponse<IUsersResponse>> {
        const response = await this.client.get<IUsersResponse>(`/api/users/${userId}`)
        return {
            data: response.data,
            status: response.status
        }
    }
};
