new Chart(document.getElementById("tipos"), {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Programas",
                data: [
                    { x: "Institutos Profesionales (IP)", y: 141 },
                    { x: "Universidades", y: 50 },
                    { x: "Centros de Formación Técnica (CFT)", y: 6 },
                ],
                backgroundColor: ["rgba(232,87,26,1)", "rgba(241,142,45,.5)", "rgba(241,142,45,.5)"],
                borderColor: "rgba(232,87,26,1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            x: {
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return this.getLabelForValue(value);
                    },
                },
            },
            y: {
                beginAtZero: true,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        const pct = ((point.y / 197) * 100).toFixed(1);
                        return point.y.toLocaleString("es-CL") + " programas (" + pct + "%)";
                    },
                },
            },
        },
    },
});

new Chart(document.getElementById("aranceles"), {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Arancel anual promedio (CLP)",
                data: [
                    { x: "CFT", y: 2235124 },
                    { x: "IP", y: 2894766 },
                    { x: "Universidades", y: 6102443 },
                ],
                backgroundColor: ["rgba(241,142,45,.5)", "rgba(241,142,45,.5)", "rgba(232,87,26,1)"],
                borderColor: "rgba(232,87,26,1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            x: {
                grid: { display: false },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return this.getLabelForValue(value);
                    },
                },
            },
            y: {
                beginAtZero: true,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$" + (value / 1000000).toLocaleString("es-CL") + "M";
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return point.y.toLocaleString("es-CL", {
                            style: "currency",
                            currency: "CLP",
                            maximumFractionDigits: 0,
                        });
                    },
                },
            },
        },
    },
});

const t = document.querySelector("#este");

fetch("datos.json")
    .then((respuesta) => {
        if (!respuesta.ok) throw new Error("Error HTTP: " + respuesta.status);
        return respuesta.json();
    })
    .then((datos) => {
        datos.forEach((x, i) => {
            t.innerHTML += `<tr>
                <td>${i + 1}</td>
                <td>${x.carrera}</td>
                <td>${x.institucion}</td>
                <td>${x.tipo}</td>
                <td>${x.acreditacion}</td>
                <td>${x.region}</td>
                <td>${x.arancel}</td>
            </tr>`;
        });
    })
    .catch((error) => console.error("Algo salió mal:", error));

function sinAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.getElementById("elInput").addEventListener("keyup", function () {
    const valor = sinAcentos(this.value.toLowerCase());
    document.querySelectorAll("#este tr").forEach(function (fila) {
        fila.style.display = sinAcentos(fila.textContent.toLowerCase()).includes(valor) ? "" : "none";
    });
});
