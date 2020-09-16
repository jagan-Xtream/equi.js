const readline = require('readline')
const inp = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var userInput;
inp.on('line', (data) => {
    userInput = Number(data)
})

function  equilateraltriangle(r)
 {

    console.log(((Math.sqrt(3)*(Math.pow(r,2))/4).toFixed(2)))
}

inp.on('close',()=>{

    equilateraltriangle(userInput)
})
