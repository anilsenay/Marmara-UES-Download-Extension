var videoWrapper = document.getElementsByClassName("video-wrapper");
var stop = false;

setInterval(() => {
  if (!stop){
    if(videoWrapper[1] && videoWrapper[1].id && flowplayer){
      var videoID = "#" + videoWrapper[1].id;
      var video = [];
      while(video.length === 0 && flowplayer(videoID)){
        var video = flowplayer(videoID);
        if(video) stop = true;
      }
      video.load();

      var videoEng = document.getElementsByClassName("fp-engine");
      var link = videoEng[0].src;

      console.log(link);
      var node = document.createElement("a");
      var textnode = document.createTextNode("Download Video");

      node.appendChild(textnode);
      node.href=link
      node.style.backgroundColor="red"
      node.style.padding="10px"
      node.style.color="white"
      node.style.fontSize="16px"
      node.style.fontWeight="bold"
      node.style.borderRadius="10px"
      document.getElementsByClassName("page-title")[0].appendChild(node);
    }
  }
}, 1000);
