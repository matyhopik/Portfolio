const form = document.querySelector('.contact-form');

const mailsentbox = document.querySelector('.mail-sent-box');

function sendMsg(e) {
    console.log('test')
    e.preventDefault();
    const subject = document.querySelector('.subject'),
            email = document.querySelector('.email'),
            message = document.querySelector('.message');
            body = '<h2>' + email.value + '</h2>' + '<br/>' + message.value;

    Email.send({
        SecureToken : "27912f6a-24b8-48af-aa0e-14e4236d9b04",
        To : 'hoppmatej@gmail.com',
        From : 'mailserverhoppportfolio@gmail.com',
        Subject : subject.value,
        Body : body.toString()
    }).then(
        window.scrollTo(0, 0),
        mailsentbox.classList.add('visible'),
        setTimeout(() => {
            mailsentbox.classList.remove('visible')
        }, 3000)
    );
}

form.addEventListener('submit', sendMsg);