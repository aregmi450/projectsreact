
//access the id from html 

function increment(){
      // convert string to number
    let number = Number( document.getElementById('number').innerHTML)
   
    
    document.getElementById('number').innerHTML = number + 1
}

function decrement(){
    let number = Number(document.getElementById('number').innerHTML)


    document.getElementById('number').innerHTML = number - 1

}

function neutral(){
 
    document.getElementById('number').innerHTML= 0
}
