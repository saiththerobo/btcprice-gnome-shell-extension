import St from 'gi://St';
import GLib from 'gi://GLib';
import Soup from 'gi://Soup';
import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class BtcPriceExtension extends Extension {
    enable() {
        this._label = new St.Label({
            text: 'BTC: ...',
            y_align: Clutter.ActorAlign.CENTER,
        });
        Main.panel._rightBox.insert_child_at_index(this._label, 0);
        this._session = new Soup.Session();
        this._session.timeout = 10;
        this._refresh();
        this._timeoutId = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, 60, () => {
            this._refresh();
            return GLib.SOURCE_CONTINUE;
        });
    }

    _refresh() {
        const msg = Soup.Message.new('GET', 'https://api.coinbase.com/v2/prices/BTC-USD/spot');
        this._session.send_and_read_async(msg, GLib.PRIORITY_DEFAULT, null, (session, res) => {
            try {
                const bytes = session.send_and_read_finish(res);
                const json = JSON.parse(new TextDecoder().decode(bytes.get_data()));
                const price = Math.round(parseFloat(json.data.amount)).toLocaleString('en-US');
                this._label.set_text(`₿ $${price}`);
            } catch(e) {
                this._label.set_text('BTC: --');
                log(`btcprice@gnome error: ${e}`);
            }
        });
    }

    disable() {
        if (this._timeoutId) {
            GLib.source_remove(this._timeoutId);
            this._timeoutId = null;
        }
        this._label?.destroy();
        this._label = null;
        this._session = null;
    }
}
