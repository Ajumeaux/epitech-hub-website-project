export interface Step {
    name: string;
    duration: number;
    xp: number;
};

export interface Project {
    name: string;
    startDate: Date;
    endDate: Date;
    isCompleted: boolean;
    xp: number;
    workers: number;
    id: number;
    context: string;
    goal: string;
    description: string;
    steps: Step[];
};
