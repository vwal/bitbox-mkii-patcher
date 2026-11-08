# Bitbox MkII firmware 2.3.4+c7

Released November 8, 2026. Apply this cumulative patch directly to official Bitbox MkII 2.3.4.

## Fixes since the original 2.3.4+c6 release

- **Record with a stopped clock.** Rec temporarily starts the clock so a take can begin, then restores the stopped state when recording finishes. If the clock was already running, it stays running afterward.
- **Play-button hold-to-stop.** Holding the triangle Play button now stops Trigger playback from both the waveform view and all pad parameter pages.
- **Quicker Trigger Stop.** Hold a Trigger grid pad or its Play button for **two seconds** instead of three. The initial touch still plays or retriggers normally; a later tap, MIDI, CV or GEN can start it again. The Int BPM reset hold remains three seconds.
- **Consistent Clock navigation.** HOME returns to the main Menu; the on-screen Back button returns to Tools Main.
- **Correct Rec tab caption.** Tools → Rec → CV In keeps **Rec** in the bottom tab bar.
- **Restored SD-card free-space readout.** The native readout appears in the second gray header box on Tools Main and CV In.

This is a bugfix release with all earlier features retained. The last three UI corrections were also included in +c6 revision r2.

# Bitbox MkII firmware 2.3.4+c6

Released November 7, 2026. Apply this cumulative patch directly to official Bitbox MkII 2.3.4.

## UI maintenance revision r2 — November 7, 2026

The firmware still displays **2.3.4+c6**. This revision corrects three UI details:

- **Clock navigation:** HOME returns to the main Menu. The on-screen Back button returns to Tools Main.
- **Rec tab caption:** Tools → Rec → CV In keeps **Rec** in the bottom tab bar.
- **SD-card free-space readout:** the native readout is visible in the second gray header box on Tools Main and CV In.

All existing features are retained. The reference guides and quick cards include these r2 navigation corrections.

## New in 2.3.4+c6

- **Internal tempo on Main.** Set 40.0–300.0 BPM with speed-sensitive encoder adjustment: quick turns move faster, slow turns retain fine control. Hold Int BPM for three seconds to restore and save 120.0 BPM.
- **Clock transport controls.** Run resumes held musical time, Stop preserves position, and Reset returns to the beginning while keeping the running or stopped state. The buttons are green, red and native cyan-blue; HOME returns to the main Menu; Back returns to Tools Main.
- **Hold the external tempo.** When the final external clock source times out, internal playback keeps its last tempo and phase. The inherited tempo remains temporary until you explicitly edit Int BPM; reboot uses the saved tempo.
- **CV and MIDI transport.** Assign Run CV and Reset CV to Off or EXT1–4. Reset CC 0–119 with a selectable MIDI channel adds reset while running. Standard MIDI Start / Continue / Stop remains compatible; CV and CC assignments default Off.
- **GEN and recording behavior.** Stop releases GEN's held gates and cancels unfinished rolls; Continue resumes future steps. Transport commands are ignored while a recording is armed or active or the final overdub FX write is pending. Use the recorder's normal Stop first.
- **Saved pad mutes.** Set the native Mixer mutes, then Save the preset. Loading it restores the mute states. Older presets load unmuted. Copying preserves mute; clearing/unloading, replacing the WAV or recording a new take clears it. Mute edits are not saved automatically.
- **Display and navigation.** Brightness and Flip UI move to Disp, Gfx becomes a header button, and Tools Reset preserves all five Display preferences. The native SD-card free-space readout is visible in the gray header on Main and Rec → CV In.

Clock Stop holds musical time and does not mute all playing pads. Pitch and Sample Speed remain independent of BPM. A long hold of Int BPM resets the internal/fallback tempo without issuing transport Reset or overriding an active external clock. Use the recorder’s normal Stop while a take is armed or active.

# Bitbox MkII firmware 2.3.4+c5

Released November 6, 2026. Apply this cumulative patch directly to official Bitbox MkII 2.3.4.

## New in 2.3.4+c5

- **Slicer Smooth.** Fit synced slices to their duration without changing pitch, at roughly 50–200% fitted rates. Smooth and Sample Speed share one active stretch voice. Tape remains independent; native Pitch is unrestricted.
- **Live overdubbing.** Record stereo input with a chosen backing pad or the live pads you play in Manual mode. Choose Pre, Post pad or Post+FX, with optional shared delay/reverb returns. Numbered sources start and stop with the take. Eligible forward Sample sources offer One pass.
- **Recording and resampling controls.** Leave the recorder to play or edit other pads, return with Stop and meters intact, or stop by tapping the recording destination. INFO then opens the correct destination. Input Gain / Resam Gain can be changed during the take; destination monitor sends stay attached while browsing.
- **Wet-only playback and modulation.** Pos → Dry Level adjusts each pad's direct signal from 100% to 0%, independently of its three parallel sends. Select → INFO adds modulation. Recording preserves Dry Level, send levels and their routes.
- **More efficient Sample Speed.** Reduced copying and interpolation overhead while retaining the renderer's sound. A single shared stretch slot prevents concurrent stretching; Pitch remains available everywhere.
- **Speed before the loop.** Forward-looped Samples now stretch their intro before LoopStart and continue smoothly into the loop.
- **Wider waveform overview.** Horizontal pinch zooms out four times farther than stock. The two-finger reset still restores stock horizontal zoom-out and 100% vertical amplitude. LStr / LEnd labels and fitted numeric values keep long marker positions readable.
- **Small workflow fixes.** Three-second Trigger Stop now also works on the waveform Play button. Tools reset preserves screen-saver timeout, graphics and signal-wake settings. Empty/self-referencing overdub sources show an explanation instead of exiting the recorder.

# Bitbox MkII firmware 2.3.4+c4

Released November 5, 2026. Apply this cumulative patch directly to official Bitbox MkII 2.3.4.

## New in 2.3.4+c4

- **Per-pad GEN sequencer.** Run a different pattern on each of the 16 pads, all following the internal or MIDI clock. Nine algorithms cover Euclid, Breakcut, Call+Resp, Evolve, Drummap, Random, Acid, Turing and Learn. Dial in timing, probability, velocity and step conditions, route a response to another pad, or teach Learn by playing the grid. Select a pad → INFO twice → Gen (Granular uses Cnf). Enable Run in Tools → Mstr → Section → GEN Run.
- **GEN pattern and playhead.** The Pads status strip shows the selected generator’s hits, rests and current step, plus a row of activity indicators for all 16 pads. A pad with GEN off clears the strip. Generated notes use their programmed step, velocity and gate length.
- **Pitch alongside Sample Speed.** All pads can use native Pitch, including the one using 50–200% Sample Speed. The full Speed range works at high positive Pitch. One eligible forward Sample voice can stretch at a time. The first eligible voice to request Speed gets the slot. A waiting voice keeps its chosen Pitch and plays at 100% Speed until restarted or deliberately adjusted after RETRY.
- **Slicer Tape.** With Slicer → Pos → Sync On, Slice Fit → Tape plays a slice end to end in its synced duration, changing pitch with playback rate. Cut remains the default. Tape works independently of the Sample Speed voice.
- **Four per-pad modulation sources.** ENV follows the pad’s ADSR, RAND holds a fresh value for each note, CHAOS gives evolving bipolar movement and NET gives slow movement from four coupled nodes. Select a modulation destination and press INFO. On Slice Seq, ENV/RAND step per note and CHAOS/NET step on rising zero crossings.
- **Hold a Trigger pad to stop.** A tap on the 4×4 grid still plays or retriggers immediately. Keep one finger on the pad for three seconds to release its voices. MIDI, CV, GEN or another tap can play it again.
- **Expanded FX1 delay.** FX1 → INFO → More adds modulation rate, depth and stereo phase, input Drive, Tone and Return dB (±12 dB). Codec has frame Loss (0–30%) and Bandwidth (4–16 kHz) in place of Drive and Tone.
- **Master Sweep modulation.** Tools → Mstr → Section → Sweep Mod accepts EXT1–8 or a tempo-synced triangle LFO (1/16 note to eight bars) with signed depth. It works with the compressor off.
- **Parallel master distortion.** Tools → Mstr → Section → Dist Ctrl adds wet Tone, clean/wet Dist Mix (0–100%) and output Level (−24 to +12 dB) ahead of the master Sweep and compressor.

# Bitbox MkII firmware 2.3.4+c3

Released November 4, 2026. The third custom release includes all changes from +c (the first release, also called c1) and +c2. The browser patcher continues to accept only official MkII 2.3.4.

## New in 2.3.4+c3

- **Tape, BBD and Codec delay.** Choose Digital, Tape, BBD or Codec. Tape adds saturation, frequency loss, wow and flutter; BBD makes dark, drifting repeats; Codec adds accumulating 16 kHz, 4-bit ADPCM character. FX1 → More adds 0–100% Flutter on every delay type. Zero preserves each type’s base character, including Tape’s built-in flutter.
- **Deeper reverb controls.** Room, Hall and Chamber gain Bass x, Xover, Mod Rate, Mod Dpth, Early, Hi Cut and Lo Cut on a second page. Main returns to the original controls without restarting the tail. The extra controls work independently on FX2 and FX3. Plate retains its original controls.
- **FX3: an independent second reverb.** Tap the selected FX2 cell again to switch it to FX3, then press INFO. Choose Plate, Room, Hall or Chamber, with its own settings and tail. Tap the selected cell again to return to FX2. Any pad can feed FX3 from Pos → FX3 Send. Its separate FX3 Out setting selects Out1/2, the stereo FX1/2 pair, or either mono FX jack.
- **Modulate all three sends.** Select FX1 Send, FX2 Send or FX3 Send and press INFO for LFO, CV, velocity, KEY or other native sources. Three slots per send share the stock total of twelve saved modulation routes per pad. Send modulation acts on the pad’s mixed audio. Voice-dependent sources use one active voice’s value. Recording preserves send levels and routes, and input monitoring uses them while recording stays dry.
- **KEY tracking.** Note position becomes a modulation source: for example, higher notes can open a filter or increase a send. KEY is centered on MIDI note 60 and is separate from the existing PTCH controller source. Existing source selections and saved routes keep their meanings; KEY is appended after CC.
- **CV scaling and pitch quantizing.** Set shared CV Scale from 0–400% and Offset from −100–100%, with immediate updates to held CV. Quantize CV pitch to one of eleven scales with a selectable C–B root. Defaults are 100%, 0%, Off and C. Scale/Offset apply to all eight EXT modulation sources; quantizing separately affects the native CV-pitch source. Raw gate detection, signal wake, MIDI notes and audio-input modulation stay unchanged.
- **Slice duration grid.** With Slicer Sync On, choose Free, 1 bar, 1/2, 1/4, 1/8, 1/16 or 1/32. Slice durations round to whole grid units, with at least one unit. The grid sets duration. In +c4, Slice Fit lets you choose Cut or Tape for playback. Free preserves native timing and Sync Off bypasses the grid.
- **Phone, ADPCM and µ-law.** Three more manual Fidelity choices: Phone for 8 kHz telephone-style µ-law color, ADPCM for adaptive 4-bit color at 22.05 kHz, and u-Law at 16 kHz. Available on Sample, Clip, Slicer and Granular pads. Earlier Fidelity settings retain their saved values.
- **FX returns where you need them.** Send delay and reverb returns to Out1/2 or the physical FX1/2 pair, together or independently. Dly1 Rvb2 splits delay to mono FX1 and reverb to mono FX2. FX3 has its own output selector. Dry pad assignments remain separate from return routing.
- **Compress either output pair.** Choose Off, Out1/2, FX1/2 or Both. Threshold, Ratio, Attack, Release, Gain and parallel Mix are shared; the two stereo pairs have independent compressor histories. The Main and Mstr controls edit the same setting. Master distortion and Sweep still process Out1/2.
- **Breakcut and periodic fills.** Breakcut adds changing sixteenth-note cuts and repeats. Fill every chooses Always or the final bar of each 2-, 4-, 8- or 16-bar phrase, then normal playback resumes. Periodic timing works with all Live Flip modes on quantized, synchronized Clips. The underlying musical clock keeps its phase.
- **Live retry and counter reset.** A waiting Sample voice stays at 100% Speed until restarted or deliberately adjusted from neutral after RETRY. Double-tap the bar:beat counter to renumber the next bar as 1:1 while playback and clock phase continue.
- **A quieter-looking screen saver.** Optionally show ten edge-to-edge lines in shades of dark blue, purple and white on black. One line changes every half-second. Off keeps the black-screen saver. The normal inactivity timeout and wake rules still apply. Both the screen saver and its graphic are disabled by default.
- **Reset Tools or FX settings.** RESET opens a confirmation page with separate Tools and FX choices. Tools restores global settings and saves them immediately. FX restores FX1/FX2/FX3 settings; save the preset to retain that reset. Both preserve pad assignments, pad parameters and modulation. Memory consolidation also leaves room for these additions without increasing the internal state reservation.

## Pre-release audit corrections

- Held CV responds to Scale, Offset, Quantize and Root changes even when Compressor is Off.
- FX3 uses the same pre-render modulation snapshot as FX1/FX2, avoiding different sends when a voice's LFO/active state changes within a block.

# Bitbox MkII firmware 2.3.4+c2

Released November 3, 2026. The second custom release is based on T7 and displays the full version in a condensed 16-pixel caption on Tools.

## Added since 2.3.4+c

- **Tone on Sample, Clip, Slice and Granular pads.** Fidelity adds five sampler-inspired colors and seven fixed-rate crunch modes. Drive, Filter 2 and Res 2 support LFO/CV modulation. Slope 1 switches the primary filter between 12 and 24 dB/octave. Filter 2 is an independent 24 dB filter.
- **Clip timing and performance.** Loop Fade, ±100 ms Shift, Play Len from a quarter to 32 bars (or Full), Sync 1/32 and five Live Flip modes. Beat Rpt, 1/8 Rpt, 1/16 Rpt, Half Rpt and Rotate preserve transport position.
- **Reverb.** Room, Hall and Chamber join Plate. The new types add Size, Diffusion and Width. All four offer Level.
- **Master processing.** Tools → Comp exposes threshold, ratio, gain and parallel Mix. Tools → Mstr provides attack, release, enable, four distortion shapes and a bipolar sweep filter on Out 1/2.
- **Recording.** FX1 and FX2 survive recording. The selected pad’s sends process live monitoring while the input WAV stays dry.
- **MIDI input monitor.** Tools → MIDI → Monitor shows a timestamped 32-event history with Freeze/Resume, scrolling, filtering, Clear and separate Clock and Active Sensing indicators.
- **Pad fixes and navigation.** Slice honors its saved Mono setting after switching from a polyphonic Sample pad. Blank pads expose LFO/Spd and Speed at 100%. Tone remembers the selected encoder bank and returns from modulation editing to the same dial. Configuration is labeled Cnf.

## Included from 2.3.4+c

- Vertical waveform zoom from 25–3200%, with two-finger reset to 100% amplitude and the stock horizontal zoom-out level. Long samples may still extend beyond the screen.
- An optional screen saver with selectable timeout and MIDI/CV-trigger wake.
- Pitch-preserving Sample Speed from 50–200% with LFO/CV modulation. In +c4 one eligible Sample voice can stretch while native Pitch works on every pad.
- Double-tap reset on numeric dials, preserving modulation assignments.

[Features since stock firmware](FEATURE_LISTS.md)
