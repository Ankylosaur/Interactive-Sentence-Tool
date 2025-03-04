function submitResponse() {
    const template1 = document.getElementById('template1').value;
    const template2 = document.getElementById('template2').value;
    const template3 = document.getElementById('template3').value;
    
    // Check if all fields are filled out
    if (template1 && template2 && template3) {
        alert(`Your response: \n\nTemplate 1: ${template1} \nTemplate 2: ${template2} \nTemplate 3: ${template3}`);
    } else {
        alert('Please fill in all the fields!');
    }
}
