function converToDecimal(){

    let binaryNumber = document.getElementById('binaryNumberInput').value;
    let decimalNumber = 0;

    if(binaryNumber == undefined)
    alert("enter valid binary number");
    
    for(let i = binaryNumber.length-1 ; i >= 0 ; i--){
        
        if(binaryNumber[i] < 0 || binaryNumber[i] > 1)
        alert("enter valid binary number");

        decimalNumber += Math.pow(2, i) * binaryNumber[i];
    }

    document.getElementById('decimalNumberOutput').value = decimalNumber;

}

