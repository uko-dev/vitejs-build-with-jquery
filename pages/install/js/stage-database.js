/* Install page - Database Setup Stage
   ========================================================================== */

import responsesCodeRouting from '../../../src/js/xhr-responses-helper'
import showFormStage from './show-form-stage'

/**
 * Sending XHR request with form data
 */
$(document).on("click", ".install #create-database", function(e){
    e.preventDefault()
    
    // validate if button is disabled and disable button
    if ($(this).hasClass("disabled")) return false
    $(this).addClass("disabled")

    // send form data to the server
    axios({
        method: 'post',
        url   : 'http://localhost:8888/',
        data  : {
            r_name: "installation-database-setup",
            dbhost: $("#dbhost").val(),
            dbname: $("#dbname").val(),
            dbuser: $("#dbuser").val(),
            dbpass: $("#dbpass").val()
        },
        headers: {'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded'}
    })
    // handling server response
    .then(function (response) {
        // make the button active again
        $(".install #create-database").removeClass('disabled')

        // handle server response
        handleServerReponse(response.data)
    })
})


/**
 * Handling server response
 */
function handleServerReponse(data){
    // errors logic
    if (data.status == "error"){
        responsesCodeRouting(data.resp_code, data)
    }

    // success logic
    if (data.status == "success"){
        showFormStage("2")
    }
}