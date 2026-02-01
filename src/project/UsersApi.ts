import { AxiosInstance } from "axios";
import { IUsersApi } from "./IUsersApi";
import { IUsersRequest } from "./IUsersRequest.ts";
import { IFullUpdateUsersRequest } from "./IFullUpdateUsersRequest";
import { IUsersResponse } from "./IUsersResponse";
import { ApiResponse } from "./ApiResponse";
import { IUpdatePasswordRequest } from "./IUpdatePasswordRequest.ts";

export class UsersApi implements IUsersApi {
    constructor(private readonly client: AxiosInstance) {}

    async create(payload: IUsersRequest): Promise<ApiResponse<IUsersResponse>> {
        const response = await this.client.post<IUsersResponse>("/api/users", payload);
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

    async updateFullUser(userId: string, payload: IFullUpdateUsersRequest): Promise<ApiResponse<IUsersResponse>> {
        const response = await this.client.put<IUsersResponse>(`/api/users/${userId}`, payload)
        return {
            data: response.data,
            status: response.status
        }
    }

    async updatePassword(userId: string, payload: IUpdatePasswordRequest): Promise<ApiResponse<IUsersResponse>> {
        const response = await this.client.put<IUsersResponse>(`/api/users/${userId}/password`, payload);
        return {
            data: response.data,
            status: response.status
        }
    }

    async deleteUser(userId: string): Promise<ApiResponse<IUsersResponse>> {
        const response = await this.client.delete<IUsersResponse>(`/api/users/${userId}`);
        return {
            data: response.data,
            status: response.status
        }
    }
};
