import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";
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
            <Link href="/">Favorite React Architecture</Link>
          </div>
          <div>
            <Popover.Root>
              <Popover.Trigger className={styles.avatarMenuTriggerButton}>
                <Avatar.Root className={styles.avatar}>
                  <Avatar.Image src="/icon.jpeg" />
                  <Avatar.Fallback />
                </Avatar.Root>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content>
                  <Popover.Close>Close</Popover.Close>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </header>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <Link href="/users">
              <span>Dashboard</span>
            </Link>
            <Link href="/users">
              <span>Users</span>
            </Link>
            <Link href="/settings">
              <span>Settings</span>
            </Link>
          </aside>
          <main className={styles.main}>
            <h1>Dashboard</h1>
          </main>
        </div>

        <footer className={styles.footer}>
          <span>Copyright - taro 2022 All Right Reserved</span>
        </footer>
      </div>
    </>
  );
}
