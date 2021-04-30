const express = require('express')
var path = require('path');
const app = express()
const port = 6969
const sqlite3 = require('sqlite3').verbose();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// open the database
let db = new sqlite3.Database('data/data.db');

const projection = `SELECT id, name, address, city, state, area, postalCode as postal_code, country, phone, lat, lng, price, urlReserve as reserve_url, urlMobileReserve as mobile_reserve_url, urlImage as image_url`;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/www/root.html'))
})

// country = COALESCE(:country, country) AND state LIKE COALESCE(:state, state) AND INSTR(COALESCE(:city, city), city) AND INSTR(postalCode, COALESCE(:zip, postalCode)) AND INSTR(address, COALESCE(:address, address)) AND INSTR(name, COALESCE(:name, name))

app.get('/restaurants', (req, res) => {
    let q = []
    if (req.query.country) q.push(`country = "${req.query.country}"`)
    if (req.query.state) q.push(`state = "${req.query.state}"`)
    if (req.query.city) q.push(`INSTR(UPPER(city), UPPER("${req.query.city}"))`)
    if (req.query.postal_code) q.push(`INSTR(UPPER(postalCode), UPPER("${req.query.postal_code}"))`)
    if (req.query.address) q.push(`INSTR(UPPER(address), UPPER("${req.query.address}"))`)
    if (req.query.name) q.push(`INSTR(UPPER(name), UPPER("${req.query.name}"))`)
    if (req.query.price) q.push(`price = "${req.query.price}"`)
    let page = req.query.page ? Math.max(req.query.page, 1) : 1
    let perPage = req.query.per_page ? req.query.per_page : 25

    let qq = ""
    for (const [i, it] of q.entries()) {
        qq += i ? ` AND ${it}` : `${it}`
    }

    const conditions = `${q.length ? "WHERE" : ""} ${qq}`
    const sql = `${projection} FROM 'restaurant_table' ${conditions} LIMIT ${perPage} OFFSET ${(page - 1) * perPage}`

    console.log(`[${new Date().toLocaleString()}]:${sql.substr(projection.length)}`);

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(`[${new Date().toLocaleString()}] ERROR`, req.url, sql, err);

            res.send({
                total_entries: 0,
                page: page,
                per_page: perPage,
                restaurants: [{name: `Your query: ${req.url}. Something is wrong with your parameters, or maybe it just a bug...`}]
            })

            return
        }

        db.all(`SELECT COUNT(*) as count FROM 'restaurant_table' ${conditions}`, [], (err, count) => {
            if (err) {
                    console.error(err);
    
                return
            }

            res.send({
                total_entries: count[0].count,
                page: page,
                per_page: perPage,
                restaurants: rows
            })
            res.end()
        })
    });
})

app.get('/restaurants/:id', (req, res) => {
    let id = req.params.id
    const sql = `${projection} FROM 'restaurant_table' WHERE id = ${id}`

    console.log(`[${new Date().toLocaleString()}]:${sql.substr(projection.length)}`);

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(`[${new Date().toLocaleString()}] ERROR`, req.url, sql, err);

            res.send({restaurants: [{name: `Your query: ${req.url}. "${id}" is not a valid id... Maybe you wanted to send as a Query instead of Param? Try something like: fun get(@Query("param_name") ...)`}]})

            return
        }


        res.send(rows[0] ? rows[0] : {})
        res.end()
    });
})

app.get('/countries', (req, res) => {
    sql = `SELECT DISTINCT country FROM 'restaurant_table' ORDER BY country ASC`

    console.log(`[${new Date().toLocaleString()}]: ${sql}`);

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(req.url, sql, err);
            return
        }

        res.send({
            count: rows.length,
            countries: rows.map(c => c.country)
        })
        res.end()
    })
})

app.get('/states', (req, res) => {
    sql = `SELECT DISTINCT state FROM 'restaurant_table' ORDER BY state ASC`

    console.log(`[${new Date().toLocaleString()}]: ${sql}`);

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(req.url, sql, err);
            return
        }

        res.send({
            count: rows.length,
            states: rows.map(c => c.state)
        })
        res.end()
    })
})

app.get('/cities', (req, res) => {
    sql = `SELECT DISTINCT city FROM 'restaurant_table' ORDER BY city ASC`

    console.log(`[${new Date().toLocaleString()}]: ${sql}`);

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(req.url, sql, err);
            return
        }


        res.send({ cities: rows.map(c => c.city) })
        res.end()
    });
})

