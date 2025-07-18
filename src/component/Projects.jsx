import Heading from "./Heading";
import ProjectItem from "./ProjectItem";
import screen1 from "../images/screentemp.png";
import supabase from "../images/supabase.png";
import router from "../images/router.png";
import query from "../images/query.png";
import hookform from "../images/hookform.png";
import proj2 from "../images/proj2.png";
import proj3 from "../images/proj3.png";
import stramvibe from "../images/stramvibe.png";

const projectsList = [
  {
    title: "Clinic",
    srcImage: screen1,
    url: "https://abdullah-clinic.netlify.app/",
    description:
      // "Full website for managing personal clinic operations including booking, patient information, inventory and financial tracking.",
      "Web application where a doctor can manage clinic operations, including booking, Track historical bookings for each patient, inventory management, and financial tracking. ",
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
    title: "Stream Vibe",
    srcImage: stramvibe,
    url: "https://abdo-blog.netlify.app/",
    description:
      "A  website for exploring popular films, with detailed information on movie such as ratings, posters, cast, and more.",
    tags: [
      {
        tagName: "HTML",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-html-5-100.png?alt=media&token=2445495f-7bf3-4f39-a49e-219164cd67a4",
      },
      {
        tagName: "CSS",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-css3-100.png?alt=media&token=deebc249-7c87-4fb9-869f-5888591aaeac",
      },
      {
        tagName: "Javascript",
        tagSrc:
          "https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-javascript-100.png?alt=media&token=581e15c5-d48c-49e3-ae93-2cf75529edfa",
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
    title: "Neutrous",
    srcImage: proj2,
    url: "https://landing-page-abdo.netlify.app/",
    description: "Responsive landing page",
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
      <div className="mx-4 mt-20 grid grid-cols-project gap-x-4 gap-y-8 sm:mx-0">
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
