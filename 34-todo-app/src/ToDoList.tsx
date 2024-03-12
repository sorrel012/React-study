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

import { useForm } from 'react-hook-form';

function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('toDo', {
            required: 'ToDo is required',
            maxLength: {
              value: 100,
              message: 'Todo should be shorter than 100',
            },
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
