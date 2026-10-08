import './App.css'
import TechStack from './components/TechStack'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <nav>
          <a href="#top">Top</a>
          <a href="#about-me">About me</a>
          <a href="#work-experience">Work experience</a>
          <a href="#tech-stack">Tech stack</a>
          <a href="#projects">Projects</a>
        </nav>
      </aside>

      <main className="main">
        <h1 id="top">Welcome to my portfolio</h1>

        <p>Put CV somewhere</p>

        <AboutMe />

        <WorkExperience />

        <TechStack />

        <h2 id="projects">Projects</h2>
      </main>

      

    </div>
  )
}

export default App
