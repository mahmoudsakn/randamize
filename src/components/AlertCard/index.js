import { useState } from "react";
import styles from "./index.module.scss";
import Swal from "sweetalert2";

function Loading() {
  return <div style={{ color: "#fff" }}>loading</div>;
}

export default function AlertCard() {
  const [loading, setLoading] = useState(false);

  const sweetAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  };
  const fireAlert = () => {
    setLoading((oldValue) => !oldValue);
    setTimeout(() => {
      sweetAlert();
      setLoading((oldValue) => !oldValue);
    }, 1000);
  };
  return (
    <div className={styles.alertCard}>
      {loading ? <Loading /> : null}
      <button onClick={fireAlert} className={styles.primaryButton}>
        randamize
      </button>
    </div>
  );
}
