var toggleMenuBar = () => {

    let navigation = document.querySelector('.navigation');
    let toggleMenu = document.querySelector('.toggleMenu');
    navigation.classList.toggle('active')
    toggleMenu.classList.toggle('active');
}


var switcher = document.querySelector('input[type = checkbox]');
console.log(typeof (switcher));
console.log(switcher.checked);

switcher.addEventListener('change', () => {
    console.log(switcher.checked == true);
    if (switcher.checked) {
        document.documentElement.style.setProperty('--theme', '#157DEC');
        document.documentElement.style.setProperty('--boxshd1', '#d3cfc1');
        document.documentElement.style.setProperty('--boxshd2', '#ffffff');
        document.documentElement.style.setProperty('--cdbgA', '#fffff3');
        document.documentElement.style.setProperty('--cdbgB', '#dfdccc');
        document.documentElement.style.setProperty('--toggleMenuColorHover', '#F8F4E3');
        document.documentElement.style.setProperty('--navBgColor', '#F8F4E3');
        document.documentElement.style.setProperty('--clrHP', '#111111');



    } else {
        document.documentElement.style.setProperty('--theme', '#FF1493');
        document.documentElement.style.setProperty('--boxshd1', '#0b0b0b')
        document.documentElement.style.setProperty('--boxshd2', '#171717')
        document.documentElement.style.setProperty('--cdbgA', '#0f0f0f')
        document.documentElement.style.setProperty('--cdbgB', '#121212')
        document.documentElement.style.setProperty('--toggleMenuColorHover', '#111111');
        document.documentElement.style.setProperty(' --navBgColor', '#111111');
        document.documentElement.style.setProperty('--navBgColor', '#111111');
        document.documentElement.style.setProperty('--clrHP', 'white');



    }

})





const Button = document.querySelector('.talk');
const content = document.querySelector('.content');
const light = ['light', 'light mode', 'bright']
const dark = ['dark', 'dark mode', 'dim']
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = () => {
    console.log('voice is activated and you can use me now');
}

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    console.log(transcript);

    if (transcript.includes('light') || (transcript.includes('lig') || (transcript.includes('bright')))) {
        readOutLoud(light[(Math.floor(Math.random() * light.length))]);
        document.documentElement.style.setProperty('--theme', '#157DEC');
        document.documentElement.style.setProperty('--boxshd1', '#d3cfc1');
        document.documentElement.style.setProperty('--boxshd2', '#ffffff');
        document.documentElement.style.setProperty('--cdbgA', '#fffff3');
        document.documentElement.style.setProperty('--cdbgB', '#dfdccc');
        document.documentElement.style.setProperty('--toggleMenuColorHover', '#F8F4E3');
        document.documentElement.style.setProperty('--navBgColor', '#F8F4E3');
        document.documentElement.style.setProperty('--clrHP', '#111111');

    } else if (transcript.includes('dark') || (transcript.includes('dar') || transcript.includes('dim'))) {

        readOutLoud(dark[Math.floor(Math.random() * dark.length)]);
        document.documentElement.style.setProperty('--theme', '#FF1493');
        document.documentElement.style.setProperty('--boxshd1', '#0b0b0b')
        document.documentElement.style.setProperty('--boxshd2', '#171717')
        document.documentElement.style.setProperty('--cdbgA', '#0f0f0f')
        document.documentElement.style.setProperty('--cdbgB', '#121212')
        document.documentElement.style.setProperty('--toggleMenuColorHover', '#111111');
        document.documentElement.style.setProperty(' --navBgColor', '#111111');
        document.documentElement.style.setProperty('--navBgColor', '#111111');
        document.documentElement.style.setProperty('--clrHP', 'white');
    } else {
        readOutLoud('what did you say');
    }

}
Button.addEventListener('click', () => {
    recognition.start();
})


function readOutLoud(message) {

    const speech = new SpeechSynthesisUtterance();
    console.log(message);
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}