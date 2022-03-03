import gerarPassword from './generator';

const result = document.querySelector('.result');
const carac = document.querySelector('.carac');
const number = document.querySelector('.number');
const maus = document.querySelector('.maus');
const minus = document.querySelector('.minus');
const lsimb = document.querySelector('.lsimb');
const btn = document.querySelector('.btn');
const btnClear = document.querySelector('.btn-clear');

export default ()=>{
    
    btn.addEventListener('click', ()=>{
        result.innerHTML = generatorFrom();
    })

    btnClear.addEventListener('click', ()=>{
        carac.value = '';
        result.innerHTML = ''
    })

}

function generatorFrom(){

    const passWord = gerarPassword(
        carac.value,
        maus.checked,
        minus.checked,
        number.checked,
        lsimb.checked
    )

    if(passWord.length > 20)return 'Você realmente precisa disso!!!'

    return passWord || 'Nada Selecionado'
}