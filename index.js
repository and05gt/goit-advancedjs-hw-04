import{a as v,S as w,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",q="45098257-09112d803d024f473cdacef7f";async function u(t,o=1){const i={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await v.get(P,{params:i})).data}const m=document.querySelector(".gallery"),c=document.querySelector(".loader"),f=document.querySelector(".load-more-btn"),k=new w("gallery a",{captionsData:"alt",captionDelay:250});function h(t){const o=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:C,downloads:S})=>`
    <li class="gallery-item">
      <a class="gallery-link" href=${a}>
        <img
          class="gallery-image"
          src=${i}
          alt=${e}
        />
        <ul class="info">
          <li class="info-item">
            <h3>Likes</h3>
            <p>${r}</p>
          </li>
          <li class="info-item">
            <h3>Views</h3>
            <p>${s}</p>
          </li>
          <li class="info-item">
            <h3>Comments</h3>
            <p>${C}</p>
          </li>
          <li class="info-item">
            <h3>Downloads</h3>
            <p>${S}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");m.insertAdjacentHTML("beforeend",o),k.refresh()}function E(){m.innerHTML=""}function g(){c&&c.classList.add("loader-active")}function p(){c&&c.classList.remove("loader-active")}function y(){f&&f.classList.remove("hidden")}function L(){f&&f.classList.add("hidden")}const $=document.querySelector(".form"),M=document.querySelector(".load-more-btn");$.addEventListener("submit",B);M.addEventListener("click",R);let d="",l=1;const b=15;async function B(t){t.preventDefault();const o=t.currentTarget,i=o.elements["search-text"].value.trim();if(i==="")return n.warning({title:"Warning",titleColor:"#fff",message:"Please enter a search query!",position:"topRight",backgroundColor:"#ffa000",messageColor:"#fff",theme:"dark"});d=i,l=1,E(),L(),g();try{const a=await u(d,l);if(a.hits.length===0)return n.error({title:"Error",titleColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",theme:"dark"});h(a.hits),a.totalHits>b&&y()}catch(a){return n.error({title:"Error",titleColor:"#fff",message:`${a}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",theme:"dark"})}finally{p(),o.reset()}}async function R(){l+=1,L(),g();try{const t=await u(d,l);h(t.hits),O();const o=Math.ceil(t.totalHits/b);l>=o?n.info({title:"Info",titleColor:"#fff",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#0099ff",messageColor:"#fff",theme:"dark"}):y()}catch(t){return n.error({title:"Error",titleColor:"#fff",message:`${t}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",theme:"dark"})}finally{p()}}function O(){const t=document.querySelector(".gallery-item");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
