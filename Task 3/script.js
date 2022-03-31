let temperature_form = document.getElementById('temperature_form');
temperature_form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("Btn is clicked...");

    let degrees = document.getElementById("degrees").value;
    console.log(degrees);

    let type = document.getElementById("type").value;
    console.log(type);

    let result = ''
    if (type === "Celsius") {
        result = `${(degrees * 9 / 5) + 32}`
    }
    if (type === "Fahrenheit") {
        result = `${(degrees - 32) * 5 / 9}`
    }

    console.log(result);

    document.getElementById('result').value = result;
})
// console.log("");