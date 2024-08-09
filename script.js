function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        document.getElementById('result').innerText = 'Please enter a valid date of birth.';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthdate has not yet occurred this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years old.`;
}

// Animated Placeholder Text
function typeEffect(element, text, delay = 100) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.placeholder += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Apply the effect to each input field
window.onload = function() {
    typeEffect(document.getElementById('day'), 'Enter your day');
    typeEffect(document.getElementById('month'), 'Enter your month');
    typeEffect(document.getElementById('year'), 'Enter your year');
}
