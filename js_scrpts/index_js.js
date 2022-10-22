



/*------------+++++++++++--------planets animation start ++++++++++--------- */

var mouse_moved = document.querySelector('.mouse_tracker');
var planet = document.querySelectorAll(".planet");
mouse_moved.onmousemove = function (e) {
   let x = e.pageX / 100;
   let y = e.pageY / 100;
   planet[0].style.transform = 'translate(' + x + 'px,' + y + 'px)';
   planet[1].style.transform = 'translate(' + x + 'px,' + y + 'px)';
   planet[2].style.transform = 'translate(' + x * 1 + 'px,' + y * -1 + 'px)';
   planet[3].style.transform = 'translate(' + x * -1.5 + 'px,' + y * 2.5 + 'px)';
   planet[4].style.transform = 'translate(' + x * 2 + 'px,' + y * -2 + 'px)';
   planet[5].style.transform = 'translate(' + x * -2 + 'px,' + y * -4 + 'px)';
   planet[6].style.transform = 'translate(' + x * 3 + 'px,' + y * -3 + 'px)';

}

/*-----------+++++++++++--------planets animation end ++++++++++--------- */


/*----------ufo space shipe animation start----------- */

var ship_img = document.getElementById("space_ship_img");
var space_shippath = document.getElementById("spaceSship");

var out_portal_cover = document.getElementById("portal2_cover_img");
var in_portalship = document.getElementById("in_portal_ship");


var out_portal = document.getElementById("out_portal");
var in_portal = document.getElementById("in_portal");
var ufo_img = document.getElementById("ufo");



function animation_play() {

   in_portalship.style.animation = ' portal 1s 8s linear 1';
   in_portal.style.animation = 'portal 1s 5s  linear 1';//in portal
   out_portal.style.animation = 'portal 2s 9s  linear  1';//out portal
   planet[9].style.animation = ' ufo_path 5s 5s  ease-in 1';//ufo_path
   ufo_img.style.animation = 'ufo 5s 5s  ease-in 1';//ufo


   ship_img.style.animation = 'spaceship 2.5s 8s linear 1';
   space_shippath.style.animation = 'spaceship_path 2.5s 8s  ease-in 1';

   out_portal_cover.style.animation = 'portal 2s 9s linear 1';


   setTimeout(animation_reset, 12000);

}
function animation_reset() {

   in_portal.style.animation = 'null';//in portal
   out_portal.style.animation = 'null';//out portal
   planet[9].style.animation = ' null';//ufo_path
   ufo_img.style.animation = 'null';//ufo_img

   ship_img.style.animation = 'null';
   space_shippath.style.animation = 'null';
   out_portal_cover.style.animation = 'null';
   in_portalship.style.animation = 'null';


   setTimeout(animation_play, 2000);
}

/*----------ufo space shipe animation start----------- */
