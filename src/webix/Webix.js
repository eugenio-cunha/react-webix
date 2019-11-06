import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import * as webix from 'webix/webix';
import 'webix/webix.css';

const Container = styled.div`
  height: 100vh;
`;

class Webix extends Component {
  render() {
    return (
      <Container ref="root" />
    );
  }

  setWebixData(data) {
    const ui = this.ui;
    if (ui.setValues)
      ui.setValues(data);
    else if (ui.parse)
      ui.parse(data)
    else if (ui.setValue)
      ui.setValue(data);
  }

  componentWillUnmount() {
    this.ui.destructor();
    this.ui = null;
  }

  componentWillUpdate(props) {
    if (props.data)
      this.setWebixData(props.data);
    if (props.select)
      this.select(props.select);
  }

  componentDidMount() {
    this.ui = webix.ui(
      this.props.ui,
      ReactDOM.findDOMNode(this.refs.root)
    );

    this.componentWillUpdate(this.props);
  }

}

export default Webix;