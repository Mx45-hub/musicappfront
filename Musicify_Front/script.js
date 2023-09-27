const url = "https://musicapp-dquz.onrender.com/songs";

async function fetchAudioData() {
  try {
    // Making an API call (request)
    const response = await fetch(url);

    // Check if the response status is OK (HTTP status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parsing the response to JSON format
    const data = await response.json();

    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
  
      const songName = document.createElement('p');
      songName.textContent = "Song Name: " + data[i].songname;
  
      const artistName = document.createElement('p'); // Corrected variable name
      artistName.textContent = "Artist Name: " + data[i].artist;

      const genre = document.createElement('p'); // Corrected variable name
      genre.textContent = "Genre: " + data[i].genre;
  
      const songImage = document.createElement('img');
      songImage.src = "data:image/jpeg;base64," + data[i].songimage; // Assuming songimage is base64 encoded
  
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.type = "audio/mp3";
      audio.src = "data:audio/mp3;base64," + data[i].songData; // Assuming songData is base64 encoded
   
  
      songDiv.appendChild(songName);
      songDiv.appendChild(artistName); // Use artistName variable
      songDiv.appendChild(genre);
      songDiv.appendChild(songImage);
      songDiv.appendChild(audio);
      songContainer.appendChild(songDiv);
  }
  
  } catch (error) {
    // Handle any errors that occurred during the fetch or JSON parsing
    console.error("Error:", error);
  }
}

// Calling the function to fetch audio data
fetchAudioData();
