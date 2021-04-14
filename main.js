(()=>{"use strict";var a={};a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"==typeof window)return window}}(),(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var n=a.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})();const t=a.p+"assets/img/461a81c236317cb30c2ae19cfd4ee93f.svg",n=a.p+"assets/img/4cb7f9c2ee8b1770ceb73b8e65a28679.svg",e=a.p+"assets/img/17d466dd49b915f2d2f3fd1ea069ab52.svg",s=a.p+"assets/img/3188f95c698bf31537962aa1b6b4b036.svg",i=a.p+"assets/img/19250efd817d4dc722a9e16d6b93a4eb.svg",l=a.p+"assets/img/cee424507c45505ab0695a53c1287dc6.svg",c={getToken:()=>(async()=>{const a=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa("0b5d68ec183745c88d11fefac1c2ae1c:429ee0e54a514f86b5270c07644df3c2")},body:"grant_type=client_credentials"});((a,t,n)=>{let e="";{let a=new Date;a.setTime(a.getTime()+2592e6),e="; expires="+a.toUTCString()}document.cookie="BearerToken="+(t||"")+e+"; path=/"})(0,(await a.json()).access_token)})(),getGenres:a=>(async a=>{const t=await fetch("https://api.spotify.com/v1/browse/categories?locale=sv_US",{method:"GET",headers:{Authorization:"Bearer "+a}});return(await t.json()).categories.items})(a),getPlaylistByGenre:(a,t)=>(async(a,t)=>{const n=await fetch(`https://api.spotify.com/v1/browse/categories/${t}/playlists?limit=12`,{method:"GET",headers:{Authorization:"Bearer "+a}});return(await n.json()).playlists.items})(a,t),getTracks:(a,t)=>(async(a,t)=>{const n=await fetch(`https://api.spotify.com/v1/playlists/${t}/tracks?limit=7`,{method:"GET",headers:{Authorization:"Bearer "+a}});return(await n.json()).items})(a,t),getPlaylistById:(a,t)=>(async(a,t)=>{const n=await fetch(`https://api.spotify.com/v1/playlists/${t}?limit=12`,{method:"GET",headers:{Authorization:"Bearer "+a}});return await n.json()})(a,t)},r=a=>{let t=a+"=",n=document.cookie.split(";");for(var e=0;e<n.length;e++){let a=n[e];for(;" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null},o=a=>(async a=>{let t=[];return await c.getToken(),(await c.getGenres(r("BearerToken"))).forEach((a=>t.push({id:a.id,name:a.name}))),[t[a],await c.getPlaylistByGenre(r("BearerToken"),t[a].id)]})(a),d=a=>(async a=>await c.getTracks(r("BearerToken"),a))(a),h=a=>(async a=>await c.getPlaylistById(r("BearerToken"),a))(a),g=async()=>`\n  <div>\n    <a href="#/home" ><div class="nav-right__logo">\n      <img src="${t}" alt="logo" width="120" height="36">\n    </div></a>\n    <div class="menu__container">\n      <ul class="nav-right__home">\n      <a href="#/home" ><li class="gray__push"><img src="${n}" class="icon__home" width="20" height="20">Home</li></a>\n        <li><img src="${s}" class="icon__home" width="20" height="20">Search</li>\n        <li><img src="${e}" class="icon__home" width="20" height="20">Your Library</li>\n      </ul>\n      <ul class="nav-right__create-playlist">\n        <li><img src="${i}" alt="plus" class="icon__home plus" width="20" height="20">Create Playlist</li>\n        <li><img src="${l}" alt="heart" class="icon__home heart" width="20" height="20">Liked Songs</li>\n      </ul>\n    </div>\n    <div class="list__container">\n      <ul class="nav-right__top-list" id="nav-right__top-list">\n        ${await(async()=>{let a="",t=await o(Math.floor(19*Math.random())+0);t=t[1];for(let n of t)a=a+"\n"+`\n      <a href="#/${n.id}/"><li>${n.name}</li></a>\n    `;return a})()}\n      </ul>\n    </div>\n  </div>\n  `,p=a.p+"assets/img/5d319bc7860737ed064d1762e4243869.svg",m=a=>{let t="";for(let n of a)t=t+"\n"+`\n    <a href="#/${n.id}/">\n      <div class="card-recently">\n        <div class="card-img">\n          <img loading="lazy" src="${n.images[0].url}" alt="img" width="160">\n        </div>\n        <h1 class="card-recently__tittle">${n.name}</h1>\n        <p class"card-recently__artist">By ${n.owner.display_name}</p>\n      </div>\n    </a>\n    `;return`\n  <div class="container__recently">\n    ${t}\n  </div>\n  `},v=(a,t)=>Math.floor(Math.random()*(t-a))+a,u=async()=>{let a=localStorage.getItem("playList");return null==a||""==a||0==a||null==a?(console.log("consumió"),a=[],a.push(await o(0)),a.push(await o(v(1,20))),a.push(await o(v(1,20))),a.push(await o(v(1,20))),localStorage.setItem("playList",JSON.stringify(a))):(console.log("no consumió"),a=JSON.parse(a)),console.log(a),`\n  <div class="container-main">\n    <section class="greetings">\n      <h1 class="content__tittle-top">Good evening</h1>\n      <div class="container__greeting">\n        ${await(async a=>{let t,n="",e="";t=(a=a[1]).length;for(let s=0;s<t;s++)s<t/2?n=n+"\n"+`<a href="#/${a[s].id}/">\n    <div class="cards__top-item">\n      <div>\n        <img loading="lazy" src="${a[s].images[0].url}" width="80" height="80" alt="capture">\n      </div>\n      <p>${a[s].name}</p>\n    </div>\n    </a>\n    `:e=e+"\n"+`<a href="#/${a[s].id}/">\n    <div class="cards__top-item">\n      <div>\n        <img loading="lazy" src="${a[s].images[0].url}" width="80" height="80" alt="capture">\n      </div>\n      <p>${a[s].name}</p>\n    </div>\n    </a>`;return`\n    <div class="row__1">\n      ${n}\n    </div>\n    <div class="row__1">\n      ${e}\n    </div>\n  `})(a[0])}\n      </div>\n    </section>\n    ${await(async a=>{let t="";for(let n=1;n<4;n++){let e=a[n],s=e[0];e=e[1],t=t+"\n"+`\n    <section class="recently-played">\n      <h2>${s.name}</h2>\n      ${m(e)}\n    </section>\n    `}return t})(a)}\n  </div>\n  `},y=()=>location.hash.slice(1).split("/")[1]||"/",w=a.p+"assets/img/1b4fe47788d6c47edda8dd6009008246.svg",_=a.p+"assets/img/c44aca9d9c72b76c5a794e8814a7633c.svg",f=(a,t)=>{var n=Math.floor(a/1e3%60),e=Math.floor(a/6e4%60),s=Math.floor(a/36e5%24);return s=s,e=e,n=n<10?"0"+n:n,t?e+":"+n:s+" hr "+e+" min"},b=a.p+"assets/img/3ca19d6ee72a776b2c9dc40584023477.png",$=a=>{const t=a.getImageData(0,0,canvas.width,canvas.height);let n=0,e=0,s=0,i=0;for(let a=0;a<canvas.width*canvas.height;a+=20){const l=a+4;t.data[l+3]>0&&(++i,n+=t.data[l],s+=t.data[l+1],e+=t.data[l+2])}return n=~~(n/i),s=~~(s/i),e=~~(e/i),[n,s,e]},k=async()=>{document.getElementById("content").innerHTML="";const a=y();let t=await h(a),n=(a=>{let t=a.tracks.items,n=0;return t.map((a=>{n+=null!==a.track?a.track.duration_ms:0})),f(n)})(t),e=t.tracks.items;e.length>31&&(e=e.slice(0,30));let s=t.images[0].url,i=1,c=`\n  <div class="container-main">\n    <div class="main-container__playlist" id="main-container__playlist">\n      <div class="playlist__capture">\n        <canvas id="canvas" width="200" height="200"></canvas>\n      </div>\n      <div class="playlist__info">\n        <h5>PLAYLIST</h5>\n        <h1>${t.name}</h1>\n        <p class="description">${t.description}</p>\n        <div class="playlist__info-social-media">\n          <p>${t.owner.display_name}\n          <span>${t.followers.total.toLocaleString("en-US")} followers</span>\n          <span>${t.tracks.total} songs, ${n}</span></p>\n        </div>\n      </div>\n    </div>\n    <div class="playlist__controls">\n      <div class="playlist__play">\n        <img loading="lazy" src="${w}" alt="play" width="30" height="30">\n      </div>\n      <img class="playlist__heart" src="${l}" alt="heart" width="30" height="30">\n      <div class="playlist__continue">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n    <div class="playlist__table-container title__table">\n      <span>#</span>\n      <span>TITLE</span>\n      <span class="playlist-title__plays">ALBUM</span>\n      <span class="playlist-plays">\n        <img loading="lazy" src="${_}" width="16">\n      </span>\n    </div>\n    ${e.map((a=>`\n    <div class="playlist__table-container track__height">\n      <span>${i++}</span>\n      <span class="track-container">\n        <span><img src="${null!==a.track?a.track.album.images[0].url:b}" width="40"></span>\n        <span class="track-detail">\n          <span>${null!==a.track?a.track.name:"Unknown"}</span>\n          <span class="artist">${null!==a.track?a.track.artists[0].name:"Unknown"}</span>\n        </span>\n      </span>\n      <span class="playlist__album-name">${null!==a.track?a.track.album.name:"Unknown"}</span>\n      <span class="playlist-plays">${f(null!==a.track?a.track.duration_ms:0,!0)}</span>\n    </div>\n    `)).join("")}\n  </div>\n  `;document.getElementById("content").innerHTML=c,await(a=>{const t=document.getElementById("canvas"),n=document.getElementById("main-container__playlist"),e=document.getElementById("header"),s=t.getContext("2d"),i=new Image;i.setAttribute("crossOrigin","anonymous"),i.setAttribute("src",a),i.addEventListener("load",(()=>{s.clearRect(0,0,t.width,t.height),s.drawImage(i,0,0,t.width,t.height);let a=$(s);n.style.background=`linear-gradient(180deg, rgba(${a[0]},${a[1]},${a[2]},1) 0%, rgba(0,0,0,1) 100%)`,e.style.background=`rgb(${a[0]},${a[1]},${a[2]})`}))})(s)},T=a.p+"assets/img/518e33f1da38dafd28022bf0e8696511.svg",B=a.p+"assets/img/333d4e34dfe11f5979e8046aceb4329d.svg",I=a.p+"assets/img/c5856b456ddeefbbd05e73ea6ac81b31.svg",E=a.p+"assets/img/7f11ec9b117a496b47768c666ece7f11.svg",L=a.p+"assets/img/b1b50bf39b30724fb45a2ab0d95626f0.svg",M=a.p+"assets/img/8bf63a4d31bd5cf723239434a605499a.svg",S=a.p+"assets/img/dd55c29823e0a7e8839db81a3bf7ba7b.svg",A=a.p+"assets/img/efa9a5a0ec7e312d55b52bb8528ba65c.svg",z=a.p+"assets/img/1985511d55355369872ba3d6cbb5e29f.svg",U=a.p+"assets/img/19f3c23b1705dd88d667771dad021197.svg",j=(a,t)=>Math.floor(Math.random()*(t-a))+a,x={"/spuntify":u,"/:home":u,"/:id":k,"/contact":"Contact","/:pages":u},G=async()=>{const a=document.getElementById("header"),t=document.getElementById("nav-right"),n=document.getElementById("nav-right__top-list"),e=document.getElementById("content");e.innerHTML="";const s=document.getElementById("player");null!==n&&n.hasChildNodes()||(a.innerHTML=await(`\n  <a href="javascript: history.go(-1)" class="header__arrow-back">\n    <img src="${p}" alt="arrow" width="16" height="16">\n  </a>\n  <div class="header__avatar">\n    <img width="28" height="28" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10203764242125371&height=300&width=300&ext=1620131731&hash=AeTKkPhZ3vUCxI9Kw-k" alt="avatar">\n  </div>\n  `),t.innerHTML=await g(),s.innerHTML=await(async()=>{let a=await(async()=>{let a;a=await o(j(0,19)),a=a[1];let t=a[j(0,a.length-1)].id,n=await d(t);return n=n[0].track,[null===n?"Unknown":n.name,null===n?b:n.album.images[2].url,null===n?"Unknown":n.artists[0].name]})();return`\n    <div id="install-app">\n      <img src="${T}" alt="download" width="24" height="24">\n      <a href="/">Install App</a>\n    </div>\n    <div class="player-control">\n      <div class="player__song">\n        <div class="player__song-actual">\n          <img src="${a[1]}" width="64" height="64" alt="cover">\n        </div>\n        <div class="player__song-tittle">\n          <h4>${a[0]}</h4>\n          <p>${a[2]}</p>\n        </div>\n        <img class="heart__actual-song"src="${l}" alt="heart" width="16" height="16">\n        <img src="${B}" alt="max" width="16" height="16">\n      </div>\n      <div class="player__controls-1">\n        <div class="controls">\n          <img src="${E}" width="16" height="16">\n          <img src="${I}" width="16" height="16">\n          <div class="play">\n            <img src="${w}" width="16" height="16">\n          </div>\n          <img class="next" src="${I}" width="16" height="16">\n          <img src="${L}" width="16" height="16">\n        </div>\n        <div class="progress-bar">\n          <p>0:30</p>\n          <div class="bar-1">\n            <div class="bar-2"></div>\n          </div>\n        </div>\n      </div>\n      <div class="player__controls-2">\n        <img src="${S}" alt="icon" width="16" height="16">\n        <img src="${A}" alt="icon" width="16" height="16">\n        <img src="${z}" alt="icon" width="16" height="16">\n        <img src="${U}" alt="icon" width="16" height="16">\n        <div class="bar-1">\n          <div class="bar-2"></div>\n        </div>\n        <img src="${M}" alt="icon" width="16" height="16">\n      </div>\n    </div>\n  `})());let i=y();console.log(i),a.style.background="#1F1F1F";let c=await(a=>{if("about"!=a){if("/"===a)return a;if(a.includes("home"))return"/:home";if(a.length<=23)return"/:id";if(a.includes("page"))return"/:pages"}return console.log("se fue por route: "+a),`/${a}`})(i);console.log(c);let r=x[c]?x[c]:u;x[c]===k?await r():e.innerHTML=await r()};window.addEventListener("load",G),window.addEventListener("hashchange",G),window.onbeforeunload=function(){localStorage.removeItem("playList")}})();