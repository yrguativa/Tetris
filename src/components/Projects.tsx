import { useState, useEffect } from 'react';
import { UserProjects } from '../models/userProjects';
import { getDate } from './../helpers/getData';

import './Projects.css';

export const Projects = () => {
    const [UserProjects, setUserProject] = useState<UserProjects[]>([]);
    const getUserProjects = async () => {
        const dataUserProjects = await getDate();
        setUserProject(dataUserProjects)
    };

    useEffect(() => {
        getUserProjects();
    }, [])

    const [newNameProject, setNewNameProject] = useState('project');

    const handleProjectClick = () => {
        setNewNameProject(newNameProject == 'project' ? 'click' : 'project')
    };

    return (
        <div className="tetris-project">
            <div data-testid="project1" onClick={handleProjectClick} className="projects project-one bg-teal-600">
                {newNameProject} 1
            </div>
            <div onClick={handleProjectClick} className="projects project-two ">
                {newNameProject} 2
            </div>

            <div onClick={handleProjectClick} className="projects project-three ">
                {newNameProject} 3
            </div>
            <div onClick={handleProjectClick} className="projects  ">
                {newNameProject} 4
            </div>
            <div onClick={handleProjectClick} className="projects ">
                {newNameProject} 5
            </div>
        </div>
    )
}