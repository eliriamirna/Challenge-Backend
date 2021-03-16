const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.post('/ordenaLista', (req, res) => {

    console.log(req)
    req.body.listas.salaN.sort((first, second) => first - second)
    req.body.listas.salaS.sort()

    res.json(req.body)
})



function isBetween(num, begin, end) {
    return num >= begin && num <= end
}

app.post('/interlace', (req, res) => {

    const objectIntervals = req.body
    let intervaloA = objectIntervals.intervaloA.map((num) => Number(num))
    let intervaloB = objectIntervals.intervaloB.map((num) => Number(num))

    if (isBetween(intervaloA[0], intervaloB[0], intervaloB[1]) ||
        isBetween(intervaloA[1], intervaloB[0], intervaloB[1])) {

        res.json(true)
    }

    if (isBetween(intervaloB[0], intervaloA[0], intervaloA[1]) ||
        isBetween(intervaloB[1], intervaloA[0], intervaloA[1])) {

        res.json(true)

    }

    res.json(false)

})

app.listen(8080)