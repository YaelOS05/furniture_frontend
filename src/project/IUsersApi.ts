import { ApiResponse } from "./ApiResponse";
import { IUsersRequest } from "./IUsersRequest";
import { IUsersResponse } from "./IUsersResponse";
import { IFullUpdateUsersRequest } from "./IFullUpdateUsersRequest.ts";
import { IUpdatePasswordRequest } from "./IUpdatePasswordRequest.ts";

export interface IUsersApi{
    updatePassword(userId: string, updatePassword: IUpdatePasswordRequest): Promise<ApiResponse<IUsersResponse>>;
    create(payload: IUsersRequest): Promise<ApiResponse<IUsersResponse>>;
    getAllUsers(): Promise<ApiResponse<IUsersResponse[]>>;
    getUserById(userId: string): Promise<ApiResponse<IUsersResponse>>;
    updateFullUser(userId: string, payload: IFullUpdateUsersRequest): Promise<ApiResponse<IUsersResponse>>;
    deleteUser(userId: string): Promise<ApiResponse<IUsersResponse>>;
}