function SkillItem({ name, srcImage }) {
  return (
    <div className="flex w-[350px] items-center justify-between justify-self-center rounded-lg bg-primary2 px-4 py-5">
      <div className="w-[40px] sm:w-[50px]">
        {" "}
        <img className="w-[100%]" src={srcImage} alt={name} />
      </div>
      <span className="text-lg font-semibold text-yellow sm:text-2xl">
        {name}
      </span>
    </div>
  );
}
export default SkillItem;
