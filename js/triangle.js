document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleInput1 = getInputField('input-triangle-1');
    const triangleInput2 = getInputField('input-triangle-2');
    const triangleArea = 0.5*triangleInput1*triangleInput2;
    const areaFix = triangleArea.toFixed(2);
    const triangleAreaUpdate =parseFloat(areaFix);
    setOutputFunction('area-list', triangleAreaUpdate); 
})


