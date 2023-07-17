import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="Home">
             <Link to="/ProjectList" className="button">
                <span>Liste des Projets</span>
            </Link>
            <Link to="/ProjectContext" className="button">
                <span>Soumettre un projet</span>
            </Link>
        </div>
    );
};

export default Home;
