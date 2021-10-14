import ModalContext from './modalContext';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>;
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;
