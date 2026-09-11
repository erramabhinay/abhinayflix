```javascript
// ======================================
// ABHINAYFLIX JAVASCRIPT
// ======================================


// Watch video
function watchVideo(videoFile, title, poster) {

    const player = document.getElementById("videoPlayer");
    const videoTitle = document.getElementById("videoTitle");

    player.src = videoFile;
    player.poster = poster;

    videoTitle.textContent = title;

    document.getElementById("watch").scrollIntoView({
        behavior: "smooth"
    });

    player.play().catch(function () {
        console.log("Click the play button to start the video.");
    });
}


// Browse button
function scrollToMovies() {

    document.getElementById("movies").scrollIntoView({
        behavior: "smooth"
    });
}


// Search movies, series and cartoons
function searchMovies() {

    const searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        const title =
            card.getAttribute("data-title")
            .toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}
```
