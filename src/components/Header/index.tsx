import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import styles from "./styles.module.css";

export const Header = () => {
  return (
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
  );
};
