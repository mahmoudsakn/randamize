import styles from "./index.module.scss";

export default function UserCard({ userData }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{userData.avatar}</div>
      <div className={styles.txt}>
        <span className={styles.prefix}>{userData.prefix}</span>
        <span className={styles.name}>{userData.name}</span>
        <p className={styles.role}>{userData.role}</p>
      </div>
    </div>
  );
}
