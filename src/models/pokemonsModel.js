const connection = require ('./connection');

async function modelGetAllPokemons() {
    const pokemons = await connection.query(
        'SELECT * FROM pokemons'
    )

    return pokemons.rows;
}

async function modelCreatePokemon (nome, tipo, pv, custo_retirada, evolucao, img) {
    await connection.query ( //Não precisei criar a 'const' para o 'await' pois não irei retornar nada, apenas inserir direto no DB.
        `INSERT INTO pokemons (nome, tipo, pv, custo_retirada, evolucao, img)
        VALUES (
            '${nome}',
            ${tipo},
            ${pv},
            ${custo_retirada},
            ${evolucao},
            '${img}'
        )
    `)

    return // Não precisarei retornar nada pois não estou fazendo nada além de adicionar dados no DB.
}

async function modelUpdatePokemon(nome, tipo, pv, custo_retirada, evolucao, img){
    await connection.query(`
        UPDATE pokemons (nome, tipo, pv, custo_retirada, evolucao, img)
        SET nome = '${nome}',
            tipo = ${tipo},
            pv =  ${pv},
            custo_retirada =  ${custo_retirada},
            evolucao =  ${evolucao},
            img = '${img}'
        WHERE id = ${id}
    `)

    return;
}



module.exports = {
    modelGetAllPokemons,
    modelCreatePokemon,
    modelUpdatePokemon,
}