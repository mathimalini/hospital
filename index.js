let slide = document.querySelectorAll(".patientCard");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn");

let count = 0;

slide.forEach(function(slides, index) {
    slides.style.left = `${index * 100}%`;
});

function myFun() {
    slide.forEach(function(curVal) {
        curVal.style.transform = `translateX(-${count * 99}%)`;
    });
}

setInterval(function() {
    count++;
    if (count == slide.length) {
        count = 0;
    }
    myFun();
}, 2000);

const doctors = [
    {
        name: "DR Joes",
        description: "An oncologic surgeon  Joes is a specialized surgical treatment of cancer. Their role involves various responsibilities and tasks aimed at diagnosing, treating, and managing cancer in patients."
    },
    {
        name: "DR Jaanu",
        description: "An endocrine surgeon  Jaanu is a specialized in the surgical treatment of diseases and disorders affecting the endocrine glands. These glands produce hormones that regulate various bodily functions."
    },
    {
        name: "DR Roshan",
        description: "An otolaryngologist, also known as an ENT (Ear, Nose, and Throat) surgeon Roshan is a specializes in the medical and surgical treatment of disorders and conditions affecting the ear, nose, throat, and related structures of the head and neck. "
    }
];

card.forEach(function(cards, index) {
    cards.addEventListener("click", function() {
        let doctor = doctors[index];
        document.querySelector(".content").style.display = "block";
        document.querySelector(".contentDetail").innerHTML = `
            <img src=${cards.firstElementChild.src}>
            <div>
                <h1 style="color: green;">${doctor.name}</h1>
                <p>${doctor.description}</p>
            </div>
        `;
        closeBtn.addEventListener("click", function() {
            document.querySelector(".content").style.display = "none";
        });
    });
});

connectBtn.addEventListener("click", function() {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if (email.value == "" && pass.value == "") {
        alert("Please Enter Detail");
    } else {
        alert("You Logged In");
        email.value = "";
        pass.value = "";
    }
});






















