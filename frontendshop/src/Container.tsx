import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode,
};

const Container: React.FC<ContainerProps> = ({ children }) => {

  return <main className="container">{children}</main>;
};

export default Container;
