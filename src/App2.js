import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './App2Component/Column';
import MovableItem from './App2Component/MovableItem';
import './App.css';

const App2 = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', column: 'Column 1' },
    { id: 2, name: 'Item 2', column: 'Column 1' },
    { id: 3, name: 'Item 3', column: 'Column 1' },
  ]);

  const returnItemsForColumn = columnName => {
    return items
      .filter(item => item.column === columnName)
      .map(item => (
        <MovableItem key={item.id} name={item.name} setItems={setItems} />
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

export default App2;
