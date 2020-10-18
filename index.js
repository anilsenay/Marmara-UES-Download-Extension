
var scriptTag = document.createElement("script");
scriptTag.type = "text/javascript";
scriptTag.src = browser.extension.getURL("ues-download.js");
(document.getElementsByTagName("head")[0] || document.documentElement ).appendChild(scriptTag);
