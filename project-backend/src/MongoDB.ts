import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import { Step, Project } from './Interfaces';

dotenv.config();

async function connectToDatabase(): Promise<Db> {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connecté à la base de données MongoDB.');

    const database = client.db('HubProjects');
    return database;
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données MongoDB:', error);
    throw error;
  }
}

export async function getProjects(): Promise<Project[]> {
  const database = await connectToDatabase();
  const projectCollection: Collection<Project> = database.collection<Project>('projects');
  const stepsCollection: Collection<Step> = database.collection<Step>('steps');

  const projects = await projectCollection.find().toArray();

  const projectsWithSteps = await Promise.all(
    projects.map(async (project) => {
      const steps = await stepsCollection.find({ projectId: project._id }).toArray();
      return {
        ...project,
        steps,
      };
    })
  );

  return projectsWithSteps;
}


export async function createStep(step: Step): Promise<Step> {
  const database = await connectToDatabase();
  const stepsCollection: Collection<Step> = database.collection<Step>('steps');

  const result = await stepsCollection.insertOne(step);
  const createdStep: Step = {
    ...step,
  };

  return createdStep;
}

export async function createProject(project: Project): Promise<Project> {
  const database = await connectToDatabase();
  const projectCollection: Collection<Project> = database.collection<Project>('projects');

  const steps = [...project.steps];

  project.steps = [];
  await projectCollection.insertOne(project);

  const stepsResult = await Promise.all(steps.map(async (step) => {
    const stepResult = await createStep(step);
    return stepResult;
  }));

  const createdProject: Project = {
    ...project,
    steps: stepsResult,
  };

  console.log(createdProject);

  return createdProject;
}


export async function updateProject(
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
): Promise<Project> {
  const database = await connectToDatabase();
  const projectCollection: Collection<Project> = database.collection<Project>('projects');

  const project = await projectCollection.findOne({ _id: new ObjectId(projectId) });

  if (!project) {
    throw new Error('Project not found');
  }

  const updatedProject: Project = {
    ...project,
    name: name || project.name,
    startDate: startDate || project.startDate,
    endDate: endDate || project.endDate,
    isCompleted: isCompleted || project.isCompleted,
    xp: xp || project.xp,
    workers: workers || project.workers,
    context: context || project.context,
    goal: goal || project.goal,
    description: description || project.description,
  };

  return updatedProject;
}