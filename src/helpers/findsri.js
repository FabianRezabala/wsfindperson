const puppeteer = require("puppeteer");
const randomUseragent = require("random-useragent");

const WS = process.env.WS;

 const consultanip = async (nip) => {
    const header = randomUseragent.getRandom();

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setUserAgent(header);

    await page.setViewport({ width: 1366, height: 788 });

    await page.goto(WS + nip);

    const element = await page.$("pre");

    const res = await page.evaluate((element) => element.innerText, element);

    const json = JSON.parse(res);

    browser.close();

    return json;
};

module.exports = { consultanip };