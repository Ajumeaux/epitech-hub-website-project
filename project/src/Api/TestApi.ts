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

export const getProjects = async () => {
    // return made up data composed of two projects
    return [
        {
            name: "Project 1",
            startDate: new Date(),
            endDate: new Date(),
            isCompleted: false,
            xp: 10,
            workers: 1,
            id: 1,
            context: "Context 1",
            goal: "Goal 1",
            description: "Description 1",
            steps: [
                {
                    name: "Step 1",
                    duration: 1,
                    xp: 1
                },
                {
                    name: "Step 2",
                    duration: 2,
                    xp: 2
                },
                {
                    name: "Step 3",
                    duration: 3,
                    xp: 3
                }
            ]
        },
        {
            name: "Project 2",
            startDate: new Date(),
            endDate: new Date(),
            isCompleted: false,
            xp: 20,
            workers: 2,
            id: 2,
            context: "Context 2",
            goal: "Goal 2",
            description: "Description 2",
            steps: [
                {
                    name: "Step 1",
                    duration: 1,
                    xp: 1
                },
                {
                    name: "Step 2",
                    duration: 2,
                    xp: 2
                },
                {
                    name: "Step 3",
                    duration: 3,
                    xp: 3
                }
            ]
        }
    ];
};