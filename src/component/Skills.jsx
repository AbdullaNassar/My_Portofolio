import { FaHtml5 } from "react-icons/fa";
import Heading from "./Heading";
import SkillItem from "./SkillItem";
import tailwind from "../images/tailwind.png";
import c from "../images/c.png";
import git from "../images/git.png";

function Skills() {
  return (
    <div>
      <Heading>My Skills</Heading>
      <div className="mb-20 mt-8 grid grid-cols-skill gap-8 sm:px-24">
        <SkillItem
          name={"HTML"}
          srcImage="https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-html-5-100.png?alt=media&token=2445495f-7bf3-4f39-a49e-219164cd67a4"
        />
        <SkillItem
          name={"CSS"}
          srcImage="https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-css3-100.png?alt=media&token=deebc249-7c87-4fb9-869f-5888591aaeac"
        />
        <SkillItem
          name={"Sass"}
          srcImage="https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-sass-100.png?alt=media&token=7ef93eb0-52f0-4e22-92f4-9923571f56b2"
        />
        <SkillItem
          name={"Javascript"}
          srcImage="https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-javascript-100.png?alt=media&token=581e15c5-d48c-49e3-ae93-2cf75529edfa"
        />
        <SkillItem
          name={"React.js"}
          srcImage="https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-react-native-100.png?alt=media&token=5a314199-b540-449f-be6e-bd2e6a84a8ea"
        />
        <SkillItem name={"Tailwind CSS"} srcImage={tailwind} />
        <SkillItem
          name={"Material-UI"}
          srcImage="https://firebasestorage.googleapis.com/v0/b/photo-gallery-4a3be.appspot.com/o/icons8-material-ui-100.png?alt=media&token=61b5c11e-b1b1-4032-bf8b-80c6a6e102b6"
        />
        <SkillItem name={"C++"} srcImage={c} />
        <SkillItem name={"Git"} srcImage={git} />
      </div>
    </div>
  );
}
export default Skills;
