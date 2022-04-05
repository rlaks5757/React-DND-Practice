import React from 'react';
import { useDrop } from 'react-dnd';

const Column = ({ children, className, title }) => {
  const [, drop] = useDrop({
    accept: 'Our first type',
    drop: () => ({ name: title }),
  });

  return (
    <div ref={drop} className={className}>
      {children}
    </div>
  );
};

export default Column;
