function add(value) {
    document.getElementById('txt').value += value;
}

function calculate() {
    try {
        var txt = eval(document.getElementById('txt').value);
        document.getElementById('txt').value = txt;
    } catch (error) {
        document.getElementById('txt').value = 'Error';
    }
}

function clearText() {
    document.getElementById('txt').value = '';
}
