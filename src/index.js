import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const wordCountElement = document.querySelector('li[data-testid="word-count"]');

    textInput.addEventListener('input', () => {
        const text = textInput.value;
        const wordCount = analyzer.getWordCount(text);
        wordCountElement.textContent = `Recuento de palabras: ${wordCount}`;
    });
});

