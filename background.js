// Example background script for DataWatchDog extension

// Event listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
    console.log('DataWatchDog extension installed or updated');
    // Perform any necessary tasks upon installation or update
  });
  
  // Event listener for browser action clicks
  chrome.browserAction.onClicked.addListener((tab) => {
    console.log('Browser action clicked');
    // Open the extension popup or perform other actions when the extension icon is clicked
  });
  
  // Event listener for web requests
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      console.log('Web request intercepted:', details.url);
      // Perform actions based on intercepted web requests
    },
    { urls: ['<all_urls>'] }, // Specify which URLs to intercept
    ['blocking'] // Specify that this listener should run asynchronously and may block the request
  );
  