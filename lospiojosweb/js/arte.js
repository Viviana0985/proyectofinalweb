document.addEventListener("DOMContentLoaded", function () {
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    const modalImage = document.getElementById("modalImage");
    const images = document.querySelectorAll(".modal-trigger");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < images.length) {
            modalImage.src = images[index].src;
            currentIndex = index;
        }
    }

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            showImage(index);
            modal.show();
        });
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < images.length - 1) {
            showImage(currentIndex + 1);
        }
    });
});