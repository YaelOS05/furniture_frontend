import ApiClient from "./ApiClient.ts";
import { IMessageApi } from "./ImessageApi";
import { IUsersApi } from "./IUsersApi.ts";
import { MessageApi } from "./MessageApi.ts";
import { UsersApi } from "./UsersApi.ts";

export class ApiFactory {
    private static messageApi: IMessageApi;
    private static userApi: IUsersApi;

    static getMessageApi(): IMessageApi {
        if(!this.messageApi) {
            this.messageApi = new MessageApi(ApiClient.getInstance());
        }
        return this.messageApi;
    }

    static getUserApi(): IUsersApi{
        if(!this.userApi) {
            this.userApi = new UsersApi(ApiClient.getInstance());
        }
        return this.userApi;
    }
}