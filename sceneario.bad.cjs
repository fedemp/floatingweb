function url() {
  return "http://localhost:4173";
}

async function action(page) {
  await page.evaluate(() => {
    document.getElementById("toggle-state-web-component").click();
  });
}

async function back(page) {
  await page.evaluate(() => {
    document.getElementById("toggle-state-web-component").click();
  });
}

module.exports = { action, back, url };
