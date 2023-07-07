// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';

// const data = [
//   { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
// ];

// const Chart = () => {
//   return (
 

//     <ResponsiveContainer width={400} height={300} maxHeight={200}>
//     <LineChart width={600} height={300} data={data} >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//     </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default Chart;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
];

const SimpleLineChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Line />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default SimpleLineChart;


// responsivecode
// ..................................................................................
// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
// ];

// const LineChartComponent = () => {
//   const [yAxisDomain, setYAxisDomain] = useState([]);

//   const yaxisdomainchage = (data) => {
//     const min = Math.min(data.map((entry) => entry.pv));
//     const max = Math.max(data.map((entry) => entry.pv));
//     setYAxisDomain([min, max]);
//   };

//   return (
//     <div style={{ height: "100%", minHeight: 400, maxHeight: 600 }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data} onClick={() => yaxisdomainchage(data)}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis domain={yAxisDomain} />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default LineChartComponent;


// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const SyncedLineCharts = () => {
// // const data = [
// //   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
// //   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
// //   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
// //   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
// //   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
// //   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
// //   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// // ];

//   return (<>
//   hinverknvkem
//      {/* <ResponsiveContainer  > */}
//       <LineChart width={500} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name9" />
//         {/* <YAxis />
//         <Tooltip /> */}
//         {/* <Legend /> */}
//         {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
//       </LineChart>
//       {/* <Sync/> */}
//       <LineChart width={500} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name8" />
//         {/* <YAxis />
//         <Tooltip /> */}
//         {/* <Legend /> */}
//         {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//       </LineChart>
//    {/* </ResponsiveContainer> */}
//   </>);
// }

// export default SyncedLineCharts;

// ..........

// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// function Chart() {
//   const [data, setData] = useState([]);
//   function myClick() {
//     fetch('/api/new-data')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }
  

//   useEffect(() => {
//     fetch('/api/data')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//     <LineChart width={600} height={300} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="value" stroke="#8884d8" />
//     </LineChart>
//     <button onClick={myClick}>Update Data</button>
//     </div>
//   );
// }
// export default Chart;

