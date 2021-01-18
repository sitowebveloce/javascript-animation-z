// Select elements
const content = document.querySelector('.content');
const showmeBtn = document.querySelector('button');
// Var true init
let is = true;

// ANIMATION FUNCTION pass box and number
const addStyle = (b, i) =>{
    // Animate the box
    b.animate([
        // keyframes
        {transform: 'scale(0) translateZ(1000px)', opacity:0},
        {transform: 'scale(1) translateZ(0px)', opacity:1}
    ],
    {
        // Timing
        duration: Math.random() * `${i * 50}`,
        delay: Math.random() * `${i * 5}`,
    }
    );
    // Set scale to one
    b.style.transform = 'scale(1)';
};

// ANIMATION FUNCTION pass box and number
const removeStyle = (b, i) =>{
    // Animate the box
    b.animate([
        // keyframes
        {transform: 'translateZ(0px)', opacity:1},
        {transform: 'translateZ(1000px)', opacity:0}
    ],
    {
        // Timing
        duration: Math.random() * `${i * 100}`,
        delay: Math.random() * `${i * 5}`,
    }
    );
    // Set scale to one
    b.style.transform = 'scale(0)';
};

// Add box function
const addBox = (fn)=>{

    // For loop
    for(let i = 0; i<300; i++){
        // Create a div
        let div = document.createElement('div');
        // Add box class
        div.classList.add('box');
        // Run animation function pass box and index
        fn(div, i);
        // Append
        content.append(div);
    }
}
// Run add box function
addBox(addStyle);
// Add button event listener
showmeBtn.onclick = ()=>{
    // Toggle is value
    is = !is;
    // Select all boxs
    let boxs = document.querySelectorAll('.box');
    // Check is value
    if(!is){
        // For loop
        for(let i = 0; i<boxs.length; i++){
            // Remove styles animation
             removeStyle(boxs[i], i);
        }
    }else{
        // For loop
        for(let i = 0; i<boxs.length; i++){
            // Remove styles animation
            addStyle(boxs[i], i);
        }
    }
}