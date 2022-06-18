// Kelvin is 293 for today
const kelvin = 0;
//Celsius is 273 degree less than kelvin
var celsius = kelvin - 273;
//Formaul for F -> C
var fahrenheit = celsius * (9/5) +32;
//converts to non decimal
fahrenheit = Math.floor(fahrenheit);
var newton = celsius * (33/100);

console.log(`The temperature ${fahrenheit} degrees Fahrenheit`);
console.log(Math.floor(newton));

