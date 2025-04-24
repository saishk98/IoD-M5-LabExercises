document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateBtn").addEventListener("click", function() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let operation = document.getElementById("operation").value;

        if (!num1 || !num2) {
            alert("Please enter both numbers.");
            return;
        }

        axios.get(`/calculator/${operation}?num1=${num1}&num2=${num2}`)
            .then(response => {
                document.getElementById("result").textContent = response.data.result;
            })
            .catch(error => {
                console.error("Error fetching result:", error);
            });
    });
});
