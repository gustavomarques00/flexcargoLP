// src/components/Container.tsx
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full">{children}</div>;
};

export default Container;
