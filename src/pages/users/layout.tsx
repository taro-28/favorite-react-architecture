import { ReactNode } from "react";
import { UserTable } from "../../features/User/UserTable";

type Props = {
  children: ReactNode;
};

export default function UsersLayout({ children }: Props) {
  return (
    <>
      <h1>Users</h1>
      <UserTable />
      {children}
    </>
  );
}
