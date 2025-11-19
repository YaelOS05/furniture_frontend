import ApiClient from "./ApiClient.ts";
import { IMessageApi } from "./ImessageApi";
import { MessageApi } from "./MessageApi.ts";

export class ApiFactory {
    private static messageApi: IMessageApi;

    static getMessageApi(): IMessageApi {
        if(!this.messageApi) {
            this.messageApi = new MessageApi(ApiClient.getInstance());
        }
        return this.messageApi;
    }
}