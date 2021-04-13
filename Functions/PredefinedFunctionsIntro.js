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
parseInt(0)              //0
parseInt(1e+3)           //1000
parseInt(undefined)      //NaN
parseInt(Infinity)       //NaN
parseInt(-Infinity)      //NaN
parseInt(null)           //NaN
parseInt("")             //NaN
parseInt(false)          //NaN
parseInt(NaN)            //NaN 



parseFloat("10")        //10
parseFloat("10.00")     //10
parseFloat("10.33")     //10.33
parseFloat("34 45 66")  //34
parseFloat("   60   ")  //60
parseFloat("40 years")  //40
parseFloat(1e+3)        //1000
parseFloat("He was 40") //NaN
parseFloat(0)           //0
parseFloat(undefined)   //NaN
parseFloat(Infinity)    //Infinity
parseFloat(-Infinity)   //-Infinity
parseFloat(null)        //NaN
parseFloat("")          //NaN
parseFloat(false)       //NaN
parseFloat(NaN)         //NaN    



isNaN(Infinity)     //false
isNaN(-Infinity)    //false
isNaN(null)         //false
isNaN("")           //false
isNaN(123)          //false
isNaN(-1.23)        //false
isNaN(5-2)          //false
isNaN(0)            //false
isNaN('123')        //false
isNaN('')           //false
isNaN(true)         //false
isNaN(null)         //false
isNaN("")           //false
isNaN(false)        //false
isNaN(1e+3)         //false 

isNaN('Hello')      //true
isNaN('2005/12/12') //true
isNaN(undefined)    //true
isNaN('NaN')        //true
isNaN(NaN)          //true
isNaN(0 / 0)        //true
isNaN(undefined)    //true
    
 




       isFinite(false)          //true
       isFinite(null)           //true
       isFinite("")             //true
       isFinite(0)              //true
       isFinite(false)          //true
       isFinite(null)           //true
Number.isFinite(123)            //true
Number.isFinite(-1.23)          //true
Number.isFinite(5-2)            //true
Number.isFinite(0)              //true
       isFinite(1e+3)           //true
Number.isFinite('123')          //false
Number.isFinite('Hello')        //false
Number.isFinite('2005/12/12')   //false
Number.isFinite(Infinity)       //false
Number.isFinite(-Infinity)      //false
Number.isFinite(0 / 0)          //false
       isFinite(undefined)      //false
       isFinite(Infinity)       //false
       isFinite(-Infinity)      //false
       isFinite(NaN)            //false




console.log(typeof (false));        //boolean
console.log(typeof (null));         //object
console.log(typeof (undefined));    //undefined
console.log(typeof (Infinity));     //number
console.log(typeof (-Infinity));    //number
console.log(typeof (NaN));          //number
console.log(typeof ("asdf"));       //string
console.log(typeof ("12345"));      //string
console.log(typeof (12345));        //number
console.log(typeof (0));            //number






function sum(a,b) {
    return a+b;
}

var result = sum(1,5);








var result = parseFloat('22.4')

console.log(result); //22.4




var result = parseFloat('eeee')

console.log(result); //NaN

console.log(isNaN(result));

