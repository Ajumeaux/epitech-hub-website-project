import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createProject, getProjects, updateProject } from './src/MongoDB';
import { Project } from './src/Interfaces';
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getProjects', async (req, res) => {
  const projects = await getProjects();
  res.json(projects);
});

app.post('/createProject', async (req, res) => {
  const project: Project = req.body;
  const createdProject = await createProject(project);
  res.json(createdProject);
});

app.put('/updateProject', async (req, res) => {
  const updatedProject = await updateProject(
    req.body.data.projectId,
    req.body.data.name,
    req.body.data.startDate,
    req.body.data.endDate,
    req.body.data.isCompleted,
    req.body.data.xp,
    req.body.data.workers,
    req.body.data.context,
    req.body.data.goal,
    req.body.data.description,
  );
  res.json(updatedProject);
});

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
