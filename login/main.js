
function facultyClicked(cb) {
    if (cb.checked) {
        document.getElementsByName('regno')[0].placeholder="Email";
    }
    else {
        document.getElementsByName('regno')[0].placeholder="Registration No";
    }
}
