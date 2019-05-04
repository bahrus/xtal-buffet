import {disabled, hydrate, up} from 'trans-render/hydrate.js';
import {decorate} from 'trans-render/decorate.js';
import {define} from 'trans-render/define.js';
import {mergeDeep} from 'trans-render/mergeDeep.js';
import {domMerge} from 'trans-render/domMerge.js';
import {init} from 'trans-render/init.js';
import {update} from 'trans-render/update.js';
import 'trans-render/trans-render';
import {XtallatX, incAttr} from 'xtal-element/xtal-latx.js'; 
import {attachScriptFn} from 'xtal-element/attachScriptFn.js';
//import {BaseLinkId, baseLinkId} from 'xtal-element/base-link-id.js'
import {createNestedProp} from 'xtal-element/createNestedProp.js';
import {DataDecorators} from 'xtal-element/data-decorators.js';
import {debounce} from 'xtal-element/debounce.js';
import {destruct, getScript} from 'xtal-element/destruct.js';
import {getHost} from 'xtal-element/getHost.js';

export class XtalBuffet extends HTMLElement{
    static disabled = disabled;
    static hydrate = hydrate;
    static up = up;
    static XtallatX = XtallatX;
    static incAttr = incAttr;
    static attachScriptFn = attachScriptFn;
    //3kb
    static createdNestedProp = createNestedProp;
    static DataDecorators = DataDecorators;
    static debounce = debounce;
    static destruct = destruct;
    static getScript = getScript;
    static getHost = getHost;
    //3.5 kb
    static define = define;
    static decorate = decorate;
    static mergeDeep = mergeDeep;
    static domMerge = domMerge;
    static init = init;
    static update = update;
    
}