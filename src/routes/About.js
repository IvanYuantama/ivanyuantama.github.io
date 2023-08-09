import "./About.css";

function About() {
  return (
    <>
      <div className="banner">
        <div className="ban">
          <h1>Computer Engineering</h1>
          <p>
            Hii! I'm Ivan Yuantama Pradipta. Passionate to learn about technology especially in computer hardware, software, and networking. I'm an undergraduate student who studies Computer Engineering at University of Indonesia.
            Experienced in web design, computer architectur design, digital circuit, and C program. More experienced like research analyst in market stock, handling organization, product manager, and marketing.
          </p>
          <div className="btn-sosmed">
            <a href="https://www.linkedin.com/in/ivan-yuantama-787235248/" className="btn 1">
              <i class="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.youtube.com/@ketech8083" className="btn 2">
              <i class="fa-brands fa-youtube"></i> YouTube
            </a>
            <a href="https://www.instagram.com/ivan_yuantama/" className="btn 3">
              <i class="fa-brands fa-instagram"></i> Instagram
            </a>
            <a href="https://github.com/IvanYuantama" className="btn 4">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
