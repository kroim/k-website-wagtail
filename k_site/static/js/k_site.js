
function go_animation(element_ID, speed, axis){
    if(axis==undefined) axis="X";
    if(speed==undefined) speed="speed";
    $(element_ID).addClass("anim_"+speed+axis);
}
function back_animation(element_ID, speed, axis){
    if(axis==undefined) axis="X";
    if(speed==undefined) speed="speed";
    $(element_ID).removeClass("anim_"+speed+axis);
}