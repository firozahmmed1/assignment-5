document.getElementById('btn-rhombus').addEventListener('click', function(){
    cont +=1;
    const rhombusInpurt1 = document.getElementById('input-rhombus1').innerText;
    const rhombusInpurt2 = document.getElementById('input-rhombus2').innerText;
    const updateRhombusArea = 0.5*rhombusInpurt1*rhombusInpurt2;
    const rhombusArea =updateRhombusArea.toFixed(2)
    const AreaUpdate =parseFloat(rhombusArea);
    const NameUpdate = document.getElementById('text-rhombus').innerText;
    getOutputFunction(cont, NameUpdate,  AreaUpdate)
})