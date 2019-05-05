import { disabled, hydrate, up } from 'trans-render/hydrate.js';
import { decorate } from 'trans-render/decorate.js';
import { define } from 'trans-render/define.js';
import { mergeDeep } from 'trans-render/mergeDeep.js';
import { domMerge } from 'trans-render/domMerge.js';
import { init } from 'trans-render/init.js';
import { update } from 'trans-render/update.js';
import { interpolate } from 'trans-render/interpolate.js';
import { repeat } from 'trans-render/repeat.js';
import { replaceTargetWithTemplate } from 'trans-render/replaceTarget.js';
import 'trans-render/trans-render';
import { insertAdjacentTemplate } from 'trans-render/insertAdjacentTemplate.js';
import { XtallatX, incAttr } from 'xtal-element/xtal-latx.js';
import { attachScriptFn } from 'xtal-element/attachScriptFn.js';
import { BaseLinkId, baseLinkId } from 'xtal-element/base-link-id.js';
import { createNestedProp } from 'xtal-element/createNestedProp.js';
import { DataDecorators } from 'xtal-element/data-decorators.js';
import { debounce } from 'xtal-element/debounce.js';
import { destruct, getScript } from 'xtal-element/destruct.js';
import { getHost } from 'xtal-element/getHost.js';
import { observeCssSelector } from 'xtal-element/observeCssSelector.js';
import { newRenderContext, createTemplate } from 'xtal-element/utils.js';
import { refract } from 'xtal-element/refract.js';
import { NavDown } from 'xtal-element/NavDown.js';
import { WithPath, with_path } from 'xtal-element/with-path.js';
export class XtalBuffet extends HTMLElement {
}
XtalBuffet.disabled = disabled;
XtalBuffet.hydrate = hydrate;
XtalBuffet.up = up;
XtalBuffet.XtallatX = XtallatX;
XtalBuffet.incAttr = incAttr;
XtalBuffet.attachScriptFn = attachScriptFn;
//3kb
XtalBuffet.createdNestedProp = createNestedProp;
XtalBuffet.DataDecorators = DataDecorators;
XtalBuffet.debounce = debounce;
XtalBuffet.destruct = destruct;
XtalBuffet.getScript = getScript;
XtalBuffet.getHost = getHost;
//3.5 kb
XtalBuffet.define = define;
XtalBuffet.decorate = decorate;
XtalBuffet.mergeDeep = mergeDeep;
XtalBuffet.domMerge = domMerge;
XtalBuffet.init = init;
XtalBuffet.update = update;
//3.6 kb
XtalBuffet.insertAdjacentTemplate = insertAdjacentTemplate;
XtalBuffet.interpolate = interpolate;
XtalBuffet.repeat = repeat;
XtalBuffet.replaceTarget = replaceTargetWithTemplate;
XtalBuffet.observeCssSelector = observeCssSelector;
XtalBuffet.newRenderContext = newRenderContext;
XtalBuffet.createTemplate = createTemplate;
//4 kb
XtalBuffet.BaseLinkId = BaseLinkId;
XtalBuffet.baseLinkId = baseLinkId;
XtalBuffet.refract = refract;
XtalBuffet.NavDown = NavDown;
XtalBuffet.WithPath = WithPath;
XtalBuffet.with_path = with_path;
