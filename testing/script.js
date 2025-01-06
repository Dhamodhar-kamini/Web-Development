// Wait for the branding video to end
const brandingVideo = document.getElementById('branding-video');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

brandingVideo.addEventListener('ended', () => {
    // Hide the splash screen
    splashScreen.style.display = 'none';
    // Show the main content
    mainContent.style.display = 'block';
});
