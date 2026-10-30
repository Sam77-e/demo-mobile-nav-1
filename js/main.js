const btn = document.querySelector('A');

btn.addEventListener('click', function(){
    document.querySelector('B').classList.toggle('C');
});

// A: The element to attach the event listener to (usually a button).
// B: The element whose class list will be toggled.
// C: The name of the CSS class to toggle. No period (.)
