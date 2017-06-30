var jsonData = [{
        "name": "Laurens, Mulligan and Lafayette",
        "apy": 0.75,
        "earnings": 376.41
    }, {
        "name": "A. Hamilton Bank",
        "apy": 0.87,
        "earnings": 436.89
    },
    {
        "name": "Angelica, Eliza and Peggy Investments",
        "apy": 0.01,
        "earnings": 5.00
    },
    {
        "name": "Reynolds Inc.",
        "apy": 0.01,
        "earnings": 5.00
    },
    {
        "name": "Jefferson-Burr Holdings",
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



$(".tabButton").on("click", function () {
    var clickedButton = this.id;

    if (clickedButton === "newsButton") {
        console.log("news");

        $("#newsButton").removeClass("passiveTab");
        $("#newsButton").addClass("activeTab");
        $("#archiveButton").addClass("passiveTab");

        $("#news").removeClass("passiveDiv");
        $("#news").addClass("activeDiv");
        $("#archive").addClass("passiveDiv");

    }

    if (clickedButton === "archiveButton") {
        console.log("archive");
        $("#archiveButton").removeClass("passiveTab");
        $("#archiveButton").addClass("activeTab");
        $("#newsButton").addClass("passiveTab");

        $("#archive").removeClass("passiveDiv");
        $("#archive").addClass("activeDiv");
        $("#news").addClass("passiveDiv");
    }

});







var dialog = document.querySelector('dialog');
$("#clickMe").on("click", function () {
    dialog.show();
});

$("#submitLogin").on("click", function () {
    event.preventDefault();
    dialog.close();

});

$("#closeModal").on("click", function () {
    dialog.close();
});

