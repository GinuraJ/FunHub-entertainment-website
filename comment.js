const form = document.getElementById('form');
const firstName = document.getElementById('f_name');
const lastName = document.getElementById('l_name');
const email = document.getElementById('email');
let Any = document.getElementById('suggestions_textarea');
let Gender;
let Experience;
let HowHeard;
let Expectations;
let Favpart1 = "";
let Favpart2 = "";
let Favpart3 = "";
let Favpart4 = "";

form.addEventListener('submit', e => {
    e.preventDefault();
    validateUserInputs();
});

const validateUserInputs = () => {
    let validateSuccessfully = true;
    if (firstName.value.trim() === '') {
        document.querySelector('.required_msg_fname').innerHTML = ("First name is required !!");
        firstName.classList.add("notSuccess");
        firstName.classList.remove("success");
        validateSuccessfully = false;
    } else {
        firstName.classList.add("success");
        firstName.classList.remove("notSuccess");
        document.querySelector('.required_msg_fname').innerHTML = ("");
    }
    if (lastName.value.trim() === '') {
        document.querySelector('.required_msg_lname').innerHTML = ("Last name is required !!");
        lastName.classList.add("notSuccess");
        lastName.classList.remove("success");
        validateSuccessfully = false;
    } else {
        lastName.classList.add("success");
        lastName.classList.remove("notSuccess");
        document.querySelector('.required_msg_lname').innerHTML = ("");
    }
    if (email.value.trim() !== '' && email.value.trim().includes(".") && email.value.trim().includes("@")) {
        email.classList.add("success");
        email.classList.remove("notSuccess");
        document.querySelector('.required_msg_email').innerHTML = ("");
    } else {
        document.querySelector('.required_msg_email').innerHTML = ("Email is required !!");
        email.classList.add("notSuccess");
        validateSuccessfully = false;
    }
    if (document.getElementById('male').checked == true) {
        document.querySelector('.required_msg_gender').innerHTML = ("");
        gender = "Male";
    } else if (document.getElementById('female').checked == true) {
        document.querySelector('.required_msg_gender').innerHTML = ("");
        gender = "Female";
    } else {
        document.querySelector('.required_msg_gender').innerHTML = ("Gender is required !!");
        validateSuccessfully = false;
    }


    if (document.getElementById('verypoor').checked == true) {
        document.querySelector('.required_msg_feel').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = ('#76D7C4');
        Experience = "😡 Very poor"
    } else if (document.getElementById('poor').checked == true) {
        document.querySelector('.required_msg_feel').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = ('#76D7C4');
        Experience = "🙁 Poor"
    } else if (document.getElementById('average').checked == true) {
        document.querySelector('.required_msg_feel').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = ('#76D7C4');
        Experience = "🙂 Average"
    } else if (document.getElementById('good').checked == true) {
        document.querySelector('.required_msg_feel').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = ('#76D7C4');
        Experience = "😋 Good"
    } else if (document.getElementById('verygood').checked == true) {
        document.querySelector('.required_msg_feel').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = ('#76D7C4');
        Experience = "🥰 VeryGood"
    } else {
        document.querySelector('.required_msg_feel').innerHTML = ("Please select as option !!");
        document.getElementById('expect_list').style.backgroundColor = ('#F5B7B1');
        validateSuccessfully = false;
    }

    if (document.getElementById('youtube').selected == true) {
        document.querySelector('.required_msg_hear').innerHTML = ("");
        document.getElementById('heard_list').style.backgroundColor = "#82E0AA";
        HowHeard = "From youtube";
    } else if (document.getElementById('advertisment').selected == true) {
        document.querySelector('.required_msg_hear').innerHTML = ("");
        document.getElementById('heard_list').style.backgroundColor = "#82E0AA";
        HowHeard = "From advertisment";
    } else if (document.getElementById('friend').selected == true) {
        document.querySelector('.required_msg_hear').innerHTML = ("");
        document.getElementById('heard_list').style.backgroundColor = "#82E0AA";
        HowHeard = "From friend";
    } else if (document.getElementById('social').selected == true) {
        document.querySelector('.required_msg_hear').innerHTML = ("");
        document.getElementById('heard_list').style.backgroundColor = "#82E0AA";
        HowHeard = "From social media";
    } else if (document.getElementById('other').selected == true) {
        document.querySelector('.required_msg_hear').innerHTML = ("");
        document.getElementById('heard_list').style.backgroundColor = "#82E0AA";
        HowHeard = "Other sources";
    } else {
        document.querySelector('.required_msg_hear').innerHTML = ("Please select as option !!");
        document.getElementById('heard_list').style.backgroundColor = "#F5B7B1";
        validateSuccessfully = false;
    }

    if (document.getElementById('satisfied').selected == true) {
        document.querySelector('.required_msg_expect').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = "#82E0AA";
        Expectations = "Satisfied";
    } else if (document.getElementById('disagree').selected == true) {
        document.querySelector('.required_msg_expect').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = "#82E0AA";
        Expectations = "Partially disagree";
    } else if (document.getElementById('ambiva').selected == true) {
        document.querySelector('.required_msg_expect').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = "#82E0AA";
        Expectations = "Ambivalent";
    } else if (document.getElementById('prefernot').selected == true) {
        document.querySelector('.required_msg_expect').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = "#82E0AA";
        Expectations = "Prefer not to answer";
    } else if (document.getElementById('notfamiliar').selected == true) {
        document.querySelector('.required_msg_expect').innerHTML = ("");
        document.getElementById('expect_list').style.backgroundColor = "#82E0AA";
        Expectations = "Not familliar";
    } else {
        document.querySelector('.required_msg_expect').innerHTML = ("Please select as option !!");
        document.getElementById('expect_list').style.backgroundColor = "#F5B7B1";
        validateSuccessfully = false;
    }

    if (document.getElementById('film_checkbox').checked == true) {
        Favpart1 = "                                  > Film page";
    }
    if (document.getElementById('music_checkbox').checked == true) {
        Favpart2 = "                                  > Music page";
    }
    if (document.getElementById('gaming_checkbox').checked == true) {
        Favpart3 = "                                  > Gaming page";
    }
    if (document.getElementById('art_checkbox').checked == true) {
        Favpart4 = "                                  > Perform art page";
    }

    if (document.getElementById('film_checkbox').checked == true ||
        document.getElementById('music_checkbox').checked == true ||
        document.getElementById('gaming_checkbox').checked == true ||
        document.getElementById('art_checkbox').checked == true) {
        document.querySelector('.required_msg_favpart').innerHTML = ("");
    } else {
        document.querySelector('.required_msg_favpart').innerHTML = ("Please select as option !!");
        validateSuccessfully = false;
    }

    if (validateSuccessfully == true) {
        const recipientEmail = 'ginura.20221217@iit.ac.lk';
        const subject = 'Comment form submission ()';
        const body = `Full name : ${firstName.value} ${lastName.value} \n \n Email adress : ${email.value} \n \n Gender : ${gender} \n \n How Would you feel our website : ${Experience} \n \n How did you hear about us : ${HowHeard} \n \n Does this page meet your expectations : ${Expectations} \n \n What is your favourite entertainment part : \n ${Favpart1} \n ${Favpart2} \n ${Favpart3} \n ${Favpart4} \n \n What could we have done better : ${Any.value}`;

        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
        window.location.href = mailtoLink;
    }
}

