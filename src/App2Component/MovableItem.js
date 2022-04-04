import React from 'react';
import { useDrag } from 'react-dnd';

const MovableItem = ({ name, setItems }) => {
  const changeItemColumn = (currentItem, columnName) => {
    setItems(prevState => {
      return prevState.map(e => {
        return {
          ...e,
          column: e.name === currentItem.name ? columnName : e.column,
        };
      });
    });
  };

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'Our first type' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.name === 'Column 1') {
        changeItemColumn(item, 'Column 1');
      } else {
        changeItemColumn(item, 'Column 2');
      }
    },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} className="movable-item" style={{ opacity }}>
      {name}
    </div>
  );
};

export default MovableItem;
