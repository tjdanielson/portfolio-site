const TagHelper = (tag) => {
  switch (tag) {
    case "csharp":
      return <div className="badge badge-secondary m-1">C#</div>;
    case ".net":
      return <div className="badge badge-secondary m-1">.NET</div>;
    case "Javascript":
      return <div className="badge badge-accent m-1">Javascript</div>;
    case "React":
      return <div className="badge badge-accent m-1">React</div>;
    case "Typescript":
      return <div className="badge badge-accent m-1">Typescript</div>;
    case "Azure":
      return <div className="badge badge-ghost m-1">Azure</div>;
    case "DevOps":
      return <div className="badge badge-ghost m-1">DevOps</div>;
    case "SQL":
      return <div className="badge m-1">SQL</div>;
    case "Python":
      return <div className="badge badge-primary m-1">Python</div>;
    case "Django":
      return <div className="badge badge-primary m-1">Django</div>;
    default:
      return null;
  }
};

export default TagHelper;
