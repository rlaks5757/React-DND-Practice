import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './App3Component/Column';
import MovableItem from './App3Component/MovableItem';
import './App.css';

const App3 = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', column: 'Column 1' },
    { id: 2, name: 'Item 2', column: 'Column 1' },
    { id: 3, name: 'Item 3', column: 'Column 1' },
  ]);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems(prevState => {
        const coppiedStateArray = [...prevState];

        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const returnItemsForColumn = columnName => {
    return items
      .filter(item => item.column === columnName)
      .map((item, idx) => (
        <MovableItem
          key={item.id}
          name={item.name}
          setItems={setItems}
          index={idx}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <Column title="Column 1" className="column first-column">
          {returnItemsForColumn('Column 1')}
        </Column>
        <Column title="Column 2" className="column second-column">
          {returnItemsForColumn('Column 2')}
        </Column>
      </DndProvider>
    </div>
  );
};

export default App3;
