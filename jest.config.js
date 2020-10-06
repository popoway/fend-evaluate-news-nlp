module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    testEnvironment: "node",
    // Specify async callback timeout 
    testTimeout: 30000
};
