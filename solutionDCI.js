const parseNumber = (arg) => {
    const number = parseInt(arg)
    if(isNaN(number)){
        console.log(`${arg} is not a number`);
        process.exit()
    }
    return number
}

const args = process.argv.slice(2)

const [operation,...rest] = args

const numbers = rest.map(parseNumber)

const sum = (numArray) => {
    return numArray.reduce((preVal, currentVal)=> preVal + currentVal, 0);
}


switch (operation) {
    case "sum":
        console.log(sum(numbers));
}

console.log(rest);


