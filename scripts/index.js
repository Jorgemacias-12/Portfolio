const headerManager = () => {
    const headerElement = document.getElementById('app-header');
    let stickyPos = headerElement.offsetTop;
    if (window.pageYOffset > stickyPos) {
        headerElement.classList.add("float-header");
    } else {
        headerElement.classList.remove("float-header");
    }
}

window.onscroll = () => { headerManager(); }