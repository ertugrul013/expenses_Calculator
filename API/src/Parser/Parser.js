var parser = async function (_city, _currency) {
    //const city = req.params.city[0].toUpperCase() + req.params.city.slice(1).toLowerCase();
    city = _city[0].toUpperCase() + _city.slice(1).toLowerCase();
    const { currency = 'EUR' } = _currency.toUpperCase();

    const response = await fetch(`https://www.numbeo.com/cost-of-living/in/${cityTemp}?displayCurrency=${currency}`);
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
}
function chunkArray(arr, chunkSize) {
    let temp = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        temp.push(arr.slice(i, i + chunkSize));
    }
    return temp;
}

export default parser;