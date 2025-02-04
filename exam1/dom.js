// q1
// x = document.createElement('h1')
// x.textContent = "what is the color of apple?"


// x1 = document.createElement('h2')
// x1.textContent = "RED"

// x1.style.display = 'none'

// document.body.appendChild(x)
// document.body.appendChild(x1)

// function show(x1){
//     if (x1.style.display == "none"){
//         x1.style.display = 'block'
//     }

//     else{
//         x1.style.display = 'none'
//     }
// }
// x.addEventListener('click', function(){show(x1)})



//q2

// a = document.createElement('div')

// a.setAttribute('style','position: fixed;border-radius: 50%;border: 2px solid rgb(29, 27, 27); height: 30px; width: 30px; ');

// a.setAttribute('id','cur')


// document.body.appendChild(a)


// cursor = document.getElementById('cur')
// document.body.style.height = "100vh";


// document.body.addEventListener("mousemove", function(e) {
//     cursor.style.left = `${e.clientX}px`;  
//     cursor.style.top = `${e.clientY}px`;  
// });



//q3

// a = document.createElement('h1')
// a.textContent = "Submit"
// b = document.createElement('h2')
// b.textContent = "This button is usefor submitting"
// b.style.display = 'none'
// b.setAttribute('style','background-color:gray; width:250px; color:white; position:relative; top:-20px; left:50px')

// document.body.appendChild(a)
// document.body.appendChild(b)

// a.addEventListener('mouseenter',function(){
//     b.style.display='block'
// })


// a.addEventListener('mouseleave',function(){
//     b.style.display='none'
// })



//q4

// x = document.createElement('h1')
// x.textContent = "MENU CONTENT"
// x.setAttribute('style','width:270px; border:1px solid black;')


// x1 = document.createElement('h2')
// x1.textContent = "RED"
// x1.style.display = 'none'


// x2 = document.createElement('h2')
// x2.textContent = "BLUE"
// x2.style.display = 'none'

// x3 = document.createElement('h2')
// x3.textContent = "GREEN"
// x3.style.display = 'none'

// document.body.appendChild(x)
// document.body.appendChild(x1)
// document.body.appendChild(x2)
// document.body.appendChild(x3)

// function show(x1){
//     if (x1.style.display == "none"){
//         x1.style.display = 'block'
//         x2.style.display = 'block'
//         x3.style.display = 'block'
//     }

//     else{
//         x1.style.display = 'none'
//         x2.style.display = 'none'
//         x3.style.display = 'none'
//     }
// }
// x.addEventListener('click', function(){show(x1)})



//q5
// let bt = document.createElement('button');
// bt.setAttribute('style', 'width:160px; height:50px;');
// bt.textContent = "Click Me";
// document.body.appendChild(bt);

// bt.addEventListener("mouseenter", function() {
//     bt.style.backgroundColor = "red";
//     bt.style.fontSize = "30px";  
//     bt.style.transform = "scale(1.2)"; 
// });

// bt.addEventListener("mouseleave", function() {
//     bt.style.backgroundColor = "white";
//     bt.style.fontSize = "13px"
//     bt.style.transform = "scale(1)"
// });



















