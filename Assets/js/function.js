const value = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
// chuyển từ cơ số baseFrom sang cơ số baseTo
function chuyenCoSo(numString, baseFrom, baseTo){
    let toDec = 0
    let toBase = ""
    // chuyển từ cơ số baseFrom sang cơ số 10
    toDec = BaseToDec(numString, baseFrom)
    if(baseTo == 10){
        return toDec
    }
    if(toDec){
        // chuyển từ cơ số 10 sang cơ số baseTo
        toBase = DecToBase(toDec, baseTo)
    }
    return toBase
}

// chuyển từ cơ số base sang cơ số 10
function BaseToDec(numString, base){
    // convert number to string
    // let numString = num.toString();
    // let numString = '' + num;

    let result = 0
    // chiều dài của chuỗi số
    let numLength = numString.length
    // số mũ bắt đầu
    let numHats = numLength - 1

    if(!ValidateNumber(numString, base)){
        return result
    }

    for(let i of numString){
        if(i !== "0"){
            i = value.indexOf(i)
            result += i * Math.pow(base, numHats)
        }
        numHats--
    }
    return result
}

// chuyển từ cơ số 10 sang cơ số
function DecToBase(number, base){
    let resultReverse = ""
    let result = ""

    while(number != 0){
        let phanDu = number % base
        resultReverse += value[phanDu]
        // chia lấy nguyên
        // number = Math.floor(number/base)
        number = (number - number%base)/base
    }

    for(let i = resultReverse.length - 1; i >= 0; i--){
        result += resultReverse[i]
    }
    return result
}


function ValidateNumber(numString, base){
    // có thể sắp xếp giảm dần, so sánh phần tử đầu tiên với base
    for(let i of numString){
        i = value.indexOf(i)
        if(i == -1){
            return false
        }
        if(i >= base){
            return false
        }
    }
    return true
}
