import avatar_darkerblue from "../assets/avatar_darkerblue.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-center content-center items-center">
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        home
      </Link>
      <img src={avatar_darkerblue} className="object-scale-down h-24 " />
      <Link className="btn btn-ghost normal-case text-xl" to="work/">
        work
      </Link>
    </div>
  );
};

export default Navigation;
