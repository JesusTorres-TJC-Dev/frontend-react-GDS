import { auth } from "./auth.interface";
import { userInfo } from "./userInfo.interface";

export interface register extends userInfo, auth {
    telf: string;
    country: string;
}