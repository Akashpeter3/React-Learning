import reactimage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDiscriptions = ["Fundemental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const descriptions =
    reactDiscriptions[getRandomInt(reactDiscriptions.length - 1)];
  return (
    <header>
      <img src={reactimage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
