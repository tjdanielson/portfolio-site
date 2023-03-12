import litterpickers2 from "../assets/litterpickers2.png";
import TagHelper from "../helpers/TagHelper";

const Work = () => {
  const workItems = [
    {
      title: "Day Job",
      description:
        "At my day job, I work on a team developing fullstack applications used by internal employees and customers.",
      tags: [
        "csharp",
        ".net",
        "Javascript",
        "React",
        "Typescript",
        "Azure",
        "DevOps",
        "SQL",
      ],
    },
    {
      title: "LitterPickers",
      description:
        "A mobile friendly web-application for users to track how much they've cleaned up their communities.",
      image: litterpickers2,
      tags: ["Python", "Django", "Javascript", "React", "Typescript"],
    },
  ];
  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50 mt-5">
        {workItems?.map((x) => {
          return (
            <>
              <div className="grid card bg-base-300 rounded-box place-items-center object-scale-down">
                <div className="md:flex">
                  <div className="md:mr-10 md:mt-5">
                    <p className="text-secondary">{x.title}</p>
                    <p className="md:mt-2">{x.description}</p>
                  </div>
                  <div className="m-auto">
                    {x.image && <img className="h-40 m-auto" src={x.image} />}
                    <div className="flex-wrap">
                      {x.tags.map((tag) => {
                        return TagHelper(tag);
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
