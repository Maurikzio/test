function *WeaponGenerator(){
    yield 'Katana';
    yield 'Wakizashi';
    yield 'Kusarigama';
}

const weaponIterator = WeaponGenerator();
let item = [];
// while(!(item =  weaponIterator.next()).done){
//     console.log(item !== null, item.value);
// }

function *createIdGenerator(){
    let id = 0;
    while(true){
        yield ++id;
    }
}
// const idGenerator = createIdGenerator();
// console.log(idGenerator.next('up').value);
// console.log(idGenerator.next('down').value);
// console.log(idGenerator.next().value);


function *ninjaGenerator(action){
    const imposter = yield ('Hatori' + action) 
    
    if(imposter === 'Hanzo') console.log('the generator has been infiltrated');

    yield("Yoshi (" + imposter + ") " + action);
}

// const ninjaIterator = ninjaGenerator('sulk');
// console.log(ninjaIterator.next().value);
// console.log(ninjaIterator.next('Hanzo').value);


// const fontGenerator = newFontGenerator(14); // 14 – стартовое значение
// fontGenerator.next("up").value -> 14
// fontGenerator.next("up").value -> 16
// fontGenerator.next("up").value -> 18
// fontGenerator.next().value -> 18
// fontGenerator.next("down").value -> 16
// fontGenerator.next("down").value -> 14
// fontGenerator.next("down").value -> 12
// fontGenerator.next().value -> 12

function *up(value){
    while(true){
        yield ++value;  
    }
}
function *down(value){
    while(true){
        yield --value;
    }
}

let generator = down(14);
// console.log(generator.next().value);
// console.log(generator.next().value);

function *newFontGenerator(value){
    while(true){
        let i = yield value;
        if(i === 'up'){
            ++value
            alert(value);
        }
        if(i === 'down'){
           --value
           alert(value);
        }
    }
}
const fontGenerator = newFontGenerator(14); 
console.log(fontGenerator.next().value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next().value);