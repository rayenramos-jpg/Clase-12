            new Chart(document.getElementById("dispersion"), {
                type: "bar",
                data: {
                    datasets: [
                        {
                            label: "Tendencias",
                            data: [
                                { x: "Tecnología, Interacción y Medios", y: 55 },
                                { x: "Territorio, Identidad y Memoria", y: 61 },
                                { x: "Ecología, Materialidad y Futuros", y: 68 },
                                { x: "Educación, Activismo y Género", y: 72 },
                                { x: "Salud, Cuidado y Neurodiversidad", y: 78 },
                            ],
                            backgroundColor: "rgba(241,142,45,.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
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
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        "Área de Tendencia de " + point.y + " Alumnos",
                                    ];
                                },
                            },
                        },
                    },
                },
            });
			
			
           new Chart(document.getElementById("otro"), {
                type: "bar",
                data: {
                    datasets: [
											{
                            label: "Educación, Activismo y Género",
                            data: [
                                { name: "Educación, Activismo y Género", x: "Felipe Cortez O.", y: 5.9, cantidad: 4 },
                                { name: "Educación, Activismo y Género", x: "Jenny Abud C.", y: 6.5, cantidad: 5 },
                                { name: "Educación, Activismo y Género", x: "Roberto Osses F.", y: 6.0, cantidad: 1 },
                                { name: "Educación, Activismo y Género", x: "Leonardo Soto C.", y: 5.6, cantidad: 5 },
                                { name: "Educación, Activismo y Género", x: "Rubén Jacob D.", y: 6.5, cantidad: 5 },
                                { name: "Educación, Activismo y Género", x: "Rodrigo Dueñas S.", y: 6.1, cantidad: 9 },
                                { name: "Educación, Activismo y Género", x: "Eduardo Castillo E.", y: 6.3, cantidad: 3 },
                                { name: "Educación, Activismo y Género", x: "Veronica Ode S.", y: 6.2, cantidad: 4 },
                                { name: "Educación, Activismo y Género", x: "Pablo Domínguez G.", y: 5.4, cantidad: 4 },
                            ],
                            backgroundColor: "rgba(185, 115, 222, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
                        },
						
                        {
                            label: "Tecnología, Interacción y Medios",
                            data: [
                                { name: "Tecnología, Interacción y Medios", x: "Felipe Cortez O.", y: 5.7, cantidad: 1 },
                                { name: "Tecnología, Interacción y Medios", x: "Jenny Abud C.", y: 6.3, cantidad: 2 },
                                { name: "Tecnología, Interacción y Medios", x: "Roberto Osses F.", y: 5.9, cantidad: 9 },
                                { name: "Tecnología, Interacción y Medios", x: "Leonardo Soto C.", y: 4.5, cantidad: 1 },
                                { name: "Tecnología, Interacción y Medios", x: "Rodrigo Dueñas S.", y: 5.0, cantidad: 2 },
                                { name: "Tecnología, Interacción y Medios", x: "Eduardo Castillo E.", y: 7.0, cantidad: 1 },
                                { name: "Tecnología, Interacción y Medios", x: "Veronica Ode S.", y: 6.1, cantidad: 5 },
                                { name: "Tecnología, Interacción y Medios", x: "Pablo Domínguez G.", y: 5.5, cantidad: 5 },
                            ],
                            backgroundColor: "rgba(141, 234, 218, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        
					{
                            label: "Territorio, Identidad y Memoria",
                            data: [
                                { name: "Territorio, Identidad y Memoria", x: "Felipe Cortez O.", y: 6.7, cantidad: 3 },
                                { name: "Territorio, Identidad y Memoria", x: "Jenny Abud C.", y: 6.0, cantidad: 1 },
                                { name: "Territorio, Identidad y Memoria", x: "Leonardo Soto C.", y: 5.6, cantidad: 1 },
                                { name: "Territorio, Identidad y Memoria", x: "Rodrigo Dueñas S.", y: 6.3, cantidad: 5 },
                                { name: "Territorio, Identidad y Memoria", x: "Eduardo Castillo E.", y: 6.3, cantidad: 13 },
                                { name: "Territorio, Identidad y Memoria", x: "Veronica Ode S.", y: 5.9, cantidad: 11 },
                                { name: "Territorio, Identidad y Memoria", x: "Pablo Domínguez G.", y: 6.8, cantidad: 1 },
                            ],
                            backgroundColor: "rgba(231, 155, 84, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
                        },
						
											{
                            label: "Ecología, Materialidad y Futuros",
                            data: [
                                { name: "Ecología, Materialidad y Futuros", x: "Jenny Abud C.", y: 4.9, cantidad: 2 },
                                { name: "Ecología, Materialidad y Futuros", x: "Roberto Osses F.", y: 6.5, cantidad: 1 },
                                { name: "Ecología, Materialidad y Futuros", x: "Leonardo Soto C.", y: 5.7, cantidad: 2 },
                                { name: "Ecología, Materialidad y Futuros", x: "Rubén Jacob D.", y: 6.1, cantidad: 3 },
                                { name: "Ecología, Materialidad y Futuros", x: "Rodrigo Dueñas S.", y: 6.0, cantidad: 1 },
                                { name: "Ecología, Materialidad y Futuros", x: "Pablo Domínguez G.", y: 5.3, cantidad: 13 },
                            ],
                            backgroundColor: "rgba(117, 222, 115, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
											},
											{
                            label: "Salud, Cuidado y Neurodiversidad",
                            data: [
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Felipe Cortez O.", y: 5.7, cantidad: 3 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Jenny Abud C.", y: 6.0, cantidad: 1 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Leonardo Soto C.", y: 5.2, cantidad: 3 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Rubén Jacob D.", y: 7.0, cantidad: 6 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Eduardo Castillo E.", y: 7.0, cantidad: 2 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Veronica Ode S.", y: 5.6, cantidad: 5 },
                                { name: "Salud, Cuidado y Neurodiversidad", x: "Pablo Domínguez G.", y: 5.8, cantidad: 20 },
                            ],
                            backgroundColor: "rgba(115, 117, 222, 0.8)",
                            pointRadius: 5,
                            pointHoverRadius: 6,
                        },
                     
                    ],
                },
                options: {
                    scales: {
                        x: {
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
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
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
							min: 4.0,
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
                        legend: { display: true }, 
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
							mode: 'point',
							intersect: true,

                            callbacks: {
								
                                label: function (context) {
                                    const point = context.raw;

                                    return [
                                        point.name,
                                        "Títulos guiados por " + point.x,
                                        "Promedio de Notas por Tendencia: " + point.y.toLocaleString("es-CL"),
										"Cantidad de Alumnos Guiados: " + point.cantidad,
										
                                    ];
                                },
                            },
                        },
                    },
                },
            });		
