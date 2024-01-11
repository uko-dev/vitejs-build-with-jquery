/* Helper for handling server XHR responses
   ========================================================================== */

import showNotify from "./notify-popup"

/**
 * Routing for server response codes
 * 
 * @param string response code from server
 * @param json server response data
 */
export default function responsesCodeRouting(code, data){
    // clear previous errors
    clearPreviousErrors();

    // routing
    switch (code) {
        // show field error
        case 'field-validation-error':
            showFieldValidationError(data);
            break;

        // show notify popup
        case 'show-notify-popup':
            showNotify(data.notify_type, data.notify_text, data.notify_id);
            break;
        
        // custom code
        default:
            return true;
            break;
    }
}


/**
 * Showing error in specified field
 * 
 * @param json server response data: field_id, error_text
 */
function showFieldValidationError(data){
    let fieldWrapper = $(data.field_id).closest(".field")

    $(fieldWrapper).addClass("error")
    $(fieldWrapper).find(".field__error-text").html(data.error_text)
}


/**
 * Clearing previous errors
 */
function clearPreviousErrors(){
    // fields errors
    $(".field").removeClass("error")
    $(".field__error").html("")
}