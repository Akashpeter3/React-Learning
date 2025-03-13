export default function TabButton({ children, isSelected, ...props }) {
  console.log("Tab button component executing!");

  // document.querySelector('button').addEventListener('click', () => {

  // });

  //   const handleClick = () => {
  //     console.log("Hello!!");
  //   };

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
