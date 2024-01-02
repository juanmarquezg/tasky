import { FC } from "react";

import logo from "../../../assets/logo2.png";

export const Header: FC<{}> = () => {
  return (
    <header className="App-headerx">
      <img src={logo} className="App-logox" alt="logo" />
      <p>Tasky, administra tus tareas</p>
    </header>
  );
};
