let submit = document.getElementById('submit');
let main_img = document.getElementById('main_img');
let inputFile = document.getElementById('update_img');
submit.addEventListener('click', function () {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let msg = document.getElementById('msg');

    if (name.value == '' || email.value == '' || msg.value == '')
        alert('Fill all Details')
    else {
        alert('Message send Succesfully.')
    }
})

inputFile.onchange = function () {
    main_img.src = URL.createObjectURL(inputFile.files[0]);
}