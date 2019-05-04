import { disabled, hydrate, up } from 'trans-render/hydrate.js';
import 'trans-render/trans-render';
import { XtallatX, incAttr } from 'xtal-element/xtal-latx.js';
import { attachScriptFn } from 'xtal-element/attachScriptFn.js';
export class XtalBuffet extends HTMLElement {
}
XtalBuffet.disabled = disabled;
XtalBuffet.hydrate = hydrate;
XtalBuffet.up = up;
XtalBuffet.XtallatX = XtallatX;
XtalBuffet.incAttr = incAttr;
XtalBuffet.attachScriptFn = attachScriptFn;
