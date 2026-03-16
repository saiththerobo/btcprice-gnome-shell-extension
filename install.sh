#!/bin/bash

EXTENSION_UUID="btcprice@gnome"
INSTALL_DIR="$HOME/.local/share/gnome-shell/extensions/$EXTENSION_UUID"

echo "Installing $EXTENSION_UUID..."

mkdir -p "$INSTALL_DIR"
cp extension.js metadata.json "$INSTALL_DIR/"

echo "Done. Now enable it with:"
echo ""
echo "  gnome-extensions enable $EXTENSION_UUID"
echo ""
echo "Or search for 'BTC Price' in the Extensions app."
echo "You may need to restart GNOME Shell first (Alt+F2, type 'r', Enter) on X11,"
echo "or log out and back in on Wayland."
