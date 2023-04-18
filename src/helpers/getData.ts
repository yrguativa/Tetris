import { UserProjects } from "../models/userProjects";

const url = './../../tests/data/projects.json'
export const getDate = async () : Promise<UserProjects[]> => {
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data;
}