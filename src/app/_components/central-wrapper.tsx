'use client';
import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Providers } from '../providers';

interface CentralWrapperProps {
  children: ReactNode;
  maxWidth?: string;
}

const CentralWrapper: React.FC<CentralWrapperProps> = ({ children, maxWidth }) => {
  return (
    <Providers>
    <Box
      maxWidth={maxWidth ?? "1200px"}
      margin="0 auto"
      px={{ base: 6, md: 16 }} // Responsive padding
    >
      {children}
    </Box>
    </Providers>
  );
};

export default CentralWrapper;