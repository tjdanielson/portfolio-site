import litterpickers2 from "../assets/litterpickers2.png";

const Work = () => {
  return (
    <div>
      <div className="hidden md:grid grid-cols-4 h-32 card bg-base-300 rounded-box place-items-start mt-10">
        <div className="badge badge-primary m-1">Python</div>
        <div className="badge badge-primary m-1">Django</div>
        <div className="badge badge-secondary m-1">C#</div>
        <div className="badge badge-secondary m-1">.NET</div>
        <div className="badge badge-accent m-1">Javascript</div>
        <div className="badge badge-accent m-1">React</div>
        <div className="badge badge-accent m-1">Typescript</div>
        <div className="badge badge-ghost m-1">Azure</div>
        <div className="badge badge-ghost m-1">DevOps</div>
        <div className="badge m-1">SQL</div>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-20">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          {/* <img className="object-scale-down" src={litterpickers2} /> */}
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-20">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-20">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-20">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </div>
  );
};

export default Work;
