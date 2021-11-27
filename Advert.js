// const { LOADIPHLPAPI } = require("dns");
let minimist = require("minimist");
let puppeteer = require("puppeteer");
// let fs = require("fs");
let url="https://www.instagram.com"
// let logedin="https://www.instagram.com/accounts/onetap/?next=%2F"

let args = minimist(process.argv);
//we read the json file
// let configJSON = fs.readFileSync(args.config, "utf-8");
// let configJSO = JSON.parse(configJSON);
async function rookie(){
    let browser=await puppeteer.launch({
        headless:false,
        args: [                                       //isse window puri khulti hai
            '--start-maximized'
        ],
        defaultViewport: null
    });
    let pages=await browser.pages();
    let page=pages[0]
    //url
    await page.goto(url)
    await page.waitForSelector('input[aria-label="Phone number, username, or email"]')
    await page.type('input[aria-label="Phone number, username, or email"]',"AutoAdver",{delay:200}) //xdprtyrmkijfvpotar
    await page.type('input[aria-label="Password"]',"Auto@2000",{delay:200})
    await page.click('div.qF0y9')
    // await page.goto(logedin)
    await page.waitForSelector('input[aria-label="Search Input"]')
    // console.log(page.waitForSelector('input[aria-label="Search Input"]'));
    await page.type('input[aria-label="Search Input"]',"cristiano",{delay:200})
    await page.waitForSelector(".-qQT3")
    await page.click(".-qQT3")                  //click on cristiano
    await page.waitFor(2000)
    await page.waitForSelector('button._5f5mN')
    await page.click('button._5f5mN')            //click on follow
    await page.waitFor(2000)
    await page.waitForSelector('button.sqdOP')
    await page.click('button.sqdOP')            //click on massage
    await page.waitFor(4000)
    await page.waitForSelector("button.aOOlW.HoLwm")
    await page.click("button.aOOlW.HoLwm")              //click on not now
    await page.waitFor(2000)
    console.log("Clicked On not now");
    await page.waitForSelector('textarea[placeholder="Message..."]')
    await page.type('textarea[placeholder="Message..."]',"Hii Ronaldo You are the best!",{delay:50})
    await page.waitForSelector("div.X3a-9 div button.sqdOP")    
    await page.waitFor(2000)              
    await page.click("div.X3a-9 div button.sqdOP")
    console.log("Clicked on send");
    // await page.click("div._7UhW9.vy6Bb.qyrsm.KV-D4.fDxYl")
}
rookie()

