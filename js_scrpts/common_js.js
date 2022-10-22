
var device_width = document.documentElement.clientWidth; //device width
var device_height = document.documentElement.clientHeight; // device height

/*----------++++++++---make or remove active start-------+++++++++---------*/

function make_remove_active(remove_make) {

    if (active.className != "no") {
        if (remove_make == "remove_active") {
            device_height = document.documentElement.clientHeight;
            device_width = document.documentElement.clientWidth;
            active.className = "#";
        }

        else if (remove_make == "make_active") {

            active.className = "active";
        }
    }

}
/*----------++++++++---make or remove active end-------+++++++++---------*/


/*----------++++++++---error indicating start-------+++++++++---------*/



function error_function(element_id, put_remove) {
    if (put_remove == 'put') {
        element_id.style.borderColor = "red";
    }
    else if (put_remove == 'remove') {
        element_id.style.borderColor = "black";

    }
}

/*----------++++++++---error indicating end-------+++++++++---------*/



/*---------+++++++++++--------contact form script start--------+++++++++++-------*/




var contact_cover = document.getElementById("contact_cover");
var active = document.getElementById("active");
var contact = document.getElementById("contact");
var contact_name = document.getElementById("contact_name");
var contact_message = document.getElementById("contact_message");

/*--------------contact open and close start--------------- */
// 
function contact_open_close(k) {

    if (k == 1) { // opens contact k must be 1


        if (share_open_close == 1) {
            shareopen();
        }

        hire_open_close("close");

        make_remove_active("remove_active");

        contact.className = "active";


        contact_cover.style.transform = "scale(1) translate(-50% ,0 )";
        contact_cover.style.borderRadius = "5%";

    }


    else { // contact close k is any value must no 1

        make_remove_active("make_active");
        contact.className = "#";

        contact_cover.style.transform = "scale(0) translate(-50% ,0 )";
        contact_cover.style.borderRadius = "20%";

    }
}

/*---------------contact open and close end------------ */







/*------- contact message error chick start -------- */

contact_message.addEventListener('focus', chick_contact_message);
contact_name.addEventListener('focus', chick_contact_name);




function chick_contact_name() {

    contact_name.addEventListener('input', () => {
        form_valid_or_not('contact_form');

        if (contact_name.value.length >= 3 || contact_name.value.length == 0) {
            error_function(contact_name, 'remove');
        }
        else {
            error_function(contact_name, 'put');

        }

    });
}

function chick_contact_message() {

    contact_message.addEventListener('input', () => {
        form_valid_or_not('contact_form');

        if (contact_message.value.length >= 2 || contact_message.value.length == 0) {
            error_function(contact_message, 'remove');
        }
        else {
            error_function(contact_message, 'put');

        }

    });

}

/*------- contact message error chick end -------- */


/*---------++++++++++++------contact form script end---------++++++++++++----------*/




/*--------++++++++++++++--------- all form validation chick start-----------++++++++++++-----------*/


var contact_submit_button = document.getElementById("contact_submit"); //contact submit button
var hire_submit_button = document.getElementById("hire_submit");// hire me submit button




function form_valid_or_not(form_key) {


    if (form_key == 'contact_form') {       // contact message validation

        if (contact_message.value.length >= 2 && contact_name.value.length >= 3) {
            contact_submit_button.removeAttribute("disabled");
        }
        else { contact_submit_button.setAttribute('disabled', ''); }
    }



    else if (form_key == 'hire_form') {         // hire me validation 

        if (fullname.value.length >= 3 && mobile_no.value.length == 10 && hire_email.value.length >= 5 && hire_email.style.borderColor == 'black' &&
            compenyname.value.length >= 2 && ctcpa.value.length >= 5 && jobroll.value.length >= 5 && mobile_int_chick == 10) {
            hire_submit_button.removeAttribute("disabled");

        }
        else {
            hire_submit_button.setAttribute("disabled", "");

        }

    }


}

/*----------++++++++++++++--------- over all form validation chick end-----------++++++++++++-----------*/



/*----------++++++++++++++++++----------share script start----+++++++++++++++++-----*/

/*------- share open close start---------*/
var share_open_close = 0;



function shareopen() {



    var share_cover = document.getElementById("share_cover");
    var share_img = document.getElementById("share_img");
    var share_svg = document.getElementById("share_svg");



    let share_img_location = share_img.getBoundingClientRect();
    var share_img_total_right = "calc(100vw - " + share_img_location.left + "px - " + share_img.clientWidth / 2 + "px )";
    var share_img_total_top = "calc(" + share_img_location.top + "px + " + share_img.clientWidth / 2 + "px )";
    share_cover.style.top = share_img_total_top;
    share_cover.style.right = share_img_total_right;



    if (share_open_close == 0) {

        contact_open_close(0);
        hire_open_close("close");

        make_remove_active("remove_active");

        share_img.style.transform = "rotate(880deg)";
        share_svg.style.fill = "red";
        share_cover.style.transform = "scale(1)";
        share_open_close = 1;

    }

    else if (share_open_close == 1) {

        make_remove_active("make_active");

        share_cover.style.transform = "scale(0)";
        share_svg.style.fill = "rgb(162, 249, 0)";
        share_img.style.transform = "rotate(0deg)";
        share_open_close = 0;


    }
}


/*------- share open close end---------*/



/*------------share copy start--------------- */

var share_text_place = document.getElementById("share_text_place");
var copednote = document.getElementById("copynoteid");


function copytext() {
    share_text_place.select();
    document.execCommand("copy");

    copednote.innerHTML = 'Coped';
    copednote.style.color = 'gold';
    setTimeout(function () {
        copednote.style.color = 'lime';
        copednote.innerHTML = 'Copy';
    }, 2000);
}

/*------------ share copy end --------------- */



/*------++++++++++++-----share script end---------++++++++++++++++------*/



/*------++++++++++++++---------- hire me script start -----------+++++++++++---------*/



var hire_cover = document.getElementById("hire_cover");
var fullname = document.getElementById("fullname");
var mobile_no = document.getElementById("mobile_no");
var hire_email = document.getElementById("hire_email");
var compenyname = document.getElementById("compenyname");
var ctcpa = document.getElementById("ctc");
var jobroll = document.getElementById("jobroll");


/*-----------------hire me open start--------------*/

function hire_open_close(open_close) {

    if (open_close == 'open') {

        if (share_open_close == 1) { shareopen(); }
        contact_open_close(0);


        make_remove_active("remove_active");


        hire_cover.style.transformOrigin = "50vw 00vh";
        hire_cover.style.borderRadius = "0"
        hire_cover.style.transform = "scale(1)";

    }
    else if (open_close == "close") {

        make_remove_active("make_active");

        hire_cover.style.transformOrigin = "50vw 100vh";
        hire_cover.style.borderRadius = "100%"
        hire_cover.style.transform = "scale(0)";
        setTimeout(function () {
            hire_cover.style.transformOrigin = "50vw 00vh";
        }, 1500);


    }


}

/*-----------------hire me open end--------------*/


/*----------hire me error chick start-------------- */

mobile_no.addEventListener('focus', chick_mobile);
fullname.addEventListener('focus', chick_fullname);
hire_email.addEventListener('focus', chick_email);
compenyname.addEventListener('focus', chick_compenyname);
jobroll.addEventListener('focus', chick_jobroll);
ctcpa.addEventListener('focus', chick_ctcpa);
var email_position = -1;
var mobile_int_chick = 0;



function chick_mobile() {

    mobile_no.addEventListener('input', () => {
        mobile_int_chick = 0;
        form_valid_or_not('hire_form');


        for (i = 0; i < mobile_no.value.length; i++) {



            if (parseInt(mobile_no.value.charAt(i)) <= 9) {
                mobile_int_chick++;
            }
        }

        if ((mobile_no.value.length == 10 && mobile_int_chick == 10) || mobile_no.value.length == 0) {
            error_function(mobile_no, 'remove');
        }
        else {


            error_function(mobile_no, 'put');
        }

    });
}





function chick_fullname() {
    fullname.addEventListener('input', () => {
        form_valid_or_not('hire_form');

        if (fullname.value.length >= 3 || fullname.value.length == 0) {
            error_function(fullname, 'remove');
        }
        else {
            error_function(fullname, 'put');
        }

    });
}





function chick_email() {

    hire_email.addEventListener('input', () => {
        form_valid_or_not('hire_form');

        email_position = -1;

        for (i = 0; i < hire_email.value.length; i++) {
            if (hire_email.value.charAt(i) == '@') {
                email_position = i;
            }

        }

        if (hire_email.value == 0 || (hire_email.value.length >= 5 && email_position > 0 && (email_position + 1) < hire_email.value.length)) {

            error_function(hire_email, 'remove');
        }
        else {
            error_function(hire_email, 'put');
        }

    });
}




function chick_compenyname() {

    compenyname.addEventListener('input', () => {
        form_valid_or_not('hire_form');

        if (compenyname.value.length >= 2 || compenyname.value == 0) {
            error_function(compenyname, 'remove');
        }
        else {
            error_function(compenyname, 'put');
        }

    });
}




function chick_jobroll() {

    jobroll.addEventListener('input', () => {
        form_valid_or_not('hire_form');

        if (jobroll.value.length >= 5 || jobroll.value == 0) {
            error_function(jobroll, 'remove');

        }
        else {
            error_function(jobroll, 'put');
        }

    });
}




function chick_ctcpa() {

    ctcpa.addEventListener('input', () => {
        form_valid_or_not('hire_form');


        if (ctcpa.value.length >= 5 || ctcpa.value == 0) {

            error_function(ctcpa, 'remove');


        }
        else {
            error_function(ctcpa, 'put');
        }

    });
}

/*----------hire me error chick end-------------- */


/*-------+++++++++-------hire me form script end---------++++++++++++++-----------*/



/*----++++++++++++------iframe start------+++++++++++------*/



var submited_form_name = 'none';
function chickiframeform() {

    var submit_iframe = document.getElementById('submit_iframe');
    var iframedata = submit_iframe.contentWindow.document;
    var h1conform = iframedata.getElementsByTagName('h1')[0];
    var h2name = iframedata.getElementsByTagName('h2')[0];

    /*------iframe form submited conformation start--------  */

    if (h1conform.innerHTML == 'ok') {
        switch (h2name.innerHTML) {
            case 'contact':                 // contact  form submiting to mail 
                document.getElementById("contacttomail").click();
                submited_form_name = 'contact_form';
                break;

            case 'hireme':                  // hire me  form submiting to mail 
                document.getElementById("hiretomail").click();
                submited_form_name = 'hire_form';
                break;


            case 'ok':                      //-----starts the submit animation and form is submited
                submit_process('submited');
                document.getElementById(submited_form_name).reset();
                form_valid_or_not(submited_form_name);
                break;
        }
    }

    else if (h1conform.innerHTML == 'rated') {
        document.getElementById('star_submit').click();


    }
    else if (h1conform.innerHTML == 'noted') {
        document.getElementById('visittoform').click();

    }
    else if (h1conform.innerHTML == 'resume') {
        document.getElementById('resumetomail').click();

    }
}
/*------iframe form submited conformation end--------  */


var submit_notecover = document.getElementById('submit_notecover');
var submit_noteplace = document.getElementById('submit_noteplace');
var submit_ufo = document.getElementById('submit_ufo');
var submit_bord = document.getElementById('submit_bord');
var ufo_light = document.getElementById('ufo_light');

/*-------form submit animation start---------- */

function submit_process(submitkey) {

    if (submitkey == 'open') {
        submit_notecover.style.transform = 'scale(1)';
        submit_notecover.style.borderRadius = '0%';

    }
    else if (submitkey == 'close') {
        submit_notecover.style.transform = 'scale(0)';
        submit_notecover.style.borderRadius = '100%';
        setTimeout(function () {
            submit_noteplace.innerHTML = 'Prossing..';
            submit_ufo.style.animation = "none"; ufo_light.style.animation = "none";
            submit_bord.style.animation = "none";
        }, 2000);
    }
    else if (submitkey == 'submited') {
        submit_ufo.style.animation = "sufo 3s ease-in 1 ";

        submit_bord.style.animation = "aline 3s ease-in 1 forwards";
        ufo_light.style.animation = " ufo_light 3s ease-in 1"
        submit_noteplace.innerHTML = 'Submited ✔️';
        setTimeout(function () { submit_process('close'); }, 3000);
    }

}
/*-------form submit animation end---------- */


/*----++++++++++++++++++----------iframe for form submit end -------------++++++++++++-----------*/


/*--------++++++++++++++-------star rating start---------++++++++++++++---------*/

var star = document.querySelectorAll('.feed_star');
var feed_form = document.getElementById("feed_form");
var star_rating = document.getElementById("star_rating");


var star_note_cover = document.getElementById('star_note_cover');
var star_note_wrap = document.getElementById('star_note_wrap');
var star_svg = document.querySelectorAll('.star_svg');
var star_note = document.querySelectorAll('.star_note');

function star_no(star_cno) {

    for (i = 0; i < 5; i++) {
        if (i < star_cno) {

            star_note[4 - i].style.fill = star[i].style.fill = 'goldenrod';


        }
        else {
            star_note[4 - i].style.fill = star[i].style.fill = 'gray';

        }
    }
    star_rating.value = star_cno;

    feed_form.submit();





    star_note_cover.style.display = 'block';

    for (i = 0; i < 5; i++) {
        star_svg[i].style.animation = 'star' + (i + 1) + ' 2s ease-in 1 forwards ';
    }
    setTimeout(function () {
        star_note_wrap.style.opacity = '0';
    }, 3000);

    setTimeout(function () {
        star_note_cover.style.display = 'none';
    }, 4000);

    setTimeout(function () {
        for (i = 0; i < 5; i++) {
            star_svg[i].style.animation = 'none';
        }
    }, 4000);

    setTimeout(function () {
        star_note_wrap.style.opacity = '1';
    }, 4000);



}
/*--------++++++++++++++-------star rating end---------++++++++++++++---------*/
