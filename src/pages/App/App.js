import UserCard from "../../components/UserCard";
import AlertCard from "../../components/AlertCard";

function App() {
  return (
    <div className="container">
      <AlertCard />
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22].map((index) => (
          <UserCard />
        ))}
      </div>
    </div>
  );
}

export default App;
