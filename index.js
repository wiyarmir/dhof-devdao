// Imports
const fs = require('fs');
const ethers = require('ethers');
const {abi} = require('./abi');

// Setup contract
const lootAddress = '0x25ed58c027921e14d86380ea2646e3a1b5c55a8b';
const rpc = new ethers.providers.JsonRpcProvider(
    'https://main-light.eth.linkpool.io/');
const loot = new ethers.Contract(lootAddress, abi, rpc);

(async () => {
  // In-mem retrieval
  let retrievedLoot = [];

  // Collect 1...8000 ids
  for (let i = 0; i <= 8000; i++) {
    console.log('Collecting: ', i);

    // Collect parts
    const [os, textEditor, clothing, language, industry, location, mind, vibe] =
        await Promise.all([
          loot.getOS(i),
          loot.getTextEditor(i),
          loot.getClothing(i),
          loot.getLanguage(i),
          loot.getIndustry(i),
          loot.getLocation(i),
          loot.getMind(i),
          loot.getVibe(i),
        ]);

    // Push parts to array
    retrievedLoot.push({
      [i]: {
        os, textEditor, clothing, language, industry, location, mind, vibe,
      },
    });
  }

  // Write output
  fs.writeFileSync('./output/loot.json', JSON.stringify(retrievedLoot));
})();
