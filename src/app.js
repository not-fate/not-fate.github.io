import React, { useEffect } from 'react';
import './style.css'

const App = () => {
    useEffect(() => {
        document.getElementById('download-cv').addEventListener('click', () => {
            const a = document.getElementById('download-cv');
            a.href = 'CV.pdf';
            a.download = 'SOROKINA_QA_RESUME.pdf';
        });
    }, []);

    return (
        <div className="landing">
            <div className="container main">
                <About />
                <BugBox />
            </div>
        </div>
    );
}

const About = () => {
    return (
        <div className="about">
            <h1 className="title">QA ENGINEER</h1>
            <h2 className="subtitle">Надя Сорокина</h2>
            <p className="summary">
                Привет, я начинающий Web Fullstack QA-инженер <br /> с опытом в Fintech-проектах.
            </p>
            <Links />
        </div>
    );
}

const Links = () => {
    return (
        <div className="links">
            <a className="link" href="https://t.me/notefate"><i className='bx bxl-telegram'></i></a>
            <a className="link" href="https://github.com/not-fate"><i className='bx bxl-github'></i></a>
            <a className="link" id="download-cv" href="CV.pdf" download="SOROKINA_QA_RESUME.pdf"><i className='bx bx-download'></i></a>
        </div>
    );
}

const BugBox = () => {
    return (
        <div className="bug-box">
            <img className="bug-img" src={`${process.env.PUBLIC_URL}/bug.png`} alt="bug" />
        </div>
    );
}

export default App;
