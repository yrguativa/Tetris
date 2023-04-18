export interface UserProjects {
    id: number;
    name: string;
    projects: Project[];
}

export interface Project {
    id: number;
    name: string;
    color: string;
    days: number;
}