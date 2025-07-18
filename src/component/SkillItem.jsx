import Animation from "./Animation";

function SkillItem({ name, srcImage }) {
  return (
    <Animation>
      <div className="flex h-20 items-center justify-between  rounded-lg bg-primary2 px-4 py-5">
        <div className="w-[40px] sm:w-[50px]">
          <img className="" src={srcImage} alt={name} />
        </div>
        <span className="text-lg font-semibold text-yellow sm:text-2xl">
          {name}
        </span>
      </div>
    </Animation>
  );
}
export default SkillItem;
