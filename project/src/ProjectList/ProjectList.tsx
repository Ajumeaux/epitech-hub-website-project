import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../Interfaces/Interfaces';
import ProjectView from '../ProjectView/ProjectView';
import './ProjectList.css';
import { getProjects } from '../Api/TestApi'; // TODO: Replace with real API

function dateToString(date: Date): string {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [preview, setPreview] = useState<Project | null>(null);

    useEffect(() => {
        setPreview(null);
        getProjects().then((projectsData) => {
            if (projectsData) {
                setProjects(projectsData);
            }
            setLoaded(true);
        });
    }, []);

    return (
        <>
            {!loaded && <div>Loading...</div>}
            {loaded && !preview && <div className="ProjectList">
                {projects.map((project, i) => (
                    <div key={i} className="project-card">
                        <h2>{project.name}</h2>
                        <div className="date">
                            <p>Début</p>
                            <p>{dateToString(project.startDate)}</p>
                        </div>
                        <div className="date">
                            <p>Fin</p>
                            <p>{dateToString(project.endDate)}</p>
                        </div>
                        <div className="button" onClick={() => {
                                setPreview(project);
                        }}>
                            Aperçu
                        </div>
                    </div>
                ))}
                <Link to="/" className="button">
                    <span>Retour</span>
                </Link>
            </div>}
            {loaded && preview && <ProjectView project={preview} setProject={setPreview}/>}
        </>
    );
};

export default ProjectList;
