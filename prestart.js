/**
 * Code By EpicYoshiMaster
 * Delta Time Limiter
 * 
 * Adds a hotkey which alters the maximum allowed delta time for a given frame. 
 * 
 * See poststart.js for more information.
 */

sc.OPTIONS_DEFINITION["keys-toggle-delta-time"] = {
	type: "CONTROLS",
	init: {
		key1: ig.KEY.SLASH,
		key2: undefined
	},
	cat: sc.OPTION_CATEGORY.CONTROLS,
	hasDivider: true,
	header: "cc-delta-time-limiter",
};