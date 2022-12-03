import { Roles } from "./roles.interface";
import { token } from "./token.interface";

export interface userInfo extends token {
    id: string;
    name: string;
    last_name: string;
    email: string;
    image: string;
    rol: Roles;
}