// changed JSON order to put the top earnings on top
// could have sorted the data if I didn't have physical access to the JSON

var jsonData = [{
        "name": "URBank",
        "apy": 0.87,
        "earnings": 436.89
    }, {
        "name": "Big Guy Financial",
        "apy": 0.75,
        "earnings": 376.41
    },
    {
        "name": "Dewey, Cheatam & Howe",
        "apy": 0.01,
        "earnings": 5.00
    },
    {
        "name": "First Onion",
        "apy": 0.01,
        "earnings": 5.00
    },
    {
        "name": "Bank of Everywhere",
        "apy": 0.01,
        "earnings": 5.00
    }
];
var dataLength = jsonData.length;
console.log(jsonData[0]["name"]);
console.log(jsonData.length);
// construct table row

for (var i = 0; i < dataLength; i++) {

    var novoRow = $("<tr class='tRow'>");
    var novoColumnBank = $("<td class='bankName'>");
    novoColumnBank.text(jsonData[i]["name"]);
    var novoColumnapy = $("<td class='apy'>");
    novoColumnapy.text(jsonData[i]["apy"]);
    var novoColumnEarnings = $("<td class='earnings'>");
    novoColumnEarnings.text(jsonData[i]["earnings"]);
    novoRow.append(novoColumnBank).append(novoColumnapy).append(novoColumnEarnings);


    $("tbody").append(novoRow);
}