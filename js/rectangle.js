document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleInput1 = getInputField('input-ractangle1');
    const rectangleInput2 = getInputField('input-ractangle2');
    const rectangleaArea = rectangleInput1*rectangleInput2;
    const rectanglePreviousUpdate = rectangleaArea.toFixed(2);
    const rectangleUpadteArea = parseFloat(rectanglePreviousUpdate);
    setOutputFunction('area-list', rectangleUpadteArea);

})