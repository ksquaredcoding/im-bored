import{_ as v,T as g,v as y,e as f,x as m,m as n,U as l,y as c,P as r,o as u,c as p,a as e,V as _,W as b,X as h,p as G,d as P}from"./index.ff3081a8.js";const w={props:{boardGameOnHomePage:{type:g}},setup(t){const o=y(),i=f("favorite");return{routeHome:m(()=>o.name=="Home"),editable:i,boardGame:m(()=>n.activeBoardGame),async handleSubmit(){try{if(!n.account.id)return l.loginWithPopup();let a={gameId:this.boardGame.id,name:this.boardGame.name,imgUrl:this.boardGame.coverImg,rating:this.boardGame.average_user_rating,players:this.boardGame.players,categories:this.boardGame.categories,players:this.boardGame.players,playTime:this.boardGame.playtime,type:i.value};await c.addGameToList(a),r.success(`You Added ${this.boardGame.name} to ${i.value} list!`)}catch{r.error("You already have This One Added to This List!")}},async handleSubmitOnHomePage(){try{if(!n.account.id)return l.loginWithPopup();let a={gameId:t.boardGameOnHomePage.id,name:t.boardGameOnHomePage.name,imgUrl:t.boardGameOnHomePage.largeImage,rating:t.boardGameOnHomePage.average_user_rating,players:t.boardGameOnHomePage.players,playTime:t.boardGameOnHomePage.playtime,type:i.value};await c.addGameToList(a),r.success(`You Added ${t.boardGameOnHomePage.name} to ${i.value} list!`)}catch{r.error(`You already have ${this.boardGame.name} on ${i.value}!`)}}}}},s=t=>(G("data-v-d1a69147"),t=t(),P(),t),H={key:0,class:"component"},O=s(()=>e("option",{value:"favorite"},"Favorite",-1)),S=s(()=>e("option",{value:"owned"},"Owned",-1)),x=s(()=>e("option",{value:"wish"},"Wish",-1)),A=[O,S,x],T=s(()=>e("div",{class:"text-center"},[e("button",{class:"btn button-51 mt-2",type:"submit"},"Add!")],-1)),I={key:1,class:"component"},D={class:"dropDown",height:"30",width:"30"},k=s(()=>e("option",{value:"favorite"},"Favorite",-1)),B=s(()=>e("option",{value:"owned"},"Owned",-1)),L=s(()=>e("option",{value:"wish"},"Wish",-1)),U=[k,B,L],W=s(()=>e("div",{class:"ms-2"},[e("button",{class:"btn p-0 px-1 bg-c6 mt-1 add",type:"submit"},[e("i",{class:"fs-5 add mdi mdi-plus text-dark"})])],-1));function $(t,o,i,a,V,Y){return a.routeHome?(u(),p("div",I,[e("form",{onSubmit:o[3]||(o[3]=h(d=>a.handleSubmitOnHomePage(),["prevent"])),class:"d-flex justify-content-center align-items-center"},[e("div",D,[_(e("select",{"onUpdate:modelValue":o[2]||(o[2]=d=>a.editable=d),class:"form-select","aria-label":"Default select example"},U,512),[[b,a.editable]])]),W],32)])):(u(),p("div",H,[e("form",{onSubmit:o[1]||(o[1]=h(d=>a.handleSubmit(),["prevent"]))},[_(e("select",{"onUpdate:modelValue":o[0]||(o[0]=d=>a.editable=d),class:"form-select border-secondary bg-c1","aria-label":"Default select example"},A,512),[[b,a.editable]]),T],32)]))}const M=v(w,[["render",$],["__scopeId","data-v-d1a69147"]]);export{M as A};