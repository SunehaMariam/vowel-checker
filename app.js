function check(){
    let text = document.getElementById("text").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");
    result.textContent =""
    error.textContent =""
    if(!text){
error.textContent ="Please enter some text!"
return;
    }
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;}
        
    }
    result.innerHTML = text + "<br>Number of vowels: " + count;
}