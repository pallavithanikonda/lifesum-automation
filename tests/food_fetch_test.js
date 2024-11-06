const assert = require('assert');

describe('Food Fetch App Test', () => {
    it('should fetch a food item by tapping the red circle', async () => {
        const redCircle = await $('~redCircle');  // Update with the actual ID
        await redCircle.click();
        
        await browser.pause(2000);  // Wait for result

        const foodItem = await $('~foodItem');  // Update with the actual ID
        const initialText = await foodItem.getText();
        assert.notStrictEqual(initialText, "", "No food item fetched.");
    });

    it('should fetch a new food item by shaking the device', async () => {
        await driver.setOrientation("LANDSCAPE");
        await browser.pause(500);
        await driver.setOrientation("PORTRAIT");

        await browser.pause(2000);  // Wait for result

        const newFoodItem = await $('~foodItem');
        const newText = await newFoodItem.getText();
        assert.notStrictEqual(newText, "", "Shake did not fetch new food item.");
    });
});
