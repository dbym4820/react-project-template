import React from 'react';
import ReactDOM from 'react-dom';
import RouteOperator from '../RouteOperator';

import { Link, withRouter } from 'react-router-dom';
import {
    Container, Row, Col
} from 'reactstrap';

import './feedbackwindow.scss';

export default class FeedbackWindow extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    inputValue: "",
	};
    }

    render() {
	return (
	    <div id="FeedbackWindow" className="rounded">
	      <Container>
		<p>ここにフィードバックが入るよ</p>
	      </Container>
	    </div>
	);
    }
}
