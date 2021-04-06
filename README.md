# Backend

## O que é este projeto?

Este projeto é uma aplicação em Node - express que atua como servidor da avaliação de código.

## O que ele faz? 

Este projeto possui duas rotas:
- `/ordenaLista`: ordena uma lista de números e uma lista de textos.
- `/interlace`: verifica se 2 intervalos se interlaçam.

## Como executar?
Abra um terminal na pasta projeto e execute: 
```bash
$ npm install
$ npm run dev
```

## Exemplos:
- `POST /oredenaLista`
```json
{
    "listas": {
        "salaN": [ 1, 5, 7, 8 ],
        "salaS": [ "a", "x", "n" ]
    }
}
```

- `POST /oredenaLista`
```json
{
    "intervaloA": [ 1, 10 ],
    "intervaloB": [ 2, 4 ]
}
```
