import{a as m,S as d,i as l}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",g="45098257-09112d803d024f473cdacef7f";function p(a){const o={key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:o}).then(t=>t.data).catch(t=>{throw console.error("Error fetching data",t),t})}const c=document.querySelector(".gallery"),n=document.querySelector(".loader"),y=new d("gallery a",{captionsData:"alt",captionDelay:250});function L(a){const o=a.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:f,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href=${i}>
        <img
          class="gallery-image"
          src=${t}
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
            <p>${f}</p>
          </li>
          <li class="info-item">
            <h3>Downloads</h3>
            <p>${u}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){c.innerHTML=""}function C(){n&&n.classList.add("loader-active")}function S(){n&&n.classList.remove("loader-active")}const q=document.querySelector(".form");q.addEventListener("submit",v);function v(a){a.preventDefault();const o=a.currentTarget,t=o.elements["search-text"].value.trim();if(t==="")return l.warning({title:"Warning",titleColor:"#fff",message:"Please enter a search query!",position:"topRight",backgroundColor:"#ffa000",messageColor:"#fff",theme:"dark"});b(),C(),p(t).then(i=>{if(i.hits.length===0)return l.error({title:"Error",titleColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",theme:"dark"});L(i.hits)}).catch(i=>l.error({title:"Error",titleColor:"#fff",message:`${i}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",theme:"dark"})).finally(()=>{S(),o.reset()})}
//# sourceMappingURL=index.js.map
