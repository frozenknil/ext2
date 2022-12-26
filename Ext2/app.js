let inpA = document.querySelector("#input-a");
let inpB = document.querySelector("#input-b");
let inpC = document.querySelector("#out-c")
let calcuB = document.querySelector("#calculate");

/////////incident report variables///////

let textI = document.querySelector("#get-text");
let textII = document.querySelector("#get2");
let textIII = document.querySelector("#get3");

  
let boton1 = document.querySelector("#test1-btn");




calcuB.addEventListener("click", () => {

	let total = (inpA.value * inpB.value) / 100;

	inpC.innerHTML = total;
	
})


    
   
/////////Incident Report functions///////////   
    boton1.onclick = () => {

    copyT();

     

     if(textI.value !="" && textII.value !="" && textIII.value !=""){
		textI.value = ""; textII.value = ""; textIII.value = ""; 
	 }
  
    }

function copyT() {
	
        let inputbox = document.querySelector(".test");
        
        inputbox.textContent =`   
        Order #:${textII.value} 
        Reshipment order #: ${textIII.value}      
        Rx #: ${textI.value} 
        Items ordered: 
        Item missing:  
        Item received (if different): N/A 
        Did the medication belong to another client? No
        Other client's order #: N/A`;
        
      
    
        navigator.clipboard.writeText(inputbox.innerHTML);
     
}