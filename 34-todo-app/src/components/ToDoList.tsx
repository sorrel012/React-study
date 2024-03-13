// function ToDoList() {
//   const [toDo, setToDo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//
//   const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//
//     setToDoError('');
//     setToDo(value);
//   };
//
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('To do should be longer');
//     }
//     console.log('submit');
//   };
//
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={handleChange}
//           type="text"
//           value={toDo}
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

import { useRecoilValue } from 'recoil';
import { toDoState } from './atoms';
import CreateToDo from './CreateToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
