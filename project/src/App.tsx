import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider } from './FormContext'
import ProjectContext from './Context/Context';
import ProjectDelivery from './Delivery/Delivery';
import ProjectTimeline from './Timeline/Timeline';
import ProjectList from './ProjectList/ProjectList';
import Home from './Home/Home';
import { Project } from './Interfaces/Interfaces';
import logo from './Epitech_logo.png'
import { Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  const [project, setProject] = React.useState({} as Project);

  return (
    <>
      <div className="header">
          <img src={logo} alt="Epitech Logo" className="logo"/>
          <h1>Hub Projects</h1>
      </div>
      <FormProvider>
          <Router>
              <Routes>
                  <Route path="/ProjectContext" element={
                    <ProjectContext
                      project={project}
                      setProject={setProject}
                    />
                  } />
                  <Route path="/ProjectDelivery" element={
                    <ProjectDelivery 
                      project={project}
                      setProject={setProject}
                    />} />
                  <Route path="/ProjectTimeline" element={
                    <ProjectTimeline
                      project={project}
                      setProject={setProject}
                    />} />
                  <Route path="/ProjectList" element={<ProjectList/>} />
                  <Route path="/" element={<Home />} />
              </Routes>
          </Router>
      </FormProvider>
    </>
  );
};

export default App;
