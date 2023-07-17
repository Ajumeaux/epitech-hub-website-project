import { Project } from '../Interfaces/Interfaces';

const api_url = 'http://localhost/5000/api';

export const sendProject = async (data: Project) => {
    try {
        const response = await fetch(`${api_url}/createProject`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost/5000/createProjects',
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
        const response = await fetch(`${api_url}/getProjects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost/5000',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json() as Promise<Project[]>;
    } catch (error) {
        console.error('There was an error getting the data', error);
    }
};

export const updateProject = async (data : {
    projectId: string,
    name?: string,
    startDate?: Date,
    endDate?: Date,
    isCompleted?: boolean,
    xp?: number,
    workers?: number,
    context?: string,
    goal?: string,
    description?: string,
}) => {

    try {
        const response = await fetch(`${api_url}/updateProject`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost/5000',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('There was an error updating the data', error);
    }
}