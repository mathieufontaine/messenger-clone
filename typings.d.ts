export type User = {
    id: string;
    username: string;
    avatar: string;
};

export type Message = {
    id: string;
    message: string;
    createdAt: number;
    user: User;
};