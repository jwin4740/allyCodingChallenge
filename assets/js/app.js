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

// function that takes a property from the json data as a parameter
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
// sorts data by annual percentage yield
jsonData.sort(sortData("apy"));

// loops through the json data and dynamically adds rows to the table
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


// function "toggles" the right dual tab pane
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


// start modal operation logic

var dialog = $("#myModal");
$("#clickMe").on("click", function () {
    dialog.css("display", "block");
});

$("#submitLogin").on("click", function () {
    event.preventDefault(); // prevents submission of the form and refresh of the page
    dialog.css("display", "none");
});

$("#closeModal").on("click", function () {
    dialog.css("display", "none");
});

// end modal operation logic