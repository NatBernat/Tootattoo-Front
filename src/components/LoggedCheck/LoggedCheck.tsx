import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ChildrenProp = {
  children: JSX.Element;
};

const LoggedCheck = ({ children }: ChildrenProp) => {
  const logged = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  return children;
};

export default LoggedCheck;
