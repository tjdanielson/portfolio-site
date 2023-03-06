const AboutMe = () => {
  return (
    <div className="mt-20 text-center md:flex md:item-top">
      <div className="md:w-1/2 m-auto md:flex-wrap">
        <div className="flex md:block">
          <h1 className="text-4xl md:text-7xl text-accent md:text-start mr-1">
            Hi.
          </h1>
          <h2 className="text-4xl md:text-7xl text-accent md:text-start">
            I'm Tessa
          </h2>
        </div>
        <div className="text-start md:text-center md:text-start md:ml-1 md:mt-4">
          <a href="https://www.linkedin.com/in/tessa-danielson/">
            <span className="fa-brands fa-linkedin-in mr-4"></span>
          </a>

          <a href="https://github.com/tjdanielson">
            <span className="fa-brands fa-github"></span>
          </a>
        </div>
      </div>

      <div className="m-0 md:w-1/2 md:m-auto mt-2 justify-start text-left">
        <p>
          I'm a Full Stack Software Developer building custom application
          solutions for unique - and not so unique - business problems.
        </p>
        <p className="mt-2">
          Using my former experience as a Product Owner/Business Analyst, I aim
          to clarify complex ideas and see them to fruition.
        </p>
        <p className="mt-2">
          In my free time, I like to build delightful web and mobile apps that
          make your day a little bit better.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
