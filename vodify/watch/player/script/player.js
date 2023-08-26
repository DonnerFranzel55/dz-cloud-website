        const videoPlayer = document.getElementById("video-player")
        const playPauseButton = document.getElementById("playPauseButton");
        const progressBar = document.querySelector(".progressBar");
        const progress = document.getElementById("progress");
        const currentTime = document.getElementById("currentTime");
        const duration = document.getElementById("duration");
        const muteButton = document.getElementById("muteButton");
        const muteIcon = document.getElementById("muteIcon");
        const volumeSlider = document.getElementById("volumeSlider");

        let isMuted = false;

        playPauseButton.addEventListener("click", togglePlayPause);

        function togglePlayPause() {
            if (videoPlayer.paused) {
                videoPlayer.play();
                playPauseIcon.src = "./../symbols/pause_24dp.svg"; // Pause icon image
            } else {
                videoPlayer.pause();
                playPauseIcon.src = "./../symbols/play_arrow_24dp.svg"; // Play icon image
            }
        }


        // Add an event listener to the video player to update the progress bar and the current time label as the video plays
        videoPlayer.addEventListener("timeupdate", updateProgress);

        // Function to update the progress bar and the current time label as the video plays
        function updateProgress() {
            const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100; // Calculate the percentage of the video that has been played
            progress.style.width = percent + "%"; // Set the progress bar width based on the percentage of the video that has been played
            currentTime.textContent = formatTime(videoPlayer.currentTime); // Update the current time label with the current time of the video, formatted as mm:ss
        }

        // Add an event listener to the progress bar to seek to the clicked position in the video
        progressBar.addEventListener("click", seek);

        // Function to seek to the clicked position in the video
        function seek(event) {
            const clickedPosition = event.clientX - progressBar.getBoundingClientRect().left; // Calculate the position where the user clicked on the progress bar, relative to the left edge of the bar
            const progressBarWidth = progressBar.offsetWidth; // Get the width of the progress bar
            const seekTime = (clickedPosition / progressBarWidth) * videoPlayer.duration; // Calculate the time in the video to seek to based on the position where the user clicked on the progress bar
            videoPlayer.currentTime = seekTime; // Seek to the calculated time in the video
        }

        // Add an event listener to the video player to update the duration label when the duration is available
        videoPlayer.addEventListener("loadedmetadata", () => {
            duration.textContent = formatTime(videoPlayer.duration); // Update the duration label with the duration of the video, formatted as mm:ss
        });

        muteButton.addEventListener("click", () => {
            isMuted = !isMuted;
            if (isMuted) {
                muteIcon.src = "./../symbols/volume_off_24dp.svg";
                muteIcon.alt = "muted";
                volumeSlider.value = 0
            } else {
                muteIcon.src = "./../symbols/volume_up_24dp.svg";
                muteIcon.alt = "unmuted";
                volumeSlider.value = 100
            }
            // set the volume accordingly
            videoPlayer.volume = isMuted ? 0 : volumeSlider.value / 100;
        });

        // Add an event listener to the volume slider to set the video volume
        volumeSlider.addEventListener("input", setVolume);

        // Function to set the video volume based on the volume slider value
        function setVolume() {
            videoPlayer.volume = volumeSlider.value / 100; // Set the video volume to the value of the volume slider, divided by 100 to get a value between 0 and 1
            if (videoPlayer.volume > 0) {
                videoPlayer.muted = false;
                muteIcon.src = "./../symbols/volume_up_24dp.svg"; // Volume icon if the video is not muted
            } else {
                videoPlayer.muted = true;
                muteIcon.src = "./../symbols/volume_off_24dp.svg"; // Mute icon if the video is muted
            }
        }

        function formatTime(seconds) {
            let minutes = Math.floor(seconds / 60);
            let secs = Math.floor(seconds % 60);
            return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
        }

        const videoElement = document.getElementById('videoPlayer');

        // Verhindert das Kontextmenü
        videoElement.addEventListener('contextmenu', e => {
            e.preventDefault();
        });
