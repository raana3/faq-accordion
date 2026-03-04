let question = document.querySelectorAll(".question");

question.forEach((btn) => {
    btn.addEventListener("click",() => {
        let answer = btn.nextElementSibling;
        let icon = btn.querySelector("img");

        let isOpen = btn.getAttribute("aria-expanded") === "true";

        btn.setAttribute("aria-expanded", String (!isOpen));

        if (isOpen){
            answer.hidden = true;
            icon.src = "./assets/images/icon-plus.svg";
            icon.alt = "plus icon";
        } else {
            answer.hidden = false;
            icon.src = "./assets/images/icon-minus.svg";
            icon.alt = "minus icon";
        }
    })
})