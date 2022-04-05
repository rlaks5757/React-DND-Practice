import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './App4Component/Column';
import MovableItem from './App4Component/MovableItem';
import './App4.css';

const App4 = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
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

  const addItemHandler = order => {
    const itemLength = items.length;
    if (order === 'add') {
      setItems([
        ...items,
        {
          id: itemLength + 1,
          name: `Item ${itemLength + 1}`,
        },
      ]);
    } else {
      items.splice(itemLength - 1, 1);
      setItems([...items]);
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
    <>
      <div className="container">
        <DndProvider backend={HTML5Backend}>
          <Column title="DND Box" className="column first-column">
            {items.map((item, idx) => (
              <MovableItem
                key={item.id}
                name={item.name}
                id={item.id}
                setItems={setItems}
                index={idx}
                moveCardHandler={moveCardHandler}
              />
            ))}
          </Column>
          {/* <Column title="Column 2" className="column second-column">
          {returnItemsForColumn('Column 2')}
        </Column> */}
        </DndProvider>
      </div>
      <button onClick={() => addItemHandler('add')}>추가</button>
      <button onClick={() => addItemHandler('delete')}>삭제</button>
    </>
  );
};

export default App4;