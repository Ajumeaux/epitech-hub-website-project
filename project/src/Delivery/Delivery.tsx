import React from 'react';
import { Link } from 'react-router-dom';
import './Delivery.css';
import { Project } from '../Interfaces/Interfaces';

interface Ownprops {
    project: Project;
    setProject: React.Dispatch<React.SetStateAction<Project>>;
}

const ProjectDelivery: React.FC<Ownprops> = ({
    project,
    setProject,
}) => {
    const [description, setDescription] = React.useState<string>('');

    return (
        <div className="Delivery">
            <div className="form-group">
                <label className="title">
                    Description du livrable:
                </label>
                <p className="description">Décrivez le livrable attendu.</p>
                <textarea 
                    id="description"
                    className="text-input"
                    rows={10}
                    cols={50}
                    value={description}
                    onChange={e => {
                        setDescription(e.target.value);
                    }}
                />
            </div>
            <div className="buttons">
                <Link to="/" className="button">Annuler</Link>
                <Link to="/ProjectTimeline" className="button" onClick={() => {
                    const newProject = {...project};
                    newProject.description = description;
                    setProject(newProject);
                }}>Continuer &#8594;</Link>
            </div>
        </div>
    );
};

export default ProjectDelivery;

