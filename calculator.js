window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');
    const number = document.querySelectorAll('.number')
    number.forEach((numButton) => {
        console.log(numButton)
        numButton.addEventListener('click', (event) => {
            // if (Input.innerText === '0') {
            //     input.innerText = ''

            // }
            console.log(event.target.innerHTML.trim());
            input.innerText = input.innerText + event.target.innerText.trim();
        })

    })

    const numbers = document.querySelectorAll('.operation');
    numbers.forEach((number) => {
        console.log(numbers);
        numbers.addEventListener('click',()=>{
            console.log(number.innerText)
            input.innerHTML
        })
        // const lastValue = input.substring
    })

})