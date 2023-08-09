import "./Hero.css";
import ivan from "../assets/ivan.jpg";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="hero-text">
          <img className="forslide van" alt="Ivan" src={ivan} />
          <h1 className="forslide">{props.title}</h1>
          <p className="forslide">{props.text}</p>
          <i class="fa-brands fa-html5 fa-beat"></i>
          <i class="fa-brands fa-css3-alt fa-beat"></i>
          <i class="fa-brands fa-js fa-beat"></i>
          <i class="fa-brands fa-react fa-spin"></i>
          <br></br>
          <br></br>
          <br></br>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
