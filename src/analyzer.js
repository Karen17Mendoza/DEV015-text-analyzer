const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if ((words[i]) && words[i].trim() !== '') {
        count++;
      }
    }
    return count;
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
    const words = text.split(/\s+/).filter(word => word !== '');
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageLength = totalLength / words.length;
    const roundedAverageLength = Math.round(averageLength * 100) / 100;
    return roundedAverageLength;

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    const words = text.split(/\s+/);

    for (let i = 0; i < words.length; i++) {
      const word = words[i].replace(/\.$/, ''); // Eliminar el punto final si existe
      if (/^\d+(\.\d+)?$/.test(word.trim())) {
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
