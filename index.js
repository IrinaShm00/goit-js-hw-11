import{i as n,S as m}from"./assets/vendor-BrddEoy-.js";/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="47542274-6332373665e9da78801fe67b7",u="https://pixabay.com/api/";async function d(a,r=1,t=12){const s=`${u}?key=${f}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${t}`;try{const e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error("Error fetching images:",e.message),e}}const l=document.getElementById("search-form"),c=document.getElementById("gallery");l.addEventListener("submit",async a=>{a.preventDefault(),console.log("Form submitted");const r=l.elements.query.value.trim();if(!r){n.error({title:"Error",message:"Please enter a search term."});return}c.innerHTML="";try{const t=await d(r);g(t)}catch(t){console.error("Error fetching images:",t),n.error({title:"Error",message:"Failed to fetch images."})}});function g(a){if(c.innerHTML="",a.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}a.hits.forEach(r=>{const t=document.createElement("a");t.href=r.largeImageURL,t.classList.add("gallery-item");const s=document.createElement("img");s.src=r.webformatURL,s.alt=r.tags,s.classList.add("gallery-image"),t.appendChild(s),c.appendChild(t)}),new m(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
