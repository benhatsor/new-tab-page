
// add absolute URL to links

const links = document.querySelectorAll('link');

links.forEach(link => {
  
  const url = chrome.runtime.getURL(link.href);
  
  link.href = url;
  
});

