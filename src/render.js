//Butones variables
const videoElement = document.querySelector('video');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const chooseVideo = document.querySelector('#chooseVideo');

const {desktopCapturer,remote} = require('electron');
const {Menu} = remote;

//Conseguir las ventanas activas para grabar 
async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types:['windows','screen']
    });

    const videoOptionMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            }
        })
    );

    videoOptionMenu.popup();
}