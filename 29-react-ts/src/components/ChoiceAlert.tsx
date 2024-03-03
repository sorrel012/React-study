import Modal from '../ui/Modal.tsx';

const ChoiceAlert: React.FC<{
  onDone: () => void;
  title: string;
  onDelete: () => void;
}> = ({ onDone, title, onDelete }) => {
  return (
    <Modal onClose={onDone}>
      <h2>{title}</h2>
      <p className="button-group">
        <button type="button" onClick={onDelete} className="delete-button">
          삭제
        </button>
        <button type="button" onClick={onDone} className="cancel-button">
          취소
        </button>
      </p>
    </Modal>
  );
};

export default ChoiceAlert;
