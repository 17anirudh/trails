var player;
var toast = document.getElementById("toast");
var controlBtn = document.getElementById("play-pause");
var stopBtn = document.getElementById("stop");
var volumeSlider = document.getElementById("volume");
var forward10 = document.getElementById("skip10s");
var rewind10 = document.getElementById("rewind10s");

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '5v1NmqyWPGc',
            playerVars: {
            'playsinline': 1
            },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    player.setVolume(50);
    controlBtn.addEventListener("click", function () {
        if (controlBtn.textContent == "play_arrow") {
            player.playVideo();
            controlBtn.textContent = "pause_circle";
            showToast("Playing...")
        } else {
            player.pauseVideo();
            controlBtn.textContent = "play_arrow";
            showToast("Paused");
        }
    });
    stopBtn.addEventListener("click", function () {
        player.stopVideo();
        controlBtn.textContent == "play_arrow";
        showToast("Stopped");
    });
    volumeSlider.addEventListener("input", function () {
        var volume = parseInt(this.value);
        player.setVolume(volume);
        showToast(`Set volume to ${volume}...`)
    });
    forward10.addEventListener("click", function() {
        var currentTime = player.getCurrentTime();
        var duration = player.getDuration();
        player.seekTo(Math.min(currentTime + 10, duration), true);
        showToast("Forwarded 10s....");
    });
    rewind10.addEventListener("click", function() {
        var currentTime = player.getCurrentTime();
        player.seekTo(Math.max(currentTime - 10, 0), true);
        showToast("Rewind 10s...");
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {               
        console.log("Video Ended");
        showToast("Video Ended");
    }
    if (event.data == YT.PlayerState.PLAYING) {             
        console.log("Video Playing");
    }
    if (event.data == YT.PlayerState.PAUSED) {              
        console.log("Video Paused");
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 1000); 
}