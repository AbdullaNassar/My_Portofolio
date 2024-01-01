import Heading from "./Heading";
import ProjectItem from "./ProjectItem";
import screen1 from "../images/screentemp.png";
import supabase from "../images/supabase.png";
import router from "../images/router.png";
import query from "../images/query.png";
import hookform from "../images/hookform.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";
import proj4 from "../images/proj4.png";

const projectsList = [
  {
    title: "Clinic",
    srcImage: screen1,
    url: "https://abdullah-clinic.netlify.app/",
    description:
      "Full website for managing personal clinic operations including booking, patient information, inventory and financial tracking.",
    tags: [
      {
        tagName: "React.js",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-react-native-100.png?alt=media&token=5a314199-b540-449f-be6e-bd2e6a84a8ea",
      },
      {
        tagName: "Supabase",
        tagSrc: supabase,
      },
      {
        tagName: "CSS",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-css3-100.png?alt=media&token=deebc249-7c87-4fb9-869f-5888591aaeac",
      },
      {
        tagName: "React Router ",
        tagSrc: router,
      },
      {
        tagName: "React Query",
        tagSrc: query,
      },
      {
        tagName: "React Hook Form",
        tagSrc: hookform,
      },
    ],
  },

  {
    title: "Neutrous",
    srcImage: proj2,
    url: "https://landing-page-abdo.netlify.app/",
    description: "Responsive landing page built using HTML and SASS",
    tags: [
      {
        tagName: "HTML",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-html-5-100.png?alt=media&token=2445495f-7bf3-4f39-a49e-219164cd67a4",
      },
      {
        tagName: "Sass",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-css3-100.png?alt=media&token=deebc249-7c87-4fb9-869f-5888591aaeac",
      },
    ],
  },

  {
    title: "Blog App",
    srcImage: proj3,
    url: "https://abdo-blog.netlify.app/",
    description:
      "A web page to add, search and delete blogs from your blog list.",
    tags: [
      {
        tagName: "Javascript",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-javascript-100.png?alt=media&token=581e15c5-d48c-49e3-ae93-2cf75529edfa",
      },
      {
        tagName: "React.js",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-react-native-100.png?alt=media&token=5a314199-b540-449f-be6e-bd2e6a84a8ea",
      },
      {
        tagName: "CSS",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-css3-100.png?alt=media&token=deebc249-7c87-4fb9-869f-5888591aaeac",
      },
    ],
  },
  {
    title: "Nexter",
    srcImage: proj4,
    url: "https://abdo-nexter.netlify.app/",
    description: "Responsive Template page",
    tags: [
      {
        tagName: "HTML",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-html-5-100.png?alt=media&token=2445495f-7bf3-4f39-a49e-219164cd67a4",
      },
      {
        tagName: "Sass",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-css3-100.png?alt=media&token=deebc249-7c87-4fb9-869f-5888591aaeac",
      },
    ],
  },
];
function Projects() {
  return (
    <div className="min-h-screen" id="projects">
      <Heading>Projects</Heading>
      <div className="mt-20 grid grid-cols-project gap-y-8">
        {projectsList.map((project) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            srcImage={project.srcImage}
            tags={project.tags}
            url={project.url}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
