import React from 'react';
import { useDrag } from 'react-dnd';

const MovableItem = ({ setIsFirstColumn }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name: 'Any custom name', type: 'Our first type' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.name === 'Column 1') {
        setIsFirstColumn(true);
      } else {
        setIsFirstColumn(false);
      }
    },
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
