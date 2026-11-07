# Bitbox MkII features since stock 2.3.4

> Local +c5 preparation draft. F10 is being tested. The patcher and PDF guides still target +c4.

## Features by area

### Playback & loop editing

See the waveform, control time and shape a loop.

#### See quiet and loud waveforms

Location: Waveform → two-finger gestures.

Zoom amplitude from 25–3200% with a vertical pinch or spread, independently of horizontal time zoom. A stationary two-finger tap restores 100% amplitude and the stock horizontal zoom-out level. Long samples may still extend beyond the screen.

#### Change speed while keeping pitch

Location: Sample → LFO/Spd → SPEED.

Set 50–200% Speed on an eligible forward Sample voice; select the dial and press INFO for modulation. Native Pitch works on all pads, including the stretched pad, and Speed retains its full range at high positive Pitch.

One voice can stretch at a time. A waiting Sample voice keeps its chosen Pitch and plays at 100% Speed. Restart it, or return Speed to neutral and adjust again after RETRY. An active Speed modulation route keeps its reservation through 100% crossings.

#### Fit slices to the beat

Location: Slicer → Pos → Sync / Sync Grid / Slice Fit.

With Sync On, set Sync Grid to Free, 1 bar, 1/2, 1/4, 1/8, 1/16 or 1/32. Durations round to whole grid units. Cut keeps the native behavior; Tape changes pitch and rate to fit the slice end to end.

[+c5, in testing] Smooth fits eligible slices without changing pitch, at roughly 50–200% fitted rates. It shares the single stretch slot with Sample Speed. Tape remains independent of that slot.

The Slice Mono fix makes a new slice cut the previous one after conversion from a polyphonic Sample, including Trigger / Mono / Play Through with Quant Size None.

#### Edit loop timing and play fills

Location: Clip → Pos.

Use Loop Fade (0–50 ms), Shift (−100 to +100 ms), Play Len (Full or ¼–32 bars) and the added 1/32 Sync division.

Live Flip offers Beat Rpt, 1/8 Rpt, 1/16 Rpt, Half Rpt, Rotate and changing Breakcut patterns. Run them continuously or in the last bar of a 2-, 4-, 8- or 16-bar phrase. Play Len and Live Flip require Quant Size and timed Sync; playback rejoins the current beat when the effect ends.

### Tone & effects

Sampler color, filters, delay and two independent reverbs.

#### Add sampler character

Location: Pad → Tone → Fidelity.

Keep Normal or HighQ, or choose SP1200, SP-12, S950, MPC60 or SP Raw. 12-bit fixed-rate crunch runs at 16, 12, 10, 8, 6, 4 or 2 kHz.

Phone adds 8 kHz telephone-band µ-law color, ADPCM adds adaptive 4-bit color at 22.05 kHz, and u-Law runs at 16 kHz. Fidelity is a manual selector, available on Sample, Clip, Slicer and Granular pads.

#### Drive and filter each pad

Location: Pad → Tone.

Add pre-filter Drive from 0–100%. Slope 1 switches the primary filter between 12 and 24 dB/octave. The independent 24 dB Filter 2 sweeps from low-pass to high-pass and has its own Res 2.

Select Drive, Filter 2 or Res 2 and press INFO for LFO/CV modulation. Tone restores the same dial and encoder bank when you return from the modulation editor.

#### Four delay characters

Location: FX1 → INFO → Type / More.

Choose Digital, Tape, BBD or Codec. Tape adds saturation, frequency loss, wow and flutter; BBD gives dark, drifting repeats; Codec builds up 16 kHz, 4-bit ADPCM color.

More adds Flutter (0–100%), modulation rate, depth and stereo phase, Drive, Tone and Return dB (±12 dB). Codec replaces Drive and Tone with frame Loss (0–30%) and Bandwidth (4–16 kHz). Flutter at zero retains each type’s base sound, including Tape’s built-in movement.

#### Two separate reverb tails

Location: FX2 / FX3 → INFO → Type / More.

Room, Hall and Chamber join Plate. The added types offer Size, Diffusion and Width; their More page adds Bass x, Xover, Mod Rate, Mod Dpth, Early, Hi Cut and Lo Cut. All types have Level. Switching control pages preserves the tail.

Tap the selected FX2 cell again to switch to FX3, then press INFO. FX3 is an independent second reverb with its own settings and tail. Tap the selected cell again to return to FX2.

#### Send, blend and route

Location: Pad → Pos · Tools → Rec → FX Out.

Each pad has FX1, FX2 and FX3 sends, all modulatable through select → INFO. Route FX1/FX2 returns to Out1/2 or the physical FX1/2 pair, together or separately; Dly1 Rvb2 splits them between the two mono FX jacks. FX3 has its own Out1/2, FX1/2, mono FX1 or mono FX2 selector.

[+c5, in testing] Dry Level, after FX3 Send on Pos, defaults to 100% and trims the pad’s direct sound down to 0% while all three sends remain active. Use it for wet-only playback, or modulate it through INFO. The sends and return levels set the wet balance; the effects run in parallel.

### Recording & resampling

Capture a performance, print its sound and keep control of the take.

#### Overdub a pad or a performance — +c5, in testing

Location: Destination pad → INFO twice → Cnf → Dub source.

Manual records the stereo input plus the live musical pads you play. Leave the recorder for Pads to start and stop sounds; playback remains under your control.

Choose Pad 1–16 for a determined source. Recording restarts that pad, stops it with the take and ignores taps on other musical pads. Numbering runs left to right from the top row. Eligible forward Sample sources with Pre also offer One pass.

Use Rec Input → In 1/2 for accompaniment and Length → Custom for a take you end manually. Recording creates a new WAV on the destination. Empty or self-referencing numbered sources show an explanation and leave Rec available.

#### Choose what the backing contributes — +c5, in testing

Location: Destination pad → Cnf → Dub tap.

Pre follows live timing, Pitch, Speed, level, pan and envelope, before Fidelity, Drive, filters and Dry Level. Post pad includes those processes and Dry Level. Post+FX also prints the shared delay and reverb returns.

All three include the live stereo input. Shared returns can contain other pads’ tails. Post+FX is captured before master processing; use Resam to print the native resampling mix. For an isolated wet take, stop other sources and let their tails decay.

#### Record, edit and return — +c5, in testing

Location: Recorder → Rec Input / live Gain · Pads → destination.

With Resam, capture the native mix while playing or editing other pads. Tap the recording destination to stop; the next INFO opens that pad. To reopen an ongoing take without stopping it, select its destination with a left-hand encoder and press INFO.

The active recorder retains Stop, timers, meters and Input Gain or Resam Gain. Either right-hand encoder adjusts the native global gain (−96 to +20 dB). Input Gain leaves the overdub backing level unchanged; Resam Gain changes the recorded mix without changing playback volume.

FX sends, their modulation and Dry Level survive recording. During a take, input-monitor effects stay tied to the destination while you browse other pads. Stop continues to honor recording quantization. For clean playback of a printed take, restore destination Dry Level to 100% and lower sends if needed.

### Modulation & GEN

Connect controls, or let each pad generate its own rhythm.

#### More sources and destinations

Location: Select a supported parameter → INFO.

Use native sources such as LFO, CV and velocity alongside KEY note tracking (centered on MIDI note 60), ENV from the pad’s ADSR, per-note RAND, evolving CHAOS and slow coupled NET movement.

Custom destinations include Sample Speed, Drive, Filter 2, Res 2 and all three FX sends. [+c5, in testing] Dry Level joins them. Up to three slots per destination share the existing 12-route total per pad. Sends and Dry act on the pad mix; voice-dependent sources use one active voice’s value.

#### A generator on every pad

Location: Pad → INFO twice → Gen · Tools → Mstr → GEN Run.

Run a different clocked pattern on each of the 16 pads. Choose Euclid, Breakcut, Call+Resp, Evolve, Drummap, Random, Acid, Turing or Learn. Set timing, probability, velocity and step conditions, send a response to another pad, or teach Learn by playing the grid.

Enable Run under Tools → Mstr → Section → GEN Run. Granular pads expose generator settings under Cnf. Patterns follow the internal or MIDI clock.

#### See the rhythm as it plays

Location: Pads → status strip.

The selected generator shows hits, rests and its current step. A separate row of activity dots covers all 16 pads. Selecting a pad with GEN off clears its pattern display. Generated notes follow their programmed timing, velocity and gate length.

### Master processing

Shape the whole mix or compress either output pair.

#### Compressor controls and parallel Mix

Location: Tools → Comp / Mstr → Comp env.

Expose the stock compressor’s Threshold, Ratio, Gain, Attack, Release and Mix. The bus selector offers Off, Out1/2, FX1/2 or Both, with independent compressor histories for the two stereo pairs.

Main and Mstr show the same Compressor setting. Mix blends compressed and clean signal for parallel compression.

#### Distortion and a moving sweep filter

Location: Tools → Mstr → Master FX / Dist Ctrl / Sweep Mod.

Choose Soft, Hard, Fold or Tube distortion with up to +24 dB Drive. Dist Ctrl adds wet Tone, clean/wet Dist Mix and output Level (−24 to +12 dB).

Sweep moves from low-pass through neutral to high-pass. Modulate it with EXT1–8 or a clocked triangle LFO from 1/16 note to eight bars, using signed depth. Distortion and Sweep process Out1/2 before the optional compressor; Sweep modulation also works with compression off.

### MIDI & CV utilities

Inspect incoming messages and adapt control voltages.

#### See what MIDI is arriving

Location: Tools → MIDI → Monitor.

Inspect a timestamped 32-event history of notes, CCs, program changes, pressure, pitch bend and transport. Freeze or resume, scroll, filter by channel and clear the log. MIDI Clock and Active Sensing have separate activity indicators.

#### Scale, offset and quantize CV

Location: Tools → Rec → CV In.

Set shared CV Scale (0–400%) and Offset (−100 to +100%) for all eight EXT sources, with immediate updates to held CV. Defaults are 100% and zero.

The separate CV pitch quantizer offers eleven scales and a C–B root, defaulting to Off/C. It affects CV pitch, leaving MIDI notes, raw gates, signal wake and audio-input modulation unchanged.

### Display & everyday controls

Find a setting, reset a value or let the screen rest.

#### Screen saver and signal wake

Location: Tools → Disp.

Choose disabled (default) or 1, 2, 3, 5, 10, 15, 30 or 60 minutes. Use a black screen or optional moving lines in dark blue, purple and white. The graphic is also off by default.

The first touch or physical control change wakes only. Optional MIDI, CV-trigger or combined signal wake passes the musical event through. MIDI Clock and Active Sensing do not wake the screen.

#### Reset a value or stop a long sample

Location: Numeric dials · Pads / Waveform → Play.

Double-tap a numeric dial to restore its base value while keeping modulation assignments. On a Trigger pad, hold one finger on the grid pad for three seconds to stop its voices; the initial touch still retriggers normally.

[+c5, in testing] The same three-second stop works on the waveform detail Play button. A fresh tap, MIDI, CV or GEN can start the sound again.

#### Reset the counter or shared settings

Location: Counter · Tools → Main → RESET.

Double-tap the bar:beat counter to renumber the next bar as 1:1 without moving playback or clock phase. RESET offers separate confirmed Tools and FX resets; both preserve pad assignments, pad parameters and modulation. Save the preset to retain an FX reset.

[+c5, in testing] A Tools reset preserves the screen-saver timeout, graphic and signal-wake preferences. Shorter labels—MIDI, Disp, Scrn saver and Cnf—keep navigation readable. Blank pads also expose LFO/Spd and Speed.

## What did each release include?

### 2.3.4+c5 — In testing · based on F10

- Slicer Smooth fit, sharing the single stretch slot with Sample Speed; native Pitch remains available on all pads.
- Live overdubbing with Manual or numbered sources, Pre / Post pad / Post+FX capture, and One pass for eligible Sample sources.
- Recording and Resam navigation, Stop from Pads, live Input Gain / Resam Gain, stable destination monitor sends and readable source-error feedback.
- Modulatable per-pad Dry Level for blending direct sound with parallel FX sends, including wet-only playback.
- Three-second Trigger Stop on the waveform Play button; Tools reset preserves screen-saver preferences.
- Flash reclamation and recording-state fixes supporting these additions.

### 2.3.4+c4 — Published · fourth custom release

- Per-pad GEN with nine algorithms, pattern/playhead display and activity dots for every generator.
- Native Pitch alongside one Sample Speed voice, including the full Speed range at high positive Pitch; removed the earlier Pitch/Speed mutual exclusion.
- Slicer Tape fit and three-second hold-to-stop on Trigger grid pads.
- ENV, CHAOS, RAND and NET modulation sources.
- Expanded delay modulation, Drive, Tone and return controls; Codec Loss and Bandwidth.
- Master Sweep modulation and parallel distortion Tone, Mix and Level.

### 2.3.4+c3 — Third custom release

- Tape, BBD and Codec delay, adjustable Flutter, deeper reverb controls and the independent FX3 reverb.
- FX return routing and compressor output-bus selection.
- Modulatable FX1/FX2/FX3 sends, KEY tracking, CV scale/offset and CV pitch quantizing.
- Slice Sync Grid, Breakcut and periodic fills, live Speed release/retry and next-bar counter renumbering.
- Phone, ADPCM and u-Law Fidelity modes.
- Optional line screen saver, separate Tools/FX reset choices and memory consolidation.

### 2.3.4+c2 — Second custom release

- Tone page with sampler-inspired Fidelity and fixed-rate crunch, Drive, primary 12/24 dB slope and independent Filter 2 / Res 2.
- Clip Loop Fade, Shift, Play Len, Sync 1/32 and five Live Flip repeat modes.
- Room, Hall and Chamber reverb; compressor controls and parallel Mix; master distortion and Sweep.
- FX sends preserved through recording and live input monitoring through sends.
- MIDI input monitor, Slice Mono fix, blank-pad Speed access and Tone navigation fixes.

### 2.3.4+c (c1) — First custom release

- Independent vertical waveform zoom, including zooming out, and two-finger reset to 100% amplitude plus the stock horizontal zoom-out level.
- Optional screen saver with selectable timeout and MIDI/CV-trigger wake.
- Pitch-preserving 50–200% Sample Speed with LFO/CV modulation. This first release kept Speed exclusive with non-neutral Pitch; +c4 removed that restriction.
- Double-tap reset for numeric dials without clearing modulation; compact Tools labels and the custom version display.

