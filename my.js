function testGS() {
   const url= "https://script.google.com/macros/s/AKfycby1kPw9qf6U5v95sS7ar7dwp2JG7kD0lPHqpLlOJGl9hixsDO2niCl5-teG7yipocqcrA/exec"
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}
document.getElementById("btn").addEventListener("click", testGS);
