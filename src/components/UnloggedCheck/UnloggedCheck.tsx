import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

type ChildrenProp = {
  children: JSX.Element;
};

const UnloggedCheck = ({ children }: ChildrenProp) => {
  const { logged } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (logged) navigate("/public-list");
  }, [logged, navigate]);

  return children;
};

export default UnloggedCheck;
