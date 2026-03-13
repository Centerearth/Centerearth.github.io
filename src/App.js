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
      </main>
      <footer className="App-footer">
        <a href="https://https://github.com/Centerearth" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="www.linkedin.com/in/andrew-curtis-nicholls" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
