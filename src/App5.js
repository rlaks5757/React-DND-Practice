import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './App5Component/Column';
import MovableItem from './App5Component/MovableItem';
import './App5.scss';

//Flex Version
const App5 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Item 1',
      title: '출력현황',
      data: [
        { id: 1, name: '일일 인원', totalCount: 1, data: [] },
        { id: 2, name: '누적 인원', totalCount: 1, data: [] },
        { id: 3, name: '일일 장비', totalCount: 1, data: [] },
        { id: 4, name: '누적 장비', totalCount: 1, data: [] },
        { id: 5, name: '신규채용자', totalCount: 1, data: [] },
        { id: 6, name: '안전교육 총인원', totalCount: 1, data: [] },
        { id: 7, name: '월간교육 횟수', totalCount: 1, data: [] },
        { id: 8, name: '안전교육 총횟수', totalCount: 1, data: [] },
      ],
    },
    { id: 2, name: 'Item 2', title: '안전시정조치요구서', data: [] },
    { id: 3, name: 'Item 3', title: '재해현황', data: [] },
    { id: 4, name: 'Item 4', title: '지도&날씨', data: [] },
    { id: 5, name: 'Item 5', title: '공정률', data: [] },
    { id: 6, name: 'Item 6', title: '예산변경', data: [] },
    { id: 7, name: 'Item 7', title: '실행률', data: [] },
    { id: 8, name: 'Item 8', title: 'Project 현황', data: [] },
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

  return (
    <>
      <div className="container5">
        <DndProvider backend={HTML5Backend}>
          <Column title="DND Box" className="column5 first-column4">
            {items &&
              items.map((item, idx) => (
                <MovableItem
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  items={items}
                  setItems={setItems}
                  index={idx}
                  moveCardHandler={moveCardHandler}
                />
              ))}
          </Column>
        </DndProvider>
      </div>
      <div className="buttonBox">
        <button onClick={() => addItemHandler('add')}>추가</button>
        <button onClick={() => addItemHandler('delete')}>삭제</button>
      </div>
    </>
  );
};

export default App5;
