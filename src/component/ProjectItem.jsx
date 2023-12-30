function ProjectItem({ srcImage, title, description, tags = [] }) {
  return (
    <div className=" bg-primary2 flex w-[250px] flex-col justify-self-center  overflow-hidden rounded-md lg:w-[350px]">
      <img className="h-[200px] lg:h-[200px]" src={srcImage} alt="project1" />
      <h2 className="text-l mb-2 mt-2 pl-2 font-semibold text-yellow md:text-xl">
        {title}
      </h2>
      <p className="mb-4 pl-2">{description}</p>
      <div className="flex flex-wrap gap-1 pl-2">
        {tags.map((tag) => (
          <div
            key={Math.random()}
            className="flex w-fit items-center gap-2 rounded-full bg-neutral-200 px-2 py-1  text-sm font-semibold text-gray-800"
          >
            <img className="h-6 w-6" src={tag.tagSrc} />
            <span>{tag.tagName}</span>
          </div>
        ))}
      </div>
      <button className="mb-4 mt-4 self-center rounded-md bg-yellow px-4 py-3 pl-2 text-center font-semibold text-gray-900">
        Go to {title} &rarr;
      </button>
    </div>
  );
}
export default ProjectItem;
