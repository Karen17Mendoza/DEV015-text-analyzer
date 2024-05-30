const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim() ? text.trim().split(/\s+/).filter(text => isNaN(text)).length : 0;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.replace(/[ \p{P}]/gu, '').length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let words = text.match(/\b\w+\b/g) || [];
    let totalLength = words.reduce((acc, word) => acc + word.length, 0);
    let averageLength = totalLength / words.length;
    let roundedAverageLength = Math.round(averageLength * 100) / 100;
    return roundedAverageLength;
    },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    const words = text.split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!isNaN(word) && word.trim() !== '') {
            count++;
        }
    }
    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    return numbers.reduce((asc,num) => asc + parseFloat(num,10),0);
  },
};

export default analyzer;
