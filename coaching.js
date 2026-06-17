document.querySelectorAll(".video-wrapper").forEach(wrapper => {

    const video = wrapper.querySelector("video");
    const button = wrapper.querySelector(".play-overlay");

    button.addEventListener("click", () => {

        video.play();
        button.style.display = "none";

    });

    video.addEventListener("pause", () => {

        if (!video.ended) {
            button.style.display = "block";
        }

    });

    video.addEventListener("ended", () => {

        button.style.display = "block";

    });

});