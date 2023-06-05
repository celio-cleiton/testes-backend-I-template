import {pratica2} from "../src/pratica2"



describe("funcionamento da função", () => { 
    
    test("01 tem que retorna par", ()=>{
        const result = pratica2(2)
        expect(result).toBe(true)
    })

    test("02 retorna false para número ímpar", ()=>{
        const result = pratica2(5)
        expect(result).toBe(true)
    })

    test("03 retorna null para número não inteiro", ()=>{
        const result = pratica2(5.6)
        expect(result).toBe(true)
    })

    test("04 retorna null para não número", ()=>{
        const result = pratica2(5.6)
        expect(result).toBe(true)
    })
 })