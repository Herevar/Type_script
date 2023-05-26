// const abc: string = 'hello, łort';
// console.log(abc);

interface Person {
    name: string ;
    age : number ;
    isdev : boolean ;
    // greed : ()=> void;
    greet() : void;
    achievement? : string[];
}

interface HistoryKurwa {
    historyOld : string ;
}
//jak nazwe History i implementuje to sie na dole coś pierdoli i pierdylion dziwnych rzeczy dopsiuje w tym length:number - o chuj chodzi ?
// cos z nazwaniem "History" interface jakies rzeczy sie dzieja - pewnie tak jest wbudowane teraz
interface ByleCo {
    cokolwiek : string [];
}

const personA: Person = {
    name: "pjoter",
    age: 123,
    isdev: false,
    greet() {
        console.log(`joł, ${this.name} !`)
    }
}

const personB: Person = {
    name: "helga",
    age: 223,
    isdev: false,
    greet() {
        console.log(`aaa, ${this.name} !`)
    },
    achievement : ['cos tam']
// tak w klasie w implementacji podpowiada pozniej ->    achievement?: string[] | undefined;
}


function dateOfBirth( {age}: Person) : number {
    return (new Date().getFullYear()) - age ;

}

console.log(dateOfBirth(personA))
