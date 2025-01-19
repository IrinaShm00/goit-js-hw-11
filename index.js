import{S as d,i}from"./assets/vendor-BrddEoy-.js";/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const m="47542274-6332373665e9da78801fe67b7",u="https://pixabay.com/api/";async function p(s,t=1,n=12){const r=`${u}?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`;try{const e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error("Error fetching images:",e.message),e}}function g(s,t){if(t.innerHTML="",s.hits.length===0){iziToast.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=s.hits.map(r=>`
      <div class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" />
        </a>
        <div class="image-info">
        <p><strong>Tags:</strong> ${r.tags}</p>
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </div>
    `).join("");t.insertAdjacentHTML("beforeend",n),setTimeout(()=>{lightbox.refresh()},0)}const h=new d(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.getElementById("search-form"),l=document.getElementById("gallery"),f=document.getElementById("loader");function y(){f.style.display="block"}function w(){f.style.display="none"}async function L(s){try{y();const t=await p(s);return console.log("API Response:",t),t}catch(t){throw console.error("Error fetching images:",t),t}finally{w()}}c.addEventListener("submit",async s=>{s.preventDefault(),console.log("Form submitted");const t=c.elements.query.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search term."});return}l.innerHTML="";try{const n=await L(t);g(n,l),h.refresh()}catch(n){console.log(n),i.error({title:"Error",message:"Failed to fetch images."})}});
//# sourceMappingURL=index.js.map
