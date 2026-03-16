# BTC Price — GNOME Shell Extension

A minimal GNOME Shell extension that shows the current Bitcoin price in your top panel, updated every 60 seconds.

![Panel showing ₿ $84,231](https://img.shields.io/badge/GNOME%20Shell-48-blue)

## Features

- Live BTC/USD price via the [Coinbase API](https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-prices)
- Updates every 60 seconds
- Shows `BTC: --` on network error rather than crashing
- No dependencies beyond GNOME Shell

## Screenshot

<img width="640" height="360" alt="Screenshot From 2026-03-16 17-08-41" src="https://github.com/user-attachments/assets/2b7b3a7e-87cb-40c7-84fd-05580f0dad58" />



## Requirements

- GNOME Shell 48
- Internet access

## Install

```bash
git clone https://github.com/saiththerobo/btcprice-gnome-shell-extension
cd btcprice-gnome-shell-extension
chmod +x install.sh
./install.sh
```

Then enable the extension:

```bash
gnome-extensions enable btcprice@gnome
```

**On Wayland:** log out and back in after installing.  
**On X11:** press `Alt+F2`, type `r`, press `Enter` to restart the shell.

## Manual Install

Copy `extension.js` and `metadata.json` to:

```
~/.local/share/gnome-shell/extensions/btcprice@gnome/
```

## Uninstall

```bash
gnome-extensions disable btcprice@gnome
rm -rf ~/.local/share/gnome-shell/extensions/btcprice@gnome
```
