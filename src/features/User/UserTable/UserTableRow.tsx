import Link from "next/link";
import { FC, memo } from "react";
import { TableUser } from "./container";
import styles from "./styles.module.css";

type Props = {
  user: TableUser;
};

/**
 *
 */
export const UserTableRow: FC<Props> = memo(
  ({ user: { id, name, email, age } }) => (
    <tr className={styles.tableRow}>
      <td>
        <Link href={`/users/${id}`}>{name}</Link>
      </td>
      <td>{email}</td>
      <td>{age}</td>
    </tr>
  )
);
