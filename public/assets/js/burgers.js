$(function () {
    $(".js-eatmeButton").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr("data-id");
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: {"eatme" : true}
        }).then(function () {
            location.reload();
        });
    });

    $(".js-againButton").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr("data-id");
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: {"eatme" : false}
        }).then(function () {
            location.reload();
        });
    });

    $("#addBurgerButton").on("click", function (event) {
        event.preventDefault();
        let burgerName = $("#addBurgerName").val().trim();
        $.ajax("/api/burger/", {
            type: "POST",
            data: {burgerName}
        }).then(function () {
            location.reload();
        });
    });
});