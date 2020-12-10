const express = require('express')
const app = express()
const port = 6969
const sqlite3 = require('sqlite3').verbose();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// open the database
let db = new sqlite3.Database('./data.sql');

let sql = `SELECT * FROM 'restaurant_table'`;

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.end()
})

app.get('/restaurants', (req, res) => {
    let q = []
    if (req.query.country) q.push(`country = "${req.query.country}"`)
    if (req.query.state) q.push(`state = "${req.query.state}"`)
    if (req.query.city) q.push(`city LIKE "${req.query.city}"`)
    if (req.query.postal_code) q.push(`postalCode LIKE "${req.query.postal_code}"`)
    if (req.query.address) q.push(`address LIKE "${req.query.address}"`)
    if (req.query.name) q.push(`name LIKE "${req.query.name}"`)
    if (req.query.price) q.push(`price = "${req.query.price}"`)
    let page = req.query.page ? req.query.name : 1
    let perPage = req.query.per_page ? req.query.name : 25

    let qq = ""
    for (const [i, it] of q.entries()) {
        qq += i ? ` AND ${it}` : ` ${it}`
    }

    const sql = `
SELECT id, name, address, city, state, area, postalCode as postal_code, country, phone, lat, lng, price, urlReserve as reserve_url, urlMobileReserve as mobile_reserve_url, urlImage as image_url
FROM restaurant_table ${q.length ? "WHERE" : ""} ${qq}
LIMIT ${perPage}
OFFSET ${(page - 1) * perPage}`

    console.log(sql);

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }


        res.send({
            total_entries: 0,
            page: 1,
            per_page: perPage,
            restaurants: rows
        })
        res.end()
    });
})

app.get('/restaurants/:id', (req, res) => {
    let id = req.params.id
    sql = `
SELECT id, name, address, city, state, area, postalCode as postal_code, country, phone, lat, lng, price, urlReserve as reserve_url, urlMobileReserve as mobile_reserve_url, urlImage as image_url FROM 'restaurant_table'
WHERE id = ${id}`

    console.log(sql);

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }


        res.send(rows[0] ? rows[0] : {})
        res.end()
    });
})

app.get('/cities', (req, res) => {
    let id = req.params.id
    sql = `SELECT DISTINCT city FROM 'restaurant_table' ORDER BY city ASC`

    console.log(sql);

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }


        res.send({cities: rows.map(c => c.city)})
        res.end()
    });
})