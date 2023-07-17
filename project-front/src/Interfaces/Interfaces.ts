export interface Step {
    name: string;
    duration: number;
    xp: number;
    projectId: string;
};

export interface Project {
    _id: string;
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
};
