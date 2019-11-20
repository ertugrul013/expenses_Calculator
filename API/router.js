var router = require("express").Router();
const fetch = require('node-fetch');
const cheerio = require('cheerio');

router.use(function DateLog(req, res, next) {
    console.log('Date: ' + Date.now());

    res.status(404);

    if (req.accepts) {
        console.log('404 error has been sent back');
        res.json({
            error: 'Command not found 404'
        });
    }
    next();
});

//get a certain city back 
router.get('/api/cities/:name', function (req, res, next) {
    if (name == null) {
        res.status(400).json({ error: 'No city of that name has been found' });
    }

    console.log("Information has been requested for this city: " + name)
});

router.get('/api/city/:city', async (req, res) => {
    const city = req.params.city[0].toUpperCase() + req.params.city.slice(1).toLowerCase();
    const { currency = 'EUR' } = req.query;

    const response = await fetch(`https://www.numbeo.com/cost-of-living/in/${city}?displayCurrency=${currency}`);
    if (!response.ok) {
        return res.status(response.status).send(response.statusText);
    }
    const html = await response.text();

    const $ = cheerio.load(html);

    const rows = $('body > div.innerWidth > table > tbody > tr')
        .filter((i, el) => $(el).children('td').length === 3)
        .map(
            (i, el) => $(el).children().map(
                (i, el) => $(el).text().trim()
            ).toArray()
        ).toArray();

    const costs = chunkArray(rows, 3)
        .map(([item, costWithSymbol, range]) => {
            const cost = costWithSymbol.replace(/^.*?([\d,.]+).*?$/, '$1');
            const [rangeLow, rangeHigh] = range.split('-');
            return {
                item,
                cost,
                range: {
                    low: rangeLow,
                    high: rangeHigh
                }
            }
        });
    return res.json({ city, costs, currency });
});

router.get('/api/city/:city', (req, res) => res.status(400).json({
    error: 'No city supplied. Please navigate to `/api/city/:city` to obtain results.'
}));

function chunkArray(arr, chunkSize) {
    let temp = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        temp.push(arr.slice(i, i + chunkSize));
    }
    return temp;
}

module.exports = router;