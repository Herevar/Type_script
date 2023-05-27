interface Human {
    name: string ;
    age : number ;
}

interface HistoryEntry {
    createdAt : Date;
    event: string;

}

interface Historia {
    history : HistoryEntry[];
}

const tescik: HistoryEntry = {
    createdAt : new Date() ,
    event : 'jakis event' ,
    
}

class User implements Human, Historia{
    name: string;
    age: number;
    history: HistoryEntry[]; //hmm albo w konstruktorze " this.history = []" albo tutaj "=[]"
    //gdyby tu było "surname : string" to albo dopoisac = '' albo w kontruktorze
    
    constructor(name : string, age : number,){
    this.name = name;
    this.age = age;
    }

    showHistory(): void{
        console.log("test")// // nastepnie tutaj juz jest jako stworzona instancja do ktorej sie odwłujemy this.history
    }

    addHistory(entry : HistoryEntry): void {
        
    }
}

const person = new User ("mietek", 234)
person.showHistory()
person.addHistory({
    createdAt: new Date(),
    event : 'zalogowano'
})


//---------------------------------------------------------------------
// nazwałem PersonA bo gryzie sie z tym w index.ts - dziwne :v
interface PersonA {
    name : string ;
    points : number ;
}

const base : PersonA [] = [
    {
        name : "anna",
        points : 100,
    },
    {
        name : "olo",
        points : 200,
    },
    {
        name : "xena",
        points : 90,
    }
]
// obj typu person przyjmuje i zwraca typ "żaden"
function biggerPoints(obj : PersonA) : void {
    obj.points ++;
}

function totalPoints (ar : PersonA[]): number {
    return ar.reduce((prev, cur)=> prev + cur.points, 0 );
    // musi byc return bo inaczej nie zwroci o typu 'number' jak chcemy
    // init '0' i dodaje z kazdej nastepnej pozycji ; pozycja.points i zwraca sume wszystkiego
}

function withMostPoints (ar : PersonA[]) : PersonA {
    return ar.reduce((prev,cur)=> (prev.points < cur.points ? cur : prev ))
    // jezeli poprzedni ma pointsó mniej to cur a jezeli wiecej to prev - jakos to tam sobie działą ze sprawdza kazda pozycje i to działa xd
}

// jezeli tablica jest pusta to jest lekki problem;
// przy klasycznym reduce trzeba by zrowbic wpierw "if === 0" else {}

//                       --->    dlatego takie rzeczy sie robi lepiej sortem   <---- ;

function withMostPointsSort (ar : PersonA[]) : PersonA | null {
    return ar.sort((a,b)=> a.points - b.points)[0] ?? null; // [] bo po posortowaniu bierzemy 1 pozycje ktora ma najwieksza wartosc points
    // MUSI BYC RETURN JAK COS WRACA !!!


    // to DZIAŁA jakos tam.. w rozpisanej wersji sie robi ze if a>b return -1 inaczej 1 a jak wogole to 0 (czyli nie zmienia miejscami) 
    // ?? nullish operator po prostu jezeli jest ok to obiekt typu PersonA a jezeli nie ok to null
}
/// ZADANKO 

class User2 {
    constructor(name2) {
        this.name2 = name2;
    }
}

const json = `{"name2":"Jan"}`;
const {name2} = JSON.parse(json);
let userx = name2 === '' ? '' : `User2 ${name2}` ;

if (userx !== '') {
    userx = new User2(userx);
}

console.log(userx)


