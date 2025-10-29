import React from 'react';
import { 
    BarChart, 
    Bar, 
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const SectionChart = ({ d }) => {
    
    if (!d || d.length === 0) {
        return <div>No data to display</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={d}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="consultationFee" fill="#8884d8">
                    {d.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SectionChart;
