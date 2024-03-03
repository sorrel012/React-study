import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const Modal: React.FC<{ children: any; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal"
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')!,
  );
};

export default Modal;
