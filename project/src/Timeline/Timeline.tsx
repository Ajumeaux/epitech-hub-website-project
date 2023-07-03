import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css'
import { Project, Step } from '../Interfaces/Interfaces';
import { sendProject } from '../Api/Api';

interface Ownprops {
    project: Project;
    setProject: React.Dispatch<React.SetStateAction<Project>>;
}   

const ProjectTimeline: React.FC<Ownprops> = ({
    project,
    setProject,
}) => {
    const [steps, setSteps] = React.useState([
        {name: '', duration: 0, xp: 0}
    ]);

    const send = async () => {
        const newProject = {...project};
        newProject.steps = steps;
        await sendProject(newProject);
    }

    return (
        <div className="Timeline">
            <div className="form-group">
            {steps.map((step: Step, index: number) => (
                <div key={index} className="step">
                    <label className="step-item">
                        Nom de l'étape :
                        <input type="text" className="name" name="name" value={step.name} onChange={event => {
                            const newSteps = [...steps];
                            newSteps[index].name = event.target.value;
                            setSteps(newSteps);
                        }} />
                    </label>
                    <label className="step-item">
                        Durée de l'étape (en heures) :
                        <input type="text" className="duration" name="duration" value={step.duration.toString()} onChange={event => {
                            const newSteps = [...steps];
                            newSteps[index].duration = Number(event.target.value);
                            setSteps(newSteps);
                        }} />
                    </label>
                    <label className="step-item">
                        XP de hub :
                        <input type="text" className="xp" name="xp" value={step.xp} onChange={event => {
                            const newSteps = [...steps];
                            newSteps[index].xp = Number(event.target.value);
                            setSteps(newSteps);
                        }} />
                    </label>
                    <div 
                        className="delete-button"
                        onClick={() => {
                            const newSteps = [...steps];
                            newSteps.splice(index, 1);
                            setSteps(newSteps);
                        }}>Supprimer</div>
                </div>
            ))}

            </div>
            <div className="buttons">
                <Link to="/" className="button">Annuler</Link>
                <div
                    className="button"
                    onClick={() => {
                        if (steps.length >= 8) return;
                        const newSteps = [...steps];
                        newSteps.push({name: '', duration: 0, xp: 0});
                        setSteps(newSteps);
                    }}
                >Ajouter une étape
                </div>
                
                <Link className='button' to="/" onClick={send}>Finaliser</Link>
            </div>
        </div>
    );
};

export default ProjectTimeline;