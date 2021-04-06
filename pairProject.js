$(document).ready(function () {

    $("[id^=s]").hide()
    for (let i = 0; i < 20; i++) {
        $(`#t${i}`).click(function () {
            $(`#s${i}`).first().show("slow");
            $(`#t${i}`).click(function () {
                $(`#s${i}`).slideUp("slow")
            })
        })
    }
});