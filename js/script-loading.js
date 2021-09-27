window.addEventListener("load", function() {
    document.querySelector('#file-input').addEventListener('change', File);
    function File() {
        let fileFullName = this.files[0].name;
        let fileName = fileFullName.split('.');
        let fileSize = this.files[0].size;
        document.querySelector('.file-title').innerText = fileName[0];
        fileSize = formatSizeUnits(fileSize);
        document.querySelector('.file-param').innerText = fileName[1].toUpperCase() + ' ' + fileSize;

        // document.querySelector('.file-mini-img').fadeIn("fast").attr('src',URL.createObjectURL(target.files[0]));

        document.querySelector('.file').style.visibility = "visible";
        ButtonSend();
    };

    function formatSizeUnits(bytes){
        if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(1) + " gb"; }
        else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(1) + " mb"; }
        else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(1) + " kb"; }
        else if (bytes > 1)           { bytes = bytes + " bytes"; }
        else if (bytes == 1)          { bytes = bytes + " byte"; }
        else                          { bytes = "0 bytes"; }
        return bytes;
    };
    
    function ButtonSend(){
        if (document.querySelector('.file').style.visibility != "visible"){
            document.querySelector('.btn').disabled = true;
        }
        else{
            document.querySelector('.btn').disabled = false;
        }
    }

    ButtonSend();
    

    function SendInfo(){
        let elms = document.querySelectorAll('.completed');
        
        for (let elm of elms){
            elm.style.visibility = 'visible';
        }

        document.querySelector('.file').style.visibility = "hidden";
        ButtonSend();

        let inputs = document.querySelectorAll('input');
        
        for (let input of inputs){
            input.value = '';
        }

        document.querySelector('.loading').style.visibility = "hidden";
        
        document.querySelectorAll('select').value = "";
        console.log(document.querySelectorAll('select').value);
    }

    document.querySelector('.btn').addEventListener('click', SendInfo);
  });