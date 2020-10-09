import React from 'react';
import DPENV from './DPENV';

export default class API {

    /* 
       データ取得
     */

    getSystemConversation(userQuery) {
	const url = `${DPENV.getEnv('APIServerAddress')}/?query="${userQuery}"`;
	return fetch(url, {
	    mode: 'cors',
	    //mode: "*same-origin",
	    //mode: 'no-cors',
	}).then((res) => {
	    return res.json();
	}).then((data) => {
	    return data;
	}).catch((err) => {
	    return err;
	});
    }


}

