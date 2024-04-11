// remove the embed's website's branding
const tryToRemove = () => {
    let el = document.querySelector(".sk_branding");
    if (!el) {
        setTimeout(tryToRemove, 1000)
    } else {
        el.remove()
        if (document.querySelector(".sk_branding")) {
            setTimeout(tryToRemove, 1000)
        }
    }
};

tryToRemove()