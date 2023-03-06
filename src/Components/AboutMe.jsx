const AboutMe = () => {
  return (
    <div className="mt-20 ml-10 text-center md:flex md:item-top ">
      <div className="w-1/2 m-auto md:flex-wrap md:ml-20">
        <h1 className="text-4xl md:text-7xl text-accent text-start">Hi.</h1>
        <h2 className="text-4xl md:text-7xl text-accent text-start">
          I'm Tessa
        </h2>
        <div className="text-center text-start ml-1 md:mt-4">
          <a href="https://www.linkedin.com/in/tessa-danielson/">
            <span className="fa-brands fa-linkedin-in mr-4"></span>
          </a>

          <a href="https://github.com/tjdanielson">
            <span className="fa-brands fa-github"></span>
          </a>
        </div>
      </div>

      <div className="w-1/2 m-auto mt-2 justify-start text-left">
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
