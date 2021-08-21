function moveMenu() {
    let menu = document.getElementById('bar');
    if (menu.classList.contains('hide'))
        menu.classList.remove('hide');
    else
        menu.classList.add('hide');

}