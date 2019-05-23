function calculate() {
    var netIncome = Number(document.getElementById('netIncome').value);
    var coh = Number(document.getElementById('coh').value);
    var cib = Number(document.getElementById('cib').value);
    var gas = Number(document.getElementById('gas').value);
    var total = netIncome + coh + cib + gas;
    document.getElementById('total').innerText = total;
    document.getElementById('result').innerText = total / 40;
}

function reset() {
    document.getElementById('result').innerText = '';
    document.getElementById('total').innerText = '';
    document.getElementById('netIncome').value = '';
    document.getElementById('coh').value = '';
    document.getElementById('cib').value = '';
    document.getElementById('gas').value = '';
}

function showSideBar(a) {
    document.getElementById('aside').className = 'show';
}

function closeSideBar() {
    document.getElementById('aside').className = 'hide';
}