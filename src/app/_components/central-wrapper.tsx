'use client';
import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface CentralWrapperProps {
  children: ReactNode;
  maxWidth?: string;
}

const CentralWrapper: React.FC<CentralWrapperProps> = ({ children, maxWidth }) => {
  return (

    <Box
      maxWidth={maxWidth ?? "1200px"}
      margin="0 auto"
      px={{ base: 6, md: 16 }} // Responsive padding
    >
      {children}
    </Box>
  );
};

export default CentralWrapper;