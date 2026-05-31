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
              I'm a junior at BYU studying computer science, math, and cybersecurity. 
              Send me a message on LinkedIn if you want to connect, 
              or check out my GitHub to see what I'm working on!
            </p>
          </div>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="grid-container">
            <div className="grid-item">
              <h2>RateMyClass</h2>
              <p>RateMyClass is a RateMyProfessor spinoff tailored for BYU classes. Try it out at <a href="https://ratemyclass.me" target="_blank" rel="noopener noreferrer">ratemyclass.me</a></p>
              <img src="/ratemyclass.png" alt="ratemyclass" />
              <p><a href="https://github.com/Centerearth/startup" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
            <div className="grid-item">
              <h2>FIDO2 Attacks</h2>
              <p>Implemented a web app supporting FIDO2 passkey authentication, successfully recreated several FIDO2 attacks for research.</p>
              <img src="/fido2.png" alt="fido2" />
              <p><a href="https://github.com/Centerearth/FIDO2_attacks" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
            <div className="grid-item">
              <h2>Rubiks Solver</h2>
              <p>A recursive solver for the Rubik's cube implementing a custom bi-directional search.</p>
              <img src="/rubiks.png" alt="rubiks" />
              <p><a href="https://github.com/Centerearth/rubiks_recursive" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <h2>Chess</h2>
              <p>Full-stack chess application. Currently the client is text-based but am working on a website version as well as a chess agent to play against</p>
              <img src="/chess.png" alt="chess" />
              <p><a href="https://github.com/Centerearth/chess" target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
          {/* <div className="grid-container">
            <div className="grid-item">
              <h2>BYU ACM Website</h2>
              <p>Developed the website for BYU's ACM chapter and am working with BYU IT to test deployment in a BYU Kubernetes cluster.</p>
              <img src="/acm.png" alt="acm" />
            </div>
          </div> */}
            <div className="grid-item">
              <h2>Detox Extension</h2>
              <p>A chrome extension that forces users to wait 10 seconds before accessing certain websites.</p>
              <img src="/detox.png" alt="detox" />
              <p><a href="https://github.com/Centerearth/detox-extension" target="_blank" rel="noopener noreferrer">Github</a></p>
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
