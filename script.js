const datos = [
    {"carrera": "Bachillerato En Artes, Arquitectura Y Diseño", "institucion": "U. Finis Terrae", "tipo": "Universidad", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$7.200.000"},
    {"carrera": "Bachillerato En Diseño", "institucion": "U. Del Desarrollo", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$10.402.942"},
    {"carrera": "Desarrollo Y Diseño Web", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "-", "arancel": "$2.900.000"},
    {"carrera": "Diseño", "institucion": "Pontificia U. Catolica De Valparaiso", "tipo": "Universidad", "acreditacion": "7 años", "region": "Valparaíso", "arancel": "$6.915.000"},
    {"carrera": "Diseño", "institucion": "U. De Chile", "tipo": "Universidad", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$6.486.700"},
    {"carrera": "Diseño", "institucion": "Pontificia U. Catolica De Chile", "tipo": "Universidad", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$8.080.000"},
    {"carrera": "Diseño", "institucion": "U. De Valparaiso", "tipo": "Universidad", "acreditacion": "6 años", "region": "Valparaíso", "arancel": "$5.713.000"},
    {"carrera": "Diseño", "institucion": "U. Diego Portales", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$7.597.000"},
    {"carrera": "Diseño", "institucion": "U. Del Desarrollo", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$9.791.004"},
    {"carrera": "Diseño", "institucion": "U. De Talca", "tipo": "Universidad", "acreditacion": "6 años", "region": "Maule", "arancel": "$5.887.000"},
    {"carrera": "Diseño", "institucion": "U. Del Desarrollo", "tipo": "Universidad", "acreditacion": "6 años", "region": "Biobío", "arancel": "$6.078.582"},
    {"carrera": "Diseño", "institucion": "U. Austral De Chile", "tipo": "Universidad", "acreditacion": "6 años", "region": "Los Ríos", "arancel": "$5.887.000"},
    {"carrera": "Diseño", "institucion": "U. De La Serena", "tipo": "Universidad", "acreditacion": "5 años", "region": "Coquimbo", "arancel": "$4.071.000"},
    {"carrera": "Diseño", "institucion": "U. De Playa Ancha De Ciencias De La Educacion", "tipo": "Universidad", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$4.305.000"},
    {"carrera": "Diseño", "institucion": "U. Finis Terrae", "tipo": "Universidad", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$7.320.000"},
    {"carrera": "Diseño", "institucion": "U. De Las Américas", "tipo": "Universidad", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$4.730.000"},
    {"carrera": "Diseño", "institucion": "U. Catolica De Temuco", "tipo": "Universidad", "acreditacion": "5 años", "region": "La Araucanía", "arancel": "$5.276.000"},
    {"carrera": "Diseño", "institucion": "U. De Viña Del Mar", "tipo": "Universidad", "acreditacion": "4 años", "region": "Valparaíso", "arancel": "$4.277.000"},
    {"carrera": "Diseño De Ambientes", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Valparaíso", "arancel": "$3.100.000"},
    {"carrera": "Diseño De Ambientes", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.290.000"},
    {"carrera": "Diseño De Ambientes", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.340.000"},
    {"carrera": "Diseño De Ambientes", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.340.000"},
    {"carrera": "Diseño De Juegos Digitales", "institucion": "U. Andres Bello", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$7.136.000"},
    {"carrera": "Diseño De Juegos Digitales", "institucion": "U. Andres Bello", "tipo": "Universidad", "acreditacion": "6 años", "region": "Biobío", "arancel": "$5.069.000"},
    {"carrera": "Diseño De Moda Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Coquimbo", "arancel": "$3.579.000"},
    {"carrera": "Diseño De Moda Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.579.000"},
    {"carrera": "Diseño De Moda Y Management", "institucion": "U. Finis Terrae", "tipo": "Universidad", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$7.320.000"},
    {"carrera": "Diseño De Vestuario", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Valparaíso", "arancel": "$3.110.000"},
    {"carrera": "Diseño De Vestuario", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.510.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.320.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.270.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.710.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.420.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.210.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.210.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.070.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.070.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "O'Higgins", "arancel": "$2.580.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "O'Higgins", "arancel": "$2.550.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.600.000"},
    {"carrera": "Diseño De Vestuario Mencion Alta Costura", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.330.000"},
    {"carrera": "Diseño De Vestuario Y Textil", "institucion": "U. Andres Bello", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$7.148.000"},
    {"carrera": "Diseño De Videojuegos", "institucion": "U. Gabriela Mistral", "tipo": "Universidad", "acreditacion": "4 años", "region": "Metropolitana", "arancel": "$4.814.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Arica", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Tarapacá", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Coquimbo", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Valparaíso", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "O'Higgins", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "O'Higgins", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Maule", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Ñuble", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Biobío", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "La Araucanía", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Los Ríos", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Profesional", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Los Lagos", "arancel": "$3.288.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Arica", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Tarapacá", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Tarapacá", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Antofagasta", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Coquimbo", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Coquimbo", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Valparaíso", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "O'Higgins", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "O'Higgins", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Maule", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Ñuble", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Biobío", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Biobío", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "La Araucanía", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Los Ríos", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Los Lagos", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Los Lagos", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Aysén", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Magallanes", "arancel": "$2.921.000"},
    {"carrera": "Diseño Digital Y Web", "institucion": "Ip Inacap", "tipo": "IP", "acreditacion": "7 años", "region": "Magallanes", "arancel": "$2.921.000"},
    {"carrera": "Diseño En Animacion Digital", "institucion": "U. Gabriela Mistral", "tipo": "Universidad", "acreditacion": "4 años", "region": "Metropolitana", "arancel": "$4.814.000"},
    {"carrera": "Diseño En Comunicacion Visual", "institucion": "U. De Santiago De Chile", "tipo": "Universidad", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$6.552.000"},
    {"carrera": "Diseño En Comunicacion Visual", "institucion": "U. Tecnologica Metropolitana", "tipo": "Universidad", "acreditacion": "4 años", "region": "Metropolitana", "arancel": "$4.763.300"},
    {"carrera": "Diseño En Interaccion Digital", "institucion": "U. Gabriela Mistral", "tipo": "Universidad", "acreditacion": "4 años", "region": "Metropolitana", "arancel": "$4.814.000"},
    {"carrera": "Diseño En Marketing Digital", "institucion": "U. Gabriela Mistral", "tipo": "Universidad", "acreditacion": "4 años", "region": "Metropolitana", "arancel": "$4.814.000"},
    {"carrera": "Diseño Grafico", "institucion": "U. Andres Bello", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$7.065.000"},
    {"carrera": "Diseño Grafico", "institucion": "U. Del Bio-Bio", "tipo": "Universidad", "acreditacion": "5 años", "region": "Ñuble", "arancel": "$4.307.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$3.054.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.510.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.520.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Coquimbo", "arancel": "$3.149.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Valparaíso", "arancel": "$3.110.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.700.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.530.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.610.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.440.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.440.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.440.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.440.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.075.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.900.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.570.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.900.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.680.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.680.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "O'Higgins", "arancel": "$3.200.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "O'Higgins", "arancel": "$2.730.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Maule", "arancel": "$2.944.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Biobío", "arancel": "$3.110.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.660.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.510.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.520.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Los Ríos", "arancel": "$3.074.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Los Lagos", "arancel": "$2.712.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Los Lagos", "arancel": "$2.740.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.520.000"},
    {"carrera": "Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Los Lagos", "arancel": "$2.670.000"},
    {"carrera": "Diseño Grafico Digital", "institucion": "Ip Latinoamericano De Comercio Exterior - Iplacex", "tipo": "IP", "acreditacion": "4 años", "region": "-", "arancel": "$2.154.000"},
    {"carrera": "Diseño Grafico Mencion Diseño Estrategico", "institucion": "U. De Antofagasta", "tipo": "Universidad", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$5.120.000"},
    {"carrera": "Diseño Industrial", "institucion": "U. De Santiago De Chile", "tipo": "Universidad", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$4.989.000"},
    {"carrera": "Diseño Industrial", "institucion": "U. Del Bio-Bio", "tipo": "Universidad", "acreditacion": "5 años", "region": "Biobío", "arancel": "$4.434.000"},
    {"carrera": "Diseño Industrial", "institucion": "U. Tecnologica Metropolitana", "tipo": "Universidad", "acreditacion": "4 años", "region": "Metropolitana", "arancel": "$4.891.000"},
    {"carrera": "Diseño Industrial E Innovacion En Productos", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Valparaíso", "arancel": "$3.090.000"},
    {"carrera": "Diseño Industrial E Innovacion En Productos", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.320.000"},
    {"carrera": "Diseño Industrial E Innovacion En Productos", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.320.000"},
    {"carrera": "Diseño Industrial E Innovacion En Productos", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$3.320.000"},
    {"carrera": "Diseño Industrial E Innovacion En Productos", "institucion": "Ip Duoc Uc", "tipo": "IP", "acreditacion": "7 años", "region": "Biobío", "arancel": "$3.070.000"},
    {"carrera": "Diseño Mencion Industrial/Grafico/Ambientes", "institucion": "U. Mayor", "tipo": "Universidad", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$7.214.218"},
    {"carrera": "Diseño Multimedia", "institucion": "U. De Tarapaca", "tipo": "Universidad", "acreditacion": "6 años", "region": "Arica", "arancel": "$6.555.000"},
    {"carrera": "Diseño Teatral", "institucion": "U. De Chile", "tipo": "Universidad", "acreditacion": "7 años", "region": "Metropolitana", "arancel": "$5.492.400"},
    {"carrera": "Ingenieria En Diseño", "institucion": "U. Adolfo Ibañez", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$9.791.004"},
    {"carrera": "Ingenieria En Diseño De Productos", "institucion": "U. Tecnica Federico Santa Maria", "tipo": "Universidad", "acreditacion": "6 años", "region": "Valparaíso", "arancel": "$6.000.000"},
    {"carrera": "Ingenieria En Diseño De Productos", "institucion": "U. Tecnica Federico Santa Maria", "tipo": "Universidad", "acreditacion": "6 años", "region": "Metropolitana", "arancel": "$6.000.000"},
    {"carrera": "Ingenieria En Fabricacion Y Diseño Industrial", "institucion": "U. Tecnica Federico Santa Maria", "tipo": "Universidad", "acreditacion": "6 años", "region": "Valparaíso", "arancel": "$5.180.000"},
    {"carrera": "Ingenieria En Realidad Virtual Y Diseño De Juegos Digitales", "institucion": "U. Bernardo O'Higgins", "tipo": "Universidad", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$5.900.000"},
    {"carrera": "Tecnico De Nivel Superior En Diseño Y Animacion Digital", "institucion": "Cft De La Región De Coquimbo", "tipo": "CFT", "acreditacion": "Bajo Tutela", "region": "Coquimbo", "arancel": "$2.226.604"},
    {"carrera": "Tecnico De Nivel Superior En Diseño Y Animacion Digital", "institucion": "Cft De La Región De Coquimbo", "tipo": "CFT", "acreditacion": "Bajo Tutela", "region": "Coquimbo", "arancel": "$2.226.604"},
    {"carrera": "Tecnico De Nivel Superior En Diseño Y Marketing Digital", "institucion": "Cft De La Región Metropolitana De Santiago", "tipo": "CFT", "acreditacion": "Bajo Tutela", "region": "Metropolitana", "arancel": "$2.239.384"},
    {"carrera": "Tecnico De Nivel Superior En Diseño Y Marketing Digital", "institucion": "Cft De La Región Metropolitana De Santiago", "tipo": "CFT", "acreditacion": "Bajo Tutela", "region": "Metropolitana", "arancel": "$2.239.384"},
    {"carrera": "Tecnico De Nivel Superior En Diseño Y Marketing Digital", "institucion": "Cft De La Región Metropolitana De Santiago", "tipo": "CFT", "acreditacion": "Bajo Tutela", "region": "Metropolitana", "arancel": "$2.239.384"},
    {"carrera": "Tecnico De Nivel Superior En Diseño Y Marketing Digital", "institucion": "Cft De La Región Metropolitana De Santiago", "tipo": "CFT", "acreditacion": "Bajo Tutela", "region": "Metropolitana", "arancel": "$2.239.384"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.320.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.270.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Coquimbo", "arancel": "$2.710.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Coquimbo", "arancel": "$2.660.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.710.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.420.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.210.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.210.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.070.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$3.070.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "O'Higgins", "arancel": "$2.580.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "O'Higgins", "arancel": "$2.550.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.580.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.600.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.620.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.330.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "La Araucanía", "arancel": "$2.660.000"},
    {"carrera": "Tecnico En Diseño De Vestuario", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "La Araucanía", "arancel": "$2.620.000"},
    {"carrera": "Tecnico En Diseño De Videojuegos", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.994.000"},
    {"carrera": "Tecnico En Diseño De Videojuegos", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Los Ríos", "arancel": "$3.052.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.540.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Antofagasta", "arancel": "$2.540.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "Atacama", "arancel": "$2.795.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.700.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Valparaíso", "arancel": "$2.620.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip De Chile", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$1.825.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.570.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.570.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.550.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Metropolitana", "arancel": "$2.550.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "O'Higgins", "arancel": "$2.680.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.630.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.510.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.620.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "Biobío", "arancel": "$2.500.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Santo Tomas", "tipo": "IP", "acreditacion": "5 años", "region": "La Araucanía", "arancel": "$2.754.000"},
    {"carrera": "Tecnico En Diseño Grafico", "institucion": "Ip Aiep", "tipo": "IP", "acreditacion": "5 años", "region": "-", "arancel": "$2.680.000"},
    {"carrera": "Tecnico En Diseño Y Contenido Para Plataformas Digitales", "institucion": "Ip De Chile", "tipo": "IP", "acreditacion": "5 años", "region": "-", "arancel": "$1.820.000"}
];

const t = document.querySelector("#este");

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

function sinAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.getElementById("elInput").addEventListener("keyup", function () {
    const valor = sinAcentos(this.value.toLowerCase());
    document.querySelectorAll("#este tr").forEach(function (fila) {
        fila.style.display = sinAcentos(fila.textContent.toLowerCase()).includes(valor) ? "" : "none";
    });
});

if (typeof Chart !== "undefined") {

    new Chart(document.getElementById("tipos"), {
        type: "bar",
        data: {
            datasets: [
                {
                    label: "Programas",
                    data: [
                        { x: "Institutos Profesionales (IP)", y: 141 },
                        { x: "Universidades", y: 41 },
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
                        callback: function (value) { return this.getLabelForValue(value); },
                    },
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "rgba(0,0,0,0.06)" },
                    border: { color: "#bbb", dash: [4, 4] },
                    ticks: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                        callback: function (value) { return value.toLocaleString("es-CL"); },
                    },
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#fff", borderColor: "#ddd", borderWidth: 1,
                    titleColor: "#111", bodyColor: "#555",
                    titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                    bodyFont: { family: "'Georama', sans-serif", size: 11 },
                    padding: 10,
                    callbacks: {
                        label: function (context) {
                            const point = context.raw;
                            const pct = ((point.y / 188) * 100).toFixed(1);
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
                        callback: function (value) { return this.getLabelForValue(value); },
                    },
                },
                y: {
                    beginAtZero: true,
                    grid: { color: "rgba(0,0,0,0.06)" },
                    border: { color: "#bbb", dash: [4, 4] },
                    ticks: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                        callback: function (value) { return "$" + (value / 1000000).toLocaleString("es-CL") + "M"; },
                    },
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#fff", borderColor: "#ddd", borderWidth: 1,
                    titleColor: "#111", bodyColor: "#555",
                    titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                    bodyFont: { family: "'Georama', sans-serif", size: 11 },
                    padding: 10,
                    callbacks: {
                        label: function (context) {
                            const point = context.raw;
                            return point.y.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
                        },
                    },
                },
            },
        },
    });

}
