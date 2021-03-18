import { useState } from "react";
import styles from "./index.module.scss";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import confetti from "canvas-confetti";

function Loading() {
  return <div style={{ color: "#fff" }}>loading</div>;
}

export default function AlertCard({ userData }) {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const customStyles = {
    backgroundColor: "#17223B",
    border: "6px solid #263859",
    borderRadius: "16px",
    display: "flex",
    justifyCotents: "center",
    alignItems: "center",
  };

  const fireParty = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 99999,
      ticks: 230,
    };

    const fire = (particleRatio, opts) => {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    };

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const fireAlert = () => {
    setLoading((oldValue) => !oldValue);
    setTimeout(() => {
      setVisible((oldValue) => !oldValue);
      setLoading((oldValue) => !oldValue);
      fireParty();
    }, 1000);
  };
  return (
    <div className={styles.alertCard}>
      {loading ? <Loading /> : null}

      <button onClick={fireAlert} className={styles.primaryButton}>
        randamize
      </button>
      <Rodal
        visible={visible}
        onClose={() => setVisible(false)}
        width={800}
        height={500}
        showCloseButton={false}
        customStyles={customStyles}
      >
        <button className={styles.closeAlert} onClick={() => setVisible(false)}>
          <span>&times;</span>
        </button>
        <div className={styles.mainAlert}>
          <div className={styles.avatar}>{userData.avatar}</div>
          <div className={styles.body}>
            <div className={styles.board}>
              <span className={styles.prefix}>{userData.prefix}</span>
              <p className={styles.name}>{userData.name}</p>
            </div>
            <p className={styles.msg}>You are on the stage</p>
          </div>
          {/* <iframe
            width="50"
            height="50"
            src="https://www.youtube.com/embed/i75GQG7YMu8?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> */}
        </div>
      </Rodal>
    </div>
  );
}
