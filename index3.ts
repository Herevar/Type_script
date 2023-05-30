enum TwoEnum {
    Add,
    Subtract,
    Multiply,
    Divine,
}
enum OneEnum {
    Inc,
    OdejmijOKurwaJeden
}

//takie przerzucanie do innych interfaców podobnie jak z enumem tylko ze to i tak jest wypozycjonowane (ale o tym pewnie pozniej)

interface OneNumber {
    a : number ;
    // sign? : "++" | '--'
    sign? : OneEnum

}

// type Znaki = '+' | '-' | '*' | '/'


interface TwoNumber {
    a: number ;
    b: number ;
    // sign? : '+' | '-' | '*' | '/'  //Znaki;
    sign? : TwoEnum
}

type CorrectType = OneNumber | TwoNumber
//tu ciekawie ze zamiast dany interface to robimy typ z wyborem interface'u / -ów

const a : CorrectType = {
    a : 5,
    b : 2,
    // sign : '+'
    sign : TwoEnum.Add
}

const b : CorrectType = {
    a : 11,
    // sign : "++"
    sign : OneEnum.Inc
}

const c : CorrectType = {
    a : 5,
    b : 4,
}

const d : CorrectType = {
    a : 9,
    // sign : "--"
    sign : OneEnum.OdejmijOKurwaJeden
}

// funkcja i w niej wybieram obiekt danego typu
function calc({a,b,sign} : TwoNumber) {
    //mozna if'em tez
    switch(sign){
        case TwoEnum.Add :
            //dokona nam konwersji niejawnej ale typsrcipt jako tako wymusza sprecyzowanie
        console.log(Number(a) + Number(b));
        break;
    }
}
calc(a)
//calc(innaliczba) by trzeba zrobic w petli zeby taka opcje miało