
// add absolute URL to links

const links = document.querySelectorAll('link');

const base = chrome.runtime.getURL('/'); 

links.forEach(link => {
  
  const url = link.href;
  
  link.href = url;
  
});

