

// Toggle Event List - Home Page

const titles = [``, `Family Gathering`, `Special Events`, `Social Events`]
const descriptions = [
    ``,
    `We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.`,
    `Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.`,
    `Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.`,
];

function toggleShowClass(toggleEvent) {
    for (let i = 1; i < 4; i++) {
        const eventImage = document.querySelector(`.img-${i}`);
        const button = document.querySelector(`.btn-${i}`);
        const eventTitle = document.querySelector('.event-title');
        const eventDescription = document.querySelector('.event-description');

        eventImage.classList.remove("show");
        button.classList.remove("active");

        if (i === toggleEvent) {
            eventImage.classList.add("show");
            button.classList.add("active");
            eventTitle.textContent = titles[i]
            eventDescription.textContent = descriptions[i]
        }
    }
}

document.querySelector(".btn-1").addEventListener("click", () => {
    toggleShowClass(1);
});
document.querySelector(".btn-2").addEventListener("click", () => {
    toggleShowClass(2);
});
document.querySelector(".btn-3").addEventListener("click", () => {
    toggleShowClass(3);
});