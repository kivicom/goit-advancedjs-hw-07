abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[];

    constructor(key: Key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }

    comeIn(tenant: Person): Person[] {
        if (this.door) {
            this.tenants.push(tenant);
        }
        return this.tenants;
    }

    abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
    openDoor(key: Key): boolean {
        if (this.key === key) {
            this.door = true;
            return true;
        }
        return false;
    }
}

class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
