import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface StatsBoxProps extends Omit<BoxProps, 'sx'> {
  children: ReactNode;
  customSx?: BoxProps['sx'];
}

const StatsBox = ({ children, customSx, ...props }: StatsBoxProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#d9f1ff',
        px: 2,
        py: 1,
        borderRadius: 1,
        color: '#123449',
        fontSize: '0.7rem',
        fontWeight: 500,
        border: '1px solid rgba(18, 52, 73, 0.1)',
        ...customSx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default StatsBox;
