import { DetailUser } from './detailUser';
export class User {
    id: string;
    username: string;
    name: string;
    email: string;
    role: string;
    active: boolean;
    detailUser: DetailUser;
}