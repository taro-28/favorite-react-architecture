import { FC, memo } from "react";

import { UserTablePresenter } from "./presenter";

type Props = {};

export type TableUser = {
  id: string;
  name: string;
  email: string;
  age: number;
};

/**
 *
 */
export const UserTableContainer: FC<Props> = memo(({}) => {
  const users: TableUser[] = [
    {
      id: "1",
      name: "John",
      email: "john@example.com",
      age: 26,
    },
    {
      id: "2",
      name: "Mike",
      email: "mike@example.com",
      age: 24,
    },
  ];

  return <UserTablePresenter users={users} />;
});
