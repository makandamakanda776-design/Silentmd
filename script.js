document.addEventListener("DOMContentLoaded", function() {
    // ===== MENU =====
    const menuIcon = document.querySelector(".menu");
    if (menuIcon) {
        const dropdown = document.createElement("div");
        dropdown.className = "dropdown-menu";
        dropdown.style.display = "none";
        dropdown.innerHTML = `
            <a href="services.html">Services</a>
            <a href="https://wa.me/263784549656" target="_blank">Contact us</a>
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
    }

    // ===== VIDEOS =====
    const videoFiles = [
        { name: "Video 1", url: "videos/video1.mp4" },
        { name: "Video 2", url: "videos/video2.mp4" },
        { name: "Video 3", url: "videos/video3.mp4" }
    ];

    const videoList = document.getElementById("videoList");
    const videoPlayer = document.getElementById("videoPlayer");
    const downloadBtn = document.getElementById("downloadBtn");

    if (videoList && videoPlayer && downloadBtn) {
        videoFiles.forEach(v => {
            const btn = document.createElement("button");
            btn.innerText = v.name;
            btn.addEventListener("click", () => {
                videoPlayer.src = v.url;
                downloadBtn.href = v.url;
                downloadBtn.download = v.name;
            });
            videoList.appendChild(btn);
        });
    }

    const videoInput = document.getElementById("videoInput");
    const videoSearch = document.getElementById("videoSearch");
    const searchBtn = document.getElementById("searchBtn");
    let uploadedVideos = [];

    if (videoInput) {
        videoInput.addEventListener("change", function() {
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

    if (searchBtn) {
        searchBtn.addEventListener("click", function() {
            const query = videoSearch.value.toLowerCase();
            const found = [...videoFiles, ...uploadedVideos].find(v => v.name.toLowerCase().includes(query));
            if (found) {
                videoPlayer.src = found.url;
                downloadBtn.href = found.url;
                downloadBtn.download = found.name;
                alert(`Found: ${found.name}`);
            } else alert("Video not found");
        });
    }

    // ===== MUSIC =====
    const musicFiles = [
        { name: "Song 1", url: "music/song1.mp3" },
        { name: "Song 2", url: "music/song2.mp3" },
        { name: "Song 3", url: "music/song3.mp3" }
    ];

    const musicList = document.getElementById("musicList");
    const musicPlayer = document.getElementById("musicPlayer");
    const musicDownload = document.getElementById("musicDownload");

    if (musicList && musicPlayer && musicDownload) {
        musicFiles.forEach(m => {
            const btn = document.createElement("button");
            btn.innerText = m.name;
            btn.addEventListener("click", () => {
                musicPlayer.src = m.url;
                musicDownload.href = m.url;
                musicDownload.download = m.name;
            });
            musicList.appendChild(btn);
        });
    }

    const musicInput = document.getElementById("musicInput");
    const musicSearch = document.getElementById("musicSearch");
    const musicSearchBtn = document.getElementById("musicSearchBtn");
    let uploadedMusic = [];

    if (musicInput) {
        musicInput.addEventListener("change", function() {
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

    if (musicSearchBtn) {
        musicSearchBtn.addEventListener("click", function() {
            const query = musicSearch.value.toLowerCase();
            const found = [...musicFiles, ...uploadedMusic].find(m => m.name.toLowerCase().includes(query));
            if (found) {
                musicPlayer.src = found.url;
                musicDownload.href = found.url;
                musicDownload.download = found.name;
                alert(`Found: ${found.name}`);
            } else alert("Music not found");
        });
    }
});