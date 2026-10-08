import './TechStack.css'

function TechStack() {
  return (
    <section id="tech-stack">
      <h2>Tech stack</h2>
      <div className="grid">
        <div className="grid-item">
          <img src="src\assets\tech-stack-icons\java.svg"></img>
          Java
        </div>
        <div className="grid-item">
          <img src="src\assets\tech-stack-icons\python.svg"></img>
          <p>Python</p>
        </div>
        <div className="grid-item">
          <img src="src\assets\tech-stack-icons\kotlin.svg"></img>
          Kotlin
        </div>
        <div className="grid-item">
          <img src="src\assets\tech-stack-icons\c++.svg"></img>
          C++
        </div>
        <div className="grid-item">
          <img src="src\assets\tech-stack-icons\javascript.svg"></img>
          JavaScript
        </div>
        <div className="grid-item">
          <img src="src\assets\tech-stack-icons\typescript.svg"></img>
          TypeScript
        </div>
        <div className="grid-item">
          <img src="src\assets\tech-stack-icons\rust.svg"></img>
          Rust
        </div>
      </div>
    </section>
  )
}

export default TechStack
