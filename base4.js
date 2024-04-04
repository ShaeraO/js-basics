const button = document.getElementById('button')
const text = document.getElementById('text')

const onClick = () => {
    let number = text.textContent

    

    text.textContent = number
} 


button.addEventListener('click', onClick())