const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      //slowMo: 250,
    })
  const page = await browser.newPage()
  await page.setViewport({ width: 1853, height: 950 })

  await page.goto('http://127.0.0.1:8002/admin/dashboard')

  const navigationPromise = page.waitForNavigation()


  await page.waitForSelector('#username')
  await page.click(' #username')

  await page.type('#username', 'admin@example.tld')
  await page.type('#password', 'p@ssword')

  await page.click('form > .text-center > .btn')

  await navigationPromise

  await page.waitForSelector('.container-fluid > .navbar-collapse > .nav > li > .sonata-action-element')
  await page.click('.container-fluid > .navbar-collapse > .nav > li > .sonata-action-element')

  await navigationPromise

  await page.waitForSelector('#sc86eadbc42_title')
  await page.click('#sc86eadbc42_title')
  await page.type('#sc86eadbc42_title', 'Page test')

  await page.type('#sc86eadbc42_h1', 'Ma première page test')
  await page.type('#sc86eadbc42_slug', 'page-test-'+(Math.floor((Math.random() * 100) + 1)))
  await page.type('.ace_text-input', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum')

  await page.waitForSelector('.sonata-ba-form-actions > .btn')
  await page.click('.sonata-ba-form-actions > .btn')

  // search for  a été créé avec succès
  await delay(2000);

  // Show User Admin
  await page.waitForSelector('.sidebar > .sidebar-menu > .treeview:nth-child(2) > a > span:nth-child(2)')
  await page.click('.sidebar > .sidebar-menu > .treeview:nth-child(2) > a > span:nth-child(2)')

  await page.waitForSelector('.sidebar-menu > .active > .active > .first > a')
  await page.click('.sidebar-menu > .active > .active > .first > a')

  // todo
    await page.waitForSelector('.wrapper > .content-wrapper > .content > .row:nth-child(2) > .col-xs-12')
  await page.click('.wrapper > .content-wrapper > .content > .row:nth-child(2) > .col-xs-12')

  await page.waitForSelector('.container-fluid > .navbar-collapse > .nav > li > .sonata-action-element')
  await page.click('.container-fluid > .navbar-collapse > .nav > li > .sonata-action-element')

  await navigationPromise

  await page.waitForSelector('.box-body > .sonata-ba-collapsed-fields > #sonata-ba-field-container-s30e217ffbf_email > .sonata-ba-field > #s30e217ffbf_email')
  await page.click('.box-body > .sonata-ba-collapsed-fields > #sonata-ba-field-container-s30e217ffbf_email > .sonata-ba-field > #s30e217ffbf_email')

  await page.type('.box-body > .sonata-ba-collapsed-fields > #sonata-ba-field-container-s30e217ffbf_email > .sonata-ba-field > #s30e217ffbf_email', 'test@piedweb.com')

  await page.waitForSelector('#sonata-ba-field-container-s30e217ffbf_enabled > .sonata-ba-field > .checkbox > label > #s30e217ffbf_enabled')
  await page.click('#sonata-ba-field-container-s30e217ffbf_enabled > .sonata-ba-field > .checkbox > label > #s30e217ffbf_enabled')

  await page.waitForSelector('.content > .sonata-ba-form > form > .sonata-ba-form-actions > .btn:nth-child(1)')
  await page.click('.content > .sonata-ba-form > form > .sonata-ba-form-actions > .btn:nth-child(1)')

  await navigationPromise



  await navigationPromise

  //
  setTimeout(() => { browser.close(); }, 3000);
})()

function delay(time) {
   return new Promise(function(resolve) {
       setTimeout(resolve, time)
   });
}

/**
 * test file upload
const filePath = path.relative(process.cwd(), __dirname + '/assets/file-to-upload.txt');
const input = await page.$('input[name=something]');
await input.uploadFile(filePath);
**/
