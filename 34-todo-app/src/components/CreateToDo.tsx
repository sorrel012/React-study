import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      ...oldToDos,
      {
        text: toDo,
        id: Date.now(),
        category: 'TO_DO',
      },
    ]);
    setValue('toDo', '');
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
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
  );
}

export default CreateToDo;
