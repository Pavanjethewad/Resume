a = 95
b = 95 
if(a>b){
    console.log("a is greater");
}if(a<b){
    console.log("b is greater");
}else{
    console.log(" numbers are equal ");
}


// //conditional else if else if
var eng = 90
var sci = 60
var hist = 50
var math = 95
var hindi = 95
var total = eng + sci + hist + math + hindi
var percentage = (eng + sci + hist + math + hindi) /6
// var total = `${eng}`+ `${sci}` + `${hist}` + `${math}` + `${hindi}` 

// var total12 = math + "" +sci
// var total13 = math , sci
// var total14 = `${math}`

// console.log("total" , total);
// console.log("total" , total1);
// console.log("total" , total12);
// console.log("total" , total13);
// console.log("total" , total14);

if(total > 90){
    console.log("hey you get a+");
}else if(total>80 && total<=90){
    console.log("hey you get a ");
}else if(total>70 && total<=80){
    console.log("hey you get b+ ");
}else if(total>60 && total<=70){
    console.log("hey you get b ");
}else if(total>50 && total<=60){
    console.log("hey you get c+ ");
}else if(total>40 && total<=50){
    console.log("hey you get c ");
}else{
    console.log(" Le lag gayi Teri");
}


let suhanaMausam = false
suhanaMausam ? console.log("mausam suhana hai") : console.log("chal jhoote")