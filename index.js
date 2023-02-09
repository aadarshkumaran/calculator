function add(){
    //detect the last data in input box
    let lastData = 0, sign=0
    lastData = form.input.value
    //logic for taking the string of numbers excluding operators like +,-,*,/,and so on. 
    sign = lastData.charAt(lastData.length-1)
    if(sign=='+' || sign=='-' || sign=='/' || sign=='*'){
        form.input.value = lastData.substring(0,lastData.length-1)
        form.input.value += '+'
    }
    else{
        form.input.value += '+'
    }
} 
function subtract(){
    //detect the last data in input box
    let lastData = 0, sign=0
    lastData = form.input.value
    //logic for taking the string of numbers excluding operators like +,-,*,/,and so on. 
    sign = lastData.charAt(lastData.length-1)
    if(sign=='+' || sign=='-' || sign=='/' || sign=='*'){
        form.input.value = lastData.substring(0,lastData.length-1)
        form.input.value += '-'
    }
    else{
        form.input.value += '-'
    }
} 
function multiply(){
    //detect the last data in input box
    let lastData = 0, sign=0
    lastData = form.input.value
    //logic for taking the string of numbers excluding operators like +,-,*,/,and so on. 
    sign = lastData.charAt(lastData.length-1)
    if(sign=='+' || sign=='-' || sign=='/' || sign=='*'){
        form.input.value = lastData.substring(0,lastData.length-1)
        form.input.value += '*'
    }
    else{
        form.input.value += '*'
    }
} 
function divide(){
    //detect the last data in input box
    let lastData = 0, sign=0
    lastData = form.input.value
    //logic for taking the string of numbers excluding operators like +,-,*,/,and so on. 
    sign = lastData.charAt(lastData.length-1)
    if(sign=='+' || sign=='-' || sign=='/' || sign=='*'){
        form.input.value = lastData.substring(0,lastData.length-1)
        form.input.value += '/'
    }
    else{
        form.input.value += '/'
    }
} 