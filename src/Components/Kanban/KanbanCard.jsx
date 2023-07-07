import React from 'react'
import { Progress,Typography} from 'antd';
const { Text } = Typography;

export default function KanbanCard({ card, type, fn }) {


  switch (type) {
    case 'default':
      return <DefaultKanabnCard card={card} fn={fn}  />
    default:
      return <DefaultKanabnCard card={card} fn={fn} />
  }
}


const DefaultKanabnCard = ({ card, fn }) => (
  <div
    key={card.id}
    className="kanban-card"
    draggable
    onDragStart={(e) => fn && fn(e, card.id)}
    style={{
     // textAlign: 'center',
      background: '#FFFFFF',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
      margin: '5px 0',
      borderRadius: '5px',
      padding: '5px',
      //width: '100%'
    }}
  >
    <Text level={5} strong>{card.title}</Text>
    <p>{card.description}</p>
    <Progress percent={90} size="small" />
  </div>
)

