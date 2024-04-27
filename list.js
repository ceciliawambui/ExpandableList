const expandableList = document.querySelector(".expandable-list");

expandableList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("title")) {
        const subList = target.nextElementSibling;
        subList.classList.toggle("hidden");
        subList.classList.toggle("visible");
    }
});

