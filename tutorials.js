// ========================================
// ELEMENTS
// ========================================

const categoryButtons =
document.querySelectorAll(".course-category");

const lessonGroups =
document.querySelectorAll(".lesson-group");



// ========================================
// CATEGORY SWITCHING
// ========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetCategory =
        button.dataset.category;

        categoryButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");

        lessonGroups.forEach(group => {

            group.style.display = "none";

            if(
                group.dataset.category ===
                targetCategory
            ){
                group.style.display = "flex";
            }

        });

    });

});



// ========================================
// LESSON EXPAND / COLLAPSE
// ========================================

const lessonCards =
document.querySelectorAll(".lesson-card");

lessonCards.forEach(card => {

    card.addEventListener("click", () => {

        const alreadyExpanded =
        card.classList.contains("expanded");


        // Close all open lessons

        document
        .querySelectorAll(".lesson-card")
        .forEach(item => {

            item.classList.remove("expanded");

            const player =
            item.querySelector(".video-player");

            if(player){
                player.remove();
            }

            const badge =
            item.querySelector(".playing-badge");

            if(badge){
                badge.remove();
            }

        });


        // If same lesson clicked,
        // leave it collapsed

        if(alreadyExpanded){
            return;
        }


        // Expand selected lesson

        card.classList.add("expanded");


        const videoURL =
        card.dataset.video;


        card.insertAdjacentHTML(

            "beforeend",

            `
            <div class="video-player">

                <iframe
                    src="${videoURL}?autoplay=1"
                    allow="accelerometer;
                           autoplay;
                           clipboard-write;
                           encrypted-media;
                           gyroscope;
                           picture-in-picture"
                    allowfullscreen>
                </iframe>

            </div>

            <div class="playing-badge">
                Playing
            </div>
            `
        );


        card.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

    });

});



// ========================================
// INITIAL CATEGORY
// ========================================

lessonGroups.forEach(group => {

    group.style.display = "none";

});

const firstGroup =
document.querySelector(
'.lesson-group[data-category="crypto-basics"]'
);

if(firstGroup){

    firstGroup.style.display = "flex";

}