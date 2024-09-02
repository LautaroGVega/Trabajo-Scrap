const axios = require('axios');
const cheerio = require('cheerio');


async function scrapeProductPriceML() {
    try {
       
        const { data } = await axios.get('https://www.mercadolibre.com.ar/mouse-gamer-lightsync-g203-logitech-g-series-azul/p/MLA16211424?pdp_filters=item_id:MLA930405605#is_advertising=true&searchVariation=MLA16211424&position=1&search_layout=stack&type=pad&tracking_id=aa93f1e3-387f-4028-8ef1-7d3432770cfa&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=ZDM0MDBiNDMtNGM3MS00ODY1LWE3NzAtOGUwYzkzMmNkYzVh');

        
        const $ = cheerio.load(data);

        const precio = $('meta[itemprop="price"]').attr('content');
        
        console.log('Precio:', precio);
    } catch (error) {
        console.error('Error al scrapear la página:', error);
    }
}

scrapeProductPriceML()

async function scrapePriceFromPageVenex() {
    try {
        const { data } = await axios.get('https://www.venex.com.ar/perifericos/mouse/mouse-logitech-g-g203-lightsync-blue-rgb.html?keywords=mouse%20g203');
        
        const $ = cheerio.load(data);

        const value = $('.textPrecio.text-green').text().trim()
        const newValue = value.replace(/[^\d]/g, '');

        console.log('Precio:', newValue);
    } catch (error) {
        console.error('Error al scrapear la Página:', error);
    }
}

scrapePriceFromPageVenex();

function formatPrice(price) {
    
    if (price.length > 2) {
        
        return price.slice(0, -2) + ',' + price.slice(-2);
    }
    return price; 
}

async function scrapePriceFullh4rd() {
    try {
        const { data } = await axios.get('https://fullh4rd.com.ar/prod/16565/mouse-logitech-g203-gaming-lightsync-white-910-005794');
        
        const $ = cheerio.load(data);

        const value = $('.bold').text().trim()
        const newValue = value.replace(/[^\d]/g, '');

        const formattedPrice = formatPrice(newValue);

        console.log('Precio:', formattedPrice);
    } catch (error) {
        console.error('Error al scrapear la Página:', error);
    }
}
scrapePriceFullh4rd();
