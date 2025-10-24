import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
  { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 88 },
  { "id": 2, "name": "Brian", "physics": 40, "chemistry": 48, "math": 42 },
  { "id": 3, "name": "Charlie", "physics": 76, "chemistry": 40, "math": 49 },
  { "id": 4, "name": "Diana", "physics": 92, "chemistry": 91, "math": 95 },
  { "id": 5, "name": "Ethan", "physics": 48, "chemistry": 72, "math": 70 },
  { "id": 6, "name": "Fiona", "physics": 81, "chemistry": 45, "math": 83 },
  { "id": 7, "name": "George", "physics": 74, "chemistry": 69, "math": 75 },
  { "id": 8, "name": "Hannah", "physics": 49, "chemistry": 93, "math": 91 },
  { "id": 9, "name": "Ivan", "physics": 15, "chemistry": 10, "math": 17 },
  { "id": 10, "name": "Julia", "physics": 48, "chemistry": 84, "math": 80 }
]



const ResultChart = () => {
    return (
        <div> 
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </LineChart>
            
        </div>
    );
};

export default ResultChart;