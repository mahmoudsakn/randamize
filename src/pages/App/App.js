import { useState, useEffect } from "react";
import UserCard from "../../components/UserCard";
import AlertCard from "../../components/AlertCard";
import End from "../../components/End";

const localData = [
  {
    name: "amgad",
    gender: "m",
    avatar: "",
    role: "backend",
  },
  {
    name: "bahaa",
    gender: "m",
    avatar: "",
    role: "frontend",
  },
  {
    name: "belal",
    gender: "m",
    avatar: "",
    role: "frontend",
  },
  {
    name: "hussein",
    gender: "m",
    avatar: "",
    role: "co-founder",
  },
  {
    name: "khaled",
    gender: "m",
    avatar: "",
    role: "backend",
  },
  {
    name: "mahmoud",
    gender: "m",
    avatar: "",
    role: "UI/UX",
  },
  {
    name: "milad",
    gender: "m",
    avatar: "",
    role: "backend",
  },
  {
    name: "mina",
    gender: "m",
    avatar: "",
    role: "commercial",
  },
  {
    name: "abdul azim",
    gender: "m",
    avatar: "",
    role: "frontend",
  },
  {
    name: "nancy",
    gender: "f",
    avatar: "",
    role: "operations",
  },
  {
    name: "nazli",
    gender: "f",
    avatar: "",
    role: "marketing",
  },
  {
    name: "nourEldeen",
    gender: "m",
    avatar: "",
    role: "testing",
  },
  {
    name: "nur",
    gender: "f",
    avatar: "",
    role: "operations",
  },
  {
    name: "ramy",
    gender: "m",
    avatar: "",
    role: "CEO",
  },
  {
    name: "sohila",
    gender: "f",
    avatar: "",
    role: "operations",
  },
  {
    name: "yasmine",
    gender: "f",
    avatar: "",
    role: "designer",
  },
];

function App() {
  const [data, setData] = useState([]);
  const [singleRandom, setSingleRandom] = useState({});

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

  // const handle = (user) => {
  //   const shuffleData = shuffle(localData);
  //   const singleObj =
  //     shuffleData[Math.floor(Math.random() * shuffleData.length)];
  //   setSingleRandom(singleObj);
  //   console.log(user);
  // };

  useEffect(() => {
    const shuffleData = shuffle(localData);
    setData(shuffleData);
    const singleObj =
      shuffleData[Math.floor(Math.random() * shuffleData.length)];
    setSingleRandom(singleObj);
  }, []);

  return (
    <div className="container">
      <AlertCard singleUserData={singleRandom} />
      <div className="wrapper">
        <div className="grid">
          {data.map((user, index) => (
            <UserCard key={index} userData={user} />
          ))}
        </div>
        <End />
      </div>
    </div>
  );
}

export default App;
