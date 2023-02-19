function getInputField (isInput){
    const inputField = document.getElementById(isInput);
    const inputField1String =inputField.value;
    const inputFieldvalue = parseFloat(inputField1String);
    if( isNaN(inputFieldvalue) || inputFieldvalue<0 ){
     alert('Please type a positive number');
     return getInputField();
    }
    inputField.value='';
    return inputFieldvalue;
 }

 function getOutputFunction(cont, NameUpdate,  AreaUpdate){
    const Action = document.getElementById('table-Input');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td> ${cont}<td/>
    <td> ${NameUpdate}<td/>
    <td>${AreaUpdate} <span>cm<sup>2</sup></span><td/>
    <td><button class="p-2 text-white rounded bg-sky-500">Covert to m<sup>2</sup></button><td/>
    `;
    Action.appendChild(tr);
}

