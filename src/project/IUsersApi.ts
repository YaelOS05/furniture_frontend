import { ApiResponse } from "./ApiResponse";
import { IUsersRequest } from "./IUsersRequest";
import { IUsersResponse } from "./IUsersResponse";

export interface IUsersApi{
    create(data: IUsersRequest): Promise<ApiResponse<IUsersResponse>>;
    getAllUsers(): Promise<ApiResponse<IUsersResponse[]>>;
    getUserById(userId: string): Promise<ApiResponse<IUsersResponse>>;
}