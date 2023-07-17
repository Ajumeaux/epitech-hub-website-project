import { MongoClient, ObjectId, Collection } from 'mongodb';
import { Step, Project } from './src/Interfaces';

async function deleteCollections(database: any) {
  // Supprimer la collection "steps"
  const stepsCollection: Collection<Step> = database.collection('steps');
  await stepsCollection.drop();
  console.log('Collection "steps" supprimée.');

  // Supprimer la collection "projects"
  const projectsCollection: Collection<Project> = database.collection('projects');
  await projectsCollection.drop();
  console.log('Collection "projects" supprimée.');
}

async function createCollections() {
  const uri = 'mongodb://127.0.0.1:27017'; // Remplacez par votre URI de connexion MongoDB
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('HubProjects'); // Remplacez par le nom de votre base de données

    await deleteCollections(database);

    // Créer la collection pour les étapes (steps)
    const stepsCollection = database.collection<Step>('steps');
    console.log('Collection "steps" créée avec succès.');

    // Créer la collection pour les projets (projects)
    const projectsCollection = database.collection<Project>('projects');
    console.log('Collection "projects" créée avec succès.');

    // Insérer des exemples de projets
    const project1: Project = {
      name: 'Projet 1',
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-01-31'),
      isCompleted: false,
      xp: 100,
      workers: 5,
      context: 'Contexte du projet 1',
      goal: 'Objectif du projet 1',
      description: 'Description du projet 1',
      steps: []
    };

    const project2: Project = {
      name: 'Projet 2',
      startDate: new Date('2023-02-01'),
      endDate: new Date('2023-02-28'),
      isCompleted: false,
      xp: 200,
      workers: 10,
      context: 'Contexte du projet 2',
      goal: 'Objectif du projet 2',
      description: 'Description du projet 2',
      steps: []
    };

    const insertedProjects = await projectsCollection.insertMany([project1, project2]);

    // Insérer des exemples d'étapes liées aux projets
    const step1: Step = {
      name: 'Étape 1',
      duration: 5,
      xp: 20,
      projectId: insertedProjects.insertedIds[0] as ObjectId
    };

    const step2: Step = {
      name: 'Étape 2',
      duration: 8,
      xp: 30,
      projectId: insertedProjects.insertedIds[0] as ObjectId
    };

    const step3: Step = {
      name: 'Étape 1',
      duration: 6,
      xp: 25,
      projectId: insertedProjects.insertedIds[1] as ObjectId
    };

    await stepsCollection.insertMany([step1, step2, step3]);

    console.log('Exemples de projets et d\'étapes insérés avec succès.');
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la création des collections :', error);
  } finally {
    await client.close();
  }
}

createCollections().catch(console.error);
