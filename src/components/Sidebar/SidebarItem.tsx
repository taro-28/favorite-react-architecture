import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  pathname: string;
  children: string;
};

export const SidebarItem: FC<Props> = ({ pathname, children }) => {
  const { pathname: currentPath } = useRouter();

  const isSelected = currentPath === pathname;

  return (
    <Link
      href={pathname}
      className={`${styles.sidebarItem} ${isSelected && styles.selected}`}
    >
      <span>{children}</span>
    </Link>
  );
};
