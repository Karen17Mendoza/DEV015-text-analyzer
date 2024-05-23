import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.querySelector('textarea');
  const wordCountElement = document.querySelector('li[data-testid="word-count"]');
  const characterCountElement = document.querySelector('li[data-testid="character-count"]');
  const charCountExcludingSpacesElement = document.querySelector('li[data-testid="char-count-excluding-spaces"]');


  textInput.addEventListener('input', () => {
    const text = textInput.value;
    const wordCount = analyzer.getWordCount(text);
    const characterCount = analyzer.getCharacterCount(text);
    const charCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
    
        
    wordCountElement.textContent = `Conteo de palabras: ${wordCount}`;
    characterCountElement.textContent = `Conteo de caracteres: ${characterCount}`;
    charCountExcludingSpacesElement.textContent = `Recuento de caracteres (sin espacios y signos de puntuación): ${charCountExcludingSpaces}`;
        
  });
});

