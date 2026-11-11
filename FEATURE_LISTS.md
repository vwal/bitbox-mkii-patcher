# Bitbox MkII features since stock 2.3.4

Updated for **2.3.4+c9**, November 11, 2026. This release adds an audio load meter and saved display switch while retaining all earlier features and fixes. Apply the cumulative patch directly to official MkII 2.3.4.

## Playback & loop editing

### See quiet and loud waveforms

Waveform → two-finger gestures

Zoom amplitude from 25–3200% with a vertical pinch or spread, independently of horizontal time zoom. Added in +c5 Horizontal pinch now zooms out 4× farther than stock. A stationary two-finger tap still restores 100% amplitude and the stock horizontal zoom-out level. Long samples may still extend beyond the screen. Loop markers use LStr / LEnd, with long values kept inside their fields.

### Change speed while keeping pitch

Sample → LFO/Spd → SPEED

Set 50–200% Speed on an eligible forward Sample voice; select the dial and press INFO for modulation. Native Pitch works on all pads, including the stretched pad, and Speed retains its full range at high positive Pitch.

One voice can stretch at a time. A waiting Sample voice keeps its chosen Pitch and plays at 100% Speed. Restart it, or return Speed to neutral and adjust again after RETRY. An active Speed modulation route keeps its reservation through 100% crossings.

Added in +c5 More efficient Speed rendering reduces processing overhead. On supported forward-looped Samples, Speed also works before LoopStart and continues into the loop.

### Fit slices to the beat

Slicer → Pos → Sync / Sync Grid / Slice Fit

With Sync On, set Sync Grid to Free, 1 bar, 1/2, 1/4, 1/8, 1/16 or 1/32. Durations round to whole grid units. Cut keeps the native behavior; Tape changes pitch and rate to fit the slice end to end.

Added in +c5 Smooth fits eligible slices without changing pitch, at roughly 50–200% fitted rates. It shares the single stretch slot with Sample Speed. Tape remains independent of that slot.

The Slice Mono fix makes a new slice cut the previous one after conversion from a polyphonic Sample, including Trigger / Mono / Play Through with Quant Size None.

### Edit loop timing and play fills

Clip → Pos

Use Loop Fade (0–50 ms), Shift (−100 to +100 ms), Play Len (Full or ¼–32 bars) and the added 1/32 Sync division.

Live Flip offers Beat Rpt, 1/8 Rpt, 1/16 Rpt, Half Rpt, Rotate and changing Breakcut patterns. Run them continuously or in the last bar of a 2-, 4-, 8- or 16-bar phrase. Play Len and Live Flip require Quant Size and timed Sync; playback rejoins the current beat when the effect ends.

## Tone & effects

### Add sampler character

Pad → Tone → Fidelity

Keep Normal or HighQ, or choose SP1200, SP-12, S950, MPC60 or SP Raw. 12-bit fixed-rate crunch runs at 16, 12, 10, 8, 6, 4 or 2 kHz.

Phone adds 8 kHz telephone-band µ-law color, ADPCM adds adaptive 4-bit color at 22.05 kHz, and u-Law runs at 16 kHz. Fidelity is a manual selector, available on Sample, Clip, Slicer and Granular pads.

### Drive and filter each pad

Pad → Tone

Add pre-filter Drive from 0–100%. Slope 1 switches the primary filter between 12 and 24 dB/octave. The independent 24 dB Filter 2 sweeps from low-pass to high-pass and has its own Res 2.

Select Drive, Filter 2 or Res 2 and press INFO for LFO/CV modulation. Tone restores the same dial and encoder bank when you return from the modulation editor.

### Four delay characters

FX1 → INFO → Type / More

Choose Digital, Tape, BBD or Codec. Tape adds saturation, frequency loss, wow and flutter; BBD gives dark, drifting repeats; Codec builds up 16 kHz, 4-bit ADPCM color.

More adds Flutter (0–100%), modulation rate, depth and stereo phase, Drive, Tone and Return dB (±12 dB). Codec replaces Drive and Tone with frame Loss (0–30%) and Bandwidth (4–16 kHz). Flutter at zero retains each type’s base sound, including Tape’s built-in movement.

### Clear a delay tail [+c8]

**FX1 → INFO → Purge**, available on Main and More. Discards the shared delay tail and feedback for Digital, Tape, BBD or Codec. Settings stay intact, fresh input still echoes, and FX2/FX3 continue normally.

### Two separate reverb tails

FX2 / FX3 → INFO → Type / More

Room, Hall and Chamber join Plate. The added types offer Size, Diffusion and Width; their More page adds Bass x, Xover, Mod Rate, Mod Dpth, Early, Hi Cut and Lo Cut. All types have Level. Switching control pages preserves the tail.

Tap the selected FX2 cell again to switch to FX3, then press INFO. FX3 is an independent second reverb with its own settings and tail. Tap the selected cell again to return to FX2.

### Send, blend and route

Pad → Pos · Tools → Rec → FX Out

Each pad has FX1, FX2 and FX3 sends, all modulatable through select → INFO. Route FX1/FX2 returns to Out1/2 or the physical FX1/2 pair, together or separately; Dly1 Rvb2 splits them between the two mono FX jacks. FX3 has its own Out1/2, FX1/2, mono FX1 or mono FX2 selector.

Added in +c5 Dry Level, after FX3 Send on Pos, defaults to 100% and trims the pad’s direct sound down to 0% while all three sends remain active. Use it for wet-only playback, or modulate it through INFO. The sends and return levels set the wet balance; the effects run in parallel.

## Using Bitbox Mk2 as an effect box [+c8]

### Connect and process live input

On an empty pad, INFO opens Recorder settings. Set Rec Input **In 1/2**, RecMon **On**, and scroll to **Input FX pad**: **Off → Follow → Pad 1–16**. Select Follow or a fixed pad to enable input processing. No sample or active recording is needed.

INFO again opens pad parameters. **Main → Filter / Resonance** and **Tone → Fidelity, Drive, Filter 2 / Res 2, Slope 1** process the incoming audio before its direct output and FX sends.

### Fixed processing or selectable input presets

**Off** is the default for fresh settings and Tools reset. It bypasses pad Filter/Tone, Dry Level and sends, even during recording. Native Gain, RecMon and Mon Output still work. Saved Follow/fixed choices survive updates; select Off manually to disable an existing setup.

Fixed keeps the selected processing pad while you browse or play other pads. Follow uses the currently selected pad. Prepare several empty pads with different send/Dry levels, filters, Fidelity and Drive; tap them to change the input sound. Save the preset to retain pad settings. Input FX pad is one global choice; changing it in one pad’s Recorder settings changes it everywhere.

**Pos → Dry Level** adjusts the processed direct input from 100% to 0%, independently of the three sends. Send and Dry Level modulation works on input. Here “dry” includes Filter/Tone but excludes shared delay/reverb.

### Output routing and scope

**Recorder → Mon Output** routes the direct input. **Tools → Rec → FX Out** routes shared FX1/FX2 returns, and **FX3 Out** routes FX3 separately. Send all three paths to FX OUT 1/2 for the complete input mix there, or split direct/wet across OUT 1/2 and FX OUT 1/2. Shared effect settings and return routes remain global. Pad **Cnf → Output** still affects sample playback only.

For quick output combinations in Follow, keep Mon Output on OUT 1/2 and all shared returns on FX OUT 1/2. Set Pad A to Dry 100% / sends zero for direct sound on the main pair, Pad B to Dry 0% / sends raised for wet sound on the FX pair, and Pad C to a blend for both. Pad taps change those levels and Tone settings, not Mon Output or the global effect routes. Existing shared tails can continue after switching.

Input Filter/Tone uses base values, not its pad LFO/CV modulation routes. Pitch, Speed and envelope do not process the external input. Normal In1/2 recording remains unprocessed. With Follow or a fixed pad enabled, an armed/active take uses the recording destination’s monitor settings, then restores the saved choice. Off continues to bypass pad processing throughout the take. Full instructions and examples are in the reference guide.

## Recording & resampling

### Overdub a pad or a performance

Destination pad → INFO twice → Cnf → Dub source

Manual records the stereo input plus the live musical pads you play. Leave the recorder for Pads to start and stop sounds; playback remains under your control.

Choose Pad 1–16 for a determined source. Recording restarts that pad, stops it with the take and ignores taps on other musical pads. Numbering runs left to right from the top row. Eligible forward Sample sources with Pre also offer One pass.

Use Rec Input → In 1/2 for accompaniment and Length → Custom for a take you end manually. Recording creates a new WAV on the destination. Empty or self-referencing numbered sources show an explanation and leave Rec available.

### Choose what the backing contributes

Destination pad → Cnf → Dub tap

Pre follows live timing, Pitch, Speed, level, pan and envelope, before Fidelity, Drive, filters and Dry Level. Post pad includes those processes and Dry Level. Post+FX also prints the shared delay and reverb returns.

All three include the live stereo input. Shared returns can contain other pads’ tails. Post+FX is captured before master processing; use Resam to print the native resampling mix. For an isolated wet take, stop other sources and let their tails decay.

### Record, edit and return

Recorder → Rec Input / live Gain · Pads → destination

Fixed in +c7: When Rec is pressed with the clock stopped, it temporarily starts the clock for the take and restores the stopped state when recording finishes. A clock that was already running stays running afterward.

With Resam, capture the native mix while playing or editing other pads. Tap the recording destination to stop; the next INFO opens that pad. To reopen an ongoing take without stopping it, select its destination with a left-hand encoder and press INFO.

The active recorder retains Stop, timers, meters and Input Gain or Resam Gain. Either right-hand encoder adjusts the native global gain (−96 to +20 dB). Input Gain leaves the overdub backing level unchanged; Resam Gain changes the recorded mix without changing playback volume.

FX sends, their modulation and Dry Level survive recording. During a take, input-monitor effects stay tied to the destination while you browse other pads. Stop continues to honor recording quantization. For clean playback of a printed take, restore destination Dry Level to 100% and lower sends if needed.

## Modulation & GEN

### More sources and destinations

Select a supported parameter → INFO

Use native sources such as LFO, CV and velocity alongside KEY note tracking (centered on MIDI note 60), ENV from the pad’s ADSR, per-note RAND, evolving CHAOS and slow coupled NET movement.

Custom destinations include Sample Speed, Drive, Filter 2, Res 2 and all three FX sends. Added in +c5 Dry Level joins them. Up to three slots per destination share the existing 12-route total per pad. Sends and Dry act on the pad mix; voice-dependent sources use one active voice’s value.

### A generator on every pad

Pad → INFO twice → Gen · Tools → Mstr → GEN Run

Run a different clocked pattern on each of the 16 pads. Choose Euclid, Breakcut, Call+Resp, Evolve, Drummap, Random, Acid, Turing or Learn. Set timing, probability, velocity and step conditions, send a response to another pad, or teach Learn by playing the grid.

Enable Run under Tools → Mstr → Section → GEN Run. Granular pads expose generator settings under Cnf. Patterns follow the musical clock, including external MIDI/CV clock. Tools → Main → Clock provides the global Run, Stop and Reset controls.

### See the rhythm as it plays

Pads → status strip

The selected generator shows hits, rests and its current step. A separate row of activity dots covers all 16 pads. Selecting a pad with GEN off clears its pattern display. Generated notes follow their programmed timing, velocity and gate length.

## Master processing

### Compressor controls and parallel Mix

Tools → Comp / Mstr → Comp env

Expose the stock compressor’s Threshold, Ratio, Gain, Attack, Release and Mix. The bus selector offers Off, Out1/2, FX1/2 or Both, with independent compressor histories for the two stereo pairs.

Main and Mstr show the same Compressor setting. Mix blends compressed and clean signal for parallel compression.

### Distortion and a moving sweep filter

Tools → Mstr → Master FX / Dist Ctrl / Sweep Mod

Choose Soft, Hard, Fold or Tube distortion with up to +24 dB Drive. Dist Ctrl adds wet Tone, clean/wet Dist Mix and output Level (−24 to +12 dB).

Sweep moves from low-pass through neutral to high-pass. Modulate it with EXT1–8 or a clocked triangle LFO from 1/16 note to eight bars, using signed depth. Distortion and Sweep process Out1/2 before the optional compressor; Sweep modulation also works with compression off.

## Clock & transport

### A tempo control on Main

Tools → Main → Int BPM / Clock

Turn the Int BPM encoder to set 40.0–300.0 BPM. Faster turns accelerate adjustment; slow turns retain fine control. Pausing or reversing direction returns the first movement to fine adjustment.

Hold Int BPM for three seconds to restore and save 120.0 BPM. Releasing early, leaving the square, turning the BPM encoder or changing pages cancels the hold. This changes the internal/fallback tempo without issuing a transport Reset or overriding an active external clock.

Clock opens transport controls and shows the current source and running state. MasterVol and Compressor stay on Main; Brightness and Flip UI move to Disp.

When the final external clock source times out, the internal clock holds the last external tempo and phase. The inherited tempo is temporary: editing Int BPM saves your choice, and reboot restores the saved tempo. External clock remains authoritative while present; losing pulses does not issue Stop.

### Resume or reset musical time

Tools → Main → Clock → Run / Stop / Reset

Run resumes from the held position. Stop freezes musical time and preserves that position. Reset returns musical time to the beginning while keeping the current running or stopped state.

The buttons use green for Run, red for Stop and the native cyan-blue accent for Reset. HOME returns to the main Menu; Back returns to Tools Main.

GEN releases held gates and cancels unfinished rolls at Stop. Continue resumes future steps without replaying a partial step; Reset prepares the beginning. GEN’s own Run setting stays independent.

The existing counter double-tap still only renumbers the next bar. Clock Reset is the separate musical reset. Native actions such as certain quantized launches can still start transport.

### Run and reset from a gate

Clock → Run CV / Reset CV

Choose Off or EXT1–EXT4 for each control; both default to Off. Run CV resumes on a rising gate and stops on a falling gate. Reset CV resets on a rising edge.

Assign both to the same input for reset-and-run on the rise and Stop on the fall. Enabling an already-high gate does not create an edge: cycle it afterward. Transport reads the raw gate before CV scale/offset, and ordinary modulation routing remains available.

### Keep standard MIDI transport

MIDI transport · Clock → Reset CC / Reset Ch

Start resets and runs, Continue resumes, and Stop holds position. Existing MIDI clock-port selection remains in force. MIDI System Reset is not repurposed.

Reset CC adds reset while running: choose Off or CC 0–119, with channel 1–16. A low-to-high crossing (0–63 → 64–127) resets once; send a low value to rearm. It defaults to Off/channel 1 and listens on either MIDI input using its own Reset Ch and Reset CC settings. The MIDI clock-port selection filters standard Start / Continue / Stop, not Reset CC. Ordinary CC routing continues, so choose an otherwise unused CC for reset alone.

Clock Stop does not mute every pad. Already-playing audio and effect tails may continue; Sample Speed and native Pitch are not directly controlled by BPM. While recording is armed or active, or a final overdub FX write is pending, transport commands are ignored and Clock shows Rec busy. Stop the take with the recorder’s normal controls first. Rejected commands are not replayed afterward.

## MIDI & CV utilities

### See what MIDI is arriving

Tools → MIDI → Monitor

Inspect a timestamped 32-event history of notes, CCs, program changes, pressure, pitch bend and transport. Freeze or resume, scroll, filter by channel and clear the log. MIDI Clock and Active Sensing have separate activity indicators.

### Scale, offset and quantize CV

Tools → Rec → CV In

The bottom tab stays labelled Rec. The native SD-card free-space readout remains visible in the second gray header box here and on Tools Main.

Set shared CV Scale (0–400%) and Offset (−100 to +100%) for all eight EXT sources, with immediate updates to held CV. Defaults are 100% and zero.

The separate CV pitch quantizer offers eleven scales and a C–B root, defaulting to Off/C. It affects CV pitch, leaving MIDI notes, raw gates, signal wake and audio-input modulation unchanged.

## Display & everyday controls

### Audio load meter [+c9]

Top toolbar · Tools → Disp → CPU On / CPU Off

A smoothed percentage shows audio deadline pressure. Red **100%+** holds for one second after a measured budget excursion or queue problem; it can occur without an audible glitch. **--%** means no fresh valid reading. This is an audio-load guide, not whole-device CPU utilization.

The Disp header switch is between Gfx and the version. It defaults On, saves automatically, and survives Tools/FX resets. Off hides the meter and stops its UI updates; lightweight timing collection continues. Native status/progress takes priority, GEN can use the freed width when hidden, and the meter does not wake the screen saver.


### Display settings together

Tools → Disp

Brightness and Flip UI now occupy the left column on Disp. Scrn saver and Sig wake are on the right. Tap the header’s Gfx Off / Gfx On button to switch the existing line graphic.

Choose disabled (default) or 1, 2, 3, 5, 10, 15, 30 or 60 minutes. Use a black screen or optional moving lines in dark blue, purple and white. The graphic is also off by default.

The first touch or physical control change wakes only. Optional MIDI, CV-trigger or combined signal wake passes the musical event through. MIDI Clock and Active Sensing do not wake the screen.

### Recall your pad mutes

Mixer → mute pads → Save preset

Added in +c6: Set mutes with the existing Mixer controls, then Save the preset. Reloading restores the saved mute states, including their indicators and playback behavior. Mute edits mark the preset as changed; they do not save automatically.

Presets saved before +c6 load unmuted. Copying a pad preserves its mute; clearing or unloading it, replacing its WAV or recording a new take clears that mute. Tools and FX resets continue to preserve pad settings.

### Reset a value or stop a long sample

Numeric dials · Pads / Waveform / Parameter pages → Play

Double-tap a numeric dial to restore its base value while keeping modulation assignments. On a Trigger pad, hold one finger on the grid pad for two seconds to stop its voices; the initial touch still retriggers normally.

Fixed in +c7: Hold-to-stop now works on the triangle Play button in both the waveform detail view and all pad parameter pages. The hold is two seconds in every location. A fresh tap, MIDI, CV or GEN can start the sound again. The Int BPM reset hold remains three seconds.

### Reset the counter or shared settings

Counter · Tools → Main → RESET

Double-tap the bar:beat counter to renumber the next bar as 1:1 without moving playback or clock phase. RESET offers separate confirmed Tools and FX resets; both preserve pad assignments, pad parameters and modulation. Save the preset to retain an FX reset.

Added in +c6 A Tools reset preserves all Display preferences: Brightness, Flip UI, screen-saver timeout, graphic and signal wake, plus the CPU display switch added in +c9. Tools Reset restores the saved internal tempo to 120.0 BPM and clears the CV/CC transport assignments. The native SD-card free-space readout is visible in the gray header on Main and Rec → CV In. Shorter labels—MIDI, Disp, Scrn saver and Cnf—keep navigation readable. Blank pads also expose LFO/Spd and Speed. Their LFO encoders and toggles now retain edits as on loaded pads; LFO modulation itself still requires an active sample voice.

On Pads, turn the lower-right encoder to reveal Cut / Copy / Paste / Clear (CLR). Select a pad and tap an action; turn back to restore the EXT meters.

## Release history

See [CHANGELOG](CHANGELOG.md) for all nine releases, +c (c1) through +c9.
