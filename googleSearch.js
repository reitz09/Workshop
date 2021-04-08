const {Builder, By, Key, util, Browser,Window} = require("selenium-webdriver");
async function googleSearch() {


    let driver =  await new Builder().forBrowser("chrome").build();
    
    //open browser
    await driver.get("http://google.com");
    await driver.manage().window().maximize();
    
    //search keyword
    await driver.findElement(By.xpath('//*[@id="zV9nZe"]/div')).click();
    await driver.findElement(By.name("q")).sendKeys("Mercedes",Key.RETURN);
    await driver.sleep(2000);
    
    //selecting a link from the search list
    await driver.findElement(By.xpath('//div[@class="yuRUbf"]/a[@href="https://www.mercedes-benz.com/en/"]')).click();
    await driver.sleep(2000);
    
    //clicking ok
      //driver.switchTo().alert().accept();
      await driver.findElement(By.xpath('//*[@id="uc-btn-accept-banner"]')).click();
      await driver.sleep(2000);
      
    //ScrollDown
      await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
      await driver.sleep(2000);
      
    // Close browser
      await driver.close();
    //driver.quit();

}
googleSearch()
