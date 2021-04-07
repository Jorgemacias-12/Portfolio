const headerManager = () => {
    const headerElement = document.getElementById('app-header');
    let stickyPos = headerElement.offsetTop;
    if (window.pageYOffset > stickyPos) {
        headerElement.classList.add("float-header");
    } else {
        headerElement.classList.remove("float-header");
    }
}

const cleanFields = () => {
    let sendForm = document.forms["contact-form"];
    for (let i = 0; i < sendForm.length; i++) {
        if (sendForm[i].tagName === "INPUT") {
            sendForm[i].value = "";
        }
    }
}

window.onscroll = () => { headerManager(); }

window.onload = () => {
    document.getElementById('btn-send').addEventListener("click", () => {
        cleanFields();
    });
}