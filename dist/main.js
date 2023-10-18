(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){return{name:e,list:[],active:!1}}function n(e,d){for(;projects.firstChild;)projects.removeChild(projects.lastChild);e.forEach((l=>{let c=document.createElement("div");c.setAttribute("class","project");let a=document.createElement("h3");a.textContent=l.name,a.className="project-name",a.addEventListener("click",(()=>{r(l)}));let i=document.createElement("button");i.innerHTML="X",i.className="remove_button",i.addEventListener("click",(()=>{!function(e,n){if(1==e.length)return e.splice(e.indexOf(n),1),void r(t("Default"));if(1==n.active){if(null==e[e.indexOf(n)-1])return r(e[e.indexOf(n)+1]),void e.splice(e.indexOf(n),1);r(e[e.indexOf(n)-1])}e.splice(e.indexOf(n),1)}(e,l),n(e,d)})),1==l.active&&(c.className="project active"),c.appendChild(a),c.appendChild(i),projects.appendChild(c)})),projects.appendChild(d)}function d(e,t,n){for(;content.firstChild;)content.removeChild(content.lastChild);if("Default"!=e){let t=document.createElement("h1");t.className="project-header",t.textContent=e,content.appendChild(t)}t.forEach((l=>{let c=document.createElement("div");c.setAttribute("class","todo");let a=document.createElement("h3");a.textContent=l.title,a.className="todo-title";let i=document.createElement("p");i.textContent=l.description,i.className="todo-description";let o=document.createElement("input");o.setAttribute("type","datetime-local"),o.className="todo-duedate",o.value=l.dueDate,o.addEventListener("input",(()=>{l.dueDate=o.value,d(e,t,n)}));let p=document.createElement("input");p.type="checkbox",p.className="complete_button",p.addEventListener("change",(c=>{0==l.completed?(l.completed=!0,d(e,t,n)):1==l.completed&&(l.completed=!1,d(e,t,n))}));let r=document.createElement("button");r.innerHTML="X",r.className="remove_button",r.addEventListener("click",(()=>{!function(e,t){e.splice(e.indexOf(t),1)}(t,l),d(e,t,n)})),c.appendChild(a),c.appendChild(i),c.appendChild(o),c.appendChild(p),c.appendChild(r),l.completed&&(p.checked=!0,c.className="todo completed"),content.appendChild(c)})),content.appendChild(n)}e.d({},{Y:()=>r});let l=[];const c=document.getElementById("add-todo"),a=document.getElementById("add-project"),i=document.getElementById("projects"),o=document.getElementById("content");let p=t("Default");function r(e){p=e,l.forEach((e=>{e.active=!1})),p.active=!0,n(l,a),d(p.name,p.list,c)}a.addEventListener("click",(()=>{!function(){let e=document.createElement("form"),n=document.createElement("input");n.className="name",n.required=!0;let d=document.createElement("button");d.type="submit",d.className="submit",d.innerHTML="Add";let c=document.createElement("button");c.type="button",c.className="cancel",c.innerHTML="Cancel",e.appendChild(n),e.appendChild(d),e.appendChild(c),i.appendChild(e),e.addEventListener("submit",(e=>{let d=t(n.value);l.push(d),r(d),e.preventDefault()})),c.addEventListener("click",(()=>{i.removeChild(e),i.appendChild(a)}))}(),i.removeChild(a)})),c.addEventListener("click",(()=>{!function(){let e=document.createElement("form"),t=document.createElement("input");t.className="title",t.placeholder="Title",t.required=!0;let n=document.createElement("input");n.className="description",n.placeholder="Description";let l=document.createElement("button");l.type="submit",l.className="submit",l.innerHTML="Add";let a=document.createElement("button");a.type="button",a.className="cancel",a.innerHTML="Cancel",e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(a),o.appendChild(e),e.addEventListener("submit",(e=>{let l={title:t.value,description:n.value,dueDate:"duedate",completed:!1};p.list.push(l),d(p.name,p.list,c),e.preventDefault()})),a.addEventListener("click",(()=>{o.removeChild(e),o.appendChild(c)}))}(),o.removeChild(c)}))})();