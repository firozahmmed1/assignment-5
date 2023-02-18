document.getElementById('btn-pentagon').addEventListener('click', function(){
    const inputPentagon1 = getfixInput('input-penta-1');
    const inputPentagon2 = getfixInput('input-penta-2');
    const inputPentagonUpdate = 0.5*inputPentagon1*inputPentagon2;
    setOutputFunction('area-list', inputPentagonUpdate);
})