import { Drawer } from '@mui/material';
import { ReactNode } from 'react';

interface DrawerWrapperProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  headerHeight: number;
  children: ReactNode;
}

export const DrawerWrapper = ({ open, setOpen, children, headerHeight }: DrawerWrapperProps) => {
  return (
    <Drawer
      data-cy={`mobile-menu`}
      anchor="top"
      open={open}
      onClose={() => setOpen(false)}
      hideBackdrop
      sx={{ top: `${headerHeight}px` }}
      PaperProps={{
        sx: {
          background: 'rgba(23, 25, 28, 0.85)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'none',
          borderRadius: 'unset',
          width: '100%',
          top: `${headerHeight}px`,
          pt: 6,
          pb: 15,
          minHeight: '100vh',
        },
      }}
    >
      {children}
    </Drawer>
  );
};
