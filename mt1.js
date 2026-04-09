document.getElementById("btn").addEventListener("click", generatePattern);

function generatePattern() {
    let n = parseInt(document.getElementById("num").value);
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += j + " ";
        }
        result += "\n";
    }

    document.getElementById("output").innerText = result;
}