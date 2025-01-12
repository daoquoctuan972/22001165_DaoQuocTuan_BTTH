const text = `underscore_case 
first_name 
Some_Variable  
 calculate_AGE 
delayed_departure`

console.log(text);

let words = text.split('\n').map(word => word.trim().toLowerCase());

console.log(words);

words = words.map(word => {
    const ws = word.split('_');
    for (let i = 1; i < ws.length; i++) {
        ws[i] = ws[i][0].toUpperCase() + ws[i].slice(1);
    }
    return ws.join('')
})

words.forEach(word => {
    console.log(word);
})