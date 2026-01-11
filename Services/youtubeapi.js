var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'F3OxA9Cz17A',
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'controls': 0,
            'loop': 1,
            'playlist': 'F3OxA9Cz17A',
            'showinfo': 0,
            'modestbranding': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    
    // Controle de Mute
    const muteBtn = document.getElementById('toggleMute');
    muteBtn.addEventListener('click', () => {
        if (player.isMuted()) {
            player.unMute();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            player.mute();
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    // Controle de Play/Pause
    const playBtn = document.getElementById('togglePlay');
    playBtn.addEventListener('click', () => {
        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            player.playVideo();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });

    // Botão Assistir Trailer (Ecrã Inteiro)
    document.getElementById('playBtn').addEventListener('click', () => {
        const iframe = player.getIframe();
        if (iframe.requestFullscreen) { iframe.requestFullscreen(); }
    });
}