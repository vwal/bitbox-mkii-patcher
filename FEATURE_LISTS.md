# Bitbox MkII custom firmware feature lists

Current release: **2.3.4+c3**. Apply directly to official **2.3.4**, not to an earlier custom build.

## New features in 2.3.4+c3

- **Memory consolidation** — Moves dial-reset workspace into reserved SDRAM; compacts the voice ledger, Speed routing and status cache. Existing Pitch/Speed limits retained. Location: Internal.
- **Detailed reverb second page** — Bass x, Xover, Mod Rate, Mod Dpth, Early, Hi Cut and Lo Cut. FX2 also repeats Level; FX3 uses that square for FX3 Out. Main preserves the tail. Location: FX2 or FX3 > Room/Hall/Chamber > More.
- **Phone, ADPCM and u-Law Fidelity** — Phone: 8 kHz telephone-band mu-law. ADPCM: adaptive 4-bit IMA at 22.05 kHz. u-Law: 16 kHz. Earlier saved selections preserved. Location: Pad > Tone > Fidelity.
- **Tape, BBD and Codec delay** — Digital retains original sound. Tape adds saturation/loss/wow/flutter; BBD adds dark, drifting sample-held repeats; Codec runs 16 kHz 4-bit IMA ADPCM in feedback. Location: FX1 > INFO > Type.
- **Flutter depth** — 0-100% on every delay type. Zero preserves the existing sound, including Tape's built-in flutter. Location: FX1 > More.
- **FX return output routing** — Out1/2, Dly FX1/2, Rvb FX1/2, FX1/2, Dly1 Rvb2. Routes wet returns independently from dry pad output assignments; mono choices average stereo wet channels. Location: Tools > Rec > FX Out.
- **Optional line screen saver** — Ten edge-to-edge lines on black, in shades of dark blue through purple to white. One line changes every half-second. Off preserves black-screen saver; graphic disabled by default. Location: Tools > Disp > Saver gfx.
- **Live Pitch/Speed release and deliberate retry** — Neutral releases an owner only when its applicable modulation depths and other pitch contributions are neutral. Blocked voices show RETRY once free and still need neutral-then-adjust or restart; no automatic acquisition. Nonzero-depth modulation reserves through zero crossings; note transposition and draining pitched-grain tails may retain Pitch. Location: Pitch / Speed controls.
- **Counter reset on next bar** — A star shows the pending reset. Renumbers the next bar as 1:1 without moving audio, synchronized clips, clock phase or fill timing. Location: Top-left bar:beat counter: double-tap.
- **Compressor bus selection** — Off, Out1/2, FX1/2 or Both. Shared controls, independent histories/detectors for the two stereo pairs. Main and Mstr are two views of the same setting. Location: Tools > Main / Mstr > Comp env.
- **Breakcut and periodic fills** — Changing sixteenth-note cuts/repeats. Always or final bar of each 2/4/8/16-bar phrase. Applies to all Live Flip modes; quantized timed Sync required. Location: Clip > Pos > Live Flip / Fill every.
- **Separate Tools and FX RESET** — Choose Tools or FX, then confirm. Tools restores and saves globals. FX restores FX1/FX2/FX3 scalar settings in the current preset, which must be saved to persist. Both preserve pads, pad parameters, sends and modulation routes. Location: Tools > Main > RESET.
- **FX3 independent second reverb** — Second Plate/Room/Hall/Chamber processor with independent settings/tail and per-pad FX3 Send. FX3 Out: Out1/2, FX1/2, mono FX1 or mono FX2. Tap selected grid cell again to return to FX2. Location: Pads: tap selected FX2 again, then INFO.
- **Modulatable FX1/FX2/FX3 sends** — Three modulation slots per send within the 12-route-per-pad total. Additive modulation clamps 0-100%. Sends process summed pad audio; voice sources use last active native-list voice, not guaranteed newest-note priority. Recording preserves all send levels and routes. Location: Pad > Pos > Send > select + INFO.
- **KEY tracking** — Native note-position source centered on MIDI note 60. Distinct from PTCH. Available to supported native and custom destinations; sends follow pad-level polyphony rules. Location: Modulation source selector after CC.
- **Slice Sync Grid** — Free, 1 bar, 1/2, 1/4, 1/8, 1/16 or 1/32. Rounds scheduled slice duration to whole grid units, minimum one; does not stretch audio. Saved per pad. Location: Slicer > Pos > Sync Grid with Sync On.
- **CV scale and offset** — Shared across eight EXT modulation sources, excluding audio IN1/IN2. Scale 0-400%, Offset -100 to +100%, defaults 100% and 0%. Held CV updates immediately, raw gate/signal-wake behavior preserved. Location: Tools > Rec > CV In.
- **CV pitch quantizer** — Off or eleven scales, C-B root; defaults Off/C. Quantizes the native CV-pitch source, separately from general EXT scale/offset, not MIDI notes or final mixed pitch. Nearest note, ties lower. Location: Tools > Rec > CV In > Quantize / Root.

## New features since stock 2.3.4

Each entry shows the release in which it first appeared. +c is the first custom release, also labeled c1.

### +c (c1)

- **Vertical waveform zoom** — Amplitude zoom 25-3200%, independent of horizontal time zoom. Stationary two-finger tap restores 100% amplitude and horizontal fit. Location: Waveform: two-finger vertical spread/pinch.
- **Screen saver and signal wake** — Disabled by default; 1/2/3/5/10/15/30/60-minute timeouts. First physical input wakes only. Optional MIDI/CV-trigger/both wake preserves the triggering musical action; MIDI Clock and Active Sensing excluded. Location: Tools > Disp.
- **Pitch-preserving Speed** — 50-200%, with select + INFO modulation. One eligible forward Sample voice may stretch; all Pitch operations are blocked while it owns Speed. Multiple native Pitch voices can coexist when no Speed operation owns the resource. Location: Sample > LFO/Spd > SPEED.
- **Double-tap numeric dial reset** — Resets the base value without altering assigned modulation. Location: Supported numeric parameter dials.
- **Shorter navigation labels** — MIDI In renamed MIDI; Display shortened to Disp; Screen saver shortened to Scrn saver. Location: Tools > MIDI / Disp.

### +c2

- **Tone page and Fidelity modes** — Normal/HighQ retained; SP1200, SP-12, S950, MPC60, SP Raw and 16/12/10/8/6/4/2 kHz modes. All pad modes; manual mode selector. Configuration tab shortened to Cnf. Location: Pad > Tone > Fidelity.
- **Drive and two filter controls** — Drive before filters with modulation; primary Slope 1 selectable 12/24 dB; independent 24 dB Filter 2 and Res 2 with modulation. Separate left/right encoder banks work correctly. Location: Pad > Tone.
- **Clip Loop Fade** — 0-50 ms fades at loop edges, capped at a quarter of short loops. Location: Clip > Pos.
- **Clip Shift, Play Len and Sync 1/32** — Shift -100 to +100 ms. Play Len Full or 1/4-32 bars. Added 1/32 timed Sync. Play Len requires timed Sync and Quant Size enabled. Location: Clip > Pos.
- **Live Flip repeat modes** — Beat Rpt, 1/8 Rpt, 1/16 Rpt, Half Rpt and Rotate. Clocked playback edits, not another stretching engine. Location: Clip > Pos > Live Flip.
- **Slice Mono fix** — After conversion from a polyphonic Sample, Mono is honored; a new slice cuts the preceding slice with Quant Size None too. Location: Slicer with Trigger, Mono and Play Through.
- **Reverb types and main controls** — Plate retained; Room/Hall/Chamber added, with Size, Diffusion, Width and Level. Native Decay/Predelay/Damping modulation remains. Location: FX2 > INFO.
- **Compressor controls and parallel mix** — Threshold, Ratio, Gain, Mix, Attack and Release using the original compressor algorithm. Location: Tools > Comp / Mstr > Comp env.
- **Master distortion and Sweep** — Soft/Hard/Fold/Tube distortion and Drive, plus bipolar low-pass/high-pass Sweep. Main Out1/2 only, before optional compression. Location: Tools > Mstr > Section > Master FX.
- **Preserved recording sends and wet monitoring** — FX1/FX2 send levels survive recording. Input monitors through the pad’s FX sends; recorded WAV stays dry apart from input gain. Location: Recording / pad Pos sends.
- **MIDI monitor** — 32-event history, 7 visible rows, input group/channel/time/message, channel filter, Freeze/Resume, encoder scrolling, Clear, separate Clock/Active Sensing indicators. Location: Tools > MIDI > Monitor.
- **Empty-pad Speed navigation fix** — Blank pads expose LFO/Spd and the Speed parameter at 100%. Location: Blank pad > INFO > INFO > LFO/Spd.

### +c3

- **Memory consolidation** — Moves dial-reset workspace into reserved SDRAM; compacts the voice ledger, Speed routing and status cache. Existing Pitch/Speed limits retained. Location: Internal.
- **Detailed reverb second page** — Bass x, Xover, Mod Rate, Mod Dpth, Early, Hi Cut and Lo Cut. FX2 also repeats Level; FX3 uses that square for FX3 Out. Main preserves the tail. Location: FX2 or FX3 > Room/Hall/Chamber > More.
- **Phone, ADPCM and u-Law Fidelity** — Phone: 8 kHz telephone-band mu-law. ADPCM: adaptive 4-bit IMA at 22.05 kHz. u-Law: 16 kHz. Earlier saved selections preserved. Location: Pad > Tone > Fidelity.
- **Tape, BBD and Codec delay** — Digital retains original sound. Tape adds saturation/loss/wow/flutter; BBD adds dark, drifting sample-held repeats; Codec runs 16 kHz 4-bit IMA ADPCM in feedback. Location: FX1 > INFO > Type.
- **Flutter depth** — 0-100% on every delay type. Zero preserves the existing sound, including Tape's built-in flutter. Location: FX1 > More.
- **FX return output routing** — Out1/2, Dly FX1/2, Rvb FX1/2, FX1/2, Dly1 Rvb2. Routes wet returns independently from dry pad output assignments; mono choices average stereo wet channels. Location: Tools > Rec > FX Out.
- **Optional line screen saver** — Ten edge-to-edge lines on black, in shades of dark blue through purple to white. One line changes every half-second. Off preserves black-screen saver; graphic disabled by default. Location: Tools > Disp > Saver gfx.
- **Live Pitch/Speed release and deliberate retry** — Neutral releases an owner only when its applicable modulation depths and other pitch contributions are neutral. Blocked voices show RETRY once free and still need neutral-then-adjust or restart; no automatic acquisition. Nonzero-depth modulation reserves through zero crossings; note transposition and draining pitched-grain tails may retain Pitch. Location: Pitch / Speed controls.
- **Counter reset on next bar** — A star shows the pending reset. Renumbers the next bar as 1:1 without moving audio, synchronized clips, clock phase or fill timing. Location: Top-left bar:beat counter: double-tap.
- **Compressor bus selection** — Off, Out1/2, FX1/2 or Both. Shared controls, independent histories/detectors for the two stereo pairs. Main and Mstr are two views of the same setting. Location: Tools > Main / Mstr > Comp env.
- **Breakcut and periodic fills** — Changing sixteenth-note cuts/repeats. Always or final bar of each 2/4/8/16-bar phrase. Applies to all Live Flip modes; quantized timed Sync required. Location: Clip > Pos > Live Flip / Fill every.
- **Separate Tools and FX RESET** — Choose Tools or FX, then confirm. Tools restores and saves globals. FX restores FX1/FX2/FX3 scalar settings in the current preset, which must be saved to persist. Both preserve pads, pad parameters, sends and modulation routes. Location: Tools > Main > RESET.
- **FX3 independent second reverb** — Second Plate/Room/Hall/Chamber processor with independent settings/tail and per-pad FX3 Send. FX3 Out: Out1/2, FX1/2, mono FX1 or mono FX2. Tap selected grid cell again to return to FX2. Location: Pads: tap selected FX2 again, then INFO.
- **Modulatable FX1/FX2/FX3 sends** — Three modulation slots per send within the 12-route-per-pad total. Additive modulation clamps 0-100%. Sends process summed pad audio; voice sources use last active native-list voice, not guaranteed newest-note priority. Recording preserves all send levels and routes. Location: Pad > Pos > Send > select + INFO.
- **KEY tracking** — Native note-position source centered on MIDI note 60. Distinct from PTCH. Available to supported native and custom destinations; sends follow pad-level polyphony rules. Location: Modulation source selector after CC.
- **Slice Sync Grid** — Free, 1 bar, 1/2, 1/4, 1/8, 1/16 or 1/32. Rounds scheduled slice duration to whole grid units, minimum one; does not stretch audio. Saved per pad. Location: Slicer > Pos > Sync Grid with Sync On.
- **CV scale and offset** — Shared across eight EXT modulation sources, excluding audio IN1/IN2. Scale 0-400%, Offset -100 to +100%, defaults 100% and 0%. Held CV updates immediately, raw gate/signal-wake behavior preserved. Location: Tools > Rec > CV In.
- **CV pitch quantizer** — Off or eleven scales, C-B root; defaults Off/C. Quantizes the native CV-pitch source, separately from general EXT scale/offset, not MIDI notes or final mixed pitch. Nearest note, ties lower. Location: Tools > Rec > CV In > Quantize / Root.

