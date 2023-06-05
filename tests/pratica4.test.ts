import { pratica4 } from "../src/pratica4";

describe("Funcionamento da função pratica4", () => {
    test("Retorna um array com os caracteres da string 'dev'", () => {
        const inputString = "dev";
        const expectedResult = ["d", "e", "v"];
        const result = pratica4(inputString);
        expect(result).toEqual(expectedResult);
    });

    test("Retorna um array vazio para uma string vazia", () => {
        const inputString = "";
        const expectedResult: string[] = [];
        const result = pratica4(inputString);
        expect(result).toEqual(expectedResult);
    });

    test("Retorna um array com um único elemento para uma string de um único caractere", () => {
        const inputString = "a";
        const expectedResult = ["a"];
        const result = pratica4(inputString);
        expect(result).toEqual(expectedResult);
    });

    test("Retorna um array com os caracteres da string 'typescript'", () => {
        const inputString = "typescript";
        const expectedResult = ["t", "y", "p", "e", "s", "c", "r", "i", "p", "t"];
        const result = pratica4(inputString);
        expect(result).toEqual(expectedResult);
    });
});
