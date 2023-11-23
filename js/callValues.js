$(document).ready(function () {
    var Code = "";
    var url = "/statusBoard/statusBoardApiCallData?apiCallFactoryId=";

    $.ajax({
        url: "/api/v1/company/getApiFactoryId",
        type: "GET",
        async: false,
        dataType: "json",
        success: function (res) {
            url = url + res.map.apiCallFactoryId;
        },
        error: function () {
            console.log("tryAgain");
        },
    });
    $.ajax({
        url: url,
        type: "GET",
        async: false,

        dataType: "json",
        success: function (res2) {
            console.log(res2);
            var a = document.getElementById("testValue");
                a.innerText = res2.list[0].temperature + " ℃";
        },
        error: function () {
            console.log("tryAgain");
        },
    });
});
