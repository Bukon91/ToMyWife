// =============================
// To My Home ❤️
// script.js
// =============================

// -----------------------------
// Letter for Riya
// -----------------------------

const letter = `Dear Riya,

We've known each other for so long that I don't even remember where our story truly began.

Somewhere along the way...

My childhood friend became my best friend.

My best friend became my wife.

And together...

we became parents to our beautiful little princess.

Lately, things haven't been easy.

Being far away makes every misunderstanding feel much bigger than it really is.

I know I hurt you.

And for that...

I'm deeply sorry.

I don't want to just say sorry.

I want to become better.

I promise I'll listen more.

I promise I'll understand more.

I promise I'll make you smile again.

Very soon...

I'll come home.

I'll hug you.

I'll hug our little princess.

I'll take care of both of my girls.

Because you two are my entire world.

I love you.

More than yesterday.

Less than tomorrow.

Forever yours,

❤️ Bukon`;

let index = 0;
let typed = false;

// -----------------------------
// Change Page
// -----------------------------

function nextPage(id) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (id === "letter" && !typed) {
        typed = true;
        typeWriter();
    }
}

// -----------------------------
// Typewriter
// -----------------------------

function typeWriter() {

    const target = document.getElementById("typing");

    if (index < letter.length) {

        target.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    }

}

// -----------------------------
// Promise Cards
// -----------------------------

document.querySelectorAll(".promise").forEach(card => {

    card.addEventListener("click", () => {

        card.style.background = "white";
        card.style.color = "#ff4f81";
        card.style.transform = "scale(1.08)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 300);

    });

});

// -----------------------------
// HucklyBuckly
// -----------------------------

function huckly() {

    alert(
`🍨 Deal!

One HucklyBuckly date has officially been booked.

Followed by...

❤️ Unlimited Hugs

❤️ Movie Night

❤️ Europe Trip

Now...

Please forgive me 😊`
    );

}

// -----------------------------
// Forgive
// -----------------------------

function forgive() {

    if (typeof confetti === "function") {

        confetti({

            particleCount: 250,

            spread: 150,

            origin: {
                y: 0.6
            }

        });

    }

    document.getElementById("finalMessage").innerHTML = `

    <h2>❤️ Thank You ❤️</h2>

    <p>

    Thank you for loving me.

    <br><br>

    Thank you for believing in us.

    <br><br>

    Thank you for giving me

    the most beautiful daughter.

    <br><br>

    I promise to listen better.

    I promise to understand more.

    I promise to always choose us.

    <br><br>

    ❤️

    I Love You Forever

    <br><br>

    Bukon ❤️ Riya ❤️ Hridi
    </p>

    `;

    document.querySelector(".buttons").style.display = "none";

}

// -----------------------------
// Floating Hearts
// -----------------------------

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 6s linear, opacity 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-110vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6500);

}, 800);