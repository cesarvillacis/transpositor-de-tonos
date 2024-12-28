const transpositions = {
    alto: -3, // Saxofón Alto: 3 semitonos abajo (Mi♭)
    trumpet: -2, // Trompeta: 2 semitonos abajo (Si♭)
    piano: 0 // Piano: Sin transposición
  };
  
  const notes = [
    "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab", "A", "A# / Bb", "B"
  ];
  
  function transposeKey() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const key = document.getElementById('key').value;
    const mode = document.getElementById('mode').value;
  
    const originTranspose = transpositions[origin];
    const destinationTranspose = transpositions[destination];
  
    const keyIndex = notes.findIndex(note => note.includes(key));
    if (keyIndex === -1) {
      document.getElementById('output').innerText = 'Tonalidad no válida';
      return;
    }
  
    const transposedIndex = (keyIndex + destinationTranspose - originTranspose + 12) % 12;
    const transposedKey = notes[transposedIndex];
  
    document.getElementById('output').innerText = `Tonalidad transportada: ${transposedKey} ${mode === 'major' ? 'Mayor' : 'Menor'}`;
  }