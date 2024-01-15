export default function TabButton(props) {
  function handleClick(e) {
    console.log(e);
  }

  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
