var Base = {
    compressImage: function(sourceFile, callBackendFunc) {
        const oReader = new FileReader();
        const oImg = new Image();
        const oCanvas = document.createElement('canvas');
        const ctx = oCanvas.getContext("2d");

        var sCompressedUrl = "";

        oCanvas.width = 100;
        oCanvas.height = 50;

        oReader.readAsDataURL(sourceFile);

        oReader.onload = function(oEvent) {
            oImg.src = oEvent.target.result;

            oImg.onload = function() {
                ctx.drawImage(oImg, 0, 0, oCanvas.width, oCanvas.height);

                sCompressedUrl = oCanvas.toDataURL("image/jpeg", 0.7);

                callBackendFunc(sCompressedUrl);
            }
        }
    }
}

export default Base;