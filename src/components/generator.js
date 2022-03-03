const randomLNl = (min, max)=> Math.floor(Math.random() * (max - min) + min)
const geraNumber = ()=> String.fromCharCode(randomLNl(48, 58))
const geraMauis = ()=> String.fromCharCode(randomLNl(65, 91))
const geraMinus = ()=> String.fromCharCode(randomLNl(97, 123))
let sybom = '!@#$%¨&*()_+{^}:?|*-+.';
const geraSybom = ()=> sybom[randomLNl(0, sybom.length)]

export default function gerarPassword(qtd, mauisculas, minusculas,number, sybom){
    const passArray = [];
    qtd = Number(qtd);

    if(qtd > 100)return 'Valor Muito Grande!!!'

    for(let i = 0; i < qtd; i++){
        mauisculas && passArray.push(geraMauis())
        minusculas && passArray.push(geraMinus())
        number && passArray.push(geraNumber())
        sybom && passArray.push(geraSybom())
    }

    return passArray.join('').slice(0, qtd)
}
