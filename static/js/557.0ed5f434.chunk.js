"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[557],{2557:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(3050),a=t(9439),o=t(2791),c="ContactForm_form__dhl+T",i="ContactForm_formField__O5fo+",s="ContactForm_formLabel__TSwxK",l="ContactForm_formButton__TN6Jq",u=t(4420),d=t(826),m=t(3553),p=function(e){return e.filter},f=function(e){return e.contacts.items},h=function(e){return e.contacts.error},v=function(e){return e.contacts.isLoading},x=(0,m.P1)([f,p],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),b=t(184),y=function(){var e=(0,u.I0)(),n=(0,u.v9)(f),t=(0,o.useState)(""),r=(0,a.Z)(t,2),m=r[0],p=r[1],h=(0,o.useState)(""),v=(0,a.Z)(h,2),x=v[0],y=v[1];return(0,b.jsxs)("form",{className:c,onSubmit:function(t){(t.preventDefault(),""!==m.trim()&&""!==x.trim())&&(n.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}))?alert("".concat(m," is already in contacts!")):(e((0,d.uK)({name:m,number:x})),p(""),y("")))},children:[(0,b.jsxs)("label",{className:i,children:[(0,b.jsx)("p",{className:s,children:"Name"}),(0,b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:m,onChange:function(e){p(e.target.value)}})]}),(0,b.jsxs)("label",{className:i,children:[(0,b.jsx)("p",{className:s,children:"Number"}),(0,b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,onChange:function(e){y(e.target.value)}})]}),(0,b.jsx)("button",{className:l,type:"submit",children:"Add Contact"})]})},j="Filter_container__L5eml",g="Filter_input__N7T3z",_=t(1634),C=function(){var e=(0,u.I0)(),n=(0,u.v9)(p);return(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)("p",{children:"Find Contacts by Name"}),(0,b.jsx)("input",{className:g,type:"text",name:"filter",placeholder:"Search by name",value:n,onChange:function(n){e((0,_.T)(n.target.value))}})]})},w="ContactListItem_contactListItem__21QwY",N=function(e){var n=e.filteredContact,t=(0,u.I0)();return(0,b.jsxs)("li",{className:w,children:[(0,b.jsxs)("p",{children:[n.name,":"]}),(0,b.jsx)("p",{children:n.number}),(0,b.jsx)("button",{onClick:function(){t((0,d.GK)(n.id))},children:"Delete"})]})},O={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function k(e){var n=function(e){if("number"===typeof e)return{value:e,unit:"px"};var n,t=(e.match(/^[0-9.]*/)||"").toString();n=t.includes(".")?parseFloat(t):parseInt(t,10);var r=(e.match(/[^0-9]*$/)||"").toString();return O[r]?{value:n,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}(e);return"".concat(n.value).concat(n.unit)}var F=function(){return F=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},F.apply(this,arguments)},S=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},L=function(e,n,t){var r="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,c="\n    @keyframes ".concat(r," {\n      ").concat(n,"\n    }\n  ");return o&&o.insertRule(c,0),r}("SyncLoader","33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}","sync");var P=function(e){var n=e.loading,t=void 0===n||n,r=e.color,a=void 0===r?"#000000":r,c=e.speedMultiplier,i=void 0===c?1:c,s=e.cssOverride,l=void 0===s?{}:s,u=e.size,d=void 0===u?15:u,m=e.margin,p=void 0===m?2:m,f=S(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),h=F({display:"inherit"},l),v=function(e){return{backgroundColor:a,width:k(d),height:k(d),margin:k(p),borderRadius:"100%",display:"inline-block",animation:"".concat(L," ").concat(.6/i,"s ").concat(.07*e,"s infinite ease-in-out"),animationFillMode:"both"}};return t?o.createElement("span",F({style:h},f),o.createElement("span",{style:v(1)}),o.createElement("span",{style:v(2)}),o.createElement("span",{style:v(3)})):null},I=function(){return(0,b.jsx)(P,{color:"#36d7b7"})},z=function(){var e=(0,u.v9)(x),n=(0,u.v9)(h),t=(0,u.v9)(v),r=(0,u.I0)();return(0,o.useEffect)((function(){r((0,d.yF)())}),[r]),(0,b.jsxs)("ul",{children:[t&&!n&&(0,b.jsx)(I,{}),!t&&!n&&0===e.length&&(0,b.jsx)("p",{children:"Phonebook is empty. Please add a contact"}),!t&&!n&&e.length>0&&e.map((function(e){return(0,b.jsx)(N,{filteredContact:e},e.id)}))]})},E=function(){return(0,b.jsxs)(r.B6,{children:[(0,b.jsx)(r.ql,{children:(0,b.jsx)("title",{children:"Phonebook"})}),(0,b.jsx)(y,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(C,{}),(0,b.jsx)(z,{})]})}}}]);
//# sourceMappingURL=557.0ed5f434.chunk.js.map