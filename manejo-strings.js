export function concatInvert(t1, t2) {
    const concatStr = t1 + t2;
    //const arrayStr = concatStr.split();
    //const invertidoStr = arrayStr.reverse();
    //return invertidoStr.join('');

    return concatStr.split('').reverse().join('');
}

//module.exports = {
//    concatInvert
//} --> manera original de exportar sin module en el json

export function concatOnly(t1, t2) {
    return t1 + t2;
}