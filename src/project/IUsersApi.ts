import { IUsersRequest } from "./IUsersRequest";
import { IUsersResponse } from "./IUsersResponse";

export interface IUsersApi{
    create(data: IUsersRequest): Promise<IUsersResponse>;
}