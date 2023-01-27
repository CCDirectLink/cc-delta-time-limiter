# Delta Time Limiter
CrossCode mod for changing the game's delta time cap, using a new hotkey found in the Controls section.

## How to Use

In the Controls section you'll find a new option labelled **Toggle Delta Time Cap**.

Set this hotkey to whatever key is most convenient for you, by default the hotkey is **/**.

During runs or practice, press this hotkey to enable the modified delta time cap. 
This will limit the overall length the game will consider each frame, making tricks like Barrier Skip consistent regardless of your computer or specs.
Once you've completed the trick, press the hotkey again to disable the modified delta time cap, returning the game to its normal delta time cap.

## What It Is For

This mod exists specifically because of issues and inconsistencies with Barrer Skip, a speedrun trick abusing tutorials and the speed of a dash art to bypass the triggers in CrossCentral which pull you back if you haven't opened the barrier from the other side yet.

The trick works because your gradual speed reduction is able to move you all the way past the trigger, then enabling a tutorial will cancel any speed to prevent you from being dragged back. 
This gradual speed reduction is framerate dependent, if your game is lagging you will be punished by delta time (the time passed between two frames), which is normally capped at 1/30 (approx. 0.033333). 
Hitting this cap can result in dramatic initial speed losses, preventing you from getting far enough to surpass the trigger, which can be very common especially immediately after pressing to enable tutorials again, depending on your specs and overall current performance. 

## What It Does

Upon pressing the hotkey, this mod changes the delta time cap (`ig.Timer.maxStep`) from 1/30 to 1/60 (approx 0.0166667). 
From testing, this value seems to be sufficient to remove the issues of inconsistent speed loss, making Barrier Skip fully consistent using a 450 speed Dash Art.
When the hotkey is pressed again, the mod returns the cap back to its default value of 1/30.