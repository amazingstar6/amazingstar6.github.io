import './TechStack.css'
import cppIcon from '../assets/tech-stack-icons/c++.svg'
import javaIcon from '../assets/tech-stack-icons/java.svg'
import javascriptIcon from '../assets/tech-stack-icons/javascript.svg'
import kotlinIcon from '../assets/tech-stack-icons/kotlin.svg'
import pythonIcon from '../assets/tech-stack-icons/python.svg'
import rustIcon from '../assets/tech-stack-icons/rust.svg'
import typescriptIcon from '../assets/tech-stack-icons/typescript.svg'

function TechStack() {
  return (
    <section id="tech-stack">
      <h2>Tech stack</h2>
      <div className="grid">
        <div className="grid-item">
          <img src={javaIcon} alt="Java" />
          <br></br>
          Java
        </div>
        <div className="grid-item">
          <img src={pythonIcon} alt="Python" />
          <br></br>
          <p>Python</p>
        </div>
        <div className="grid-item">
          <img src={kotlinIcon} alt="Kotlin" />
          <br></br>
          Kotlin
        </div>
        <div className="grid-item">
          <img src={cppIcon} alt="C++" />
          <br></br>
          C++
        </div>
        <div className="grid-item">
          <img src={javascriptIcon} alt="JavaScript" />
          <br></br>
          JavaScript
        </div>
        <div className="grid-item">
          <img src={typescriptIcon} alt="TypeScript" />
          <br></br>
          TypeScript
        </div>
        <div className="grid-item">
          <img src={rustIcon} alt="Rust" />
          Rust
        </div>
      </div>
    </section>
  )
}

export default TechStack
