window.addEventListener('scroll', function () {
    var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let headerPos = $('header');
    if (posTop > window.innerHeight && window.innerWidth > 768) {
        headerPos.addClass('header');
    } else {
        headerPos.removeClass('header')
    }
})

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
    let nav = document.querySelector('.nav__list');
    nav.classList.toggle('nav-bottom');
})

var data = {
    service_id: 'service_aqvf7jb',
    template_id: 'template_83fcdw4',
    user_id: 'user_5Igvm9GKX304NKMm6ShW9',
    template_params: {
        'username': 'James',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function () {
//     alert('Your mail is sent!');
// }).fail(function (error) {
//     alert('Oops... ' + JSON.stringify(error));
// });

$('#myForm').on('submit', function (event) {
    event.preventDefault(); // prevent reload
    var formData = new FormData(this);
    formData.append('service_id', 'service_aqvf7jb');
    formData.append('template_id', 'template_83fcdw4');
    formData.append('user_id', 'user_5Igvm9GKX304NKMm6ShW9');
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        alert('Your mail is sent!');
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});
// let headerMobPos = function () {
//     let header = document.querySelector('header');
//     console.log(header);
//     header.style.top = innerHeight + 'px';
// }
// headerMobPos();