import "./About.css";
import Denver from "../../img/denverskyline2.png";
import Award from "../../img/DUbadge.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Denver} alt="" className="a-img"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Colorado Native. Background in Sports Medicine. Certified Web
          Developer.
        </p>
        <br></br>
        <p className="a-desc">
          Completed The University of Denver's Full-Stack Web Development Coding
          Bootcamp in 2021. Languages and Frameworks consist of:
        </p>
        <br></br>
        <p className="a-desc">
          React.js, JavaScript, MongoDB, Express.js, Node.js, Handlebars.js,
          MySQL, GraphQL, jQuery, CSS, HTML, & more.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img"></img>
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Certified Full Stack Web Developer - University of Denver 2021
            </h4>
            <p className="a-award-desc">12-week intensive coding bootcamp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
