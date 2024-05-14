
        async function cambiar() {
            const red = document.querySelector(".uno");
            const yellow = document.querySelector(".dos");
            const green = document.querySelector(".tres");

            red.style.backgroundColor = "red";
            await new Promise(resolve => setTimeout(resolve, 2000));
            red.style.backgroundColor = "#e0e0e0";
            yellow.style.backgroundColor = "yellow";

            await new Promise(resolve => setTimeout(resolve, 2000));
            yellow.style.backgroundColor = "#e0e0e0";
            green.style.backgroundColor = "green";

            await new Promise(resolve => setTimeout(resolve, 2000));
            green.style.backgroundColor = "#e0e0e0";

            cambiar();
        }

        // Inicia el ciclo
        cambiar();
    