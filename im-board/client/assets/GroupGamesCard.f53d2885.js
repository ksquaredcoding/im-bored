import{_ as v,B as G,v as f,x as n,m as _,P as p,y,o as a,c as d,a as e,F as L,k,b as h,w as x,j as l,t as m,z as u,n as w,r as I,p as S,d as B}from"./index.50f244e3.js";const C={props:{boardGameList:{type:G,required:!0}},setup(s){const r=f();return{routeGroup:n(()=>r.name=="Group"),route:r,member:n(()=>_.groupMembers),findGame:n(()=>_.bgLists.filter(o=>o.gameId==s.boardGameList.gameId)),account:n(()=>_.account),async removeGameFromList(){try{if(!await p.confirm("remove from this list?"))return;await y.removeGameFromList(s.boardGameList.listId)}catch(t){console.error("[RemoveGame]",t),p.error(t)}}}}},c=s=>(S("data-v-7ddba0c1"),s=s(),B(),s),F=["title"],N={class:"row"},V={class:"col-md-2 ms-1 text-c6 rounded-circle mt-1"},j={key:0,class:"btn-group"},P=c(()=>e("i",{"data-bs-toggle":"dropdown","aria-expanded":"false",class:"mdi mdi-account-details fs-4 dropdown-toggle dropdown-toggle-split bg-grey rounded text-c7"},null,-1)),z={key:0,class:"dropdown-menu"},A={class:"d-flex"},D=["src","alt","title"],R={class:"col-md-7 d-flex justify-content-center ms-2"},T={class:"titlebox rounded-1 text-center px-3 py-1 my-1"},q={class:"namefont"},E={key:0,class:"col-md-2"},M={class:"d-flex justify-content-center"},U={class:"categorybox rounded mx-5 p-2 px-5 mt-2 text-center"},H=c(()=>e("i",{class:"mdi mdi-account-group fs-5",alt:"",title:""},null,-1)),J=c(()=>e("i",{class:"mdi mdi-clock fs-5",alt:"",title:""},null,-1)),K=c(()=>e("i",{class:"mdi mdi-star fs-5 text-c7",alt:"",title:""},null,-1)),O=c(()=>e("b",null,"/",-1)),Q=u(" 5 ");function W(s,r,t,o,X,Y){const g=I("router-link");return a(),d("div",{class:"bg-light pb-2 my-2 mx-3 mx-md-3 noborder bg-img rounded hover",style:w({backgroundImage:`url(${t.boardGameList.imgUrl})`}),title:t.boardGameList.listName},[e("div",N,[e("div",V,[o.routeGroup?(a(),d("div",j,[P,o.findGame?(a(),d("ul",z,[e("div",A,[(a(!0),d(L,null,k(o.findGame,i=>(a(),d("div",{key:i.accountId},[h(g,{to:{name:"Profile",params:{id:i.accountId}}},{default:x(()=>{var b;return[e("img",{src:(b=i.account)==null?void 0:b.picture,alt:i.account.name,title:i.account.name,height:"30",width:"30",class:"rounded-circle box-shadow m-1 profile-img"},null,8,D)]}),_:2},1032,["to"])]))),128))])])):l("",!0)])):l("",!0)]),e("div",R,[e("div",T,[h(g,{class:"text-center text-dark",to:{name:"BoardGameDetails",params:{id:t.boardGameList.gameId}},title:"go to this games detail's page"},{default:x(()=>[e("b",q,m(t.boardGameList.boardGameName),1)]),_:1},8,["to"])])]),o.route.name=="Account"?(a(),d("div",E,[o.account.id==t.boardGameList.accountId?(a(),d("i",{key:0,class:"mdi mdi-close text-danger fs-3 text-end titlebox rounded selectable",title:"remove game from list",onClick:r[0]||(r[0]=i=>o.removeGameFromList())})):l("",!0)])):l("",!0)]),e("div",M,[e("div",U,[e("div",null,[H,u(" "+m(t.boardGameList.players),1)]),e("div",null,[J,u(" "+m(t.boardGameList.playTime)+" mins ",1)]),e("div",null,[K,u(" "+m(t.boardGameList.rating.toFixed(2))+" ",1),O,Q])])])],12,F)}const $=v(C,[["render",W],["__scopeId","data-v-7ddba0c1"]]);export{$ as G};