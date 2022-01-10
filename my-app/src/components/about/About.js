import "./About.css";
import Denver from "../../img/unionstation.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Denver} alt="" className="a-img"></img>
        </div>
      </div>
      <div className="a-right">right</div>
    </div>
  );
};

export default About;
