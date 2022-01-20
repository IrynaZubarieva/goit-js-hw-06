const inputRef = document.querySelector("#validation-input");
// console.log(inputRef.dataset.length);
inputRef.addEventListener("blur", unFocusHandler);


function unFocusHandler(event) { 
    //console.log("текущая длина ввода", event.currentTarget.value.length);
    // console.log("заданный параметр", inputRef.dataset.length);
    // console.log("они равны?", event.currentTarget.value.length == inputRef.dataset.length);
    function removeClasses (){
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.remove("valid");
    }

    if (event.currentTarget.value.length == inputRef.dataset.length) {
        removeClasses ();
        event.currentTarget.classList.add("valid");    
    }

    else if(event.currentTarget.value.length === 0){
        // event.currentTarget.classList.remove("invalid");
        // event.currentTarget.classList.remove("valid");
        removeClasses ();
        
    }

    else {
        removeClasses ();
        event.currentTarget.classList.add("invalid");
    }
        
}