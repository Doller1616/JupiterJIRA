import { Card } from "antd";
import { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import originalLayouts from './defaultLayout.json';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Dynaminboard = ({ cardList = [] }) => {
    const [defaultLayout, setDefaultLayout] = useState(originalLayouts);
    const handle = () => {
        console.log(defaultLayout)
    }

    return (<>
        <ResponsiveReactGridLayout
            className="layout"
            layouts={defaultLayout}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            margin={[10, 10]}
            onLayoutChange={(layout, layouts) => setDefaultLayout(layouts) }>

            {
                cardList.map((c, i) => (
                    <div key={`000${i + 1}`}>
                       { c ?  <Card
                            type="inner"
                            title={c?.title}
                            headStyle={{zIndex: 9, background: 'none', borderBottom: 0}}
                            bodyStyle={{ height: '85%', overflow: 'auto', ...c?.cardStyle}}
                            extra={c?.headRightHTML}
                            style={{ height: 'inherit', overflow: 'hidden', border: 0 }}
                        > 
                        {/* <button onClick={handle}>Click</button> */}
                        {c?.component} 
                        
                        </Card>
                        : <Card type="inner" title="No Title" extra=''> No Content </Card>
                        }
                    </div>
                ))
            }

        </ResponsiveReactGridLayout>
    </>);
};

export default Dynaminboard;



