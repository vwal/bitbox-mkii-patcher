# Bitbox MkII browser patcher

[Open the patcher](https://vwal.github.io/bitbox-mkii-patcher/)

An unofficial customization of 1010music Bitbox MkII firmware **2.3.4** to
**2.3.4+c4**. This repository contains only the static website and a binary delta,
not the complete original or customized firmware.

[Watch the first release (+c) video overview](https://youtu.be/OjgC4UoyOIA). The page also includes
an optional player that loads only when requested. An updated video covering +c2 and +c3 is coming soon.

## Use

1. Back up your entire microSD card, including projects, samples and presets.
2. Download official Bitbox MkII 2.3.4 using the link on the patcher and extract it.
3. Select the extracted firmware in the patcher and apply the patch.
4. Download the verified result as **BITBOXMK2.bin**. Remove any duplicate-download
   suffix such as `(1)` or `1`: the file on the SD card must have that exact name.

| Printable PDF | US Letter | A4 |
| --- | --- | --- |
| Firmware reference guide | [Download](bitbox-mkii-2.3.4c4-reference.pdf) | [Download](bitbox-mkii-2.3.4c4-reference-a4.pdf) |
| Navigation card | [Download](bitbox-mkii-2.3.4c4-quick-card.pdf) | [Download](bitbox-mkii-2.3.4c4-quick-card-a4.pdf) |

For flashing, see the [official MkII manual](https://1010music.com/wp-content/uploads/2023/03/bitbox-mk2-2.0-user-manual-2023-03-01-clean.pdf).
Copy the patched file to the card root. Power off, insert the card, hold INFO
while powering on, and release INFO when the upgrade message appears. Allow
about 30 seconds and wait for the automatic reboot. Confirm **2.3.4+c4** at the
lower-right of Menu (press HOME until it appears), or the top-right of Tools.

The patcher verifies the entire original file with SHA-256 before applying any
changes, then verifies the entire output before offering a download. It creates
a file; it does not flash your module.

## Return to official firmware

Back up your card, then replace the patched file in its root directory with the
original, unmodified **BITBOXMK2.bin** from the official 2.3.4 archive. The
filename must match exactly. With the unit powered off, insert the card, hold
**INFO** while powering on, and release INFO when the upgrade message appears.
Allow about 30 seconds and leave power on until the automatic reboot. Confirm
**2.3.4** in the lower-right corner of the Menu screen.

## Fourth custom release (+c4)

- **Per-pad GEN sequencer.** Run a different pattern on each of the 16 pads, all following the internal or MIDI clock. Nine algorithms cover Euclid, Breakcut, Call+Resp, Evolve, Drummap, Random, Acid, Turing and Learn. Dial in timing, probability, velocity and step conditions, route a response to another pad, or teach Learn by playing the grid. Select a pad → INFO twice → Gen (Granular uses Cnf). Enable Run in Tools → Mstr → Section → GEN Run.
- **GEN pattern and playhead.** The Pads status strip shows the selected generator’s hits, rests and current step, plus a row of activity indicators for all 16 pads. A pad with GEN off clears the strip. Generated notes use their programmed step, velocity and gate length.
- **Pitch alongside Sample Speed.** All pads can use native Pitch, including the one using 50–200% Sample Speed. The full Speed range works at high positive Pitch. One eligible forward Sample voice can stretch at a time. The first eligible voice to request Speed gets the slot. A waiting voice keeps its chosen Pitch and plays at 100% Speed until restarted or deliberately adjusted after RETRY. Several pitched voices and effects alongside Speed can cause crackling, depending on the preset.
- **Slicer Tape.** With Slicer → Pos → Sync On, Slice Fit → Tape plays a slice end to end in its synced duration, changing pitch with playback rate. Cut remains the default. Tape works independently of the Sample Speed voice.
- **Four per-pad modulation sources.** ENV follows the pad’s ADSR, RAND holds a fresh value for each note, CHAOS gives evolving bipolar movement and NET gives slow movement from four coupled nodes. Select a modulation destination and press INFO. On Slice Seq, ENV/RAND step per note and CHAOS/NET step on rising zero crossings.
- **Hold a Trigger pad to stop.** A tap on the 4×4 grid still plays or retriggers immediately. Keep one finger on the pad for three seconds to release its voices. MIDI, CV, GEN or another tap can play it again.
- **Expanded FX1 delay.** FX1 → INFO → More adds modulation rate, depth and stereo phase, input Drive, Tone and Return dB (±12 dB). Codec has frame Loss (0–30%) and Bandwidth (4–16 kHz) in place of Drive and Tone.
- **Master Sweep modulation.** Tools → Mstr → Section → Sweep Mod accepts EXT1–8 or a tempo-synced triangle LFO (1/16 note to eight bars) with signed depth. It works with the compressor off.
- **Parallel master distortion.** Tools → Mstr → Section → Dist Ctrl adds wet Tone, clean/wet Dist Mix (0–100%) and output Level (−24 to +12 dB) ahead of the master Sweep and compressor.

## Third custom release (+c3)

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

## Second custom release (+c2)

- **Tone on Sample, Clip, Slice and Granular pads.** Fidelity adds five sampler-inspired colors and seven fixed-rate crunch modes. Drive, Filter 2 and Res 2 support LFO/CV modulation. Slope 1 switches the primary filter between 12 and 24 dB/octave. Filter 2 is an independent 24 dB filter.
- **Clip timing and performance.** Loop Fade, ±100 ms Shift, Play Len from a quarter to 32 bars (or Full), Sync 1/32 and five Live Flip modes. Beat Rpt, 1/8 Rpt, 1/16 Rpt, Half Rpt and Rotate preserve transport position.
- **Reverb.** Room, Hall and Chamber join Plate. The new types add Size, Diffusion and Width. All four offer Level.
- **Master processing.** Tools → Comp exposes threshold, ratio, gain and parallel Mix. Tools → Mstr provides attack, release, enable, four distortion shapes and a bipolar sweep filter on Out 1/2.
- **Recording.** FX1 and FX2 survive recording. The selected pad’s sends process live monitoring while the input WAV stays dry.
- **MIDI input monitor.** Tools → MIDI → Monitor shows a timestamped 32-event history with Freeze/Resume, scrolling, filtering, Clear and separate Clock and Active Sensing indicators.
- **Pad fixes and navigation.** Slice honors its saved Mono setting after switching from a polyphonic Sample pad. Blank pads expose LFO/Spd and Speed at 100%. Tone remembers the selected encoder bank and returns from modulation editing to the same dial. Configuration is labeled Cnf.

## First custom release (+c / c1), included in +c4

- Vertical waveform zoom from 25–3200%, with two-finger reset to 100% amplitude and the stock horizontal zoom-out level. Long samples may still extend beyond the screen.
- An optional screen saver with selectable timeout and MIDI/CV-trigger wake.
- Pitch-preserving Sample Speed from 50–200% with LFO/CV modulation. In +c4 one eligible Sample voice can stretch while native Pitch works on every pad.
- Double-tap reset on numeric dials, preserving modulation assignments.

## Privacy

Firmware is processed entirely in your browser. No file, filename, hash or patch
result is uploaded. The patcher itself has no analytics, cookies, third-party
scripts or remote fonts. The page's Content Security Policy disables scripted
network connections and form submission, with a specific frame allowance for
the optional YouTube player. The host receives ordinary requests for website
files; following the download or optional support link visits that external site.

The overview player contacts YouTube only after **Load video player** is pressed.
It uses the youtube-nocookie.com privacy-enhanced host and sends the site origin
as its referrer. YouTube's data practices apply when loaded. The cross-origin
player receives no firmware data, and patching does not require the video.
The direct Watch on YouTube link is always available.

## Exact firmware hashes

| Image | Bytes | SHA-256 |
| --- | ---: | --- |
| Official 2.3.4 | 674,896 | `35ab7995ad0eca8484f3b28bc76389f10b2037dbb21a4a394e950d9329073e86` |
| Customized 2.3.4+c4 | 777,704 | `ce2a10e0e11a81ed8578bddfea8ad04c3c86263cf4c643075f382cb269c3431b` |

## Hosting

GitHub Pages publishes the root of `main`. Keep `.nojekyll` alongside
`index.html`. All website assets use relative URLs; no build step is needed.
For local preview, run `python3 -m http.server 8080 --bind 127.0.0.1` and open
`http://127.0.0.1:8080/`. Hosted use requires HTTPS for browser cryptography.

## From the author

Earlier builds have been tested on my own Bitbox MkII, and each release is
checked with automated firmware and patcher tests. I’m sharing it “as is,” without any warranty. You install and use it
at your own risk. To the extent permitted by applicable law, I accept no
liability for any damage to your hardware, or for loss or corruption of
projects, samples, presets or other data, arising from its installation or use.

This modification is offered free of charge, but if you find it useful, a tip
would make my day! [Buy me a coffee](https://www.buymeacoffee.com/vwal).

Independent customization. Not an official 1010music release.

[Third-party code credits and licenses](THIRD_PARTY_NOTICES.txt).

## Credits

Thanks to [semierendonmez-commits](https://github.com/semierendonmez-commits) and [bitbox-mk2-semi](https://github.com/semierendonmez-commits/bitbox-mk2-semi), and the [portkit contributors](https://github.com/kyrillleier-jpg/portkit-micro) (MIT), for code and ideas adapted here. The Fidelity/filter work draws on [blackbox-mod by Justin Joe](https://github.com/j3threejay/blackbox-mod) (MIT); the state-variable filter follows [Emilie Gillet's stmlib](https://github.com/pichenettes/stmlib) (MIT).

GEN adapts the donor sequencer, including Breakcut, Acid and Turing procedures derived from OpenTracker. [Donor license](GEN-DONOR-LICENSE.txt) · [OpenTracker license](GEN-APACHE-2.0.txt).

The original 1010music firmware is not included or licensed here. Share this patcher rather than complete patched firmware. See the full third-party notices for the imports and licenses.
