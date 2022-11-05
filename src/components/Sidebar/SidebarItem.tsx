import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  pathname: string;
  children: string;
};

export const SidebarItem: FC<Props> = ({ pathname, children }) => {
  return (
    <Link href={pathname} className={styles.sidebarItem}>
      <span>{children}</span>
    </Link>
  );
};
