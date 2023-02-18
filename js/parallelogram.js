document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramInput1 = getfixInput('input-parallelogram1');
    const parallelogramInput2 = getfixInput('input-parallelogram2');
    const parallelogramAreaUpdate = parallelogramInput1*parallelogramInput2;
    console.log(parallelogramInput1);
    setOutputFunction('area-list', parallelogramAreaUpdate);
})