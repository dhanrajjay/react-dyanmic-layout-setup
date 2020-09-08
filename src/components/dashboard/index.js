import React, { useState, Component } from 'react';
import { LayoutConfig } from '../../utils/layoutConfig';
import { TextInput, Select, DateSelection, Button, ButtonGroupList } from 'rv-react-test';
import { Col, Row, Container } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import './dashboard.css';

const ContainerLayout = props => {
    console.log('Container');
  return (
    <Container>
      {renderLayout(props.onChange, props.config, props.payloadMap)}
    </Container>
  )
}

const RowLayout = props => {
console.log('Row Layout Container');
  return (
    <Row className="justify-content-md-center">
      {renderLayout(props.onChange, props.config, props.payloadMap)}
    </Row>
  )
}

const ColumnLayout = props => {
console.log('Column Layout Container');
  return (
    <Col xs="auto" md={6}>
      {renderLayout(props.onChange, props.config, props.payloadMap)}
    </Col>
  )
}

const renderLayout = (onChange, layoutConfig, payloadMap) => {

    return layoutConfig ?
        <>
        <Translation>
          {
            t =>
                layoutConfig.map((config, ind) => {
                  const newConfig = config.children ? [...config.children] : [];
                  const {layoutType, input, label, name, list, placeholder, localeKey} = config
                  let key;

                  const handleChange = (event, isInnerHTMLElem) => {
                      onChange(event, isInnerHTMLElem);
                  }

                  if (newConfig.length) {
                    key = `${layoutType}-${ind}`;
                    switch (layoutType) {
                      case "Container":
                        return <ContainerLayout
                                  key={key}
                                  onChange={handleChange}
                                  config={newConfig}
                                  payloadMap={payloadMap}
                               />
                      case "Column":
                        return <ColumnLayout
                                  key={key}
                                  onChange={handleChange}
                                  config={newConfig}
                                  payloadMap={payloadMap}
                               />
                      case "Row":
                        return <RowLayout
                                  key={key}
                                  onChange={handleChange}
                                  config={newConfig}
                                  payloadMap={payloadMap}
                               />
                    }
                  } else {
                    key=`${input}-${ind}`
                    switch (input) {
                      case "select":
                        return <Select key={key} label={t(localeKey)} name={name} value={payloadMap[name]}
                                       list={list} value={payloadMap[name]}
                                       onChange={handleChange}/>
                      case "date-selection":
                        return <DateSelection key={key} label={t(localeKey)}
                                       year={payloadMap['year']} month={payloadMap['month']} day={payloadMap['day']}
                                       onChange={handleChange} />
                      case "btn-group":
                         return <ButtonGroupList key={key} label={t(localeKey)} name={name}
                                       list={list} value={payloadMap[name]}
                                       onChange={handleChange} />
                      case "text":
                      case "number":
                        return <TextInput key={key} label={t(localeKey)} name={name} value={payloadMap[name]}
                                          placeholder={placeholder} type={input}
                                          onChange={handleChange}/>
                    }
                  }

                })
             }
          </Translation>
        </>
    : null
}

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
        const payloadMap = this.state;
		return(
			<div>
				<ContainerLayout onChange={this.handleChange} config={LayoutConfig.children} payloadMap={payloadMap}/>
				<Button value="Print Value" onChange={this.printValue} />
			</div>
		)
	}
}

export default Dashboard;