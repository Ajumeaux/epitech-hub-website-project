import { Project } from '../Interfaces/Interfaces';

export const sendProject = async (data: Project) => {
    try {
        const response = await fetch('http://api.epinet.com/hubproject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('There was an error sending the data', error);
    }
};

export const getProjects = async () => {
    try {
        const response = await fetch('http://api.epinet.com/hubproject');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json() as Promise<Project[]>;
    } catch (error) {
        console.error('There was an error getting the data', error);
    }
};