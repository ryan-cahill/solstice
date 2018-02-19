import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, {ListItem, ListItemText} from 'material-ui/List'
import BarChartPanel from '../charts/BarChartPanel'
import LineChartPanel from '../charts/LineChartPanel'
import {fetchInitialData} from '../utilities/DataFetcherUtility'

class UtilityDataFullPage extends Component {
    state = {};

    componentDidMount() {
        fetchInitialData().then(data => {
            this.setState({
                utilityData: data.body.utilityData
            });
        });
    }

    formatUtilityDataForChart(dataPartsWanted) {
        if (!this.state.utilityData) {return [];}

        let usefulData = [];
        Object.keys(this.state.utilityData).forEach(uuid => {
            let dataPart = this.state.utilityData[uuid],
                dataWanted = {};
            dataPartsWanted.forEach(wantedPart => {
                dataWanted[wantedPart] = dataPart[wantedPart];
            });
            dataWanted.name = dataPart.month + '/' + dataPart.year;
            usefulData.push(dataWanted);
        });

        return usefulData;
    }

    listItemClicked(e, billingItemUuid) {
        this.props.history.push({
            pathname: '/admin',
            state: {
                billingItemUuid: billingItemUuid
            }
        })
    }

    render() {
        return (
            <div>
                <div style={{paddingTop: 16}}>
                    <Paper elevation={4} style={{paddingTop: 16, paddingBottom: 16}}>
                        <Typography variant="headline" component="h3">
                            Your usage and billing data in the past few periods.
                        </Typography>
                        <List>
                            {Object.keys(this.state.utilityData || {}).map(billingPeriodUuid => (
                                <ListItem button key={billingPeriodUuid} onClick={(e) => this.listItemClicked(e, billingPeriodUuid)}>
                                    <ListItemText
                                        primary={this.state.utilityData[billingPeriodUuid].month + '/' + this.state.utilityData[billingPeriodUuid].year + " - $" + this.state.utilityData[billingPeriodUuid].bill}
                                        secondary={"Savings: $" + this.state.utilityData[billingPeriodUuid].savings}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </div>
                <div>
                    <div style={{paddingTop: 16, float: 'left', width: '49%'}}>
                        <BarChartPanel chartData={this.formatUtilityDataForChart(['bill', 'savings'])}/>
                    </div>
                    <div style={{paddingTop: 16, float: 'right', width: '49%'}}>
                        <LineChartPanel chartData={this.formatUtilityDataForChart(['kwh'])}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UtilityDataFullPage