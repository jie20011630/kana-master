// Function to play the audio for a given kana
function playAudio(kana) {
    let audio = new Audio(`../audio/${kana}.mp3`);
    audio.play();
}

// Function to start speech recognition
function startSpeechRecognition(inputId) {
    // Check if the browser supports SpeechRecognition
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition. Please use Chrome.');
        return;
    }

    // Create a new instance of SpeechRecognition
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja-JP'; // Set the language to Japanese
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // When the recognition result is obtained
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById(`speech${inputId}`).value = transcript;
    };

    // Start the recognition
    recognition.start();
}