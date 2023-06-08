
// add absolute URL to links

const links = document.querySelectorAll('link');

links.forEach(link => {
  
  link.href = chrome.runtime.getURL(link.href);
  
});

