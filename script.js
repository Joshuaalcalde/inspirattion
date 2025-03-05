// JavaScript to make sure the video loops every 10 seconds
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.addEventListener('ended', function() {
        video.currentTime = 0; // Reset video to the start when it ends
        video.play(); // Play the video again
    });
});
