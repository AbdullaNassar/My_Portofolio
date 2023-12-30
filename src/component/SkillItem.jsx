function SkillItem({ name, srcImage }) {
  return (
    <div className="bg-primary2 flex w-[350px] items-center justify-between justify-self-center rounded-lg px-4 py-5">
      <div className="w-[50px]">
        {" "}
        <img className="w-[100%]" src={srcImage} alt={name} />
      </div>
      <span className="text-2xl font-semibold text-yellow">{name}</span>
    </div>
  );
}
export default SkillItem;
