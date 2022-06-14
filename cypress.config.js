const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
	projectId: 'ens-nota15-dev-nota15-cypress',
	watchForFileChanges: false,
	viewportWidth: 1366,
	viewportHeight: 768,
	chromeWebSecurity: false,
	video: true,
	reporter: 'junit',
	reporterOptions: {
		mochaFile: 'results/test-output_[hash].xml',
		jenkinsMode: true,
		toConsole: true,
		testsuitesTitle: true,
		useFullSuiteTitle: true,
		suiteTitleSeparatedBy: '_',
	},
})
