let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    f10Btn = document.getElementById('f10'),
    b10Btn = document.getElementById('b10'),
    muteBtn = document.getElementById('mute'),
    unmuteBtn = document.getElementById('unmute'),
    downloadBtn = document.getElementById('download'),
    videoQualityBtn = document.getElementById('video-quality'),
    fullcreenBtn = document.getElementById('fullscreen'),
    video = document.getElementById('main-video'),
    updateVolumeBtn = document.getElementById('volume'),
    volumeSlider = document.getElementById('volume-slider');

    function play(){
        console.log('Play the video');
        video.play();
    }
    function pause(){
        console.log('Pause the video');
        video.pause();
    }
    function f10(){
        //get currenttime
        let cTime = video.currentTime;
        //add 10 seconds
        cTime = cTime + 10;
        //go to targettime
        console.log(cTime);
        video.currentTime = cTime;
        video.play();
    }
    function b10(){
        //get currenttime
        let cTime = video.currentTime;
        //reduce 10 seconds
        cTime = cTime - 10;
        //go to targettime
        console.log(cTime);
        video.currentTime = cTime;
        video.play();
    }
    function updateVolume(){
        // let videoVolume = video.volume;
        // console.log(videoVolume);
        //to get slider value
        let inputVol = volumeSlider.value;
        
        //convert into 0 , 0.5 , 1
        inputVol = inputVol/100;
        console.log(inputVol);   

        //apply to the video
        video.volume = inputVol;

    }
    function mute(){
        console.log('Mute the volume');
        video.muted = true;
    }
    function unmute(){
        console.log('unmute the volume');
        video.muted = false;
    }
    function download(){

        //get the filepath of the video
        let filePath = video.getAttribute('src');
        //download the video
        // TODO:update href value in a tag
        // TODO:click event for that a tag

        // console.log(filePath);
    }
    function videoQuality(){
        // console.log('Change the quality');
        //TODO:get the selected path value
        let targetPath = this.value,
            cTime = video.currentTime;

            
        //TODO:change the file path of the video
        video.setAttribute('src', targetPath);


        //TODO: change current time
        video.currentTime = cTime;

        //TODO: play the video
        video.play();
    }
    function fullcreen(){
        console.log('Full screen mood');
        // TODO
    }


    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click', pause);
    f10Btn.addEventListener('click', f10);
    b10Btn.addEventListener('click', b10);
    updateVolumeBtn.addEventListener('click', updateVolume);
    muteBtn.addEventListener('click', mute);
    unmuteBtn.addEventListener('click', unmute);
    downloadBtn.addEventListener('click', download);
    videoQualityBtn.addEventListener('change', videoQuality);
    fullcreenBtn.addEventListener('click', fullcreen);