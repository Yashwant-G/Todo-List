import React from "react";

function TodoItem(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.text}</li>
    </div>
  );
}

// function TodoItem(props) {
//   const [isdone, setisDone] = useState(false);

//   function handleClick() {
//     setisDone((prevValue) => {
//       return !prevValue;
//     });
//   }
//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isdone ? "line-through" : "none" }}>
//         {props.text}
//       </li>
//     </div>
//   );
// }

export default TodoItem;
