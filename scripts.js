(function () {
    var CharacterPos = 0;
    var MsgBuffer = "";
    var TypeDelay = 100; 
    var NxtMsgDelay = 3000;
    var MsgIndex = 0;
    var delay;
    var MsgArray = ["Full-Stack Developer","Web Designer", "Mobile App Developer", "Avid Baker"];
 
    function StartTyping() {
       var id = document.getElementById("typing-text");
       if (CharacterPos != MsgArray[MsgIndex].length) {
          MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
          id.value = MsgBuffer+"_";
          delay = TypeDelay;
          id.scrollTop = id.scrollHeight; 
       } else {
          delay = NxtMsgDelay;
          MsgBuffer   = "";
          CharacterPos = -1;
          if (MsgIndex!=MsgArray.length-1){
            MsgIndex++;
          }else {
            MsgIndex = 0;
          }
        }
        CharacterPos++;
        setTimeout(StartTyping,delay);
    }
 StartTyping();
 })();