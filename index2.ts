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