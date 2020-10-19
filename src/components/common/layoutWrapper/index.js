import React, { useState, Component } from 'react';
import { TextInput, Select, DateSelection, Button, ButtonGroupList } from 'rv-react-test';
import { Col, Row, Container } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import PropTypes from 'prop-types';
import './layoutWrapper.css';

const ContainerLayout = props => {
  return (
    <Container>
      {renderLayout(props.onChange, props.config, props.payloadMap)}
    </Container>
  )
}

const RowLayout = props => {
  return (
    <Row className="justify-content-md-center">
      {renderLayout(props.onChange, props.config, props.payloadMap)}
    </Row>
  )
}

const ColumnLayout = props => {
  return (
    <Col xs="auto" md={6}>
      {renderLayout(props.onChange, props.config, props.payloadMap)}
    </Col>
  )
}

const renderLayout = (onChange, layoutConfig, payloadMap) => {

    return layoutConfig && layoutConfig.length ?
        <>
        <Translation>
          {
            t =>
                layoutConfig.map((config, ind) => {
                  const newConfig = config.children ? [...config.children] : [];
                  const {layoutType, input, label, name, list, placeholder, localeKey, validators} = config
                  let key;

                  const handleChange = (event, isInnerHTMLElem, isError) => {
                      onChange(event, isInnerHTMLElem, isError);
                  }

                  const selectErrorCB = (error) => {

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
                                       onChange={handleChange} errorCB={selectErrorCB}/>
                      case "date-selection":
                        return <DateSelection key={key} label={t(localeKey)}
                                       year={payloadMap['year']} month={payloadMap['month']} day={payloadMap['day']}
                                       onChange={handleChange} />
                      case "btn-group":
                         const translatedList = list.map((val) =>  {
                            return { value : val.value,
                            label : t(val.label) }
                         });
                         return <ButtonGroupList key={key} label={t(localeKey)} name={name}
                                       list={translatedList} value={payloadMap[name]}
                                       onChange={handleChange} />
                      case "text":
                      case "number":
                        return <TextInput key={key} label={t(localeKey)} name={name} value={payloadMap[name]}
                                          placeholder={placeholder} type={input} validators={validators}
                                          onChange={handleChange}/>
                    }
                  }

                })
             }
          </Translation>
        </>
    : <div> Empty config has been passed.</div>
}

class LayoutWrapper extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, isInnerHTMLElem, isError) {
        this.props.handleChange(event, isInnerHTMLElem, isError);
    }

	render() {
        const payloadMap = this.props.payload;
		return(
			<div>
				<ContainerLayout onChange={this.handleChange} config={this.props.config} payloadMap={payloadMap}/>
			</div>
		)
	}
}

LayoutWrapper.propTypes = {
    config: PropTypes.any.isRequired,
    handleChange: PropTypes.func.isRequired,
    payload: PropTypes.any.isRequired
}

export default LayoutWrapper;