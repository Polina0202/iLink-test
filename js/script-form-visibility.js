window.addEventListener("load", function() {
    function AddEvents(classEv){
        let elems = document.querySelectorAll(classEv);
        for (let elem of elems){
            elem.addEventListener('input', ValidationFields);
        }
    }

    function ValidationFields (classValid){
        classValid = '.' + this.classList.item(0);
        let inputs = document.querySelectorAll(classValid);
        let flag = 0;
        for (let input of inputs){
            if (input.value == ""){
                flag++;
            }
        }

        if(flag == 0){
            if (classValid == '.form-main-block'){
                ShowElement('.form-block');
            }
            else{
                ShowElement('.loading');
            }
        }
    }

    function ShowElement(classShow){
        let inputs = document.querySelectorAll(classShow);
        
        for (let input of inputs){
            input.style.visibility = 'visible';
        }
    }

    AddEvents('.form-main-block');
    AddEvents('.form-block');
    
  });

