import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import createReactClass from 'create-react-class'

const LineChartReact = createReactClass({
    render () {
        return (
            <ResponsiveContainer width='100%' aspect={2.0}>
                <LineChart width={600} height={300} data={this.props.chartData}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="kwh" stroke="#F57C00" activeDot={{r: 8}}/>
                </LineChart>
            </ResponsiveContainer>
        );
    }
});

export default LineChartReact;