// Run tests from server
projects: [
    {
        clearMocks: true,
        coverageDirectory: 'coverage',
        displayName: 'backend',
        testEnvironment: 'node',
        testMatch: [
            '<rootDir>/server/server.spec.js'
        ],
        verbose: false
    }
]
