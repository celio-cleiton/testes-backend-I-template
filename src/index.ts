import { pratica2 } from "./pratica2";
import { pratica4 } from "./pratica4";



console.log(pratica2(4))
console.log(pratica2(3))
console.log(pratica2(4.5))
console.log(pratica2("ola mundo" as any))

// Exemplo de uso
const inputString = "dev";
const resultArray = pratica4(inputString);
console.log(resultArray); // ["d", "e", "v"]
