let previous = document.querySelector("#previous");
let current = document.querySelector("#current");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let value = e.target.value
        let valueType = button.className
        if(valueType.includes("number")){
            if(current.innerHTML=="Não é possivel dividir por zero"){
                current.innerHTML = ""
            }
            current.innerHTML += value
        }else{
            operators(value)
        }
    })
})

function result(){
    if(current.innerHTML==""){
        return
    }else{
        let result = eval(current.innerHTML)
        if(result=="Infinity"){
            current.innerHTML = "Não é possivel dividir por zero"
        }else{
            previous.innerHTML = current.innerHTML
            current.innerHTML = result
        }
        
    }
    
}

function deleteLast(){
    let removedLast = current.innerHTML.slice(0,-1)
    current.innerHTML = removedLast
}

function clear(){
    previous.innerHTML = "";
    current.innerHTML = "";
}

function operators(operator){
    if(current.innerHTML==""){
        if(operator=="-"){
            current.innerHTML += operator
        }else{
            return
        }
    }else{
        switch (operator) {
            case "DEL":
                deleteLast()
                break;
            case "C":
                clear()
                break
            case "=":
                result()
                break;
            case ".":
                if(current.innerHTML.includes('.')){
                    return
                }else{
                    current.innerHTML += operator
                }
                break
            case "*":
            case "/":
            case "+":
            case "-":
                let lastChar = current.innerHTML.slice(-1)
                if(lastChar=="*"||lastChar=="/"||lastChar=="+"||lastChar=="-"){
                    return
                }else{
                    current.innerHTML += operator
                }
                break
            default:
                break;
            }
    }
}
