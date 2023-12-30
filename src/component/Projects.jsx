import Heading from "./Heading";
import ProjectItem from "./ProjectItem";
import screen1 from "../images/screentemp.png";
const projectsList = [
  {
    title: "Clinic",
    srcImage: screen1,
    description:
      "Full website for managing personal clinic operations including booking, patient information, inventory and financial tracking.",
    tags: [
      {
        tagName: "HTML",
        tagSrc: screen1,
      },
      {
        tagName: "CSS",
        tagSrc: screen1,
      },
      {
        tagName: "Javascript",
        tagSrc: screen1,
      },
      {
        tagName: "HTML",
        tagSrc: screen1,
      },
      {
        tagName: "HTML",
        tagSrc: screen1,
      },
    ],
  },
];
function Projects() {
  return (
    <div className="min-h-screen">
      <Heading>Projects</Heading>
      <div className="grid-cols-project mt-20 grid gap-y-8">
        {projectsList.map((project) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            srcImage={project.srcImage}
            tags={project.tags}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
