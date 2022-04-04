import React from 'react';
import { useDrop } from 'react-dnd';

const SecondColumn = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'Our first type',
    drop: () => ({ name: 'Some Name' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  console.log('options', { canDrop, isOver });
  return (
    <div ref={drop} className="column second-column">
      Column 2
    </div>
  );
};

export default SecondColumn;
