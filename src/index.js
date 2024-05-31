import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.querySelector('textarea');
  const wordCountElement = document.querySelector('li[data-testid="word-count"]');
  const characterCountElement = document.querySelector('li[data-testid="character-count"]');
  const charCountExcludingSpacesElement = document.querySelector('li[data-testid="character-no-spaces-count"]');
  const numberCountElement = document.querySelector('li[data-testid="number-count"]');
  const numberSumElement = document.querySelector('li[data-testid="number-sum"]');
  const roundedAverageLengthElement = document.querySelector('li[data-testid="word-length-average"]');
  const resetButton = document.getElementById('reset-button');

  function updateCounts() {
    const text = textInput.value;
    const wordCount = analyzer.getWordCount(text);
    const characterCount = analyzer.getCharacterCount(text);
    const charCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
    const numberCount = analyzer.getNumberCount(text);
    const numberSum = analyzer.getNumberSum(text);
    const roundedAverageLength = analyzer.getAverageWordLength(text);
            
    wordCountElement.textContent = `Conteo de palabras: ${wordCount}`;
    characterCountElement.textContent = `Conteo de caracteres: ${characterCount}`;
    charCountExcludingSpacesElement.textContent = `Conteo de caracteres (sin espacios y signos de puntuación): ${charCountExcludingSpaces}`;
    numberCountElement.textContent = `Conteo de numeros: ${numberCount}`;     
    numberSumElement.textContent =   `Suma de numeros: ${numberSum}`;
    roundedAverageLengthElement.textContent = `Longitud media: ${roundedAverageLength}`;
        
  }
  textInput.addEventListener('input',updateCounts);

  resetButton.addEventListener('click', () => {
    textInput.value = '';
    updateCounts();
;
  });
  resetButton.click();


});

