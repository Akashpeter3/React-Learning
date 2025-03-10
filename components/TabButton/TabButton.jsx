export default function TabButton({ children, onSelect }) {
  console.log("Tab button component executing!");

  // document.querySelector('button').addEventListener('click', () => {

  // });

  //   const handleClick = () => {
  //     console.log("Hello!!");
  //   };

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
