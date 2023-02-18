document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusInpurt1 = getfixInput('input-rhombus1');
    const rhombusInpurt2 = getfixInput('input-rhombus2');
    const updateRhombusArea = 0.5*rhombusInpurt1*rhombusInpurt2;
    setOutputFunction('area-list', updateRhombusArea);
})