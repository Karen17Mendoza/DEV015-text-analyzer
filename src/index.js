import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.querySelector('textarea');
  const wordCountElement = document.querySelector('li[data-testid="word-count"]');
  const characterCountElement = document.querySelector('li[data-testid="character-count"]');
  const charCountExcludingSpacesElement = document.querySelector('li[data-testid="char-count-excluding-spaces"]');
  const numberCountElement = document.querySelector('li[data-testid="number-count"]');

  textInput.addEventListener('input', () => {
    const text = textInput.value;
    const wordCount = analyzer.getWordCount(text);
    const characterCount = analyzer.getCharacterCount(text);
    const charCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
    const numberCount = analyzer.getNumberCount(text);

        
    wordCountElement.textContent = `Conteo de palabras: ${wordCount}`;
    characterCountElement.textContent = `Conteo de caracteres: ${characterCount}`;
    charCountExcludingSpacesElement.textContent = `Conteo de caracteres (sin espacios y signos de puntuación): ${charCountExcludingSpaces}`;
    numberCountElement.textContent = `Conteo de numeros: ${numberCount}`;       
  });
});

