function getInputField (isInput){
    const inputField = document.getElementById(isInput);
    const inputField1String =inputField.value;
    const inputFieldvalue = parseFloat(inputField1String);
    if( isNaN(inputFieldvalue) || inputFieldvalue<0 ){
     alert('Please type a positive number');
    }
    inputField.value='';
    return inputFieldvalue;
 }
  
 function setOutputFunction(isNameOfOutPutFunction, outputValue){
     const OutputFunction = document.getElementById(isNameOfOutPutFunction);
     const li = document.createElement('li');
      li.innerText = outputValue;
      OutputFunction.appendChild(li);
 }

 function getfixInput(isFixed){
     const fixInput = document.getElementById(isFixed);
     const fixInputString = fixInput.innerText;
     const fixInputPreviousUpadte = parseFloat(fixInputString);
     return fixInputPreviousUpadte;
 }

//  setOutputFunction('area-list', rectangleUpadteArea);