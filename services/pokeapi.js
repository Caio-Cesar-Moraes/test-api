const  request = require("supertest")

const url = "https://pokeapi.co/api/v2/"

const checkPoke =  async () => {
    const response = await request(url)
    .get("berry/cheri")
    return response;
};
module.exports = {checkPoke}