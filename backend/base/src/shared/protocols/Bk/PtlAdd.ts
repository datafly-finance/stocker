import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqAdd extends BaseRequest {
    name:string;
    code:string;
}

export interface ResAdd extends BaseResponse {
    id:number;
}

export const conf: BaseConf = {
    
}