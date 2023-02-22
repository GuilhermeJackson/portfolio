import { project } from "../data";
import ProjectsSlider from "./ProjectsSlider";

const Projects = () => {
  const { title } = project;

  return (
    <section
      className="section relative"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="300"
    >
      <div className="container mx-auto">
        <div className="flex">
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div className="">
          <ProjectsSlider />
        </div>
      </div>
    </section>
  );
};

export default Projects;
