//Predefined functions with Dario 3.4.2021. (Saturday) 18:05

parseInt("10")           //10
parseInt("10.00")        //10
parseInt("10.33")        //10
parseInt("34 45 66")     //34
parseInt("   60   ")     //60
parseInt("40 years")     //40
parseInt("He was 40")    //NaN

parseInt("10", 10)       //10
parseInt("010")          //10
parseInt("10", 8)        //8
parseInt("0x10")         //16
parseInt("10", 16)       //16


parseFloat("10")        //10
parseFloat("10.00")     //10
parseFloat("10.33")     //10.33
parseFloat("34 45 66")  //34
parseFloat("   60   ")  //60
parseFloat("40 years")  //40
parseFloat("He was 40") //NaN


isNaN(123)          //false
isNaN(-1.23)        //false
isNaN(5-2)          //false
isNaN(0)            //false
isNaN('123')        //false
isNaN('Hello')      //true
isNaN('2005/12/12') //true
isNaN('')           //false
isNaN(true)         //false
isNaN(undefined)    //true
isNaN('NaN')        //true
isNaN(NaN)          //true
isNaN(0 / 0)        //true
isNaN(null)         //false


Number.isFinite(123)            //true
Number.isFinite(-1.23)          //true
Number.isFinite(5-2)            //true
Number.isFinite(0)              //true
Number.isFinite('123')          //false
Number.isFinite('Hello')        //false
Number.isFinite('2005/12/12')   //false
Number.isFinite(Infinity)       //false
Number.isFinite(-Infinity)      //false
Number.isFinite(0 / 0)          //false




function sum(a,b) {
    return a+b;
}

var result = sum(1,5);








var result = parseFloat('22.4')

console.log(result); //22.4




var result = parseFloat('eeee')

console.log(result); //NaN

console.log(isNaN(result));

