import { FC, ReactNode } from "react";

import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from "./Home.module.css";

type Props = {
  children: ReactNode;
};

export const GlobalLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Favorite React Architecture</title>
        <meta
          name="description"
          content="Sample application of favorite react architecture"
        />
      </Head>
      <div className={styles.body}>
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
