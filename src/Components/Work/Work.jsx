import TagHelper from "../../helpers/TagHelper";
import { workData } from "./WorkData";

const Work = () => {
  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50 mt-5">
        {workData?.map((x) => {
          return (
            <>
              <div className="grid card bg-base-300 rounded-box place-items-center">
                <div className="md:flex">
                  <div className="md:mr-10 md:mt-5 md:max-w-sm content-center">
                    <div className="flex justify-center">
                      <p className="text-secondary font-bold">{x.title}</p>
                      {x.githubLink && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={x.githubLink}
                        >
                          <span className="fa-brands fa-github ml-2"></span>
                        </a>
                      )}
                      {x.linkedInLink && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={x.linkedInLink}
                        >
                          <span className="fa-brands fa-linkedin-in ml-2"></span>
                        </a>
                      )}
                    </div>
                    <p className="md:mt-2 content-center">{x.description}</p>
                  </div>
                  <div className="m-auto">
                    {x.image && <img className="h-40 m-auto" src={x.image} />}
                    <div className="flex-wrap md:max-w-sm mt-1">
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
