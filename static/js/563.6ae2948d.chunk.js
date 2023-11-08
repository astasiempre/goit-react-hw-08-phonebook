"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[563],{7563:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,o,i,c,a,s,u,l,d,f,x,m,p=r(168),b=r(6487),h=b.ZP.li(t||(t=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  border: 1px solid #ccc;\n  margin: 5px 0;\n  \n"]))),g=b.ZP.button(o||(o=(0,p.Z)(["\n  background-color: #ff4f4f;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #d83535;\n  }\n"]))),j=r(184),Z=function(n){var e=n.id,r=n.contact,t=n.number,o=n.onDeleteContact;return(0,j.jsxs)(h,{children:[r,": ",t,(0,j.jsx)(g,{onClick:function(){return o(e)},children:"Delete"})]})},y=b.ZP.ul(i||(i=(0,p.Z)(["\n  padding: 10px;\n  margin: 0 auto;\n  width: 400px;\n  \n"]))),v=b.ZP.h2(c||(c=(0,p.Z)(["\n  margin: 0;\n  text-align: center;\n"]))),k=function(n){var e=n.contacts,r=n.filterTerm,t=n.onDeleteContact;if(e&&Array.isArray(e)){var o=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{children:"Contacts"}),(0,j.jsx)(y,{children:Array.isArray(o)&&o.map((function(n){return(0,j.jsx)(Z,{contact:n.name,number:n.number,onDeleteContact:t,id:n.id},n.id)}))})]})}},C=b.ZP.div(a||(a=(0,p.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n"]))),w=b.ZP.label(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),P=b.ZP.input(u||(u=(0,p.Z)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 200px;\n"]))),T=function(n){var e=n.filterTerm,r=n.onFilterChange;return(0,j.jsx)(C,{children:(0,j.jsxs)(w,{children:[(0,j.jsx)("span",{children:"Filter contacts by name:"}),(0,j.jsx)(P,{onChange:function(n){return r(n.target.value)},value:e,type:"text"})]})})},F=r(2995),A=r(2791),D=r(1134),L=r(9434),S=r(6338),q=function(n){return n.phonebook.contacts},_=function(n){return n.phonebook.isLoading},I=function(n){return n.phonebook.error},N=function(n){return n.phonebook.filterTerm},K=r(1413),z=b.ZP.form(l||(l=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),E=b.ZP.label(d||(d=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),G=b.ZP.span(f||(f=(0,p.Z)(["\n  font-weight: bold;\n  margin-bottom: 5px;\n"]))),B=b.ZP.input(x||(x=(0,p.Z)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n"]))),H=b.ZP.button(m||(m=(0,p.Z)(["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),J=function(n){var e=n.onSubmit,r=(0,D.cI)(),t=r.register,o=r.handleSubmit,i=r.formState.errors,c=r.reset;return(0,j.jsxs)(z,{onSubmit:o((function(n){e(n),c()})),children:[(0,j.jsxs)(E,{children:[(0,j.jsx)(G,{children:"Name:"}),(0,j.jsx)(B,(0,K.Z)((0,K.Z)({},t("name",{required:!0})),{},{type:"text"})),i.name&&(0,j.jsx)("span",{children:"This field is required"})]}),(0,j.jsxs)(E,{children:[(0,j.jsx)(G,{children:"Number:"}),(0,j.jsx)(B,(0,K.Z)((0,K.Z)({},t("number",{required:!0})),{},{type:"text"})),i.number&&(0,j.jsx)("span",{children:"This field is required"})]}),(0,j.jsx)(H,{type:"submit",children:"Add contact"})]})},M=function(n){var e=n.message;return(0,j.jsx)("p",{className:"error",children:e})},O=function(){var n=(0,L.I0)(),e=(0,L.v9)(q),r=(0,L.v9)(_),t=(0,L.v9)(I),o=(0,L.v9)(N),i=(0,D.cI)().reset;(0,A.useEffect)((function(){n((0,S.yF)())}),[n]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(J,{onSubmit:function(r){e.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts")):(n((0,S.uK)(r)),i())}}),r&&(0,j.jsx)(F.Z,{}),t&&(0,j.jsx)(M,{message:t}),(0,j.jsx)(T,{filterTerm:o,onFilterChange:function(e){n((0,S.ch)(e))}}),(0,j.jsx)(k,{contacts:e,filterTerm:o,onDeleteContact:function(e){n((0,S.GK)(e))}})]})}}}]);
//# sourceMappingURL=563.6ae2948d.chunk.js.map