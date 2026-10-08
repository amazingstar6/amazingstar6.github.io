import './App.css'
import TechStack from './components/TechStack'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <nav>
          <a href="#top">Top</a>
          <a href="#about-me">About me</a>
          <a href="#projects">Projects</a>
          <a href="#work-experience">Work experience</a>
          <a href="#tech-stack">Tech stack</a>
        </nav>
      </aside>

      <main className="main">
        <h1>Kevin Nieuwenhuis</h1>

        <AboutMe />

        <Projects />

        <WorkExperience />

        <TechStack />

        
      </main>
    </div>
  )
}

export default App
