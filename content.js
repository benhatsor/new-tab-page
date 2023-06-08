
// add absolute URL to links

const links = document.querySelector('link');

links.forEach(link => {
  
  link.href = chrome.runtime.getURL(link.href);
  
});

