import React, { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

function NewProject({ onAddProject, onCancleAddProject }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-2 text-center text-3xl font-bold text-stone-500">
          Invalid Input
        </h2>
        <p className="mb-2 mt-4 text-lg text-stone-700">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="mb-3 text-lg text-stone-700">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancleAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" rounded-lg bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
