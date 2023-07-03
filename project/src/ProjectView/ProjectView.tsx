import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../Interfaces/Interfaces';
import './ProjectView.css';

interface Ownprops {
    project: Project;
    setProject: (project: Project | null) => void;
}

function dateToString(date: Date): string {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

const ProjectView: React.FC<Ownprops> = ({ project, setProject }) => {
    return (
        <div className="ProjectView">
            <div className="project-preview">
                <div className="project-part">
                    <div className="project-name">
                        <h1>{project.name}</h1>
                    </div>
                    <div className="project-description">
                        <h2>Description</h2>
                        <p>{project.description}</p>
                    </div>
                </div>
                <div className="project-part">
                    <div className="project-context">
                        <h2>Contexte</h2>
                        <p>{project.context}</p>
                    </div>
                    <div className="project-goal">
                        <h2>Objectif</h2>
                        <p>{project.goal}</p>
                    </div>
                </div>
                <div className="project-part">
                    <div className="project-steps">
                        <h2>Etapes</h2>
                        <ul>
                            {project.steps.map((step, index) => (
                                <li key={index}>
                                    <div className="step-name">
                                        <p>{step.name}</p>
                                    </div>
                                    <div className="step-duration">
                                        <p>Temps de travail en heure : {step.duration}</p>
                                    </div>
                                    <div className="step-xp">
                                        <p>XP(s) : {step.xp}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="project-part">
                    <div className="project-timeline">
                        <h1>Temporalité</h1>
                        <p>{dateToString(project.startDate)}</p>
                        <p>{dateToString(project.endDate)}</p>
                    </div>
                </div>
                <div className="project-part">
                    <div className="project-xp">
                        <h1>XP</h1>
                        <h2>{project.xp}</h2>
                    </div>
                    <div className="project-workers">
                        <h1>Nombre de participants</h1>
                        <h2>{project.workers}</h2>
                    </div>
                    <div className="project-completed">
                        <h1>Projet terminé</h1>
                        <h2>{project.isCompleted ? "Oui" : "Non"}</h2>
                    </div>
                </div>
                <Link to="/ProjectList" className="button" onClick={() => setProject(null)}>
                    <span>Retour</span>
                </Link>
            </div>
        </div>
    );
}

export default ProjectView;