const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    document.querySelector('.main-menu').classList.toggle('open-nav');
});

// A: The element to attach the event listener to (usually a button).
// B: The element in HTML that we will add and remove the class list will be toggled.
// C: The name of the CSS class (in the css file) to toggle. No period (.)
