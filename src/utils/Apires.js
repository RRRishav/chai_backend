class ApiResponse{
    constructor(statusCode,data,message="Successfully done"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export {ApiResponse};