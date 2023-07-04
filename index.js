
var numberofdrums = document.querySelectorAll('.drum').length;
var i;
for( i=0 ; i<numberofdrums;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click' , onclick );
}

function onclick(){
    
    var inneralphabet = this.innerHTML;

    makeSound(inneralphabet);

    addanimation(inneralphabet);
    
}

document.querySelectorAll("keypress" , function(event){
makeSound(event.key);
addanimation(event.key);

}
);
  


function makeSound(key){
   switch(key){
    case 'w':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    
    case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

     case 's':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

    case 'd':
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break; 
                    
                    
    case 'j':
                        var kick = new Audio("sounds/kick-bass.mp3");
                        kick.play();
                        break;


                        case 'k':
                            var snare = new Audio("sounds/snare.mp3");
                        snare.play();
                            break;


                            case 'l':
                                var crash = new Audio("sounds/crash.mp3");
                            crash.play();
                                break;
    
   }
}
    
    function addanimation(alphabet){

      var animationbutton =   document.querySelectorAll(".", + alphabet);

      animationbutton.classlist.add("pressed");

      setTimeout(function(){
        animationbutton.classlist.remove("pressed");
      } , 100)
    }
     
