import React from 'react';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import BarChartReact from './BarChart'

const BarChartPanel = ({chartData}) => {
    return (
        <Paper elevation={4} style={{paddingTop: 16, paddingBottom: 16}}>
            <Typography variant="headline" component="h3">
                Your costs and savings over time.
            </Typography>
            <div>
                <BarChartReact chartData={chartData}/>
            </div>
        </Paper>
    );
};

export default BarChartPanel;