//const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field;
  }
  print() {
    let joinField = "";
    let fieldInfo = {
      largura: 0,
      altura: 0,
    };

    for (let i = 0; i < this.field.length; i++) {
      if (i > 0) {
        joinField += "\n";
      }
      // Altura do campo
      fieldInfo.altura = this.field.length;

      for (let j = 0; j < this.field[i].length; j++) {
        // Largura do campo
        fieldInfo.largura = this.field[i].length;
        joinField += this.field[i][j];
      }
    }
    console.log(`Largura: ${fieldInfo.largura} e Altura: ${fieldInfo.altura}`);
    return joinField;
  }
  infos() {
    let objectsPositions = {
      hat: 0,
      holes: [],
    };
  }
}

const field = new Field([
  ["*", "░", "░", "░"],
  ["░", "O", "░", "O"],
  ["░", "^", "░", "O"],
  ["O", "░", "░", "░"],
]);

console.log(field.print());
