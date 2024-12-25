import{d as g,a as D,c as f,o as d,b as u,e,t as _,n as y,r as N,f as v,g as w,w as C,v as k,h as $,i as b,j as x,k as S,l as F,m as T,F as L,p as M,u as B,q as R}from"./index-CvTqo6f8.js";import{v as V,S as q}from"./SideMenu-BowcUQny.js";const I=g("DishStore",{state:()=>({list:[{id:"7d9f3f17-964a-4e82-98e5-ecbba4d709a1",name:"Ghost Pepper Poppers",status:"Want to Try"},{id:"5c986b74-fa02-4a22-98f2-b1ff3559e85e",name:"A Little More Chowder Now",status:"Recommended"},{id:"c113411d-1589-414f-a283-daf7eedb631e",name:"Full Laptop Battery",status:"Do Not Recommend"}]}),getters:{numberOfDishes:n=>n.list.length},actions:{addDish(n){this.list.push(n)},deleteDish(n){this.list=this.list.filter(i=>i.id!==n.id)}}}),P={class:"box"},W={class:"media"},j={class:"media-content"},A={class:"title is-4 is-spaced mb-1"},E={class:"subtitle mb-2"},K=D({__name:"DishCard",props:{dish:{}},emits:["delete-dish"],setup(n,{emit:i}){const a=n,h=i,m=f(()=>{switch(a.dish.status){case"Want to Try":return"is-warning";case"Recommended":return"is-success";case"Do Not Recommend":return"is-danger";default:return""}}),c=()=>{h("delete-dish",a.dish)};return(r,s)=>(d(),u("article",P,[e("div",W,[s[0]||(s[0]=e("aside",{class:"media-left"},[e("img",{src:"https://placehold.jp/150x150.png",alt:""})],-1)),e("div",j,[e("p",A,_(r.dish.name),1),e("p",E,[e("span",{class:y(["tag",m.value])},_(r.dish.status),3)]),e("div",null,[e("button",{onClick:c,class:"button is-small is-danger is-light"},"Delete")])])])]))}}),O={class:"field"},z={class:"field"},G={class:"control"},H=D({__name:"NewDishForm",emits:["add-new-dish","cancel-new-dish"],setup(n,{emit:i}){const a=i,h=()=>a("add-new-dish",c),m=()=>a("cancel-new-dish"),c=N({id:V(),name:"",status:"Want to Try",diet:""}),r=v(null);return w(()=>{var s;(s=r.value)==null||s.focus()}),(s,o)=>(d(),u("form",{onSubmit:o[1]||(o[1]=$(()=>{},["prevent"]))},[e("div",O,[e("div",z,[o[2]||(o[2]=e("label",{for:"name",class:"label"},"Name",-1)),e("div",G,[C(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>c.name=t),type:"text",class:"input is-large",placeholder:"Mystery Flavored Shrimp",required:"",ref_key:"elNameInput",ref:r},null,512),[[k,c.name]])])]),e("div",{class:"field"},[e("div",{class:"buttons"},[e("button",{onClick:h,class:"button is-success"},"Create"),e("button",{onClick:m,class:"button is-light"},"Cancel")])])])],32))}}),U={class:"section"},J={class:"columns"},Q={class:"column"},X={key:0,class:"level"},Y={class:"level-left"},Z={class:"level-item"},ee={class:"subtitle is-5"},se={class:"level-item"},te={class:"level-item is-hidden-tablet-only"},ie={class:"field has-addons"},ne={class:"control"},oe={key:2,class:"columns is-multiline"},de=D({__name:"DishesPage",setup(n){const i=I(),a=v(""),h=t=>{t.target instanceof HTMLInputElement&&(a.value=t.target.value)},m=f(()=>i.list.filter(t=>t.name?t.name.toLowerCase().includes(a.value.toLowerCase()):i.list)),c=f(()=>m.value.length),r=t=>{i.addDish(t),o()},s=v(!1),o=()=>{s.value=!1};return w(()=>{B().query.new&&(s.value=!0)}),(t,l)=>(d(),u("main",U,[e("div",J,[b(q),e("div",Q,[l[3]||(l[3]=e("h1",{class:"title"},"Dishes",-1)),s.value?F("",!0):(d(),u("nav",X,[e("div",Y,[e("div",Z,[e("p",ee,[e("strong",null,_(c.value),1),l[1]||(l[1]=x(" dishes "))])]),e("p",se,[e("button",{onClick:l[0]||(l[0]=p=>s.value=!0),class:"button is-success"},"New")]),e("div",te,[e("div",ie,[e("p",ne,[e("input",{class:"input",type:"text",placeholder:"Dish name",onKeyup:S(h,["enter"])},null,32)]),l[2]||(l[2]=e("p",{class:"control"},[e("button",{class:"button"},"Search")],-1))])])])])),s.value?(d(),T(H,{key:1,onAddNewDish:r,onCancelNewDish:o})):(d(),u("div",oe,[(d(!0),u(L,null,M(m.value,p=>(d(),u("div",{class:"column is-full",key:`item-${p}`},[b(K,{dish:p,onDeleteDish:R(i).deleteDish},null,8,["dish","onDeleteDish"])]))),128))]))])])]))}});export{de as default};
