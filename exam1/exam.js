//q1

// function sum_100(a,b){

//     if(a+b>100){
//         return("limit exceeded")
//     }

//     else{
//         return(a+b)
//     }
// }


// a = Number(prompt("Enter first number"))
// b = Number(prompt("Enter second number"))

// console.log(sum_100(a,b))



//q2

// function is_equal(a,b){


// }


//q3

// function swap(a,b){

//     a=a+b
//     b=a-b
//     a=a-b

//     return `value of a is ${a} and b is ${b}`
// }


// console.log(swap(10,40))

//q4


//q5

// function num(a) {
//     return a === 0
//       ? "Zero"
//       : a > 0
//       ? "Positive"
//       : "Negative";
//   }
  
//   console.log(num(10))


//q6

// function bit_and(a,b){
    
//     return a&b
// }
// console.log(bit_and(140,310))


//q7



//q8

// function multi(a, b) {
    
//     return a % b === 0;
//   }

//   console.log(multi(10, 2)); 



//9


//q10

// function change(num){

//     console.log(num*(-1))
// }

// change(10)



//q11

// function check_age(age){

//     if (age<13 && age>=0){

//         return "Child"
//     }

//     else if(age>=13 && age<=19){
//         return "Teenager"
//     }

//     else if (age>=20 && age<=64){

//         return "Adult"
//     }

//     else if (age>64){
//         return "Senior"
//     }

//     else{
//         return "Enter valid age"
//     }
// }
// console.log(check_age(98))

//q12

// function leap_year(year){

//     if (year%4==0){
//         return "Leap year"
//     }

//     else{
//         return "Not leap year"
//     }
// }
// console.log(leap_year(2004))



//q13

// function check_num(a,b,c){

//     if (a>b && a>c){
//         return a
//     }

//     else if (b>a && b>c){
//         return b
//     }

//     else{
//         return c
//     }
// }

// console.log(check_num(10,230,30))

//q14

// function check_grade(percentage){

//     if (percentage>=90 && percentage<=100){
//         return "A"
//     }

//     else if (percentage>=80 && percentage<90){
//         return "B"
//     }

//     else if (percentage>=70 && percentage<80){
//         return "C"
//     }

//     else if (percentage>=60 && percentage<70){
//         return "D"
//     }

//     else if (percentage>=0 && percentage<60){
//         return "F"
//     }

//     else{
//         return "Enter valid percentage"
//     }

   
// }
// console.log(check_grade(75))



//q15

// function check_triangle(a,b,c){

//     if (a+b+c==180){
//         return "It is Triangle"
//     }

//     else{
//         return "Not trinagle "
//     }
// }


// console.log(check_triangle(60,60,60))


//q16



//q17

// function check_char(a){

//     arr = ['a','e','i','o','u','A','E','I','O','U']

//     for(let i=0;i<arr.length;i++){

//         if (arr[i]==a){
//             return "Vowel"
//         }

//     }

//     return "Consonant"
// }

// console.log(check_char("A"))


//q18

// function check_num(month,year){

//     s = "28 days"

//     if (year%4==0){
//         s = "29 days"
//     }

//     switch(month){
//         case 1:
//             return "31 days"

//         case 2:
//             return s

//         case 3:
//             return "31 days"

//         case 4:
//             return "30 days"

//         case 5:
//             return "31 days"

//         case 6:
//             return "30 days"

//         case 7:
//             return "31 days"

//         case 8:
//             return "30 days"

//         case 9:
//             return "31 days"

//         case 10:
//             return "30 days"

//         case 11:
//             return "31 days"

//         case 12:

//             return "30 days"

//         default:
//             return "Enter valid Month number"        
//     }
// }
// console.log(check_num(2,2005))


//q19

// function palindrome(s){

//     s = s.split('')
//     l = []
//     for(let i=s.length-1;i>=0;i--){

//         l.push(s[i])
//     }

//     s = s.join('')
//     l = l.join('')

//     if (s==l){
//         return "Palindrome"
//     }

//     else{
//         return "Not palindrome"
//     }
// }

// console.log(palindrome("a2a"))



//q20

// function pass_check(p){
//     len = 0
//     if (p.length>=8){
//         len = 1
//     }

//     digits = '1234567890'
//     d = 0
//     for(let i=0;i<p.length;i++){

//         if (digits.includes(p[i]))
            
//             d = 1
//     }
    
//     upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     u = 0
//     for(let i=0;i<p.length;i++){
//         if (upper.includes(p[i])){

//             u=1;
//         }
//     }

//     special = '`!@#$%^&*()<>.,?/'
//     s = 0
//     for(let i=0;i<p.length;i++){
//         if(special.includes(p[i])){
//             s=1
//         }
//     }

//     if (len==1 && d==1 && u==1 && s==1){
//         return "Strong Password"
//     }

//     else{
//         return "Weak password"
//     }
// }
// console.log(pass_check("hellA@#o324"))


//21

// fib = [0, 1]; 
// console.log(0)
// console.log(1)

// for (let i = 2; i <= 10; i++) {
  
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }


//22

// function r_str(s){

//     s = s.split('')
//     l = []
//     for(let i=s.length-1;i>=0;i--){

//         l.push(s[i])
//     }

//     console.log(l.join(''))
// }
// console.log(r_str("hello"))



//23

// str="****"
// str2 = '*  *'

// for(let i=0;i<5;i++){

//     if (i==0 || i==4){
//         console.log(str)
//     }

//     else{
//         console.log(str2)
//     }
// }




//24

for(let i=0;i<5;i++){

    

    for(let j=4;j>=0;j--){

    }
}
































