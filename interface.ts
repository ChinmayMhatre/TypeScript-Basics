export { }
//syntax

interface Person {
    //readonly property
    readonly id: number;
    name: string;
    age: number;
    //optional property
    nickname?: string;
    //methods of the person object
    walks: (name: string) => void;
    // another syntax
    runs(): void;
}

// incase we want to add more things later on we can just add them like this
interface Person {
    address: string;
}

//new interface
interface Local{
    address: string;
}

//we can also inherit from an interface
// interfaces can inherit from multiple interfaces
interface Worker extends Person,Local {
    pay: string;
}

//Note interfaces can only be used for object types


