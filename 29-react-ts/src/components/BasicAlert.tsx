import Modal from '../ui/Modal.tsx';

const BasicAlert: React.FC<{ onDone: () => void; title: string }> = ({
  onDone,
  title,
}) => {
  return (
    <Modal onClose={onDone}>
      <h2>{title}</h2>
      <p>
        <button type="button" onClick={onDone} className="confirm-button">
          확인
        </button>
      </p>
    </Modal>
  );
};

export default BasicAlert;
