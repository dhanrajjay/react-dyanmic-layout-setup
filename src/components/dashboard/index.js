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
        this.validators = {};
        this.handleChange = this.handleChange.bind(this);
        this.printValue = this.printValue.bind(this);
        this.updateValidator = this.updateValidator.bind(this);
        this.generateRequireHandlers = this.generateRequireHandlers.bind(this);
        this.generateRequireHandlers(LayoutConfig.children);
    }

    handleChange(event, isInnerHTMLElem, isError) {
        let val = isInnerHTMLElem ? event.target.innerHTML : event.target.value;
        this.updateValidator(event.target.name, isError);
        this.setState({
            [event.target.name]: val
        });
    }

    printValue() {
        console.log(this.state);
    }

    generateRequireHandlers(children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].hasOwnProperty('children')) {
                this.generateRequireHandlers(children[i].children);
            } else if(children[i].validators && children[i].validators.length) {
                this.validators[children[i].name] = {
                    valid: false
                }
            }
        }
    }


    updateValidator(field, value) {
        if (!field) {
            return;
        }
        if (this.validators[field]) {
            this.validators[field].valid = value.error;
        }
        console.log(this.validators[field]);
    }

    isFormValid() {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
          if (!this.validators[field].valid) {
            status = false;
          }
        });
        return status;
    }

	render() {
		return(
            <div>
                <Button value="Print Value" onChange={this.printValue} className={`${this.isFormValid() ? 'app-button' : 'disabled'}`} />
                <LayoutWrapper payload={this.state} config={LayoutConfig.children} handleChange={this.handleChange} />
            </div>
		)
	}
}

export default Dashboard;