document.getElementById('btn-pentagon').addEventListener('click', function(event){
   cont +=1; 
    const inputPentagon1 = document.getElementById('input-penta-1').innerText;
    const inputPentagon2 =document.getElementById('input-penta-2').innerText;
    const inputPentagonUpdate = 0.5*inputPentagon1*inputPentagon2;
    const pentagonUpdate = inputPentagonUpdate.toFixed(2);
    const AreaUpdate = parseFloat(pentagonUpdate);
    const NameUpdate = document.getElementById('text-pentagon').innerText;
    getOutputFunction(cont, NameUpdate,  AreaUpdate);
})