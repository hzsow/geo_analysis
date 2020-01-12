import $ from "jquery";

export function init(){
    $.ajax({
        url: "http://localhost:8080/geoserver/j_spring_security_check",
        type: "POST",
        crossDomain: true,
        dataType: 'text',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            username:'admin',
            password:'geoserver'
        },
        xhrFields: {
            withCredentials: true
        },
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*"
        }
    }).done(function() {
            console.log("geoserver ok");
        }
    ).fail(function() {
        console.log("geoserver fail");
    })
}
