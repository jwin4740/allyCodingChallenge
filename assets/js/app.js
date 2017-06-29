

var jsonData = [{
        "name": "Big Guy Financial",
        "apy": 0.75,
        "earnings": 376.41
    }, {
        "name": "URBank",
        "apy": 0.87,
        "earnings": 436.89
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

// sorts data by apy
function sortData(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        }
        return 0;
    }
}

jsonData.sort(sortData("apy"));

for (var i = 0; i < dataLength; i++) {
    var novoRow = $("<tr class='tRow'>");
    var novoColumnBank = $("<td class='bankName'>");
    novoColumnBank.text(jsonData[i]["name"]);
    var novoColumnapy = $("<td class='apy'>");
    novoColumnapy.text(jsonData[i]["apy"] + " %");
    var novoColumnEarnings = $("<td class='earnings'>");
    novoColumnEarnings.text("$" + (jsonData[i]["earnings"]).toFixed(2));
    novoRow.append(novoColumnBank).append(novoColumnapy).append(novoColumnEarnings);

    $("tbody").append(novoRow);
}