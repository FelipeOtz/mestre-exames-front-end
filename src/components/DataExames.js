//http://54.94.200.75:8080/exame/

const exames = [
    {
        "id":1,
        "nome":"Hemograma Completo",
        "descricao":"O Hemograma é o exame das céluas do sangue. Nese são analisadas separadamente os três tipos de células do sangue",
        "recomendacao":"Três horas de jejum",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/2x/external-chemistry-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id":2,
        "nome":"Glicose",
        "descricao":"Esse é um exame de teste e voce pode ler aqui sua descrição com todos os detalhes",
        "recomendacao":"Jejum de 3 Horas",
        "valor":12.0,
        "duracao":15,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/2x/external-chemistry-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id":3,
        "nome":"Colesterol Total",
        "descricao":"É recomendado que pessoas sem fatores de risco para doenças cardiovasculares meçam periodicamente seus níveis de colesterol a partir dos 35 anos (homens) e 45 anos (mulheres)",
        "recomendacao":"Jejum de 2 Horas",
        "valor":12.0,
        "duracao":15,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id":4,
        "nome":"D-25 Hidroxi",
        "descricao":"O exame é indicado em pacientes idosos e mulheres após a menopausa, pois as alterações hormonais naturais da idade podem provocar fragilidade dos ossos. Pessoas com doenças do rim e do fígado também devem fazer esse exame, pois a ativação da vitamina nesses órgãos pode estar afetada.",
        "recomendacao":"Sem recomendações prévias para este exame.",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-lab-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id": 5,
        "nome":"Desoxicortisol",
        "descricao":"O 11-desoxicortisol é um hormônio esteroide formado na glândula adrenal em resposta a ação da enzima11-hidroxilase. É solicitado no diagnóstico e tratamento de pacientes com hiperplasia adrenal congênita devido à deficiência de 11-hidroxilase.",
        "recomendacao":"Ficar sentado",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id":6,
        "nome":"Ácido Fórmico - Urina",
        "descricao":"Esse é um exame de teste e voce pode ler aqui sua descrição com todos os detalhes",
        "recomendacao":"Coletar a Urina no frasco estéril no final de jornada",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-lab-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id":7,
        "nome":"Alfa-Hidroxiprogesterona",
        "descricao":"hormônio esteroide produzido em conjunto com o cortisol. É solicitado para diagnóstico e tratamento de pacientes com hiperplasia adrenal congênita, uma doença que diminui o cortisol e aumenta a produção de andrógenos (hormônios sexuais masculinos).",
        "recomendacao":"Ficar sentado",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id": 8,
        "nome":"COVID-19 – Antígeno",
        "descricao":"Este exame é realizado em dispositivo de teste rápido para detecção qualitativa do vírus com método de imunocromatografia.",
        "recomendacao":"Sem recomendações prévias para este exame.",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-virus-virus-xnimrodx-lineal-color-xnimrodx-3.png"
    },
    {
        "id": 9,
        "nome":"COVID-19 – PCR",
        "descricao":"O Teste de Coronavírus (PCR) é um exame genético para detecção do coronavírus desde os primeiros dias de infecção. O método PCR (reação em cadeia da polimerase em tempo real) consiste na coleta de secreções do nariz e garganta, permitindo detectar o vírus com altíssima precisão nos primeiros dias dos sintomas graves.",
        "recomendacao":"Sem recomendações prévias para este exame.",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-virus-virus-xnimrodx-lineal-color-xnimrodx-3.png"
    },
    {
        "id": 10,
        "nome":"Teste de Hepatite B",
        "descricao":"Esse é um exame de teste e voce pode ler aqui sua descrição com todos os detalhes",
        "recomendacao":"Ficar sentado",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-lab-virus-xnimrodx-lineal-color-xnimrodx-2.png"
    },
    {
        "id": 11,
        "nome":"TSH – Hormônio Tireoestimulante",
        "descricao":"Esse é um exame de teste e voce pode ler aqui sua descrição com todos os detalhes",
        "recomendacao":"Ficar sentado",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
    {
        "id": 12,
        "nome":"Teste Genético de Intolerância à Lactose",
        "descricao":"Esse é um exame de teste e voce pode ler aqui sua descrição com todos os detalhes",
        "recomendacao":"Ficar sentado",
        "valor":12.0,
        "duracao":30,
        "icon": "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png"
    },
]

export default exames;