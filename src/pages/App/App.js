import UserCard from "../../components/UserCard";
import AlertCard from "../../components/AlertCard";
import { useState, useEffect } from "react";

function App() {
  const localData = [
    {
      name: "Mahmoud",
      prefix: "mr",
      role: "Associate",
      gender: "m",
      avatar: "M",
    },
    {
      name: "a",
      prefix: "mr",
      role: "Associate",
      gender: "m",
      avatar: "M",
    },
    {
      name: "nnnn",
      prefix: "mr",
      role: "Associate",
      gender: "m",
      avatar: "M",
    },
  ];

  const [data, setData] = useState([]);
  const [x, setX] = useState({});

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

  const handle = () => {
    const changes = shuffle([...data]);
    setData(changes);
  };

  useEffect(() => {
    const shuffleData = shuffle(localData);
    setData(shuffleData);
  }, []);

  return (
    <div className="container">
      <button onClick={handle}>shuffle</button>
      <AlertCard userData={data} />
      <div className="grid">
        {data.map((user, index) => (
          <UserCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
