import { useState } from 'react';

function usePopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return [anchorEl, handleClick, handleClose, open];
}

export { usePopover };
