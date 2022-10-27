// Functions Exercise
// 1

// 1
function fozzieBear() {
    console.log('Wocka Wocka!');
    
}
fozzieBear();

const b = '=' .repeat(25);

// 2
function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
    
}
beaker('Meep');

// or
//  
function beaker(speaker) {
   console.log(speak.repeat(4)); 
}
beaker('Meep ');
// 3
function muppetShow(a, b) {
    if (a === 'Muppet' && b === 'Show'){
        console.log("It's time to play the music. It's time to light the lights.");
    }
    
}

muppetShow('Muppet', 'Show');

console.log(b);

// 4

function kermit() {
    return 'Kermit the Frog';
    
}
kermit();
console.log(kermit());

console.log(b);

// 5

function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    } else {
        return false;
    }
    
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(55));

console.log(b);
// 6
const manOrMuppet = function () {
    console.log("Am I a man or am I a muppet?");
}
manOrMuppet();

// 7
rainbowConnection = () => "Someday we'll find it. The lovers, the dreamers and me";
 console.log(rainbowConnection());

 // 8
// No

// 9
// Yes

// 10
const newMuppetMovies = [
    'The Muppets',
    'Mupppets Most Wanted'
];

// 10 b
// const upperMovies = newMuppetMovies.map(function(x){
//     return x.toUpperCase();

// });
// console.log(upperMovies);
//or

const upperMovies = newMuppetMovies.map(movies => movies.toUpperCase());
console.log(upperMovies);
// Bonus
// 11a
const oldMuppetMovies = [
    'The Muppet Movie',
    'The muppets take manhattan',
    'The great muppet caper',
    'The muppet christmas carol',
    'muppet treasure island',
    'muppets from space'

];

// 11b
const twoMovies = oldMuppetMovies.filter(a => a.length === 22);
console.log(twoMovies);

//12a
const charactersOne = [
    'Statler',
    'Waldorf'
];

//12b
const charactersTwo = [
    'The swedish chef',
    'Rowlf',
    'Animal'
];
// 12c
randomMuppet = (characters) => {
    const m = Math.floor(Math.random() * );
    for (c of characters){
        console.log(`${characters[m]}`);
    }
}

randomMuppet = (characters) => {
    console.log('${characters[Math.floor(Math.random() * characters.length)]');

}

//12 d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

//13
caps = (string) => {
    let newString = '';
    for (i = 0; i <= string.length; i++){
       if (i % 2 === 0) {
            newString += string[i].toUpperCase();
       } else {
            newString += string[i].toLowerCase();
       }
            
    }
    return newString;
}

console.log(caps('Hello World'));

// Extra bonus

caps = (string) => {
    let count = 0;
    let newString = '';
    for (i=0; i < string.length; i++){
        if (string[i] === ' ') {
            newString += ' ';
        
        } else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        } else {
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString;
}
console.log(caps('Hello World'));