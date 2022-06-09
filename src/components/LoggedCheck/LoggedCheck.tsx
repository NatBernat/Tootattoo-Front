import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

type ChildrenProp = {
  children: JSX.Element;
};

const LoggedCheck = ({ children }: ChildrenProp) => {
  const { logged } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  return children;
};

export default LoggedCheck;
