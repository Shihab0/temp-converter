let celsius = document.getElementById('celsius');
let farenheit = document.getElementById('farenheit');

celsius.oninput = () => {
    let result = (parseFloat(celsius.value)*9/5 + 32);
    farenheit.value = (parseFloat(result).toFixed(2));
}

farenheit.oninput = () => {
    let result = ((parseFloat(farenheit.value)-32) * 5/9);
    celsius.value = (parseFloat(result).toFixed(2));
}
