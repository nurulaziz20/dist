import{_ as a,m as l,o as r,c,a as t,w as p,v as n,x as i}from"./index.eed92407.js";import{d as u}from"./todo.c2c9474d.js";const m={data:()=>({input:{name:"nama anda",category:"pending",description:"On Going"}}),methods:{...l(u,["addlist"]),async addTodo(){try{await this.addlist({...this.input}),this.$router.replace({name:"Todo"}),console.log(this.input)}catch(o){console.error(o),console.log(this.input)}}}},_={class:"py-4 px-3 container-fluid"},h={class:"row"},b={class:"col-12 position-absolute end-0 me-1"},f={class:"container rounded-3"},v=t("h1",{class:"py-4 text-center"},"Add ToDo",-1),y={class:"mb-3"},g=t("label",null,"Nama:",-1),T={class:"mb-3"},w=t("label",null,"Deskripsi:",-1),x={class:"mb-3"},D=t("label",null,"Keterangan:",-1),A=t("button",{class:"btn btn-success me-3",type:"submit"},"Submit",-1);function V(o,s,$,k,B,d){return r(),c("div",_,[t("div",h,[t("div",b,[t("div",f,[v,t("form",{onSubmit:s[3]||(s[3]=p((...e)=>d.addTodo&&d.addTodo(...e),["prevent"]))},[t("div",y,[g,n(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>o.input.name=e)},null,512),[[i,o.input.name]])]),t("div",T,[w,n(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>o.input.description=e)},null,512),[[i,o.input.description]])]),t("div",x,[D,n(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[2]||(s[2]=e=>o.input.category=e)},null,512),[[i,o.input.category]])]),A],32)])])])])}const N=a(m,[["render",V]]);export{N as default};
