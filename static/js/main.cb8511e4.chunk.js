(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(1),s=n(2),i=n(3),o=n(6),u=n(4),l=n(5),c=n(0),d=n.n(c),m=n(8),h=n.n(m);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){return d.a.createElement("button",{className:"square",id:e.number,onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"renderSquare",value:function(e){var t=this;return d.a.createElement(f,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},number:"sq"+e})}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),d.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),d.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(d.a.Component),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),info:Array(9).fill(null),usedPos:null}],stepNumber:0,xIsNext:!0,width:0,height:0,onMobile:!1},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(r.a)(Object(r.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();if(!y(n)&&!n[e]){n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,info:"Player: "+n[e]+" | Pos: ("+(Math.floor(e%3)+1)+", "+(Math.floor(e/3)+1)+")",usedPos:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext});var a=y(n);if(a)for(var r=0;r<3;r++)document.getElementById("sq"+a[r]).style.background="#ccc";for(var s=0;s<9;s++)document.getElementById("sq"+s).style.fontWeight=null;document.getElementById("sq"+e).style.fontWeight="bold"}}},{key:"jumpTo",value:function(e){if(this.state.stepNumber!==e){for(var t=this.state.history[e],n=0;n<9;n++)document.getElementById("sq"+n).style.background=null,document.getElementById("sq"+n).style.fontWeight=null;this.setState({stepNumber:e,xIsNext:e%2===0}),0!==e&&(document.getElementById("sq"+t.usedPos).style.fontWeight="bold");var a=y(t.squares);if(a)for(var r=0;r<3;r++)document.getElementById("sq"+a[r]).style.background="#ccc"}}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],r=y(a.squares),s=n.map(function(e,n){var a=n?"Go to move #"+n:"Go to game start";return d.a.createElement("li",{key:n},d.a.createElement("button",{onClick:function(){return t.jumpTo(n)}},a)," ",e.info)});return e=r?"Winner: "+a.squares[r[0]]:9===this.state.stepNumber?"We Have A Tie!":"Next player: "+(this.state.xIsNext?"X":"O"),d.a.createElement("div",{className:"game"},d.a.createElement("div",{className:"status"},e),d.a.createElement("div",{className:"game-board"},d.a.createElement(v,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),d.a.createElement("div",{className:"game-info"},d.a.createElement("ol",null,s)))}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var e=window.innerWidth<500;this.setState({width:window.innerWidth,height:window.innerHeight,onMobile:e})}}]),t}(d.a.Component);function y(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(a.a)(t[n],3),s=r[0],i=r[1],o=r[2];if(e[s]&&e[s]===e[i]&&e[s]===e[o])return[s,i,o]}return null}h.a.render(d.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.cb8511e4.chunk.js.map