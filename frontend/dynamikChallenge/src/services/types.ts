export interface DeveloperRequest {
    nickname: string;
    name: string;
    birth_date: string;
    stack: string[];
}

export interface Developer extends DeveloperRequest{
    id: string;
}
