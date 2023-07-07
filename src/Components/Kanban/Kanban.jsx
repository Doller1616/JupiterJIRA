import React from 'react';
//import { Avatar} from 'antd';
import KanbanColumns from './KanbanColumns';

export default function Kanban() {

  const state = {
    columns: [
      { id: 1, title: "To Do", color: 'red' },
      { id: 2, title: "In Progress", color: 'yellow' },
      { id: 3, title: "In Review", color: 'blue' },
      { id: 4, title: "Done", color: 'green' },
    ],
    cards: [
      { id: 1, title: "New code Update on...", description: "This is task 1", columnId: 1 },
      { id: 2, title: "Task 2", description: "This is task 2", columnId: 1 },
      { id: 3, title: "Task 3", description: "This is task 3", columnId: 1 },
      { id: 4, title: "Task 4", description: "This is task 4", columnId: 1 },
      { id: 5, title: "Task 5", description: "This is task 5", columnId: 2 },
      { id: 6, title: "Task 6", description: "This is task 6", columnId: 2 },
      { id: 7, title: "Task 10", description: "This is task 7", columnId: 2 },
      { id: 9, title: "Task 10", description: "This is task 7", columnId: 2 },
      { id: 10, title: "Task 5", description: "This is task 5", columnId: 3 },
      { id: 11, title: "Task 6", description: "This is task 6", columnId: 3 },
      { id: 12, title: "Task 10", description: "This is task 7", columnId: 3 },
      { id: 13, title: "Task 10", description: "This is task 7", columnId: 3 },
      { id: 14, title: "Task 6", description: "This is task 6", columnId: 4 },
      { id: 15, title: "Task 10", description: "This is task 7", columnId: 4 },
      { id: 16, title: "Task 10", description: "This is task 7", columnId: 4 },
      { id: 17, title: "Task 10", description: "This is task 7", columnId: 4 }
    ]
  };


  return (
    <div >
      <KanbanColumns
        columns={state.columns}
        cardList={state.cards}
        cardType='default'

      />
    </div>
  )
}
