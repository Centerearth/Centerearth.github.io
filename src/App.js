import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Andrew Nicholls</h1>
      </header>
      <main>
        <section className="bio">
          <img src="/MELO4163.jpg" alt="Andrew Nicholls" />
          <div>
            <h2>About Me</h2>
            <p>
              Welcome to my personal website! 
              I'm a sophomore at BYU studying computer science, math, and cybersecurity. 
              Send me a message on LinkedIn if you want to connect, 
              or check out my GitHub to see what I'm working on!
            </p>
          </div>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="grid-container">
            <div className="grid-item">
              <h2>FIDO2 Attacks</h2>
              <p>Implementing a basic site and server supporting FIDO2 passkey authentication so that we can later try to recreate FIDO2 attacks.</p>
              <img src="/fido2.png" alt="fido2" />
              <p><a href="https://github.com/Centerearth/FIDO2_attacks" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
            <div className="grid-item">
              <h2>RateMyClass</h2>
              <p>RateMyClass is a RateMyProfessor spinoff tailored for BYU classes.</p>
              <img src="/ratemyclass.png" alt="ratemyclass" />
              <p><a href="https://github.com/Centerearth/startup" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
            <div className="grid-item">
              <h2>Rubiks Solver</h2>
              <p>A recursive solver for the Rubik's cube.</p>
              <img src="/rubiks.png" alt="rubiks" />
              <p><a href="https://github.com/Centerearth/rubiks_recursive" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <h2>Chess</h2>
              <p>Full-stack chess application.</p>
              <p><a href="https://github.com/Centerearth/chess" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <a href="https://github.com/Centerearth" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/andrew-curtis-nicholls" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
