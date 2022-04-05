import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Move from './GridComponent/Move';

import './GridDND.css';

const GridDND = () => {
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
  ]);

  return (
    <div className="gridDND">
      <div className="container">
        <DndProvider backend={HTML5Backend}>
          <Move />
          <Move />
          <Move />
          <Move />
          <Move />
          <Move />
        </DndProvider>
      </div>
    </div>
  );
};

export default GridDND;
