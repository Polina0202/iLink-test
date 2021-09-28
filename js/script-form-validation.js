window.addEventListener("load", function() 
{
  let inputs =  document.querySelectorAll('.input-text');

  for (let input of inputs){
    input.addEventListener('keydown', function(e){
      this.value = this.value[0].toUpperCase() + this.value.slice(1);
      if( !e.key.match(/[A-Z]/)&&!e.key.match(/[a-z]/)) {
        return e.preventDefault();
      }
    });
    
    input.addEventListener('input', function(e){
      this.value = this.value[0].toUpperCase() + this.value.slice(1);
      input.value = input.value.replace(/[0-9]/g, "");
    });
  };

  function Clear(){
    this.type='text';
  }
  document.querySelector('.input-date').addEventListener('onload', Clear);
});