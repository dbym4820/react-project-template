import React from 'react';
import ReactDOM from 'react-dom';
import RouteOperator from '../RouteOperator';

import { Link, withRouter } from 'react-router-dom';
import {
    Container, Row, Col, Button
} from 'reactstrap';

import './novelwindow.scss';

export default class NovelWindow extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    inputValue: "",
	    currentStartSentenceID: 0,
	    currentShowingSentenceNumber: 0,
	    novelText: null,
	};
    }

    componentDidMount() {
	this.setNovelText(this.getShowLines(0));
	this.setCurrentStartPageInfo(0, this.getShowLines(0).length);
    }

    setNovelText(dom) {
	this.setState({
	    novelText: dom,
	});
    }

    setCurrentStartPageInfo(newStartID, newShowingNumber) {
	this.setState({
	    currentStartSentenceID: newStartID,
	    currentShowingSentenceNumber: newShowingNumber,
	});
    }
    
    getNovelAllText() {
	return [
	    { tid: 1, text: "ふと私の覚え書きを見ると、七〇もの不思議な事件がある。" },
	    { tid: 2, text:"この八年間、事件を通じて友人シャーロック・ホームズの手際を考えてきた。" },
	    { tid: 3, text:"その中には多くの悲劇と少しの喜劇があり、あとの大半は単に変わっただけのものだったが、普通というものはひとつとしてない。" },
	    { tid: 4, text:"なぜなら、どちらかというとホームズは好きだから仕事を受けるのであり、お金を得るためではない。" },
	    { tid: 5, text:"何の変哲もない調査は、かかわりたくないと一蹴してしまう。" },
	    { tid: 6, text:"途方もない事件でなくてはならない。" },
	    { tid: 7, text:"そのような様々の事件のなかでも、これほどに奇怪きわまるものは他にないだろう。" },
	    { tid: 8, text:"サリィ州ストーク・モランに住む、かの有名なロイロット家の話である。" },
	    { tid: 9, text:"くだんの事件は、ホームズと付き合い始めて間もない頃に起こり、まだ我々はベイカー街で下宿を共用していた。" },
	    { tid: 10, text:"もっと早くに公表してもよかったのかもしれないが、当時は口外しない約束をしており、こうして私が自由になったのは、ちょうど先日、約束を交わしていたご婦人が、時ならぬ死を迎えたためだ。" },
	    { tid: 11, text:"私にできることはおそらく、すべての事実を白日の下にさらすことである。" },
	    { tid: 12, text:"それには理由がある。" },
	    { tid: 13, text:"グリムズビ・ロイロット博士の死について風聞が広がっていることを私は知った。" },
	    { tid: 14, text:"そして、そのいずれもが真実をおどろおどろしくねじ曲げていたからである。" },
	    { tid: 15, text:"八三年の四月初め、ある朝、私が目を覚ますと、シャーロック・ホームズが身支度を調え、枕元に立っていた。" },
	    { tid: 16, text:"普段は遅くまで眠っている男なのに、暖炉の上の置き時計によれば、まだ七時一五分を回ったばかり。" },
	    { tid: 17, text:"私は何ごとかと目をぱちくりさせながらホームズの方を向く。" },
	    { tid: 18, text:"おそらく少々機嫌も悪かった。" },
	    { tid: 19, text:"私の朝は、決まってこうなのだった。" },
	    { tid: 20, text:"「気の毒だが起きたまえ、ワトソン。」ホームズの声だ。" },
	    { tid: 21, text:"「今朝はみな同じ具合なのだ。" },
	    { tid: 22, text:"ハドソンさんが戸の音でたたき起こされ、僕のところへやってくる。" },
	    { tid: 23, text:"そして僕は君のところへ。」" },
	    { tid: 24, text:"「何かね、まさか――火事か？」「いや、依頼人だ。"},
	    { tid: 25, text:"年の若いご婦人が興奮気味に来られたらしく、僕に面会したい、と。" },
	    { tid: 26, text:"居間で待ってもらっている。" },
	    { tid: 27, text:"どうだね、若いご婦人がこんな朝早く都会をほっつき歩いて、眠り込んでいる他人をたたき起こすとなれば、よくよく差し迫った事情があると考えねばならぬ。" },
	    { tid: 28, text:"万一これが本当に面白い事件だとすれば、君はきっと、はじめからかかわりたがる。" },
	    { tid: 29, text:"いずれにせよ、声をかけるだけかけて、君に決めてもらわねば。」" },
	    { tid: 30, text:"「心の友よ、どんな事件も逃すものか。」" },
	];
    }

    getSentenceRelatedSceneID(sentenceID){
	return [
	    { sceneID: 1, relatedSentenceID: [1, 2, 3] },
	    { sceneID: 2, relatedSentenceID: [4, 5, 6] },
	    { sceneID: 3, relatedSentenceID: [7] },
	    { sceneID: 4, relatedSentenceID: [8, 9] },
	    { sceneID: 5, relatedSentenceID: [10, 11] },
	    { sceneID: 6, relatedSentenceID: [12, 13, 14] },
	    { sceneID: 7, relatedSentenceID: [15, 16] },
	    { sceneID: 8, relatedSentenceID: [17, 18, 19, 20, 21] },
	    { sceneID: 9, relatedSentenceID: [22, 23, 24] },
	    { sceneID: 10, relatedSentenceID: [25, 26] },
	    { sceneID: 11, relatedSentenceID: [27] },
	    { sceneID: 12, relatedSentenceID: [28, 29, 30, 31] },
	].filter(scene => {
	    return scene.relatedSentenceID.some(sentence => sentence === sentenceID);
	})[0];
    }

    getTextAreaSize() {
	const target = document.getElementById("NovelArea");
	return {
	    height: target.clientHeight,
	    width: target.clientWidth,
	    fontSize: document.defaultView.getComputedStyle( target , null ).fontSize.replace(/[^0-9]/g, '')-0,
	};
    }

    checkEnableLineNumber() {
	const sizes = this.getTextAreaSize();
	return Math.floor((sizes.height * 0.7) / sizes.fontSize -5);
	// 余裕をもたせて，範囲の70％分から5行マイナス
    }
    
    getEnableLineTexts(startID)  {
	const allText = this.getNovelAllText();
	const enableLineNum = this.checkEnableLineNumber();
	return allText.filter((line) => {
	    if (line.tid >= startID && line.tid < startID + enableLineNum) return true;
	});
    }

    getShowLines (startID) {
	return this.getEnableLineTexts(startID).map((line) => {
	    return (
		<span tid="{line.tid}" key={line.tid}>{line.text}</span>);
	});
    }

    goNextPage() {
	const newStartID = this.state.currentStartSentenceID + this.state.currentShowingSentenceNumber; // 前のときのスタートセンテンスのIDに表示されている数だけ足したもの
	const newShowingNumber = this.checkEnableLineNumber();
	this.setCurrentStartPageInfo(newStartID, newShowingNumber);
	this.setNovelText(this.getShowLines(newStartID));
    }

    gobackBeforePage() {
	const newStartID = this.state.currentStartSentenceID - this.checkEnableLineNumber() > 0 ? this.state.currentStartSentenceID - this.getShowLines(newStartID) : 0; // 前のときのスタートセンテンスのIDに表示されている数だけ足したもの
	const newShowingNumber = this.checkEnableLineNumber();
	console.log(newStartID);
	console.log(this.getShowLines(newStartID));
	this.setCurrentStartPageInfo(newStartID, newShowingNumber);
	this.setNovelText(this.getShowLines(newStartID));
    }

    getSceneIDFromSentenceID(sentenceID) {
	return this.getSentenceRelatedSceneID(sentenceID);
    }
    
    alertCurrentSceneID(){
	alert("最新のセンテンスID："+this.state.currentStartSentenceID + this.state.novelText.length+",  対応するシーンID："+this.getSceneIDFromSentenceID(this.state.currentStartSentenceID + this.state.novelText.length).sceneID);
    }
    
    render() {
	return (
	    <div id="NovelWindow" className="text-muted rounded">
	      <Col>
		<Row id="NovelArea">
		  <p>小説テキスト</p><br/>
		  <div>{this.state.novelText}</div>
		</Row>
		<Row>
		  <Col xs="5">
		    <Button className="danger" onClick={() => this.gobackBeforePage()}>前のページ</Button>
		  </Col>
		  <Col xs="5">
		    <Button className="info" onClick={() => this.goNextPage()}>次のページ</Button>
		  </Col>
		</Row>
		<br/><br/>
		<Row>
		  <Button onClick={() => this.alertCurrentSceneID()}>ページに対応するシーンID</Button>  
		</Row>
	      </Col>
	    </div>
	);
    }

}

