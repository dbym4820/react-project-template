import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import RouteOperator from './RouteOperator';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="container">
              <p className="text-primary">Profile</p>
              <br/>
	      <Button>aaa</Button>
	      <br />
              <Link to={RouteOperator.urlRoute("/")}>Homeへ</Link>
            </div>
        );
    }
}
