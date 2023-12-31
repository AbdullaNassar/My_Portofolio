import Animation from "./Animation";

function ProjectItem({ srcImage, title, url, description, tags = [] }) {
  return (
    <Animation classes=" flex w-[250px] flex-col justify-self-center overflow-hidden  rounded-md bg-primary2 lg:w-[350px]">
      {/* <div className=" flex w-[250px] flex-col justify-self-center overflow-hidden  rounded-md bg-primary2 lg:w-[350px]"> */}
      <img className="h-[200px] lg:h-[200px]" src={srcImage} alt="project1" />
      <div className="flex flex-grow flex-col justify-between">
        <div>
          <h2 className="mb-2 mt-2 pl-2 text-xl font-semibold text-yellow md:text-2xl">
            {title}
          </h2>
          <p className="mb-4 pl-2">{description}</p>
          <div className="flex flex-wrap gap-2 pl-2">
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
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mb-4 mt-4 self-center rounded-md bg-yellow px-4 py-3 pl-2 text-center font-bold text-white hover:bg-primaryDark "
        >
          Go to {title} &rarr;
        </a>
      </div>
      {/* </div> */}
    </Animation>
  );
}
export default ProjectItem;
