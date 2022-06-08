const images = document.querySelectorAll("[data-url]");

function preloadImage(background-image) {
    const url = img.getAttribute("data-url");
    if(!src){
        return;
    }

    background-image.url = url;
}
const imgOptions = {
    thershold: 1,
    rootMargin: "0px 0px 00px 0px"
};

const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else{
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);

    images.forEach(image=> {
        imgObserver.observe(image);
    });