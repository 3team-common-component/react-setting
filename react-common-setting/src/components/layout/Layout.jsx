import { Header } from "../header";
import styles from "./Layout.module.css";

export function Layout({ hasCreateButton, children }) {
  return (
    <>
      <Header hasCreateButton={hasCreateButton} />
      <main className={styles.main}>{children}</main>
    </>
  );
}
