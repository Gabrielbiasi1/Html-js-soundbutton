function playAudio(filePath) {
  // Fetch the audio file from the server
  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
      // Create a new Audio object to play the file
      const audio = new Audio(arrayBuffer);
      audio.play();
    })
    .catch(error => console.error(error));
}


playAudio('https:C:\Trabalho.estudo\JS\assets\Roblox-death-sound.mp3');