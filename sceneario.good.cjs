function url() {
  return "http://localhost:4173";
}

async function action(page) {
  await page.evaluate(() => {
    document.getElementById("toggle-web-component").click();
  });
  await page.evaluate(() => {
    document.getElementById("toggle-react-component").click();
  });
  await page.evaluate(() => {
    document.getElementById("toggle-floating-react-component").click();
  });
}

async function back(page) {
  await page.evaluate(() => {
    document.getElementById("toggle-web-component").click();
  });
  await page.evaluate(() => {
    document.getElementById("toggle-react-component").click();
  });
  await page.evaluate(() => {
    document.getElementById("toggle-floating-react-component").click();
  });
}

module.exports = { action, back, url };
