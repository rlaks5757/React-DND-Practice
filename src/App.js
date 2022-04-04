import React from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <FirstColumn />
        <SecondColumn />
      </DndProvider>
    </div>
  );
};

export default App;
