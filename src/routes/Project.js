import "./Project.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

function Project() {
  return (
    <>
      <div className="wrapper">
        <h1>Project</h1>
        <div className="items">
          <div className="project p1">
            <p>Portofolio Website</p>
            <br></br>
            <img src={project1} />
            <br></br>
            <br></br>
            <a href="https://ivanyuantama.github.io/">
              <button>Click to See</button>
            </a>
            <br></br>
          </div>
          <div className="project p2">
            <p>Calculator JavaScript</p>
            <br></br>
            <img src={project2} />
            <br></br>
            <br></br>
            <a href="https://ivanyuantama.github.io/Calculator/">
              <button>Click to See</button>
            </a>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
