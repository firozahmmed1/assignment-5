document.getElementById('btn-ellips').addEventListener('click', function(){
    cont +=1;
    const elipsInput1 = document.getElementById('ellips-input1').innerText;
    const elipsInput2 = document.getElementById('ellips-input2').innerText;
    const ellipsArea = 3.14*elipsInput1*elipsInput2;
    const ellipsAreaUpadte = ellipsArea.toFixed(2);
    const AreaUpdate= parseFloat(ellipsAreaUpadte);
    const NameUpdate = document.getElementById('text-ellipse').innerText;

    getOutputFunction(cont, NameUpdate,  AreaUpdate)
})
