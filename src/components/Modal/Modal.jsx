import { useContext } from 'react';
import { default as CoreModal } from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { Paper, Slide, styled } from '@mui/material';
import { ModalContext } from '../../context';

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  position: 'relative',
  top: '35%',
  left: '35%',
  maxWidth: '30%',
  minHeight: '35%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}));

export default function Modal(props) {
  const { children, containerRef, ...other } = props;
  const { open, setOpen } = useContext(ModalContext);

  return (
    <CoreModal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      {...other}
    >
      <Slide container={containerRef} direction='up' in={open} mountOnEnter unmountOnExit>
        <StyledPaper>{children}</StyledPaper>
      </Slide>
    </CoreModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  containerRef: PropTypes.object,
  other: PropTypes.any,
};
