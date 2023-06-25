//EJERCISIOS DE LEETCODE//



//EJERCICIO 1 twoSum//

/*var nums = [3,8,1];
var target = 9;

var twoSum = function (nums, target) {


    for (i = 0; i < nums.length; i++) {

        for (j = i +1; j < nums.length; j++) {

            if (nums[i] + nums[j] == target) {

                console.log("Correcto")
                console.log(nums[i],nums[j])
                

            }

        }

    }

}

twoSum(nums, target)*/






//----------------------------------------------------------------------------------------------//

//EJERCICIO 2 PALINDROME//

/*var input = 121;

var palindromeNum = function(input) {

    var num = input.toString();
    var verifyPalindrome = num.split("").reverse().join("");

    if (verifyPalindrome == input) {

        console.log(input + " es un palindrome!")

    } else {

        console.log(input + " no es un palindrome:(");

    }

}

palindromeNum(input); */







//-------------------------------------------------------------------------------------------------//

//EJERCICIO 3 ROMAN TO INTEGER//

// ROMAN TO INTEGER //

/*var numeroRomano = "XXVII";

var romanToInt = function(num) {
     
    const letras = {

        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000

    }

    let resultado = 0;

    for (let i = 0; i < num.length; i++) {

        const current = letras[num[i]];
        const next = letras[num[i + 1]];

        if (current < next) {
            resultado += next - current;
            i++
        } else {
            resultado += current;
        }

    }

    console.log(resultado);

};

romanToInt(numeroRomano);*/




//-------------------------------------------------------------------------------------------------//

//EJERCICIO 4 LENGTH OF LAST WORD //



/*var frase = "Length of Last Word";

var lengthWord = function(frase) {

    let fraseCortada = frase.trim(); 

    let cortadita = fraseCortada.length - fraseCortada.lastIndexOf(' ') - 1;

    console.log(cortadita);

};

lengthWord(frase);*/







//--------------------------------------------------------------------------------------------------//



// EJERCICIO 5 LARGE INTEGER //

/*var digits = [1,2,3];

var largeInteger = function (digits) {

    console.log(digits);

    var joinDigits = digits.toString();
    var quitarComas = joinDigits.replace(/,/g, "");

    console.log(quitarComas)

    var convertirInt = parseInt(quitarComas)

    console.log(convertirInt)
    var sumaDigits = convertirInt + 1;

    var regresoArray = String(sumaDigits).split("").map(Number)

    console.log(regresoArray)

}

largeInteger(digits); */








//---------------------------------------------------------------------------------------------------//


// EJERCICIO 6 SINGLE NUMBER //

/*var nums = [2,2,3,3,5];

var singleNumber = function (nums) {

    console.log(nums)

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i]) {
            console.log("Numero Diferente: " + nums[i])
        } 

    }

}

singleNumber(nums)*/
