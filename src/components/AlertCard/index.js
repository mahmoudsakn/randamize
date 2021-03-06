import { useState } from "react";
import styles from "./index.module.scss";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import confetti from "canvas-confetti";
import party from "../../assets/sounds/party-pop.mp3";
// import startRace from "../../assets/sounds/start-pop.mp3";
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
  // const racePop = new Audio(startRace);

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
    // racePop.play();
    setTimeout(() => {
      partyPop.play();
      setVisible((oldValue) => !oldValue);
      setLoading((oldValue) => !oldValue);
      fireParty();
    }, 1500);
  };

  const shuffle = (data) => {
    let currentIndex = data.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = data[currentIndex];
      data[currentIndex] = data[randomIndex];
      data[randomIndex] = temporaryValue;
    }
    return data;
  };

  const conicStylish = [
    {
      background: "conic-gradient(from 0.5turn at 50% 110%, white, orange)",
    },
    {
      background:
        "conic-gradient(from -0.5turn at bottom right,deeppink,cyan,rebeccapurple)",
    },
    {
      background:
        "conic-gradient(from -270deg at 75% 110%,fuchsia,floralwhite)",
    },
  ];
  const shuffleConic = shuffle(conicStylish);

  return (
    <div className={styles.alertCard}>
      {loading ? <Loading /> : null}

      <button onClick={fireAlert} className={styles.primaryButton}>
        pick member
      </button>
      <Rodal
        visible={visible}
        onClose={() => window.location.reload()}
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
          <div className={styles.avatar} style={shuffleConic[0]}>
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
            <div className={styles.msg}>
              <p>You are on the stage</p>
            </div>
          </div>
        </div>
      </Rodal>
    </div>
  );
}
