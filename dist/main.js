(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){return{name:e,list:[],active:!1}}function n(e,d){for(;projects.firstChild;)projects.removeChild(projects.lastChild);e.forEach((l=>{let i=document.createElement("div");i.setAttribute("class","project");let c=document.createElement("h3");c.textContent=l.name,c.className="project-name",c.addEventListener("click",(()=>{p(l)}));let a=document.createElement("button");a.innerHTML="X",a.className="remove_button",a.addEventListener("click",(()=>{!function(e,n){if(1==e.length)return e.splice(e.indexOf(n),1),void p(t("Default"));if(1==n.active){if(null==e[e.indexOf(n)-1])return p(e[e.indexOf(n)+1]),void e.splice(e.indexOf(n),1);p(e[e.indexOf(n)-1])}e.splice(e.indexOf(n),1)}(e,l),n(e,d)})),1==l.active&&(i.className="project active"),i.appendChild(c),i.appendChild(a),projects.appendChild(i)})),projects.appendChild(d)}function d(e,t){for(;content.firstChild;)content.removeChild(content.lastChild);e.forEach((n=>{let l=document.createElement("div");l.setAttribute("class","todo");let i=document.createElement("h3");i.textContent=n.title,i.className="todo-title";let c=document.createElement("p");c.textContent=n.description,c.className="todo-description";let a=document.createElement("input");a.setAttribute("type","datetime-local"),a.className="todo-duedate";let o=document.createElement("button");o.innerHTML="X",o.className="remove_button",o.addEventListener("click",(()=>{!function(e,t){e.splice(e.indexOf(t),1)}(e,n),d(e,t)})),l.appendChild(i),l.appendChild(c),l.appendChild(a),l.appendChild(o),content.appendChild(l)})),content.appendChild(t)}e.d({},{Y:()=>p});let l=[];const i=document.getElementById("add-todo"),c=document.getElementById("add-project"),a=document.getElementById("projects"),o=document.getElementById("content");let r=t("Default");function p(e){r=e,l.forEach((e=>{e.active=!1})),r.active=!0,n(l,c),d(r.list,i)}c.addEventListener("click",(()=>{!function(){let e=document.createElement("form"),n=document.createElement("input");n.className="name",n.required=!0;let d=document.createElement("button");d.type="submit",d.className="submit",d.innerHTML="Add";let i=document.createElement("button");i.type="button",i.className="cancel",i.innerHTML="Cancel",e.appendChild(n),e.appendChild(d),e.appendChild(i),a.appendChild(e),e.addEventListener("submit",(e=>{let d=t(n.value);l.push(d),p(d),e.preventDefault()})),i.addEventListener("click",(()=>{a.removeChild(e),a.appendChild(c)}))}(),a.removeChild(c)})),i.addEventListener("click",(()=>{!function(){let e=document.createElement("form"),t=document.createElement("input");t.className="title",t.placeholder="Title",t.required=!0;let n=document.createElement("input");n.className="description";let l=document.createElement("button");l.type="submit",l.className="submit",l.innerHTML="Add";let c=document.createElement("button");c.type="button",c.className="cancel",c.innerHTML="Cancel",e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(c),o.appendChild(e),e.addEventListener("submit",(e=>{let l={title:t.value,description:n.value,dueDate:"duedate",priority:"high"};r.list.push(l),d(r.list,i),e.preventDefault()})),c.addEventListener("click",(()=>{o.removeChild(e),o.appendChild(i)}))}(),o.removeChild(i)}))})();