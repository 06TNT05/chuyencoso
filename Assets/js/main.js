let input = document.getElementById('txtData')
let selBaseFrom = document.getElementById('selBaseFrom')
let selBaseTo = document.getElementById('selBaseTo')
let span = document.getElementById('result')
let icon = document.getElementById('convertIcon')
let inputValue = ""
let selBaseFromValue = ""
let selBaseToValue = ""
let result = ""

if(input.value != ""){
    inputValue = input.value
    selBaseFromValue = selBaseFrom.value
    selBaseToValue = selBaseTo.value
    result = chuyenCoSo(inputValue, selBaseFromValue, selBaseToValue)
    
    span.innerHTML = `${inputValue}<sub>${selBaseFromValue}</sub> bằng ${result}<sub>${selBaseToValue}</sub>`
}

input.onkeyup = selBaseFrom.onchange = selBaseTo.onchange = () => {
    inputValue = input.value
    if(inputValue != ""){
        selBaseFromValue = selBaseFrom.value
        selBaseToValue = selBaseTo.value
        result = chuyenCoSo(inputValue, selBaseFromValue, selBaseToValue)

        if(result != ""){
            span.innerHTML = `${inputValue}<sub>${selBaseFromValue}</sub> bằng ${result}<sub>${selBaseToValue}</sub>`
        }
        else {
            span.innerHTML = "Dữ liệu không hợp lệ"
        }    
    }
    else {
        span.innerHTML = "--"
    }
}

icon.onclick = () => {
    inputValue = input.value
    if(inputValue != ""){
        selBaseFromValue = selBaseFrom.value
        selBaseToValue = selBaseTo.value

        // chuyển đổi value
        selBaseFrom.value = selBaseToValue
        selBaseTo.value = selBaseFromValue

        result = chuyenCoSo(inputValue, selBaseToValue, selBaseFromValue)
        
        if(result != ""){
            span.innerHTML = `${inputValue}<sub>${selBaseToValue}</sub> bằng ${result}<sub>${selBaseFromValue}</sub>`
        }
        else {
            span.innerHTML = "Dữ liệu không hợp lệ"
        }    
    }
    else {
        span.innerHTML = "--"
    }
    
}