import React, { useState, Component } from 'react';
import { Button } from 'rv-react-test';
import LayoutWrapper from '../common/layoutWrapper';
import { LayoutConfig } from '../../utils/layoutConfig';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSqrFoot: '',
            percentBasement: '',
            ageOfRoof: '',
            describeHome: '',
            ageOfDwelling: '50',
            year: '2020',
            month: 'July',
            day: '27',
            haveBurningStove: 'No',
            haveOilTank: 'Yes',
            mortgagesCount: '1'
        };
        this.handleChange = this.handleChange.bind(this);
        this.printValue = this.printValue.bind(this);
    }

    handleChange(event, isInnerHTMLElem) {
        let val = isInnerHTMLElem ? event.target.innerHTML : event.target.value;
        this.setState({
            [event.target.name]: val
        });
    }

    printValue() {
        console.log(this.state);
    }

	render() {
		return(
            <div>
                <Button value="Print Value" onChange={this.printValue} />
                <LayoutWrapper payload={this.state} config={LayoutConfig.children} handleChange={this.handleChange} />
            </div>
		)
	}
}

export default Dashboard;