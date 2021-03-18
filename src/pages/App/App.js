import UserCard from "../../components/UserCard";
import AlertCard from "../../components/AlertCard";

function App() {
  const data = [
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

  const shuffleData = shuffle(data);

  return (
    <div className="container">
      <AlertCard userData={shuffleData[0]} />
      <div className="grid">
        {shuffleData.map((user, index) => (
          <UserCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
