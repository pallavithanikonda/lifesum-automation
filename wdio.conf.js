exports.config = {
    // ... other configurations
    specs: ['./tests/food_fetch_test.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: "Android",
        deviceName: "Android Emulator", // Replace with the actual device name if testing on a physical device
        app: "/mnt/data/Lifesum-test-app-debug.apk",  // Path to your APK file
        appPackage: "com.lifesum.android", // Replace with actual app package name if different
        appActivity: ".MainActivity", // Replace with main activity of the app if different
        automationName: "UiAutomator2"
    }],
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
