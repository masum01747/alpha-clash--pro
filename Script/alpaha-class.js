function play(){
    // hide the home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden')

    // show the play ground
    const playGroundSection = document.getElementById('play-ground');
    // console.log(playGroundSection.classList)
    playGroundSection.classList.remove('hidden');
}
