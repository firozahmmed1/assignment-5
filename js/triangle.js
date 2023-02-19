
let cont = 0;
document.getElementById('btn-triangle').addEventListener('click', function(){
    cont +=1;
    const triangleInput1 = getInputField('input-triangle-1');
    const triangleInput2 = getInputField('input-triangle-2');
    const triangleArea = 0.5*triangleInput1*triangleInput2;
    const areaFix = triangleArea.toFixed(2);
    const AreaUpdate =parseFloat(areaFix);
    const NameUpdate = document.getElementById('text-triangle').innerText;

    getOutputFunction(cont, NameUpdate,  AreaUpdate)
  
});

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "blog.html";
})


