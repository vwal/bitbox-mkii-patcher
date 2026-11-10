# Bitbox MkII browser patcher

[Open the patcher](https://vwal.github.io/bitbox-mkii-patcher/)

An unofficial customization of 1010music Bitbox MkII firmware **2.3.4** to
**2.3.4+c8**. This repository contains only the static website and a binary delta,
not the complete original or customized firmware.

[Watch the first release (+c) video overview](https://youtu.be/OjgC4UoyOIA). The page also includes
an optional player that loads only when requested. An updated video covering the later releases is coming soon.

Released November 9, 2026. Live input effects and delay Purge; all earlier custom features and fixes are included.

## Use

1. Back up your entire microSD card, including projects, samples and presets.
2. Download official Bitbox MkII 2.3.4 using the link on the patcher and extract it.
3. Select the extracted firmware in the patcher and apply the patch.
4. Download the verified result as **BITBOXMK2.bin**. Remove any duplicate-download
   suffix such as `(1)` or `1`: the file on the SD card must have that exact name.

| Printable PDF | US Letter | A4 |
| --- | --- | --- |
| Firmware reference guide | [Download](bitbox-mkii-2.3.4c8-reference.pdf) | [Download](bitbox-mkii-2.3.4c8-reference-a4.pdf) |
| Graphical navigation card | [Download](bitbox-mkii-2.3.4c8-quick-card.pdf) | [Download](bitbox-mkii-2.3.4c8-quick-card-a4.pdf) |

For flashing, see the [official MkII manual](https://1010music.com/wp-content/uploads/2023/03/bitbox-mk2-2.0-user-manual-2023-03-01-clean.pdf).
Copy the patched file to the card root. Power off, insert the card, hold INFO
while powering on, and release INFO when the upgrade message appears. Allow
about 30 seconds and wait for the automatic reboot. Confirm **2.3.4+c8** at the
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

## New in 2.3.4+c8 — November 9, 2026

- **Persistent Input FX pad.** The global Recorder setting is ordered **Off → Follow → Pad 1–16**. Off is the default for fresh settings and Tools reset; existing saved Follow/fixed choices are preserved. Fixed keeps the input sound while browsing; Follow selects another pad’s settings when you tap it.
- **Live input Filter and Tone.** Main Filter/Resonance and Tone Fidelity, Drive, Filter 2/Res 2 and Slope 1 now process input before Dry Level and sends. No sample needs to be loaded or playing. These controls use their base values on input; normal sample modulation remains unchanged.
- **Input Dry Level.** Adjust or modulate the direct input from 100% to 0% while the FX1/FX2/FX3 sends stay independent. Shared return routes remain global.
- **Corrected live-input FX1/FX2 sends.** External audio now reaches the delay and first reverb correctly. Normal sample sends and raw In1/2 recording are unchanged.
- **FX1 Purge.** Discard the shared delay tail and feedback history from either delay page, preserving settings and fresh echoes. FX2/FX3 continue normally.
- **Memory reclaimed without removing features.** Lossless GEN table packing and selected helper optimizations make room for the input processing.
- **Empty-pad LFO control fix.** Encoders and both toggles now retain their values on empty pads, just as on loaded pads. LFO modulation still requires an active sample voice.
- **Updated references.** Dedicated “Using Bitbox Mk2 as an effect box” guide page, Off/fixed/Follow setup and routing examples. The Letter and A4 graphical quick cards include the Pads clipboard shortcut: turn the lower-right encoder for Cut / Copy / Paste / Clear.

## Using Bitbox Mk2 as an effect box

On an empty pad, press INFO for Recorder settings. Set **Rec Input: In 1/2**, **RecMon: On**, and scroll to **Input FX pad**. Its order is **Off → Follow → Pad 1–16**. Choose **Follow** to use the currently selected pad, or **Pad 1–16** to keep a fixed processing pad. Press INFO again for **Main → Filter/Resonance**, **Tone → Fidelity/Drive/Filter 2/Res 2/Slope 1**, and **Pos → Dry Level/FX sends**. No loaded sample or active recording is required.

**Off** is the default for fresh settings and Tools reset. It bypasses pad Filter/Tone, Dry Level and sends, including during a take; native Gain, RecMon and Mon Output continue normally. Existing saved Follow/fixed choices are preserved, so select Off once to disable a previously enabled setup. Input FX pad is one global choice, even when shown in each pad’s Recorder settings. With input effects enabled, the recording destination supplies monitor settings during the take; the saved selection resumes afterward.

In Follow, prepare several empty pads with different processing and levels, then tap them to switch input sounds. Save the preset to retain those pad settings. Input Tone uses base values; send and Dry Level modulation remains available. Voice-dependent sources such as LFO require an active sample voice; CV/controller sources can work without one. Ordinary In1/2 recording is unchanged.

**Routing example:** set Mon Output to **OUT 1/2**, and the shared FX1/FX2 and FX3 returns to **FX OUT 1/2**. A Follow pad with Dry 100% / sends zero gives direct input on the main pair; Dry 0% / sends raised gives wet input on the FX pair; a blend uses both pairs. Shared effect settings, Mon Output and return routes are not recalled by pad taps, and old effect tails may continue. The dedicated guide page explains the full setup and fixed/Follow behavior.

## Fixed in 2.3.4+c7 — November 8, 2026

This is a bugfix release. It retains all earlier features and includes the UI corrections previously published in +c6 revision r2.

- **Record with a stopped clock.** Rec temporarily starts the clock so a take can begin, then restores the stopped state when recording finishes. If the clock was already running, it stays running afterward.
- **Play-button hold-to-stop.** Holding the triangle Play button now stops Trigger playback from both the waveform view and all pad parameter pages.
- **Quicker Trigger Stop.** Hold a Trigger grid pad or its Play button for **two seconds** instead of three. The initial touch still plays or retriggers normally; a later tap, MIDI, CV or GEN can start it again. The Int BPM reset hold remains three seconds.
- **Consistent Clock navigation.** HOME returns to the main Menu; the on-screen Back button returns to Tools Main.
- **Correct Rec tab caption.** Tools → Rec → CV In keeps **Rec** in the bottom tab bar.
- **Restored SD-card free-space readout.** The native readout appears in the second gray header box on Tools Main and CV In.

## Previously added in 2.3.4+c6

- **Internal tempo on Main.** Set 40.0–300.0 BPM with speed-sensitive encoder adjustment: quick turns move faster, slow turns retain fine control. Hold Int BPM for three seconds to restore and save 120.0 BPM.
- **Clock transport controls.** Run resumes held musical time, Stop preserves position, and Reset returns to the beginning while keeping the running or stopped state. The buttons are green, red and native cyan-blue; HOME returns to the main Menu; Back returns to Tools Main.
- **Hold the external tempo.** When the final external clock source times out, internal playback keeps its last tempo and phase. The inherited tempo remains temporary until you explicitly edit Int BPM; reboot uses the saved tempo.
- **CV and MIDI transport.** Assign Run CV and Reset CV to Off or EXT1–4. Reset CC 0–119 with a selectable MIDI channel adds reset while running. Standard MIDI Start / Continue / Stop remains compatible; CV and CC assignments default Off.
- **GEN and recording behavior.** Stop releases GEN's held gates and cancels unfinished rolls; Continue resumes future steps. Transport commands are ignored while a recording is armed or active or the final overdub FX write is pending. Use the recorder's normal Stop first.
- **Saved pad mutes.** Set the native Mixer mutes, then Save the preset. Loading it restores the mute states. Older presets load unmuted. Copying preserves mute; clearing/unloading, replacing the WAV or recording a new take clears it. Mute edits are not saved automatically.
- **Display and navigation.** Brightness and Flip UI move to Disp, Gfx becomes a header button, and Tools Reset preserves all five Display preferences. The native SD-card free-space readout is visible in the gray header on Main and Rec → CV In.

Clock Stop does not mute all playing audio. Pitch and Sample Speed remain independent of BPM. A long hold of Int BPM resets the internal/fallback tempo, not transport or an active external clock.

## Previously added in 2.3.4+c5

- **Slicer Smooth.** Fit synced slices to their duration without changing pitch, at roughly 50–200% fitted rates. Smooth and Sample Speed share one active stretch voice. Tape remains independent; native Pitch is unrestricted.
- **Live overdubbing.** Record stereo input with a chosen backing pad or the live pads you play in Manual mode. Choose Pre, Post pad or Post+FX, with optional shared delay/reverb returns. Numbered sources start and stop with the take. Eligible forward Sample sources offer One pass.
- **Recording and resampling controls.** Leave the recorder to play or edit other pads, return with Stop and meters intact, or stop by tapping the recording destination. INFO then opens the correct destination. Input Gain / Resam Gain can be changed during the take; destination monitor sends stay attached while browsing.
- **Wet-only playback and modulation.** Pos → Dry Level adjusts each pad's direct signal from 100% to 0%, independently of its three parallel sends. Select → INFO adds modulation. Recording preserves Dry Level, send levels and their routes.
- **More efficient Sample Speed.** Reduced copying and interpolation overhead while retaining the renderer's sound. A single shared stretch slot prevents concurrent stretching; Pitch remains available everywhere.
- **Speed before the loop.** Forward-looped Samples now stretch their intro before LoopStart and continue smoothly into the loop.
- **Wider waveform overview.** Horizontal pinch zooms out four times farther than stock. The two-finger reset still restores stock horizontal zoom-out and 100% vertical amplitude. LStr / LEnd labels and fitted numeric values keep long marker positions readable.
- **Small workflow fixes.** Three-second Trigger Stop now also works on the waveform Play button. Tools reset preserves screen-saver timeout, graphics and signal-wake settings. Empty/self-referencing overdub sources show an explanation instead of exiting the recorder.

## All features and earlier releases

See [features by area](FEATURE_LISTS.md) for the complete cumulative feature set and control locations. The website groups features by function and keeps “What did each release include?” collapsed by default. [CHANGELOG](CHANGELOG.md) records all eight releases, +c (c1) through +c8.

## Privacy

Firmware is processed entirely in your browser. No file, filename, hash or patch
result is uploaded. The patcher itself has no analytics, cookies, third-party
scripts or remote fonts. The page's Content Security Policy disables scripted
network connections and form submission, with a specific frame allowance for
the optional YouTube player. The host receives ordinary requests for website
files; following an external link visits that service. External links do not receive your firmware from the patcher.

The overview player contacts YouTube only after **Load video player** is pressed.
It uses the youtube-nocookie.com privacy-enhanced host and sends the site origin
as its referrer. YouTube's data practices apply when loaded. The cross-origin
player receives no firmware data, and patching does not require the video.
The direct Watch on YouTube link is always available.

## Exact firmware hashes

| Image | Bytes | SHA-256 |
| --- | ---: | --- |
| Official 2.3.4 | 674,896 | `35ab7995ad0eca8484f3b28bc76389f10b2037dbb21a4a394e950d9329073e86` |
| Customized 2.3.4+c8 | 786,336 | `27356fc1dda4d5decc620df48879a9bfeda0666dbaeb31e850ff190d50e93312` |

## Hosting

GitHub Pages publishes the root of `main`. Keep `.nojekyll` alongside
`index.html`. All website assets use relative URLs; no build step is needed.
For local preview, run `python3 -m http.server 8080 --bind 127.0.0.1` and open
`http://127.0.0.1:8080/`. Hosted use requires HTTPS for browser cryptography.

## Community feedback

**All feedback is welcome**: questions, experiences, suggestions and bug reports. The planned feature set is complete; further updates will focus on polish and fixes.

[Join Galagzee Audio on Discord](https://discord.gg/gRsY3w4pHc) and visit **#bitbox2-custom-firmware** to share your feedback.

I’m continuing MIDI and CV testing, and reports from different setups will help identify any remaining issues. For a bug report, include the firmware version, steps to reproduce it, and what you expected versus what happened. For MIDI or CV issues, also mention the connected gear and relevant clock or transport settings.

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
