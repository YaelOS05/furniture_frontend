import{AxiosError} from "axios";

export class ApiError extends Error {
    status?: number;
    details?: any;

    constructor(error: AxiosError) {
        super(error.message);
        this.name = "ApiError";
        this.status = error.response?.status;
        this.details = error.response?.data || null;
    }

    isClientError(): boolean {
        return this.status !== undefined && this.status >= 400 && this.status < 500;
    }

    isServerError(): boolean {
        return this.status !== undefined && this.status >= 500;
    }
}