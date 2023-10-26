import styles from "./page.module.css";
import ApiButton from "@/components/ApiButton/indes";

export default function Home() {
  return (
    <main className={styles.main}>
      <ApiButton>Button</ApiButton>
    </main>
  );
}
