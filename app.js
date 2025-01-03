import { app, db, collection, addDoc } from "./firebase.js";

let selectCity = document.querySelector("#city");
let selectcourse = document.querySelector("#course");
let selectCampus = document.querySelector("#campus");
let selectClassPreference = document.querySelector("#classPreference");
let fullNameInput = document.querySelector("#fullName");
let fatherNameInput = document.querySelector("#fatherName");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let cnicInput = document.querySelector("#cnic")
let fatherCNICInput = document.querySelector("#fcnic");
let dateInput = document.querySelector("#date");
let selectGender = document.querySelector("#gender");
let addressInput = document.querySelector("#address");
let selectQualification = document.querySelector("#qualification");
let selectLaptop = document.querySelector("#laptop");
// let selectPicture = document.querySelector("#picture")
const submitInfo = async (event) => {
    event.preventDefault();

    try {
        const docRef = await addDoc(collection(db, "user"), {
            city: selectCity.value,
            course: selectcourse.value,
            campus: selectCampus.value,
            classPreference: selectClassPreference.value,
            fullName: fullNameInput.value,
            fatherName: fatherNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            CNIC: cnicInput.value,
            fatherCNIC: fatherCNICInput.value,
            DOB: dateInput.value,
            gender: selectGender.value,
            address: addressInput.value,
            qualification: selectQualification.value,
            laptop: selectLaptop.value,
            // picture: selectPicture.value
        });

        console.log(docRef);
        alert("Document added successfully!");
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error: " + error.message);
    }
};

window.submitInfo = submitInfo;
