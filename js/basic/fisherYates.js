function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // اختر رقمًا عشوائيًا من 0 إلى i
    const j = Math.floor(Math.random() * (i + 1));
    
    // بدّل بين array[i] و array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const array = [1, 'a', 'j' , 9 ,  2, 3, 4, 5];
const shuffledArray = shuffle(array);
console.log(shuffledArray);