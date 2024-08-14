import React, { ReactNode } from 'react';

interface CentralWrapperProps {
  children: ReactNode;
  maxWidth?: string;
}

const CentralWrapper: React.FC<CentralWrapperProps> = ({ children , maxWidth }) => {
  return (
    <div
      style={{
        maxWidth: maxWidth ?? "1200px",
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      {children}
    </div>
  );
};

export default CentralWrapper;