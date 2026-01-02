// =======================
// 1️⃣ MENU CODE
// =======================
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu");

    if (!menuIcon) return;

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-menu";
    dropdown.style.display = "none";

    dropdown.innerHTML = `
        <a href="services.html">Services</a>
        <a href="https://wa.me/0784549656" target="_blank">Contact us</a>
        <a href="#">Developer: Lyton James</a>
    `;
    document.body.appendChild(dropdown);

    menuIcon.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });

    document.addEventListener("click", (e) => {
        if (!menuIcon.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
});

// =======================
// 2️⃣ VIDEO UPLOAD + SEARCH
// =======================
let uploadedVideos = [];

const videoInput = document.getElementById("videoInput");
const videoPlayer = document.getElementById("videoPlayer");
const downloadBtn = document.getElementById("downloadBtn");

if (videoInput) {
    videoInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            videoPlayer.src = url;
            downloadBtn.href = url;
            downloadBtn.download = file.name;

            uploadedVideos.push({ name: file.name, url: url });
        }
    });
}

const searchBtn = document.getElementById("searchBtn");
const videoSearch = document.getElementById("videoSearch");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        const query = videoSearch.value.toLowerCase();
        const found = uploadedVideos.find(v => v.name.toLowerCase().includes(query));

        if (found) {
            videoPlayer.src = found.url;
            downloadBtn.href = found.url;
            downloadBtn.download = found.name;
            alert(`Found: ${found.name}`);
        } else {
            alert("Video not found");
        }
    });
}

// =======================
// 3️⃣ MUSIC UPLOAD + SEARCH
// =======================
let uploadedMusic = [];

const musicInput = document.getElementById("musicInput");
const musicPlayer = document.getElementById("musicPlayer");
const musicDownload = document.getElementById("musicDownload");

if (musicInput) {
    musicInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            musicPlayer.src = url;
            musicDownload.href = url;
            musicDownload.download = file.name;

            uploadedMusic.push({ name: file.name, url: url });
        }
    });
}

const musicSearchBtn = document.getElementById("musicSearchBtn");
const musicSearch = document.getElementById("musicSearch");

if (musicSearchBtn) {
    musicSearchBtn.addEventListener("click", function () {
        const query = musicSearch.value.toLowerCase();
        const found = uploadedMusic.find(m => m.name.toLowerCase().includes(query));

        if (found) {
            musicPlayer.src = found.url;
            musicDownload.href = found.url;
            musicDownload.download = found.name;
            alert(`Found: ${found.name}`);
        } else {
            alert("Music not found");
        }
    });
}