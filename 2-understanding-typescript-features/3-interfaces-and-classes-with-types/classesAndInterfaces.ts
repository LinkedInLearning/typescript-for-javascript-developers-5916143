interface Greetable {
  greet(): void;
}

class Developer implements Greetable {
  constructor(public username: string) { }

  greet() {
    console.log(`Hello, I'm ${this.username} and I love to code!`);
  }
}

const dev = new Developer('TS lover');
dev.greet();

