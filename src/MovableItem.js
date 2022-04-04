import React from 'react';
import { useDrag } from 'react-dnd';

const MovableItem = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { name: 'Any custom name', type: 'Irrelevant, for Now' },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} className="movable-item" style={{ opacity }}>
      We will move this item
    </div>
  );
};

export default MovableItem;
