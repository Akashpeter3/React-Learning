export default function TabButton({ children, onSelect, isSelected }) {
  console.log("Tab button component executing!");

  // document.querySelector('button').addEventListener('click', () => {

  // });

  //   const handleClick = () => {
  //     console.log("Hello!!");
  //   };

  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
