const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});
const containerElements = document.querySelectorAll('.container');
containerElements.forEach((el) => observer.observe(el));



document.getElementById('landscapeButton').addEventListener('click', function() {
    var landscapeVideo = document.getElementById('landscapeVideo');
    var button = document.getElementById('landscapeButton');

    if (landscapeVideo.style.display === 'none') {
        
        landscapeVideo.src = 'Pictures/relaxvid.mp4'; 
        landscapeVideo.style.display = 'block';
        landscapeVideo.play();

        button.textContent = 'Finished Relaxing';
    } else {
        landscapeVideo.style.display = 'none';
        landscapeVideo.pause();
        landscapeVideo.currentTime = 0;

        button.textContent = 'Press to Relax';
    }
});