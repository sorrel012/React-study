import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const Modal: React.FC<{ title: string; children: any; onClose: () => {} }> = (
  props,
) => {
  return createPortal(
    <>
      <div className="backdrop" onClick={props.onClose} />
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
        <h2>{props.title}</h2>
        {props.children}
      </motion.dialog>
    </>,
    document.getElementById('modal')!,
  );
};

export default Modal;
