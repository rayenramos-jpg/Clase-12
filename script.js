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
                // IP destacado; los otros dos más apagados para reforzar la concentración
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
 
/* ──────────────────────────────────────────────
   VISUALIZACIÓN 4 — Arancel anual promedio por tipo
   Canvas en el HTML: <canvas id="aranceles"></canvas>
   Promedios reales (CLP) calculados desde acceso-sup
   ────────────────────────────────────────────── */
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
                // Universidades destacado: cuestan más del doble que un IP
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
                    // Eje en millones para que sea legible: 2M, 4M, 6M…
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
 
