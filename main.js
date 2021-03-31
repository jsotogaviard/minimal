// Imports
import puppeteer from "puppeteer"

const browser = await puppeteer.launch({ 
    headless: true,
    devtools: false, 
    slowMo: 0, 
    args: ['--no-sandbox'], 
    executablePath: 'usr/bin/chromium-browser' 
});
const page = await browser.newPage();
console.log(page)
