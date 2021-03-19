import { useState } from "react";
import styles from "./index.module.scss";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import confetti from "canvas-confetti";
import party from "../../assets/sounds/party-pop.mp3";
import startRace from "../../assets/sounds/start-pop.mp3";
import closeIcon from "../../assets/images/close.svg";
import { SemipolarLoading } from "react-loadingg";

function Loading() {
  return (
    <div className={styles.loading}>
      <SemipolarLoading color="#67ff90" size="large" />
    </div>
  );
}

export default function AlertCard({ singleUserData: { ...singleUserData } }) {
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

  const partyPop = new Audio(party);
  const racePop = new Audio(startRace);

  const fireParty = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 99999,
      ticks: 250,
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
    racePop.play();
    setTimeout(() => {
      partyPop.play();
      setVisible((oldValue) => !oldValue);
      setLoading((oldValue) => !oldValue);
      fireParty();
    }, 4600);
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
        <button
          className={styles.closeAlert}
          onClick={() => window.location.reload()}
        >
          <img src={closeIcon} alt="close-button" />
        </button>
        <div className={styles.mainAlert}>
          <div className={styles.avatar}>
            {singleUserData.name === undefined
              ? null
              : singleUserData.name.charAt(0)}
          </div>
          <div className={styles.body}>
            <div className={styles.board}>
              <span className={styles.prefix}>
                {singleUserData.gender === undefined
                  ? null
                  : singleUserData.gender === "m"
                  ? "mr"
                  : "mrs"}
              </span>
              <p className={styles.name}>{singleUserData.name}</p>
            </div>
            <p className={styles.msg}>You are on the stage</p>
          </div>
        </div>
      </Rodal>
    </div>
  );
}
