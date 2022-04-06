import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ChartTest from '../ChartTest';
import ChartJsTest from './ChartJsTest';

const MovableItem = ({ name, id, setItems, index, moveCardHandler }) => {
  //Container 내 MoveableItem을 드래그하는 경우, 이동하는 위치를 정하는 부분
  const changeItemColumn = () => {
    setItems(prevState => {
      return prevState.map(e => {
        return {
          ...e,
          name: e.name,
        };
      });
    });
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'Our first type',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'Our first type' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        changeItemColumn();
      }
    },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={
        id === 1
          ? 'firstMoval-item'
          : id === 2
          ? 'firstMoval-item'
          : 'movable-item'
      }
      style={{ opacity }}
    >
      {id === 1 ? <ChartTest /> : id === 2 ? <ChartJsTest /> : name}
    </div>
  );
};

export default MovableItem;
