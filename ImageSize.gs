<script>
window.fncPicSizeDecrease = function(frmData) {
  console.log("picUpload ran: " + frmData);

  var allObjtProperties = '';

  var daPicSize = frmData["size"];
  var picName = frmData["name"];
  //console.log(frmData["name"]);
  
	allObjtProperties = allObjtProperties + "<span>Size: " + daPicSize + "</span>";
 
	document.getElementById('allImgProperties').innerHTML = allObjtProperties;
	document.getElementById('spanSize').innerHTML = "Size: " + daPicSize;
  
	var cnvs=document.getElementById("cnvsForFormat");
	console.log("cnvs: " + cnvs);
    var ctx=cnvs.getContext("2d");

    var img = new Image;
    img.src = URL.createObjectURL(frmData);
	
	console.log('img: ' + img);
	
    img.onload = function() {
	  var picWidth = this.width;
	  var picHeight = this.height;
    
	  var wdthHghtRatio = picHeight/picWidth;
	  console.log('wdthHghtRatio: ' + wdthHghtRatio);
	  
	  if (Number(picWidth) >= 400) {
        var newHeight = Math.round(Number(400) * wdthHghtRatio);
	  } else {
        return false;
	  };

      document.getElementById('cnvsForFormat').height = newHeight;
      console.log('width: 400  h: ' + newHeight);
      //You must change the width and height settings in order to decrease the image size, but
      //it needs to be proportional to the original dimensions.
      console.log('This is BEFORE the DRAW IMAGE');
      ctx.drawImage(img,0,0, 400, newHeight);
	
      console.log('THIS IS AFTER THE DRAW IMAGE!');
	
      //Even if original image is jpeg, getting data out of the canvas will default to png if not specified
      var canvasToDtaUrl = cnvs.toDataURL("image/jpeg");
      //The type and size of the image in this new IMG tag will be JPEG, and possibly much smaller in size
      document.getElementById('imgTwoForJPG').innerHTML = "<img src='" + canvasToDtaUrl + "'><span><-- Size Decreased</span>";
      document.getElementById('aTagToDownloadPic').textContent = "Click Here to Download Resized Image";
      document.getElementById('aTagToDownloadPic').href = canvasToDtaUrl;
      var picPeriodPlace = picName.indexOf('.');
      console.log('picPeriodPlace: ' + picPeriodPlace);
    
      var newPicName = picName.slice(0,picPeriodPlace) + 'Resized.' + picName.slice(picPeriodPlace+1);
    
      document.getElementById('aTagToDownloadPic').download = newPicName;
      document.getElementById('spanNewPicName').innerHTML = newPicName;
      console.log('newPicName: ' + newPicName);
	};
 };
</script>