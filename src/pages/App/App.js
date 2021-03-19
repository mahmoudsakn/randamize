import UserCard from "../../components/UserCard";
import AlertCard from "../../components/AlertCard";
import { useState, useEffect } from "react";

const localData = [
  {
    name: "mahmoud",
    role: "Associate",
    gender: "m",
    avatar: "M",
  },
  {
    name: "a",
    role: "Associate",
    gender: "m",
    avatar: "M",
  },
  {
    name: "nnnn",
    role: "Associate",
    gender: "f",
    avatar: "M",
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
      <div className="grid">
        {data.map((user, index) => (
          <UserCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
