function setTabLogin(event, tabName) {
    for (f of $('.form')) {
        f.style.display = 'none';
    }
    for (t of $('.tab')) {
        t.className = t.className.replace(' is-active', '');
    }
    $('#' + tabName).show();
    event.currentTarget.className += ' is-active';
}