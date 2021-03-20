import styles from "./index.module.scss";
import love from "../../assets/images/love.png";

export default function End() {
  return (
    <div className={styles.end}>
      <span>Made by</span>
      <img src={love} alt="love" />
    </div>
  );
}
