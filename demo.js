let isCubeOpen = false;

function toggleCubeAnimation() {
    const cube = document.querySelector('.box');
    if (!isCubeOpen) {
        cube.style.animation = 'openCube 2s forwards';
    } else {
        cube.style.animation = 'closeCube 2s forwards';
    }
    isCubeOpen = !isCubeOpen;
}

setInterval(toggleCubeAnimation, 4000); // Adjust the interval duration as needed
