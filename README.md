# BTC Price — GNOME Shell Extension

A minimal GNOME Shell extension that displays the current Bitcoin price in your top panel, pulled from the Coinbase API and refreshed every 60 seconds.

![GNOME Shell 48](https://img.shields.io/badge/GNOME%20Shell-48-blue)

## Screenshot

<img width="320" height="180" alt="BTC price shown in the GNOME top panel" src="https://github.com/user-attachments/assets/2b7b3a7e-87cb-40c7-84fd-05580f0dad58" />

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

To apply the extension without rebooting:

- **Wayland:** log out and back in
- **X11:** press `Alt+F2`, type `r`, press `Enter`

Alternatively, search for **BTC Price** in the Extensions app.

### Manual install

Copy `extension.js` and `metadata.json` to:

```
~/.local/share/gnome-shell/extensions/btcprice@gnome/
```

Then enable it as above.

## Uninstall

```bash
gnome-extensions disable btcprice@gnome
rm -rf ~/.local/share/gnome-shell/extensions/btcprice@gnome
```

## How it works

The extension polls the [Coinbase spot price API](https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-prices) once per minute. On a network failure it retries after 5 seconds; on a Coinbase-side error it waits for the next regular tick. No third-party dependencies — only what ships with GNOME Shell.

## License

[MIT](LICENSE)
