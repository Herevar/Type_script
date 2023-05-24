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
    
}


function dateOfBirth( {age}: Person) : number {
    return (new Date().getFullYear()) - age ;

}

console.log(dateOfBirth(personA))


class Ludzie implements Person, ByleCo, HistoryKurwa {
    historyOld: string;
    cokolwiek: string[];
    name: string;
    age: number;
    isdev: boolean;
    greet(): void {
        throw new Error("Method not implemented.");
    }
    achievement?: string[] | undefined;
    
}