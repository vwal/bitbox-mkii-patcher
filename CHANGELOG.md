# Bitbox MkII firmware 2.3.4+c3

Released November 4, 2026. The third custom release includes all changes from +c (the first release, also called c1) and +c2. The browser patcher continues to accept only official MkII 2.3.4.

## New in 2.3.4+c3

- **Tape, BBD and Codec delay.** Choose Digital, Tape, BBD or Codec. Tape adds saturation, frequency loss, wow and flutter; BBD makes dark, drifting repeats; Codec adds accumulating 16 kHz, 4-bit ADPCM character. FX1 → More adds 0–100% Flutter on every delay type. Zero preserves each type’s base character, including Tape’s built-in flutter.
- **Deeper reverb controls.** Room, Hall and Chamber gain Bass x, Xover, Mod Rate, Mod Dpth, Early, Hi Cut and Lo Cut on a second page. Main returns to the original controls without restarting the tail. The extra controls work independently on FX2 and FX3. Plate retains its original controls.
- **FX3: an independent second reverb.** Tap the selected FX2 cell again to switch it to FX3, then press INFO. Choose Plate, Room, Hall or Chamber, with its own settings and tail. Tap the selected cell again to return to FX2. Any pad can feed FX3 from Pos → FX3 Send. Its separate FX3 Out setting selects Out1/2, the stereo FX1/2 pair, or either mono FX jack.
- **Modulate all three sends.** Select FX1 Send, FX2 Send or FX3 Send and press INFO for LFO, CV, velocity, KEY or other native sources. Three slots per send share the stock total of twelve saved modulation routes per pad. Send modulation acts on the pad’s mixed audio. Voice-dependent sources use one active voice’s value. Recording preserves send levels and routes, and input monitoring uses them while recording stays dry.
- **KEY tracking.** Note position becomes a modulation source: for example, higher notes can open a filter or increase a send. KEY is centered on MIDI note 60 and is separate from the existing PTCH controller source. Existing source selections and saved routes keep their meanings; KEY is appended after CC.
- **CV scaling and pitch quantizing.** Set shared CV Scale from 0–400% and Offset from −100–100%, with immediate updates to held CV. Quantize CV pitch to one of eleven scales with a selectable C–B root. Defaults are 100%, 0%, Off and C. Scale/Offset apply to all eight EXT modulation sources; quantizing separately affects the native CV-pitch source. Raw gate detection, signal wake, MIDI notes and audio-input modulation stay unchanged.
- **Slice duration grid.** With Slicer Sync On, choose Free, 1 bar, 1/2, 1/4, 1/8, 1/16 or 1/32. Slice durations round to whole grid units, with at least one unit. This controls duration; it does not stretch the audio to fill that duration. Free preserves native timing and Sync Off bypasses the grid.
- **Phone, ADPCM and µ-law.** Three more manual Fidelity choices: Phone for 8 kHz telephone-style µ-law color, ADPCM for adaptive 4-bit color at 22.05 kHz, and u-Law at 16 kHz. Available on Sample, Clip, Slicer and Granular pads. Earlier Fidelity settings retain their saved values.
- **FX returns where you need them.** Send delay and reverb returns to Out1/2 or the physical FX1/2 pair, together or independently. Dly1 Rvb2 splits delay to mono FX1 and reverb to mono FX2. FX3 has its own output selector. Dry pad assignments remain separate from return routing.
- **Compress either output pair.** Choose Off, Out1/2, FX1/2 or Both. Threshold, Ratio, Attack, Release, Gain and parallel Mix are shared; the two stereo pairs have independent compressor histories. The Main and Mstr controls edit the same setting. Master distortion and Sweep still process Out1/2.
- **Breakcut and periodic fills.** Breakcut adds changing sixteenth-note cuts and repeats. Fill every chooses Always or the final bar of each 2-, 4-, 8- or 16-bar phrase, then normal playback resumes. Periodic timing works with all Live Flip modes on quantized, synchronized Clips. The underlying musical clock keeps its phase.
- **Live retry and counter reset.** Return active Speed to 100% and zero its modulation amounts, or return all active Pitch operations to neutral, to release the reservation. A blocked control shows RETRY when available: restart, or return it to neutral and adjust again. Waiting voices never start stretching automatically. One Sample voice can use Speed, or multiple native Pitch voices can play. Speed and Pitch cannot operate together, even on the same pad. Nonzero modulation amounts retain their Speed or Pitch reservation; note transposition can also retain Pitch. Double-tap the bar:beat counter to renumber the next bar as 1:1 without moving playback or clock phase.
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

- Vertical waveform zoom from 25–3200%, with two-finger reset and horizontal fit.
- An optional screen saver with selectable timeout and MIDI/CV-trigger wake.
- Pitch-preserving Sample Speed from 50–200% with LFO/CV modulation. Multiple native Pitch voices or one exclusive Speed voice can be active.
- Double-tap reset on numeric dials, preserving modulation assignments.

[Detailed first-release changelog](releases/2.3.4+c/CHANGELOG.md)
