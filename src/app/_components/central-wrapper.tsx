import React, { ReactNode } from 'react';

interface CentralWrapperProps {
  children: ReactNode;
}

const CentralWrapper: React.FC<CentralWrapperProps> = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      {children}
    </div>
  );
};

export default CentralWrapper;