import{S as m,i}from"./assets/vendor-BrddEoy-.js";/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="47542274-6332373665e9da78801fe67b7",p="https://pixabay.com/api/";async function g(o,r=1,s=12){const n=`${p}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${s}`;try{const e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error("Error fetching images:",e.message),e}}function h(o,r,s){if(r.innerHTML="",o.hits.length===0){iziToast.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=o.hits.map(e=>`
      <div class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
        </a>
        <div class="image-info">
        <p><strong>Tags:</strong> ${e.tags}</p>
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </div>
    `).join("");r.insertAdjacentHTML("beforeend",n),setTimeout(()=>{s.refresh()},0)}const c=new m(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.getElementById("search-form"),f=document.getElementById("gallery"),d=document.getElementById("loader");function y(){d.style.display="block"}function w(){d.style.display="none"}async function L(o){try{y();const r=await g(o);return console.log("API Response:",r),r}catch(r){throw console.error("Error fetching images:",r),r}finally{w()}}l.addEventListener("submit",async o=>{o.preventDefault(),console.log("Form submitted");const r=l.elements.query.value.trim();if(!r){i.error({title:"Error",message:"Please enter a search term."});return}f.innerHTML="";try{const s=await L(r);h(s,f,c),c.refresh()}catch(s){console.log(s),i.error({title:"Error",message:"Failed to fetch images."})}});
//# sourceMappingURL=index.js.map
