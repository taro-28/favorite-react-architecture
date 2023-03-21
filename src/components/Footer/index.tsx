import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span>Copyright - taro 2022 All Right Reserved</span>
    </footer>
  );
};

const Table:FC<{children: ReactNode}> = ({children})=> {
  return <table>{children}</table>
}

const MemberTable:FC<{children: ReactNode}> = ({children}) => {
  return <Table>{children}</Table>
}

const MemberTableHat:FC = ()=> {
  return <div></div>
}

const MemberTableHeader:FC = ()=> {
  return (<tr>
    <th>氏名</th>
    <th>メールアドレス</th>
  </tr>
  )
}

const MemberTableBody:FC = ()=> {
  return <tbody></tbody>
}

const MemberTableRow:FC = ()=> {
  return <tr><td></td></tr>
}

const MemberTableFooter:FC = ()=> {
  return <div></div>
}

const MemberTablePagination:FC = ()=> {
  return <div></div>
}