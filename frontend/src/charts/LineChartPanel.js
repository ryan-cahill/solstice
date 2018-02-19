import React from 'react';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import LineChartReact from './LineChart'

const LineChartPanel = ({chartData}) => {
    return (
        <Paper elevation={4} style={{paddingTop: 16, paddingBottom: 16}}>
            <Typography variant="headline" component="h3">
                Your usage in kW/h over time.
            </Typography>
            <div>
                <LineChartReact chartData={chartData}/>
            </div>
        </Paper>
    );
};

export default LineChartPanel;