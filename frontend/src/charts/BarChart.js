import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import createReactClass from 'create-react-class'

const BarChartReact = createReactClass({
    render () {
        return (
            <ResponsiveContainer width='100%' aspect={2.0}>
                <BarChart width={600} height={300} data={this.props.chartData}
                          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="bill" stackId="a" fill="#F57C00" />
                    <Bar dataKey="savings" stackId="a" fill="#00C853" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
});

export default BarChartReact;