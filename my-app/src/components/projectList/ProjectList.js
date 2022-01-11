import "./ProjectList.css";
import Project from "../project/Project";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio</h1>
        <p className="pl-desc">
          Below are some of my latest full-stack projects. Please click to view
          the live applications or Github Repositories.
        </p>
      </div>
      <div className="pl-list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
