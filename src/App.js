import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './App1Component/Column';
import MovableItem from './App1Component/MovableItem';
import './App.css';

const App = () => {
  const [isFirstColumn, setIsFirstColumn] = useState(true);

  const Item = <MovableItem setIsFirstColumn={setIsFirstColumn} />;

  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <Column title="Column 1" className="column first-column">
          {isFirstColumn && Item}
        </Column>
        <Column title="Column 2" className="column second-column">
          {!isFirstColumn && Item}
        </Column>
      </DndProvider>
    </div>
  );
};

export default App;
