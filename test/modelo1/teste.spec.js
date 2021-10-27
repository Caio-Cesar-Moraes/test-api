 const expect = require("chai").expect;
const pokeService = require("../../services/pokeapi")

describe("Logar no poken api", () =>{
    it("Retorno 200", async () =>{
        const response = await pokeService.checkPoke();
        console.log(response.body);
        expect(response.status).to.equal(200)
    });
})