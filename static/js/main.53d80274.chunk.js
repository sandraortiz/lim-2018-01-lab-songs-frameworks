(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(26)},15:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),i=(a(15),a(4)),s=a(5),l=a(8),m=a(6),d=a(9),u=a(7),f=a(1),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={index:0,disabledNext:!1,disabledPrev:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"togglePrev",value:function(e){var t=this.state.index-1,a=0===t;this.setState({index:t,disabledPrev:a,disabledNext:!1})}},{key:"toggleNext",value:function(e){var t=this.state.index+1,a=t===this.props.profiles.length-1;this.setState({index:t,disabledNext:a,disabledPrev:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.index,n=t.disabledNext,r=t.disabledPrev,c=this.props.profiles?this.props.profiles[a]:null;return c?o.a.createElement("div",{className:"profile"},o.a.createElement(h,c),o.a.createElement("div",null,o.a.createElement(g,{toggle:function(t){return e.togglePrev(t)},active:r}),o.a.createElement(p,{toggle:function(t){return e.toggleNext(t)},active:n}))):o.a.createElement("span",null,"error")}}]),t}(o.a.Component),g=function(e){return o.a.createElement(f.Container,null,o.a.createElement(f.Row,null,o.a.createElement(f.Col,{md:"6"},o.a.createElement(f.Button,{onClick:e.toggle,disabled:e.active},"Previous"))))},p=function(e){return o.a.createElement(f.Container,null,o.a.createElement(f.Row,null,o.a.createElement(f.Col,{md:"6"},o.a.createElement(f.Button,{onClick:e.toggle,disabled:e.active},"Next"))))},h=function(e){var t=[];return fetch(e.songs).then(function(e){return e.json()}).then(function(e){Object.values(e).forEach(function(e){t.push({artistData:e.track}),console.log(t)})}),o.a.createElement(f.Container,null,o.a.createElement(f.Row,null,o.a.createElement(f.Col,{md:"6"},o.a.createElement("form",null,o.a.createElement("p",{className:"h5 text-center mb-4"},e.name),o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:e.image,className:"mx-auto d-block"}))))))},E=function(){return o.a.createElement("div",null,o.a.createElement(b,{profiles:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20),a(22),a(24);c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports=[{name:"VIXX",image:"https://lastfm-img2.akamaized.net/i/u/300x300/f76ac8ffe92d06c11e73dcc91c27c1f8.png",songs:"http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=VIXX&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json"},{name:"QUEEN",image:"https://lastfm-img2.akamaized.net/i/u/300x300/bd3b4dad5ca04c5da7fa22f897bc1cd0.png",songs:"http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=QUEEN&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json"},{name:"f(x)",image:"https://lastfm-img2.akamaized.net/i/u/300x300/7180429e3b478d40de0e1603efbbc7cf.png",songs:"http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=f(x)&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json"},{name:"Bruno Mars",image:"https://lastfm-img2.akamaized.net/i/u/300x300/8beceb166ec1673eb058ea15f5216925.png",songs:"http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Bruno%20Mars&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json"},{name:"Michael Jackson",image:"https://lastfm-img2.akamaized.net/i/u/300x300/b67c724c33abc559a472d64995de76db.png",songs:"http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Michael%20Jackson&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json"}]}},[[10,2,1]]]);
//# sourceMappingURL=main.53d80274.chunk.js.map