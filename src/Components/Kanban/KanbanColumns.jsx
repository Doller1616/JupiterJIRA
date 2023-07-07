import React, { useState } from 'react'
import KanbanCard from './KanbanCard';
import TaskSkelton from '@Components/Skeletons/TaskSkelton';
import { Col, Row} from 'antd';
import { Divider } from 'antd';



const defaultProps = {
    type: 'default',
    cardList: [],
    columns: []
}

function KanbanColumns({ columns, cardList = [], type }) {

    const [state, setState] = useState({
        cards: cardList,
    })
   const [loading,setLoading] = useState(true)

    const handleDragStart = (e, cardId) => {
        e.dataTransfer.setData("cardId", cardId);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, columnId) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData("cardId");
        const { cards } = state;
        const newCards = cards.map((card) => {
            if (card.id === Number(cardId)) {
                return { ...card, columnId };
            }
            return card;
        });
        setState({ cards: newCards });
    };

    setTimeout(function(){
        setLoading(false)
    }, 2000);

    const KanbanLabel = ({title, color}) => {
        return (
            <div>
                <b>{title}</b>
                <Divider style={{backgroundColor: color}} />
            </div>
        )
    }

    return (
        <div>
             {/* <TaskSkelton/> */}
            {loading && <TaskSkelton/>}
           {!loading && (
            
            <Row style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <Col flex="1" style={{ display: 'flex', gap: '10px' }}>

                    {columns.map((column) => (

                        <div wrap
                            key={column.id}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, column.id)}
                            style={{ height: "max-content", 
                            backgroundColor: '#F3FAFF',
                             flex: 1, 
                            padding: '5px 10px', borderRadius: '5px' }}
                        >

                            <KanbanLabel title={column.title} color={column.color} />
                            {/* ------------ Cards ---------------- */}

                            {state.cards
                                .filter((card) => card.columnId === column.id)
                                .map((card) => (
                                    <KanbanCard key={card.id} type={type} card={card} fn={handleDragStart} />
                                ))}

                            {/* -------------------------------- */}
                        </div>
                    ))}

                </Col>

            </Row>
          )} 
            

        </div>


    )
}


KanbanColumns.defaultProps = defaultProps;
export default KanbanColumns;
