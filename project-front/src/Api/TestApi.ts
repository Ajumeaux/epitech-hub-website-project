import { Project } from '../Interfaces/Interfaces';

export const getProjects: () => Promise<Project[]> = async () => {
    // return made up data composed of two projects
    const project1: Project = {
      _id: "1",
      name: "Project 1",
      startDate: new Date(),
      endDate: new Date(),
      isCompleted: false,
      xp: 0,
      workers: 0,
      context: "Context 1",
      goal: "Goal 1",
      description: "Description 1",
      steps: []
    };
    project1.steps.push({
      name: "Step 1",
      duration: 0,
      xp: 0,
      projectId: "1",
    });
    project1.steps.push({
      name: "Step 2",
      duration: 0,
      xp: 0,
      projectId: "1",
    });
    project1.steps.push({
      name: "Step 3",
      duration: 0,
      xp: 0,
      projectId: "1",
    });
  
    const project2: Project = {
      _id: "2",
      name: "Project 2",
      startDate: new Date(),
      endDate: new Date(),
      isCompleted: false,
      xp: 0,
      workers: 0,
      context: "Context 2",
      goal: "Goal 2",
      description: "Description 2",
      steps: []
    };
    project2.steps.push({
      name: "Step 1",
      duration: 0,
      xp: 0,
      projectId: "2",
    });
    project2.steps.push({
      name: "Step 2",
      duration: 0,
      xp: 0,
      projectId: "2",
    });
    project2.steps.push({
      name: "Step 3",
      duration: 0,
      xp: 0,
      projectId: "2",
    });
  
    return [project1, project2];
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
    const newProject: Project = {
        _id: data.projectId,
        name: data.name || "",
        startDate: data.startDate || new Date(),
        endDate: data.endDate || new Date(),
        isCompleted: data.isCompleted || false,
        xp: data.xp || 0,
        workers: data.workers || 0,
        context: data.context || "",
        goal: data.goal || "",
        description: data.description || "",
        steps: []
    };
    return newProject;
}