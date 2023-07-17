import { ObjectId } from 'mongodb';

export interface Step {
    name: string;
    duration: number;
    xp: number;
    projectId: ObjectId;
}

export interface Project {
    _id?: ObjectId;
    name: string;
    startDate: Date;
    endDate: Date;
    isCompleted: boolean;
    xp: number;
    workers: number;
    context: string;
    goal: string;
    description: string;
    steps: Step[];
}
