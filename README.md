# Bitbox MkII browser patcher

[Open the patcher](https://vwal.github.io/bitbox-mkii-patcher/)

An unofficial customization of 1010music Bitbox MkII firmware **2.3.4** to
**2.3.4+c2**. This repository contains only the static website and a binary delta,
not the complete original or customized firmware.

[Watch the first release (+c) video overview](https://youtu.be/OjgC4UoyOIA). The page also includes
an optional player that loads only when requested. A video covering +c2 is coming soon.

## Use

1. Back up your entire microSD card, including projects, samples and presets.
2. Download official Bitbox MkII 2.3.4 using the link on the patcher and extract it.
3. Select the extracted firmware in the patcher and apply the patch.
4. Download the verified result as **BITBOXMK2.bin**. Remove any duplicate-download
   suffix such as `(1)` or `1`: the file on the SD card must have that exact name.

| Printable PDF | US Letter | A4 |
| --- | --- | --- |
| Eight-page firmware guide | [Download](bitbox-mkii-2.3.4c2-reference.pdf) | [Download](bitbox-mkii-2.3.4c2-reference-a4.pdf) |
| One-page navigation card | [Download](bitbox-mkii-2.3.4c2-quick-card.pdf) | [Download](bitbox-mkii-2.3.4c2-quick-card-a4.pdf) |

For flashing, see the [official MkII manual](https://1010music.com/wp-content/uploads/2023/03/bitbox-mk2-2.0-user-manual-2023-03-01-clean.pdf).
Copy the patched file to the card root. Power off, insert the card, hold INFO
while powering on, and release INFO when the upgrade message appears. Allow
about 30 seconds and wait for the automatic reboot. Confirm **2.3.4+c2** at the
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

## Second custom release (+c2)

- **Tone on Sample, Clip, Slice and Granular pads.** Fidelity adds five sampler-inspired colors and seven fixed-rate crunch modes. Drive, Filter 2 and Res 2 support LFO/CV modulation. Slope 1 switches the primary filter between 12 and 24 dB/octave. Filter 2 is an independent 24 dB filter.
- **Clip timing and performance.** Loop Fade, ±100 ms Shift, Play Len from a quarter to 32 bars (or Full), Sync 1/32 and five Live Flip modes. Beat Rpt, 1/8 Rpt, 1/16 Rpt, Half Rpt and Rotate preserve transport position.
- **Reverb.** Room, Hall and Chamber join Plate. The new types add Size, Diffusion and Width. All four offer Level.
- **Master processing.** Tools → Comp exposes threshold, ratio, gain and parallel Mix. Tools → Mstr provides attack, release, enable, four distortion shapes and a bipolar sweep filter on Out 1/2.
- **Recording.** FX1 and FX2 survive recording. The selected pad’s sends process live monitoring while the input WAV stays dry.
- **MIDI input monitor.** Tools → MIDI → Monitor shows a timestamped 32-event history with Freeze/Resume, scrolling, filtering, Clear and separate Clock and Active Sensing indicators.
- **Pad fixes and navigation.** Slice honors its saved Mono setting after switching from a polyphonic Sample pad. Blank pads expose LFO/Spd and Speed at 100%. Tone remembers the selected encoder bank and returns from modulation editing to the same dial. Configuration is labeled Cnf.

## First custom release (+c), included in +c2

- Vertical waveform zoom from 25–3200%, with two-finger reset and horizontal fit.
- An optional screen saver with selectable timeout and MIDI/CV-trigger wake.
- Pitch-preserving Sample Speed from 50–200% with LFO/CV modulation. Multiple native Pitch voices or one exclusive Speed voice can be active.
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
| Customized 2.3.4+c2 | 727,440 | `8bcb28eb58be54147458dcf247b8f35bb3f15932bdc6bcf027c8da128283f895` |

## Hosting

GitHub Pages publishes the root of `main`. Keep `.nojekyll` alongside
`index.html`. All website assets use relative URLs; no build step is needed.
For local preview, run `python3 -m http.server 8080 --bind 127.0.0.1` and open
`http://127.0.0.1:8080/`. Hosted use requires HTTPS for browser cryptography.

## From the author

I’ve tested this modification thoroughly, and it works as intended on my own
Bitbox MkII. I’m sharing it “as is,” without any warranty. You install and use it
at your own risk. To the extent permitted by applicable law, I accept no
liability for any damage to your hardware, or for loss or corruption of
projects, samples, presets or other data, arising from its installation or use.

This modification is offered free of charge, but if you find it useful, a tip
would make my day! [Buy me a coffee](https://www.buymeacoffee.com/vwal).

Independent customization. Not an official 1010music release.

[Third-party code credits and licenses](THIRD_PARTY_NOTICES.txt).
