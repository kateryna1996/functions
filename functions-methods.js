// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailAddress) {
    let start = emailAddress.indexOf('@');
    return emailAddress.substring(start + 1);
}

const outcome = getEmailDomain("n.eeken@novi-education.nl");
console.log(outcome);

const outcome2 = getEmailDomain("t.mellink@novi.nl");
console.log(outcome2);

const outcome3 = getEmailDomain("a.wiersma@outlook.com");
console.log(outcome3);
/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {
    if (email.includes("@novi-education.nl")) {
        return "Student";
    } else if (email.includes("@novi.nl")) {
        return "Medewerker";
    }
        //  else if ( email.includes ("novi")){
        //     return "Extern <--";
    // }
    else {
        return "Extern";
    }
}

const emailOutcome = typeOfEmail("n.eeken@novi-education.nl");
console.log(emailOutcome);

const emailOutcome2 = typeOfEmail("t.mellink@novi.nl");
console.log(emailOutcome2);

const emailOutcome3 = typeOfEmail("novi.nlaapjesk@outlook.com");
console.log(emailOutcome3);

const emailOutcome4 = typeOfEmail("a.wiersma@outlook.com");
console.log(emailOutcome4);
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    if (email.includes("@") && email !== '' && email.charAt(email.length - 3) === "." && email.includes(",") !== true) {
        return true;
    }
    // else if (email.includes("@") !== true) {
    //     return false + " The email-address is invalid, please try again with @";
    // } else if (email.includes(",")) {
    //     return false + " The email-address is invalid, please try again without coma`s"
    // } else if (email.charAt(email.length - 3) !== ".") {
    //     return false + " The email-address is invalid, please try again with valid domain name";
    // }
    else {
        return false;
    }
}

const valid = checkEmailValidity("n.eeken@novi.nl");
console.log(valid);

const valid2 = checkEmailValidity("tessmellink@novi.nl");
console.log(valid2);

const valid3 = checkEmailValidity("n.eekenanovi.nl");
console.log(valid3);

const valid4 = checkEmailValidity("n.eeken@novinl.");
console.log(valid4);

const valid5 = checkEmailValidity("tessmellink@novi,nl");
console.log(valid5);
