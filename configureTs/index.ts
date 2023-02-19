export { }

interface Person {
    readonly id: number;
    name: string;
    age: number;
    nickname?: string;
    walks: (name: string) => void;
    runs(): void;
}

interface Person {
    address: string;
}

interface Local{
    address: string;
}

interface Worker extends Person,Local {
    pay: string;
}



