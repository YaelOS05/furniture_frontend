import { ApiResponse } from "./ApiResponse";
import { IUsersRequest } from "./IUsersRequest";
import { IUsersResponse } from "./IUsersResponse";
import { IFullUpdateUsersRequest } from "./IFullUpdateUsersRequest.ts";

export interface IUsersApi{
    create(payload: IUsersRequest): Promise<ApiResponse<IUsersResponse>>;
    getAllUsers(): Promise<ApiResponse<IUsersResponse[]>>;
    getUserById(userId: string): Promise<ApiResponse<IUsersResponse>>;
    updateFullUser(userId: string, payload: IFullUpdateUsersRequest): Promise<ApiResponse<IUsersResponse>>;
}