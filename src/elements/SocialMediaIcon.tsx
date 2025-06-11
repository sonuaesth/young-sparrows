import React, { ReactNode, MouseEvent } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

interface SocialMediaIconProps {
  href?: string;
  children: ReactNode;
  color?: IconButtonProps['color'];
}

function SocialMediaIcon({ href, children }: SocialMediaIconProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (href) {
      window.open(href, '_blank');
    }
  };
  return (
    <IconButton onClick={handleClick}>
      {children}
    </IconButton>
  );
}

export default SocialMediaIcon;
