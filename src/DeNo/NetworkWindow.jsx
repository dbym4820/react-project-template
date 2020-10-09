import React from 'react';
import ReactDOM from 'react-dom';
import RouteOperator from '../RouteOperator';

import { Link, withRouter } from 'react-router-dom';
import {
    Container, Row, Col
} from 'reactstrap';

import './networkwindow.scss';
import Graph from "react-graph-vis";


export default class NetworkWindow extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    graph: {
		nodes: [],
		edges: []
	    },
	    options: {
		manipulation: {
		    enabled: true,
		    editNode: function (data, callback) {
			// filling in the popup DOM elements
			return null;
		    },
		},
		layout: {
		    hierarchical: true,
		},
		edges: {
		    color: "#000000"
		},
		height: "600px",
		width: "800px",
	    },
	    events: {
		select: function(event) {
		    let { nodes, edges } = event;
		}
	    },
	    
	    inputValue: "",
	    newestNodeId: 0,
	    newestEdgeId: 0,
	};
    }

    componentDidMount() {
	this.addNewHypothesis();
    }
    
    

    addNewHypothesis() {
	try {
	    this.setState({
		graph: {
		    nodes: [
			//this.state.graph.nodes,
			{id: this.state.newestNodeId, label: '犯人を選択してください', shape: 'box'},
			{id: this.state.newestNodeId+1, label: '凶器を選択してください', shape: 'box'},
			{id: this.state.newestNodeId+2, label: '動機を選択してください', shape: 'box'},
			{id: this.state.newestNodeId+3, label: '殺害場所を選択してください', shape: 'box'},
			{id: this.state.newestNodeId+4, label: '殺害時間を選択してください', shape: 'box'}
		    ],
		    edges: [
			//this.state.graph.edges,
			{id: this.state.newestEdgeId, from: this.state.newestNodeId, to: this.state.newestNodeId+1, label:'凶器'},
			{id: this.state.newestEdgeId+1, from: this.state.newestNodeId, to: this.state.newestNodeId+2, label:'動機'},
			{id: this.state.newestEdgeId+2, from: this.state.newestNodeId, to: this.state.newestNodeId+3, label:'殺害場所'},
			{id: this.state.newestEdgeId+3, from: this.state.newestNodeId, to: this.state.newestNodeId+4, label:'殺害時間'}
		    ],
		},
		newestNodeId: this.state.newestNodeId+5,
		newestEdgeId: this.state.newestEdgeId+4,
	    });
	}
	catch (err) {
            alert(err);
	}
    }

    
    render() {
	return (
	    <div id="NetworkWindow" className="rounded">
	      <Container>
		NetworkWindow
		<Graph
		  graph={this.state.graph}
		  options={this.state.options}
		  events={this.state.events}
		  getNetwork={network => {
		      //  if you want access to vis.js network api you can set the state in a parent component using this property
		  }}
		  />
	      </Container>
	    </div>
	);
    }
}
