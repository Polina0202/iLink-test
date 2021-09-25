let inputs = document.querySelectorAll('input');
console.log(inputs);

for (let input of inputs){
    input.addEventListener('blur', function(){
        let value = this.value
        console.log(value);
    });
}