import React from "react";
import "./App.css";
import ApiCall from "./ApiCall"
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer
} from "recharts";
import react from "react";

const App = () => {

  const [apiData, setApiData] = React.useState([])
  const [data, setData] = React.useState([])

  const getData = () => {
    let dataObj = {}
    let newData = []
    apiData.forEach((val) => {
      dataObj.name = val.address.city
      dataObj.users = val.id * 100000000
      newData.push({ ...dataObj })
    })
    setData(newData)
  }
  React.useEffect(() => {
    getData()
  }, [apiData]);

  return (
    <div style={{ textAlign: "center" }}>
      <ApiCall setApiData={setApiData} />
      <h1>User Types</h1>
      <div className="App">
        <PieChart width={500} height={500} padding={{ top: '5px' }}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
          padding={{ top: '5px' }}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend margin={{ top: '2px' }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default App;