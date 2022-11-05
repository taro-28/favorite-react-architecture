import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
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
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <span>Favorite React Architecture</span>
          </div>
          <div>...ComingSoon</div>
        </header>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <Link href="/users">
              <span>User</span>
            </Link>
            <Link href="/settings">
              <span>Setting</span>
            </Link>
          </aside>
          <main>Main</main>
        </div>

        <footer className={styles.footer}>
          <span>Copyright - taro 2022 All Right Reserved</span>
        </footer>
      </div>
    </>
  );
}
