/* Popup notifications logic
   ========================================================================== */

/**
* Show popup notification
 * 
 * @param string notify type [error, danger]
 * @param string notify text
 * @param string notify unique id
 */
export default function showNotify(type, text, id){
    // clear all previous notify
    $(".notify").remove()
    
    // create notify layout
    let html = '<div id="' +id+ '" class="notify notify_' +type+ '"><div class="notify__text">' +text+'</div></div>'

    // add notify
    $(".app").append(html)

    // hide notify
    setTimeout(() => {
        $("#"+id).css("opacity", "0")
    }, 3000)
    setTimeout(() => {
        $("#"+id).remove()
    }, 3550)
}