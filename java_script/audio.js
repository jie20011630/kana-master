function playAudio(kana) {
    let audio = new Audio(`../audio/${kana}.mp3`);
    audio.play();
}