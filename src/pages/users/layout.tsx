import { FC, ReactNode } from "react";
import { UserTable } from "../../features/User/UserTable";

type Props = {
  children: ReactNode;
};

export const UsersLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable />
      {children}
    </>
  );
};
