interface Product{
    name : string ;
    count : number ;
    isDegradable : boolean ;
}



const product : Product= {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradable: true,
};


    // obiekt musi miec typy odpowiednie, propName; musi miec odpowiednie 'typy'/nazwy
function getProductProp(obj : Product, propName : keyof Product) : number | string | boolean{
    //funkcja moze zwrocic w sumie dowolny z tych podanych w Product
    return obj[propName];
    // zeby uniknąć (obj as any) i ze zwroci undefine, bo ktos poda propName = 'zxc' to kefof Product - zeby recznie nie wypisywac
    //i od razu nam podpowie w funkcji czego mozemy uzyc - po wpisacniu ''
}

const getCount = getProductProp(product , 'count') as number;
const getIsDegarde = getProductProp(product, 'isDegradable') as boolean