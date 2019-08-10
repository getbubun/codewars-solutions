// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// eg:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false



function validatePIN (pin) {
  
    if((pin.length=== 4 || pin.length ===6)){
        for(let i=0;i<pin.length;i++){
            let x=parseInt(pin[i]);
            if(!isNaN(x)){
                continue;
                }else{ 
                return false
                }
        }
        return true;
    }
    else
    return false;
    
     
}
 console.log( validatePIN("-12534"))