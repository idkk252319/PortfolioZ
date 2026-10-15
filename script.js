let trollbutton = document.getElementById('troll')

trollbutton.addEventListener('click', () => {
    trollbutton.textContent = 'hahahahaaa keep scrolling'
})

const formHTML = document.getElementById('contact-form')

formHTML.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const nameHTML = document.getElementById('name').value
    const emailHTML = document.getElementById('email').value
    const messageHTML = document.getElementById('message').value

    const inputsHTML = document.querySelectorAll('#name, #email', '#message')

    inputsHTML.forEach(input => {
        input.value = ''
    })

    const textareaHTML = document.getElementById('message')

    textareaHTML.value = ''

    alert(`Thank you ${nameHTML}. Will get back to you soon.`)
}

