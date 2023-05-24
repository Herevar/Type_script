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

class User implements Human, Historia{
    name: string;
    age: number;
    history: HistoryEntry[]; //hmm
    
    constructor(name : string, age : number,){
    this.name = name;
    this.age = age;
    }

    showHistory(): void{

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