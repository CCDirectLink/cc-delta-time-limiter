/**
 * Code By EpicYoshiMaster
 * Delta Time Limiter
 * 
 * Adds a hotkey which alters the maximum allowed delta time for a given frame. 
 * 
 * This value is normally 1/30 (0.0333333), which causes issues and inconistencies with tricks like Barrier Skip
 * in speedruns. It's normal for the game to lag while doing this trick, which impacts the speed you carry as friction
 * and the barrier will slow you down immediately. If you are lagged too much, the trick will fail, and is essentially
 * uncontrollable from the perspective of the runner beyond PC Specs.
 * 
 * This mod changes this value to 1/60 (0.0166667). From testing, this cap for delta time ensures that your speed loss
 * is sufficiently low enough for all Barrier Skip tricks to be consistent using a 450 speed dash art, even if your game
 * were to be playing with this capped delta time for every frame. 
 * 
 * Pressing the hotkey swaps between the 1/30 (default) and 1/60 delta time caps.
 */

const DefaultMaxStep = 1/30;
const ToggledMaxStep = 1/60;

let isToggled = false;
let textGui;

/**
 * @inject
 * Inject hotkeys.
 */
sc.Control.inject({
	toggleDeltaTimePress: function () {
		return ig.input.pressed("toggle-delta-time");
	},
});

function checkDeltaTimeToggle() {
	if(sc.control && sc.control.toggleDeltaTimePress()) {
		
		if(!textGui) {
			textGui = new sc.TextGui("", {'font' : sc.fontsystem.tinyFont});
			textGui.setAlign(ig.GUI_ALIGN.X_LEFT, ig.GUI_ALIGN.Y_CENTER);
			textGui.setPos(0.5, 0);
			ig.gui.addGuiElement(textGui);
		}

		if(!isToggled) {
			textGui.setText("\\c[3]Limiter is Enabled");
			ig.Timer.maxStep = ToggledMaxStep;
			isToggled = true;
		}
		else {
			textGui.setText("");
			ig.Timer.maxStep = DefaultMaxStep;
			isToggled = false;
		}
	}
}

ig.game.addons.preUpdate.push({
	onPreUpdate: checkDeltaTimeToggle
});