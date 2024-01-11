/* Install page - show form stage
   ========================================================================== */

/**
 * Show specified form stage
 * 
 * @param string stage number
 */
export default function showFormStage(num){
   // update active stage number HTML layout
   $('.install-stages__item.active').addClass('completed')
   $('.install-stages__item[data-stage="'+num+'"]').addClass('active')

   // update form content
   $('.install-form__step-item').removeClass('active')
   $('.install-form__step-item[data-stage="'+num+'"]').addClass("active")
}