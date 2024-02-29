
    const infopage = document.getElementById('onepage')
    const artname =  document.getElementById('artname')
    const artautr =  document.getElementById('artautr')
    const artkey =  document.getElementById('artkey')
    const uplfile =  document.getElementById('uplfile')
    const twopage = document.getElementById('twopage')
    const settings = document.getElementById('settings')
    const btns = document.getElementById('btns')
    const loading = document.getElementById('loading')
    function nextpage() {
        infopage.style.display = 'none'
        twopage.style.display = 'block'
        
    }

    function autrpage() {

        infopage.style.display = 'none'
        artname.style.display = 'none'
        artkey.style.display = 'none'
        artautr.style.display = 'block'
    }

    function artnames() {
        infopage.style.display = 'none'
        artname.style.display = 'block'
        artkey.style.display = 'none'
        artautr.style.display = 'none'
    }

    function artkeys() {
        infopage.style.display = 'none'
        artname.style.display = 'none'
        artkey.style.display = 'block'
        artautr.style.display = 'none'
    }


    function artupload() {
        infopage.style.display = 'none'
        artname.style.display = 'none'
        artkey.style.display = 'none'
        artautr.style.display = 'none'
        uplfile.style.display = 'block'
    }
    function   warning() {
        infopage.style.display = 'none'
        artname.style.display = 'none'
        artkey.style.display = 'none'
        artautr.style.display = 'none'
        uplfile.style.display = 'none'
        btns.style.display = 'none'
        settings.style.display = 'block'
    }
  
    function submitForm() {
        var loading = document.getElementById('loading');
        
        // Create a script element
        var scriptElement = document.createElement('script');
        scriptElement.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
        scriptElement.type = "module";
    
        // Create a dotlottie-player element
        var dotlottiePlayer = document.createElement('dotlottie-player');
        dotlottiePlayer.setAttribute('src', 'https://lottie.host/f534fc54-382b-4b3e-9efa-1384045f3fcb/pjOi6TIGN3.json');
        dotlottiePlayer.setAttribute('background', 'transparent');
        dotlottiePlayer.setAttribute('speed', '1');

        dotlottiePlayer.setAttribute('loop', '');
        dotlottiePlayer.setAttribute('autoplay', '');
    
        // Append the script and dotlottie-player elements to the loading element
        loading.innerHTML = ''; // Clearing existing content
        loading.appendChild(scriptElement);
        loading.appendChild(dotlottiePlayer);
    }
    
    
    



    
