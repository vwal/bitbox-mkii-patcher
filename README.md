# Bitbox MkII browser patcher

[Open the patcher](https://vwal.github.io/bitbox-mkii-patcher/)

An unofficial customization of 1010music Bitbox MkII firmware **2.3.4** to
**2.3.4+c**. This repository contains only the static website and a binary delta,
not the complete original or customized firmware.

## Use

1. Back up your entire microSD card, including projects, samples and presets.
2. Download official Bitbox MkII 2.3.4 using the link on the patcher and extract it.
3. Select the extracted firmware in the patcher and apply the patch.
4. Download the verified result as **BITBOXMK2.bin**. Remove any duplicate-download
   suffix such as `(1)` or `1`: the file on the SD card must have that exact name.

[Download the four-page feature and installation reference](bitbox-mkii-2.3.4c-reference.pdf).
It includes feature locations, renamed tabs, settings, modulation and Pitch/Speed
sharing, installation and returning to official firmware. The patcher page links
it below the four feature summaries.

For flashing, see the [official MkII manual](https://1010music.com/wp-content/uploads/2023/03/bitbox-mk2-2.0-user-manual-2023-03-01-clean.pdf).
Copy the patched file to the card root. Power off, insert the card, hold INFO
while powering on, and release INFO when the upgrade message appears. Allow
about 30 seconds and wait for the automatic reboot. Confirm **2.3.4+c** at the
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

## Added features

- Vertical waveform zoom from 25–3200%, with a two-finger reset.
- Optional screen saver and MIDI/CV-trigger wake; disabled by default.
- Pitch-preserving Sample Speed from 50–200%, with LFO/CV modulation.
  Multiple native Pitch voices or one exclusive Speed voice can run at a time.
- Double-tap dial defaults that keep modulation settings.

## Privacy

Firmware is processed entirely in your browser. No file, filename, hash or patch
result is uploaded. There are no analytics, cookies, third-party scripts or
remote fonts. The page's Content Security Policy disables network connections
and form submission. The host receives ordinary requests for website files;
following the download or optional support link visits that external site.

## Exact firmware hashes

| Image | Bytes | SHA-256 |
| --- | ---: | --- |
| Official 2.3.4 | 674,896 | `35ab7995ad0eca8484f3b28bc76389f10b2037dbb21a4a394e950d9329073e86` |
| Customized 2.3.4+c | 696,708 | `5fce58174b7b76884c0dc9b0dc5eed51975193fb3aa3fe9ed310bd8ce4f1273b` |

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
