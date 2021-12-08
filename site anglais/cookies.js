const cookieContainer = document.querySelector(".cookiescontainer");
const cookieBtn = document.querySelector(".cookiesbtnaccept");
const cookieBtnRefuse = document.querySelector(".cookiesbtnrefuse");

cookieBtn.addEventListener("click", () => {
    cookieContainer.classList.remove("activeBnr");
    localStorage.setItem("cookieBannerDisplayed", "cookie accepted");
});

cookieBtnRefuse.addEventListener("click", () => {
    cookieContainer.classList.remove("activeBnr");
    localStorage.setItem("cookieBannerDisplayed", "cookie refused");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("activeBnr");
    }
}, 2000);