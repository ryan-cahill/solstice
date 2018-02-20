import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {FormControl} from 'material-ui/Form'
import Input, {InputLabel, InputAdornment} from 'material-ui/Input'
import {getBillingDetailsByUuid, updateUtilityDetailsByUuid} from '../utilities/DataFetcherUtility'
import { createMuiTheme } from 'material-ui/styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FF9800',
            main: '#F57C00',
            dark: '#E65100',
            contrastText: '#fff'
        },
        secondary: {
            light: '#2196F3',
            main: '#1976D2',
            dark: '#0D47A1',
            contrastText: '#000'
        }
    }
});

class AdminPage extends Component {
    state = {
        utilityData: {
            bill: '',
            savings: '',
            kwh: ''
        },
        newUtilityData: {
            bill: '',
            savings: '',
            kwh: ''
        },
        dataIsValid: true
    };

    componentDidMount() {
        getBillingDetailsByUuid(this.props.location.state.billingItemUuid).then(data => {
            this.setState({
                utilityData: data.body.utilityData
            });
        });
    }

    textFieldChanged(key, value) {
        this.setState({
            newUtilityData: {
                ...this.state.newUtilityData,
                [key]: value
            }
        });
    }

    newDataIsValid() {
        let dataIsValid = true;
        Object.keys(this.state.newUtilityData).forEach(key => {
            const value = this.state.newUtilityData[key],
                valueParsed = parseFloat(value);
            if (isNaN(valueParsed) && value.length > 0) {
                dataIsValid = false;
            }
        });
        return dataIsValid;
    }

    submitChanges(e) {
        const billingItemUuid = this.props.location.state.billingItemUuid;
        if (!this.newDataIsValid()) {
            this.setState({
                dataIsValid: false
            });
            return;
        }
        Object.keys(this.state.newUtilityData).forEach(key => {
            const valueParsed = parseFloat(this.state.newUtilityData[key]);
            this.setState({
                newUtilityData: {
                    ...this.state.newUtilityData,
                    [key]: this.state.newUtilityData[key] !== "" && !isNaN(valueParsed) ? valueParsed : ''
                }
            });
        });

        updateUtilityDetailsByUuid(billingItemUuid, this.state.newUtilityData).then(() => {
            this.navigateHome();
        });
    }

    cancelChanges(e) {
        this.navigateHome();
    }

    navigateHome() {
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        return (
            <div style={{paddingTop: 16}}>
                <MuiThemeProvider theme={theme}>
                    <Paper elevation={4} style={{paddingTop: 16, paddingBottom: 32, width: '100%'}}>
                        <Typography variant="headline" component="h3">
                            {`Edit customer data  for billing period ` + this.state.utilityData.month + '/' + this.state.utilityData.year}
                        </Typography>
                        <FormControl style={{width: '60%'}}>
                            <InputLabel>Bill</InputLabel>
                            <Input label='bill' startAdornment={<InputAdornment position='start'>$</InputAdornment>} onChange={(e) => this.textFieldChanged('bill', e.target.value)} placeholder={this.state.utilityData.bill.toString()}/>
                        </FormControl>
                        <FormControl style={{width: '60%'}}>
                            <InputLabel>Savings</InputLabel>
                            <Input label='savings' startAdornment={<InputAdornment position='start'>$</InputAdornment>} onChange={(e) => this.textFieldChanged('savings', e.target.value)} placeholder={this.state.utilityData.savings.toString()}/>
                        </FormControl>
                        <FormControl style={{width: '60%'}}>
                            <InputLabel>kwh</InputLabel>
                            <Input label='kwh' onChange={(e) => this.textFieldChanged('kwh', e.target.value)} placeholder={this.state.utilityData.kwh.toString()}/>
                        </FormControl>
                        <div style={{paddingTop: 16}}>
                            <Button variant='raised' style={{marginRight: 16}} onClick={(e) => this.cancelChanges(e)}>cancel</Button>
                            <Button variant='raised' color='primary' style={{marginLeft: 16}} onClick={(e) => this.submitChanges(e)}>submit</Button>
                        </div>
                        <div style={{float: 'right'}}>
                            <Typography color='primary' style={{paddingRight: '16px'}}>
                                {this.state.dataIsValid ? '' : 'Please enter valid data.'}
                            </Typography>
                        </div>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default AdminPage;