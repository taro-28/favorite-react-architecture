import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC, memo } from "react";
import { TableUser } from "./container";
import styles from "./styles.module.css";
import { UserTableRow } from "./UserTableRow";

type Props = {
  users: TableUser[];
};

/**
 *
 */
export const UserTablePresenter: FC<Props> = memo(({ users }) => (
  <>
    <div className={styles.header}>
      <h2>{users.length} users</h2>
      <Link href="/users/new" className={styles.addButton}>
        <PlusIcon />
      </Link>
    </div>
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableRow user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  </>
));
