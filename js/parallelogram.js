document.getElementById('btn-parallelogram').addEventListener('click', function(){
    console.log('Hello')
    cont +=1;
    const parallelogramInput1 = document.getElementById('input-parallelogram1').innerText;
    const parallelogramInput2 = document.getElementById('input-parallelogram2').innerText;
    const AreaUpdate = parallelogramInput1*parallelogramInput2;
    const NameUpdate = document.getElementById('text-parallelogram').innerText;
    getOutputFunction(cont, NameUpdate,  AreaUpdate)
})