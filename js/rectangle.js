
document.getElementById('btn-rectangle').addEventListener('click', function(){
    cont +=1;
    const rectangleInput1 = getInputField('input-ractangle1');
    const rectangleInput2 = getInputField('input-ractangle2');
    const rectangleaArea = rectangleInput1*rectangleInput2;
    const rectanglePreviousUpdate = rectangleaArea.toFixed(2);
    const AreaUpdate = parseFloat(rectanglePreviousUpdate);
    const NameUpdate = document.getElementById('text-rectangle').innerText;
    getOutputFunction(cont, NameUpdate, AreaUpdate)

})
 