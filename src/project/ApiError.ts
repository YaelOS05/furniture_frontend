import{AxiosError} from "axios";

export class ApiError extends Error {
    status?: number;
    details?: any;
    code?: string;
    
    constructor(error: AxiosError) {
        super(error.message);
        this.name = "ApiError";
        this.status = error.response?.status;
        this.details = error.response?.data || null;
        this.code = error.code;
    }

    isNetworkError(): boolean{
        return !this.status;
    }

    isTimeoutError(): boolean {
        return this.code === "ENCONNABORTED";
    }

    isClientError(): boolean {
        return this.status !== undefined && this.status >= 400 && this.status < 500;
    }

    isServerError(): boolean {
        return this.status !== undefined && this.status >= 500;
    }

    getUserMessage(): string {
        if (this.isNetworkError()) return "Conecction with server was unsuccessfully";
        if (this.isTimeoutError()) return "Time out";
        if (this.isServerError()) return "Error in server";
        if (this.isClientError()) return "Error in request";
        return "No error waited";
    }
}