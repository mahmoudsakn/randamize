import styles from "./index.module.scss";

export default function UserCard() {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>M</div>
      <div className={styles.txt}>
        <span className={styles.prefix}>mr</span>
        <span className={styles.name}>name</span>
        <p className={styles.role}>role</p>
      </div>
    </div>
  );
}
