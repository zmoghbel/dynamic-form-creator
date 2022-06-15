export class User {
    id: number | undefined;
    username!: string;
    password!: string;
    roleId: number = 0; // 0 is for anonymous user
    firstName!: string;
    lastName!: string;
    token?: string;
}