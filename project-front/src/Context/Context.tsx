import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Context.css';
import { Project } from '../Interfaces/Interfaces';

interface Ownprops {
    project: Project;
    setProject: React.Dispatch<React.SetStateAction<Project>>;
}

const ProjectContext: React.FC<Ownprops> = ({
    project,
    setProject,
}) => {
    const [context, setContext] = useState<string>('');
    const [goal, setGoal] = useState<string>('');

    return (
        <div className="Context">
            <div className="form-group">
                <label className="title" htmlFor="context">Contexte du projet:</label>
                <p className="description">Décrivez le contexte du projet, les enjeux, les objectifs, les contraintes, les acteurs, etc.</p>
                <textarea 
                    id="context"
                    className="text-input"
                    rows={10}
                    cols={50}
                    value={context}
                    onChange={e => {
                        setContext(e.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label className="title" htmlFor="goal">Objectif du projet:</label>
                <p className="description">Décrivez l'objectif du projet, les résultats attendus, les livrables, etc.</p>
                <textarea 
                    id="goal"
                    className="text-input"
                    rows={10}
                    cols={50}
                    value={goal} 
                    onChange={e => {
                        setGoal(e.target.value);
                    }}
                />
            </div>
            <div className="buttons">
            <Link to="/" className="button">Annuler</Link>
            <Link to="/ProjectDelivery" className="button" onClick={() => {
                const newProject = {...project};
                newProject.context = context;
                newProject.goal = goal;
                setProject(newProject);
            }}>Continuer &#8594;</Link>
            </div>
        </div>
    );
};

export default ProjectContext;

