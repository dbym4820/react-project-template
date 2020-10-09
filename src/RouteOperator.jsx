import React from 'react';
import ReactDOM from 'react-dom';
import DPENV from './DPENV';

export default class RouteOperator extends React.Component {

    static parseURL(rowParam){
	let params = {};
	//urlパラメータをオブジェクトにまとめる
	rowParam.split('&').forEach( param => {
	    const temp = param.split('=');
	    params = {
		...params,
		[temp[0]]: temp[1]
	    };
	});
	return params;
    }

    static urlRoute(page) {
	return DPENV.getEnv('applicationRoot') + page;
    }

}
