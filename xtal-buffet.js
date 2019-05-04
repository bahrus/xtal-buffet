import { disabled, hydrate, up } from 'trans-render/hydrate.js';
import 'trans-render/trans-render';
import { XtallatX, incAttr } from 'xtal-element/xtal-latx.js';
import { attachScriptFn } from 'xtal-element/attachScriptFn.js';
//import {BaseLinkId, baseLinkId} from 'xtal-element/base-link-id.js'
import { createNestedProp } from 'xtal-element/createNestedProp.js';
import { DataDecorators } from 'xtal-element/data-decorators.js';
import { debounce } from 'xtal-element/debounce.js';
export class XtalBuffet extends HTMLElement {
}
XtalBuffet.disabled = disabled;
XtalBuffet.hydrate = hydrate;
XtalBuffet.up = up;
XtalBuffet.XtallatX = XtallatX;
XtalBuffet.incAttr = incAttr;
XtalBuffet.attachScriptFn = attachScriptFn;
XtalBuffet.createdNestedProp = createNestedProp;
XtalBuffet.DataDecorators = DataDecorators;
XtalBuffet.debounce = debounce;
