function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new s(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,v=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,f=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);n?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=o;const s=n.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const o=this.constructor,n=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??b)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:n},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==n||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,_?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.1");const $=globalThis,k=$.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+E,T=`<${A}>`,D=document,V=()=>D.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,L="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,U=/>/g,O=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,H=/"/g,N=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),W=new WeakMap,K=D.createTreeWalker(D,129);function q(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":3===e?"<math>":"",r=z;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===z?"!--"===l[1]?r=I:void 0!==l[1]?r=U:void 0!==l[2]?(N.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=n??z,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?H:j):r===H||r===j?r=O:r===I||r===U?r=z:(r=O,n=void 0);const p=r===O&&t[e+1].startsWith("/>")?" ":"";s+=r===z?i+T:c>=0?(o.push(a),i.slice(0,c)+C+i.slice(c)+E+p):i+E+(-2===c?e:p)}return[q(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=c[s++],i=o.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:X}),o.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(N.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],V()),K.nextNode(),a.push({type:2,index:++n});o.append(t[e],V())}}}else if(8===o.nodeType)if(o.data===A)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const i=D.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,o){if(e===B)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const s=P(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,o)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??D).importNode(e,!0);K.currentNode=o;let n=K.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ot(n,this,t)),this._$AV.push(e),a=i[++r]}s!==a?.index&&(n=K.nextNode(),s++)}return K.currentNode=D,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Z(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new G(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Q(this.O(V()),this.O(V()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=J(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=J(this,o[i+r],e,r),a===B&&(a=this._$AH[r]),s||=!P(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends X{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??F)===B)return;const i=this._$AH,o=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==F&&(i===F||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(G,Q),($.litHtmlVersions??=[]).push("3.3.1");const st=globalThis;class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new Q(e.insertBefore(V(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const at=st.litElementPolyfillSupport;at?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.1");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b},dt=(t=ct,e,i)=>{const{kind:o,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];e.call(this,i),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return pt({...t,state:!0,attribute:!1})}const ut=r`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 0 16px;
  }

  .card-header .title {
    font-size: 1.2em;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .card-header .count {
    font-size: 0.9em;
    color: var(--secondary-text-color);
    background: var(--primary-color);
    color: var(--text-primary-color);
    padding: 2px 8px;
    border-radius: 12px;
  }

  .events-container {
    padding: 8px 0;
  }

  .no-events {
    padding: 32px 16px;
    text-align: center;
    color: var(--secondary-text-color);
  }

  .no-events ha-icon {
    --mdc-icon-size: 48px;
    opacity: 0.5;
    margin-bottom: 8px;
  }

  /* Sport group header */
  .sport-group {
    margin-bottom: 8px;
  }

  .sport-group-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--primary-background-color);
    border-bottom: 1px solid var(--divider-color);
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .sport-group-header ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
  }

  /* Event item */
  .event-item {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 12px;
    border-bottom: 1px solid var(--divider-color);
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  .event-item:hover {
    background: var(--secondary-background-color);
  }

  .event-item:active {
    transform: scale(0.99);
  }

  .event-item:last-child {
    border-bottom: none;
  }

  .event-item.live {
    background: rgba(var(--rgb-red), 0.05);
    border-left: 3px solid var(--error-color, #db4437);
  }

  .event-item.starting-soon {
    background: rgba(var(--rgb-orange), 0.05);
    border-left: 3px solid var(--warning-color, #ff9800);
  }

  .event-item.compact {
    padding: 8px 16px;
  }

  /* Fade in animation for new events */
  .event-item.new {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Time column */
  .event-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50px;
    flex-shrink: 0;
  }

  .event-time .time {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .event-time .date {
    font-size: 0.75em;
    color: var(--secondary-text-color);
  }

  .event-time .live-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    padding: 2px 6px;
    background: var(--error-color, #db4437);
    color: white;
    border-radius: 4px;
    font-size: 0.7em;
    font-weight: 600;
    text-transform: uppercase;
    animation: pulse 2s infinite;
  }

  .event-time .soon-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    padding: 2px 6px;
    background: var(--warning-color, #ff9800);
    color: white;
    border-radius: 4px;
    font-size: 0.7em;
    font-weight: 600;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  .live-badge ha-icon,
  .soon-badge ha-icon {
    --mdc-icon-size: 12px;
  }

  /* Sport icon column */
  .event-sport-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--primary-color);
    color: var(--text-primary-color);
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  .event-item:hover .event-sport-icon {
    transform: scale(1.1);
  }

  .event-sport-icon ha-icon {
    --mdc-icon-size: 20px;
  }

  .event-sport-icon.live {
    background: var(--error-color, #db4437);
    animation: pulse-bg 2s infinite;
  }

  @keyframes pulse-bg {
    0%, 100% { box-shadow: 0 0 0 0 rgba(219, 68, 55, 0.4); }
    50% { box-shadow: 0 0 0 8px rgba(219, 68, 55, 0); }
  }

  /* Event details */
  .event-details {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .event-title {
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }

  .event-meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .event-meta-item ha-icon {
    --mdc-icon-size: 14px;
    opacity: 0.7;
  }

  .event-league {
    padding: 1px 6px;
    background: var(--divider-color);
    border-radius: 4px;
    font-size: 0.8em;
  }

  /* Channel column */
  .event-channel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
    max-width: 100px;
  }

  .event-channel .channel-name {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .event-channel .channel-logo {
    max-height: 24px;
    max-width: 60px;
    object-fit: contain;
    border-radius: 4px;
  }

  /* Compact mode adjustments */
  .compact .event-sport-icon {
    width: 28px;
    height: 28px;
  }

  .compact .event-sport-icon ha-icon {
    --mdc-icon-size: 16px;
  }

  .compact .event-title {
    font-size: 0.9em;
  }

  .compact .event-meta {
    font-size: 0.8em;
  }

  /* Loading state */
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
  }

  /* Error state */
  .error {
    padding: 16px;
    color: var(--error-color);
    text-align: center;
  }

  .error ha-icon {
    --mdc-icon-size: 24px;
    margin-bottom: 8px;
  }

  /* ==================== */
  /* POPUP / DIALOG STYLES */
  /* ==================== */

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }

  .popup-overlay.open {
    opacity: 1;
    visibility: visible;
  }

  .popup-content {
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: 16px;
    max-width: 400px;
    width: 90%;
    max-height: 80vh;
    overflow: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transform: scale(0.9);
    transition: transform 0.2s ease;
  }

  .popup-overlay.open .popup-content {
    transform: scale(1);
  }

  .popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid var(--divider-color);
  }

  .popup-header .sport-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-radius: 20px;
    font-weight: 500;
  }

  .popup-header .sport-badge.live {
    background: var(--error-color, #db4437);
  }

  .popup-header .sport-badge ha-icon {
    --mdc-icon-size: 18px;
  }

  .popup-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--secondary-background-color);
    border: none;
    cursor: pointer;
    color: var(--primary-text-color);
    transition: background-color 0.2s ease;
  }

  .popup-close:hover {
    background: var(--divider-color);
  }

  .popup-close ha-icon {
    --mdc-icon-size: 20px;
  }

  .popup-body {
    padding: 16px;
  }

  .popup-title {
    font-size: 1.4em;
    font-weight: 600;
    color: var(--primary-text-color);
    margin-bottom: 16px;
    line-height: 1.3;
  }

  /* Teams in popup */
  .popup-teams {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    padding: 16px;
    background: var(--secondary-background-color);
    border-radius: 12px;
  }

  .popup-team {
    flex: 1;
    text-align: center;
  }

  .popup-team-logo {
    width: 64px;
    height: 64px;
    margin-bottom: 8px;
    object-fit: contain;
  }

  .popup-team-name {
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .popup-vs {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--secondary-text-color);
  }

  /* Info rows */
  .popup-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .popup-info-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: var(--secondary-background-color);
    border-radius: 8px;
  }

  .popup-info-row ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
    flex-shrink: 0;
  }

  .popup-info-row .label {
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }

  .popup-info-row .value {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Countdown in popup */
  .popup-countdown {
    text-align: center;
    padding: 20px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-radius: 12px;
    margin-top: 16px;
  }

  .popup-countdown.live {
    background: var(--error-color, #db4437);
  }

  .popup-countdown-label {
    font-size: 0.85em;
    opacity: 0.9;
    margin-bottom: 4px;
  }

  .popup-countdown-value {
    font-size: 1.8em;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }

  /* Update indicator */
  .update-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--secondary-background-color);
    border-top: 1px solid var(--divider-color);
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }

  .update-indicator ha-icon {
    --mdc-icon-size: 14px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .update-indicator.idle ha-icon {
    animation: none;
  }

  /* Last updated footer */
  .last-updated {
    padding: 8px 16px;
    text-align: center;
    font-size: 0.75em;
    color: var(--secondary-text-color);
    border-top: 1px solid var(--divider-color);
  }
`,gt={football:"mdi:soccer",hockey:"mdi:hockey-puck",basketball:"mdi:basketball",tennis:"mdi:tennis",golf:"mdi:golf",handball:"mdi:handball",motorsport:"mdi:racing-helmet",cycling:"mdi:bike",skiing:"mdi:ski",biathlon:"mdi:target",alpine:"mdi:ski",athletics:"mdi:run",swimming:"mdi:swim",boxing:"mdi:boxing-glove",mma:"mdi:karate",american_football:"mdi:football",baseball:"mdi:baseball",volleyball:"mdi:volleyball",table_tennis:"mdi:table-tennis",badminton:"mdi:badminton",rugby:"mdi:rugby",horse_racing:"mdi:horse",snooker:"mdi:billiards",darts:"mdi:bullseye-arrow",padel:"mdi:tennis",floorball:"mdi:hockey-sticks",bandy:"mdi:hockey-sticks",curling:"mdi:curling",esports:"mdi:controller",sailing:"mdi:sail-boat",winter_sports:"mdi:snowflake",other:"mdi:trophy"},mt={football:"Fotboll",hockey:"Ishockey",basketball:"Basket",tennis:"Tennis",golf:"Golf",handball:"Handboll",motorsport:"Motorsport",cycling:"Cykling",skiing:"Skidor",biathlon:"Skidskytte",alpine:"Alpint",athletics:"Friidrott",swimming:"Simning",boxing:"Boxning",mma:"MMA",american_football:"Amerikansk fotboll",baseball:"Baseball",volleyball:"Volleyboll",table_tennis:"Bordtennis",badminton:"Badminton",rugby:"Rugby",horse_racing:"Trav/Galopp",snooker:"Snooker/Biljard",darts:"Dart",padel:"Padel",floorball:"Innebandy",bandy:"Bandy",curling:"Curling",esports:"E-sport",sailing:"Segling",winter_sports:"Vintersport",other:"Övrigt"},vt={SVT1:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SVT1_logo_2016.svg/200px-SVT1_logo_2016.svg.png",SVT2:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/SVT2_logo_2016.svg/200px-SVT2_logo_2016.svg.png",SVT:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SVT_Logo_2006.svg/200px-SVT_Logo_2006.svg.png",TV4:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/TV4_logo_2023.svg/200px-TV4_logo_2023.svg.png","TV4 Sport":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/TV4_Sport_logo.svg/200px-TV4_Sport_logo.svg.png","TV4+":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/TV4_Plus_logo.svg/200px-TV4_Plus_logo.svg.png","V Sport":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png","V Sport 1":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png","V Sport 2":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png","V Sport Premium":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png","V Sport Hockey":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png","V Sport Fotboll":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png","Viasat Sport":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/V_Sport_logo.svg/200px-V_Sport_logo.svg.png",Viaplay:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Viaplay_logo.svg/200px-Viaplay_logo.svg.png","C More":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png","C More Live":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png","C More Fotboll":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png","C More Hockey":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png","C More Sport":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/C_More_logo.svg/200px-C_More_logo.svg.png",Eurosport:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eurosport_Logo_2015.svg/200px-Eurosport_Logo_2015.svg.png","Eurosport 1":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eurosport_Logo_2015.svg/200px-Eurosport_Logo_2015.svg.png","Eurosport 2":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eurosport_Logo_2015.svg/200px-Eurosport_Logo_2015.svg.png","Discovery+":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Discovery%2B_logo.svg/200px-Discovery%2B_logo.svg.png",Max:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/200px-Max_logo.svg.png",TV3:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/TV3_Sweden_logo.svg/200px-TV3_Sweden_logo.svg.png",TV6:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/TV6_Sweden_logo.svg/200px-TV6_Sweden_logo.svg.png","Kanal 5":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kanal_5_Sweden_logo.svg/200px-Kanal_5_Sweden_logo.svg.png","Kanal 9":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kanal_9_Sweden_logo.svg/200px-Kanal_9_Sweden_logo.svg.png",Sportkanalen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SVT_Logo_2006.svg/200px-SVT_Logo_2006.svg.png"};console.info("%c SPORTSYNC-CARD %c 1.1.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");let _t=class extends rt{constructor(){super(...arguments),this._selectedEvent=null,this._popupCountdown="",this._currentTime=new Date}setConfig(t){if(!t.entity)throw new Error("Du måste ange en entity");this._config={show_live_indicator:!0,show_channel_logo:!0,show_sport_icon:!0,max_events:20,group_by_sport:!1,hide_past_events:!0,compact_mode:!1,show_starting_soon:!0,starting_soon_minutes:15,show_last_updated:!1,...t}}getCardSize(){return 3}static getConfigElement(){return document.createElement("sportsync-card-editor")}static getStubConfig(){return{entity:"sensor.sportsync_alla_sandningar",title:"Sport på TV",show_live_indicator:!0,show_sport_icon:!0,max_events:10}}connectedCallback(){super.connectedCallback(),this._timeInterval=window.setInterval(()=>{this._currentTime=new Date},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._stopPopupCountdown(),this._timeInterval&&clearInterval(this._timeInterval)}shouldUpdate(t){if(t.has("_config")||t.has("_selectedEvent")||t.has("_popupCountdown")||t.has("_currentTime"))return!0;if(this.hass&&this._config?.entity){const e=t.get("hass");if(e)return e.states[this._config.entity]!==this.hass.states[this._config.entity]}return!0}render(){if(!this._config||!this.hass)return R``;const t=this.hass.states[this._config.entity];if(!t)return R`
        <ha-card>
          <div class="error">
            <ha-icon icon="mdi:alert-circle"></ha-icon>
            <div>Entity hittades inte: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;const e=this._getEvents(t),i=this._config.title??this._getDefaultTitle(t),o=t.attributes.last_update;return R`
      <ha-card>
        ${this._renderHeader(i,e.length)}
        <div class="events-container ${this._config.compact_mode?"compact":""}">
          ${0===e.length?this._renderNoEvents():this._config.group_by_sport?this._renderGroupedEvents(e):this._renderEventsList(e)}
        </div>
        ${this._config.show_last_updated&&o?this._renderLastUpdated(o):F}
        ${this._renderPopup()}
      </ha-card>
    `}_renderHeader(t,e){return R`
      <div class="card-header">
        <span class="title">${t}</span>
        <span class="count">${e}</span>
      </div>
    `}_renderNoEvents(){return R`
      <div class="no-events">
        <ha-icon icon="mdi:television-off"></ha-icon>
        <div>Inga sändningar</div>
      </div>
    `}_renderLastUpdated(t){const e=new Date(t).toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"});return R`
      <div class="last-updated">
        Uppdaterad ${e}
      </div>
    `}_renderGroupedEvents(t){const e=this._groupEventsBySport(t);return R`
      ${Object.entries(e).map(([t,e])=>R`
          <div class="sport-group">
            <div class="sport-group-header">
              <ha-icon icon="${gt[t]||gt.other}"></ha-icon>
              <span>${mt[t]||t}</span>
              <span>(${e.length})</span>
            </div>
            ${e.map(t=>this._renderEventItem(t))}
          </div>
        `)}
    `}_renderEventsList(t){return R`${t.map(t=>this._renderEventItem(t))}`}_renderEventItem(t){const e=new Date(t.start_time),i=t.is_live||this._isCurrentlyLive(t),o=(e.getTime()-this._currentTime.getTime())/6e4,n=!i&&o>0&&o<=(this._config.starting_soon_minutes||15),s=this._config.show_sport_icon,r=this._getChannelLogo(t.channel);let a="event-item";return i?a+=" live":n&&this._config.show_starting_soon&&(a+=" starting-soon"),this._config.compact_mode&&(a+=" compact"),R`
      <div
        class="${a}"
        @click=${()=>this._openPopup(t)}
      >
        <div class="event-time">
          <span class="time">${this._formatTime(e)}</span>
          ${this._isToday(e)?F:R`<span class="date">${this._formatDate(e)}</span>`}
          ${i&&this._config.show_live_indicator?R`
                <span class="live-badge">
                  <ha-icon icon="mdi:broadcast"></ha-icon>
                  Live
                </span>
              `:n&&this._config.show_starting_soon?R`
                <span class="soon-badge">
                  <ha-icon icon="mdi:clock-alert"></ha-icon>
                  ${Math.round(o)}m
                </span>
              `:F}
        </div>

        ${s?R`
              <div class="event-sport-icon ${i?"live":""}">
                <ha-icon
                  icon="${gt[t.sport]||gt.other}"
                ></ha-icon>
              </div>
            `:F}

        <div class="event-details">
          <div class="event-title">${t.title}</div>
          <div class="event-meta">
            ${t.league?R`<span class="event-league">${t.league}</span>`:F}
            ${!s&&t.sport?R`
                  <span class="event-meta-item">
                    <ha-icon
                      icon="${gt[t.sport]||gt.other}"
                    ></ha-icon>
                    ${mt[t.sport]||t.sport}
                  </span>
                `:F}
          </div>
        </div>

        <div class="event-channel">
          ${this._config.show_channel_logo&&r?R`<img class="channel-logo" src="${r}" alt="${t.channel}" />`:R`<span class="channel-name">${t.channel}</span>`}
        </div>
      </div>
    `}_renderPopup(){const t=this._selectedEvent;if(!t)return R`<div class="popup-overlay" @click=${this._closePopup}></div>`;const e=t.is_live||this._isCurrentlyLive(t),i=new Date(t.start_time),o=t.end_time?new Date(t.end_time):null,n=this._getChannelLogo(t.channel);return R`
      <div class="popup-overlay open" @click=${this._closePopup}>
        <div class="popup-content" @click=${t=>t.stopPropagation()}>
          <div class="popup-header">
            <div class="sport-badge ${e?"live":""}">
              <ha-icon icon="${gt[t.sport]||gt.other}"></ha-icon>
              ${e?"LIVE":mt[t.sport]||t.sport}
            </div>
            <button class="popup-close" @click=${this._closePopup}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>

          <div class="popup-body">
            ${t.home_team&&t.away_team?this._renderPopupTeams(t):R`<div class="popup-title">${t.title}</div>`}

            <div class="popup-info">
              <div class="popup-info-row">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                <div>
                  <div class="label">Starttid</div>
                  <div class="value">${this._formatFullDateTime(i)}</div>
                </div>
              </div>

              ${o?R`
                    <div class="popup-info-row">
                      <ha-icon icon="mdi:clock-check-outline"></ha-icon>
                      <div>
                        <div class="label">Sluttid</div>
                        <div class="value">${this._formatFullDateTime(o)}</div>
                      </div>
                    </div>
                  `:F}

              <div class="popup-info-row">
                <ha-icon icon="mdi:television"></ha-icon>
                <div>
                  <div class="label">Kanal</div>
                  <div class="value">
                    ${n?R`<img src="${n}" alt="${t.channel}" style="height: 20px; vertical-align: middle; margin-right: 8px;" />`:F}
                    ${t.channel}
                  </div>
                </div>
              </div>

              ${t.league?R`
                    <div class="popup-info-row">
                      <ha-icon icon="mdi:trophy"></ha-icon>
                      <div>
                        <div class="label">Tävling</div>
                        <div class="value">${t.league}</div>
                      </div>
                    </div>
                  `:F}

              <div class="popup-info-row">
                <ha-icon icon="mdi:source-branch"></ha-icon>
                <div>
                  <div class="label">Källa</div>
                  <div class="value">${t.source}</div>
                </div>
              </div>
            </div>

            ${this._renderPopupCountdown(e,i)}
          </div>
        </div>
      </div>
    `}_renderPopupTeams(t){return R`
      <div class="popup-teams">
        <div class="popup-team">
          <div class="popup-team-name">${t.home_team}</div>
        </div>
        <div class="popup-vs">vs</div>
        <div class="popup-team">
          <div class="popup-team-name">${t.away_team}</div>
        </div>
      </div>
    `}_renderPopupCountdown(t,e){if(t)return R`
        <div class="popup-countdown live">
          <div class="popup-countdown-label">Status</div>
          <div class="popup-countdown-value">PÅGÅR NU</div>
        </div>
      `;return e<=new Date?R``:R`
      <div class="popup-countdown">
        <div class="popup-countdown-label">Börjar om</div>
        <div class="popup-countdown-value">${this._popupCountdown||"..."}</div>
      </div>
    `}_openPopup(t){this._selectedEvent=t,this._startPopupCountdown()}_closePopup(){this._selectedEvent=null,this._stopPopupCountdown()}_startPopupCountdown(){this._updatePopupCountdown(),this._popupInterval=window.setInterval(()=>{this._updatePopupCountdown()},1e3)}_stopPopupCountdown(){this._popupInterval&&(clearInterval(this._popupInterval),this._popupInterval=void 0)}_updatePopupCountdown(){if(!this._selectedEvent)return;const t=new Date,e=new Date(this._selectedEvent.start_time).getTime()-t.getTime();if(e<=0)return void(this._popupCountdown="Nu");const i=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),n=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3);this._popupCountdown=i>0?`${i}d ${o}h ${n}m`:o>0?`${o}h ${n}m ${s}s`:n>0?`${n}m ${s}s`:`${s}s`}_getEvents(t){let e=[...t.attributes.events||[]];if(this._config.hide_past_events){const t=new Date;e=e.filter(e=>{const i=e.end_time?new Date(e.end_time):null,o=new Date(e.start_time);if(e.is_live)return!0;if(i&&i>t)return!0;if(!i){return o>new Date(t.getTime()-72e5)}return!1})}return e.sort((t,e)=>new Date(t.start_time).getTime()-new Date(e.start_time).getTime()),this._config.max_events&&this._config.max_events>0&&(e=e.slice(0,this._config.max_events)),e}_groupEventsBySport(t){return t.reduce((t,e)=>{const i=e.sport||"other";return t[i]||(t[i]=[]),t[i].push(e),t},{})}_getDefaultTitle(t){return t.attributes.friendly_name||"Sport på TV"}_getChannelLogo(t){const e=t.toLowerCase().replace(/\s+/g,"");for(const[t,i]of Object.entries(vt))if(t.toLowerCase().replace(/\s+/g,"")===e)return i;for(const[t,i]of Object.entries(vt))if(e.includes(t.toLowerCase().replace(/\s+/g,""))||t.toLowerCase().replace(/\s+/g,"").includes(e))return i;return null}_formatTime(t){return t.toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})}_formatDate(t){const e=new Date,i=new Date(e);return i.setDate(i.getDate()+1),this._isSameDay(t,e)?"Idag":this._isSameDay(t,i)?"Imorgon":t.toLocaleDateString("sv-SE",{weekday:"short",day:"numeric",month:"short"})}_formatFullDateTime(t){const e=new Date,i=new Date(e);let o;i.setDate(i.getDate()+1),o=this._isSameDay(t,e)?"Idag":this._isSameDay(t,i)?"Imorgon":t.toLocaleDateString("sv-SE",{weekday:"long",day:"numeric",month:"long"});return`${o} kl. ${t.toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})}`}_isToday(t){return this._isSameDay(t,new Date)}_isSameDay(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}_isCurrentlyLive(t){const e=new Date,i=new Date(t.start_time),o=t.end_time?new Date(t.end_time):null;if(i>e)return!1;if(o)return e<=o;return e<=new Date(i.getTime()+72e5)}};_t.styles=ut,t([pt({attribute:!1})],_t.prototype,"hass",void 0),t([ht()],_t.prototype,"_config",void 0),t([ht()],_t.prototype,"_selectedEvent",void 0),t([ht()],_t.prototype,"_popupCountdown",void 0),t([ht()],_t.prototype,"_currentTime",void 0),_t=t([lt("sportsync-card")],_t);let ft=class extends rt{setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return R``;const t=Object.keys(this.hass.states).filter(t=>t.startsWith("sensor.sportsync")).sort();return R`
      <div class="card-config">
        <ha-select
          label="Entity"
          .value=${this._config.entity}
          @selected=${this._valueChanged}
          .configValue=${"entity"}
        >
          ${t.map(t=>R`
              <mwc-list-item .value=${t}>
                ${this.hass.states[t]?.attributes.friendly_name||t}
              </mwc-list-item>
            `)}
        </ha-select>

        <ha-textfield
          label="Titel (valfritt)"
          .value=${this._config.title||""}
          @input=${this._valueChanged}
          .configValue=${"title"}
        ></ha-textfield>

        <ha-textfield
          label="Max antal events"
          type="number"
          .value=${String(this._config.max_events||20)}
          @input=${this._valueChanged}
          .configValue=${"max_events"}
        ></ha-textfield>

        <ha-textfield
          label="Minuter för 'börjar snart'"
          type="number"
          .value=${String(this._config.starting_soon_minutes||15)}
          @input=${this._valueChanged}
          .configValue=${"starting_soon_minutes"}
        ></ha-textfield>

        <ha-formfield label="Visa live-indikator">
          <ha-switch
            .checked=${!1!==this._config.show_live_indicator}
            @change=${this._valueChanged}
            .configValue=${"show_live_indicator"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa 'börjar snart'-varning">
          <ha-switch
            .checked=${!1!==this._config.show_starting_soon}
            @change=${this._valueChanged}
            .configValue=${"show_starting_soon"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa sportikon">
          <ha-switch
            .checked=${!1!==this._config.show_sport_icon}
            @change=${this._valueChanged}
            .configValue=${"show_sport_icon"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa kanallogga">
          <ha-switch
            .checked=${!1!==this._config.show_channel_logo}
            @change=${this._valueChanged}
            .configValue=${"show_channel_logo"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Gruppera efter sport">
          <ha-switch
            .checked=${!0===this._config.group_by_sport}
            @change=${this._valueChanged}
            .configValue=${"group_by_sport"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Dölj passerade events">
          <ha-switch
            .checked=${!1!==this._config.hide_past_events}
            @change=${this._valueChanged}
            .configValue=${"hide_past_events"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Kompakt läge">
          <ha-switch
            .checked=${!0===this._config.compact_mode}
            @change=${this._valueChanged}
            .configValue=${"compact_mode"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa senast uppdaterad">
          <ha-switch
            .checked=${!0===this._config.show_last_updated}
            @change=${this._valueChanged}
            .configValue=${"show_last_updated"}
          ></ha-switch>
        </ha-formfield>
      </div>
    `}_valueChanged(t){const e=t.target;if(!this._config||!e.configValue)return;let i=e.value;"number"===e.type?i=Number(i):"HA-SWITCH"===e.tagName&&(i=e.checked);const o={...this._config,[e.configValue]:i},n=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(n)}};ft.styles=r`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    ha-select,
    ha-textfield {
      width: 100%;
    }

    ha-formfield {
      display: flex;
      height: 48px;
      align-items: center;
    }
  `,t([pt({attribute:!1})],ft.prototype,"hass",void 0),t([ht()],ft.prototype,"_config",void 0),ft=t([lt("sportsync-card-editor")],ft),window.customCards=window.customCards||[],window.customCards.push({type:"sportsync-card",name:"SportSync Card",description:"Visar sport-TV-tablå från SportSync",preview:!0,documentationURL:"https://github.com/your-repo/sportsync-card"});let wt=class extends rt{constructor(){super(...arguments),this._countdown=""}setConfig(t){if(!t.entity)throw new Error("Du måste ange en entity");this._config={show_countdown:!0,show_channel:!0,show_league:!0,...t}}getCardSize(){return 3}static getConfigElement(){return document.createElement("sportsync-next-card-editor")}static getStubConfig(){return{entity:"sensor.sportsync_favoriter",title:"Nästa match",show_countdown:!0}}connectedCallback(){super.connectedCallback(),this._startCountdown()}disconnectedCallback(){super.disconnectedCallback(),this._stopCountdown()}_startCountdown(){this._updateCountdown(),this._countdownInterval=window.setInterval(()=>{this._updateCountdown()},1e3)}_stopCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=void 0)}_updateCountdown(){const t=this._getNextEvent();if(!t)return void(this._countdown="");const e=new Date,i=new Date(t.start_time).getTime()-e.getTime();if(i<=0)return void(this._isCurrentlyLive(t)?this._countdown="LIVE":this._countdown="");const o=Math.floor(i/864e5),n=Math.floor(i%864e5/36e5),s=Math.floor(i%36e5/6e4),r=Math.floor(i%6e4/1e3);this._countdown=o>0?`${o}d ${n}h ${s}m`:n>0?`${n}h ${s}m ${r}s`:s>0?`${s}m ${r}s`:`${r}s`}shouldUpdate(t){if(t.has("_config")||t.has("_countdown"))return!0;if(this.hass&&this._config?.entity){const e=t.get("hass");if(e)return e.states[this._config.entity]!==this.hass.states[this._config.entity]}return!0}render(){if(!this._config||!this.hass)return R``;if(!this.hass.states[this._config.entity])return R`
        <ha-card>
          <div class="card-content">
            <div class="no-event">
              <ha-icon icon="mdi:alert-circle"></ha-icon>
              <div>Entity hittades inte</div>
            </div>
          </div>
        </ha-card>
      `;const t=this._getNextEvent();if(!t)return R`
        <ha-card>
          <div class="card-content">
            <div class="no-event">
              <ha-icon icon="mdi:calendar-blank"></ha-icon>
              <div>Inga kommande matcher</div>
            </div>
          </div>
        </ha-card>
      `;const e=t.is_live||this._isCurrentlyLive(t),i=new Date(t.start_time),o=(i.getTime()-Date.now())/6e4;return R`
      <ha-card>
        <div class="card-content">
          ${this._renderHeader(t,e)}
          ${t.home_team&&t.away_team?this._renderTeamsDisplay(t):this._renderTitle(t)}
          ${this._renderMeta(t)}
          ${this._config.show_countdown?this._renderCountdown(e,i):F}
          ${this._renderStartingSoon(o,e)}
        </div>
      </ha-card>
    `}_renderHeader(t,e){const i=this._config.title||"Nästa match",o=mt[t.sport]||t.sport,n=gt[t.sport]||gt.other;return R`
      <div class="event-header">
        <div class="sport-icon ${e?"live":""}">
          <ha-icon icon="${n}"></ha-icon>
        </div>
        <div class="header-text">
          <div class="header-title">${i}</div>
          <div class="header-sport">${o}</div>
        </div>
      </div>
    `}_renderTitle(t){return R`<div class="event-title">${t.title}</div>`}_renderTeamsDisplay(t){return R`
      <div class="teams-display">
        <div class="team">
          <div class="team-name">${t.home_team}</div>
        </div>
        <div class="vs-divider">vs</div>
        <div class="team">
          <div class="team-name">${t.away_team}</div>
        </div>
      </div>
    `}_renderMeta(t){return R`
      <div class="event-meta">
        ${t.league&&this._config.show_league?R`<span class="league-badge">${t.league}</span>`:F}
        ${this._config.show_channel?R`
              <span class="meta-item">
                <ha-icon icon="mdi:television"></ha-icon>
                ${t.channel}
              </span>
            `:F}
      </div>
    `}_renderCountdown(t,e){const i=new Date,o=(e.getTime()-i.getTime())/6e4;let n="";return t||"LIVE"===this._countdown?n="live":o<=5?n="very-soon":o<=30&&(n="soon"),R`
      <div class="countdown-section">
        <div class="countdown-label">
          ${t||"LIVE"===this._countdown?"Status":"Börjar om"}
        </div>
        <div class="countdown-value ${n}">
          ${t||"LIVE"===this._countdown?R`<ha-icon icon="mdi:broadcast"></ha-icon> LIVE NU`:this._countdown}
        </div>
        ${t||"LIVE"===this._countdown?F:R`
              <div class="time-info">
                ${this._formatDateTime(e)}
              </div>
            `}
      </div>
    `}_renderStartingSoon(t,e){if(e||t>15||t<0)return F;const i=t<=5;return R`
      <div class="starting-soon ${i?"imminent":""}">
        <ha-icon icon="mdi:alert"></ha-icon>
        ${i?"Börjar strax!":"Börjar snart!"}
      </div>
    `}_getNextEvent(){if(!this.hass||!this._config?.entity)return null;const t=this.hass.states[this._config.entity];if(!t)return null;const e=t.attributes.events||[],i=new Date,o=e.filter(t=>{const e=new Date(t.start_time),o=t.end_time?new Date(t.end_time):null;if(t.is_live)return!0;if(o&&o>i)return!0;if(e>i)return!0;if(!o){return e>new Date(i.getTime()-72e5)}return!1}).sort((t,e)=>{const i=t.is_live||this._isCurrentlyLive(t),o=e.is_live||this._isCurrentlyLive(e);return i&&!o?-1:!i&&o?1:new Date(t.start_time).getTime()-new Date(e.start_time).getTime()});return o[0]||null}_isCurrentlyLive(t){const e=new Date,i=new Date(t.start_time),o=t.end_time?new Date(t.end_time):null;if(i>e)return!1;if(o)return e<=o;return e<=new Date(i.getTime()+72e5)}_formatDateTime(t){const e=new Date,i=new Date(e);let o;i.setDate(i.getDate()+1),o=this._isSameDay(t,e)?"Idag":this._isSameDay(t,i)?"Imorgon":t.toLocaleDateString("sv-SE",{weekday:"long",day:"numeric",month:"long"});return`${o} kl. ${t.toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})}`}_isSameDay(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}};wt.styles=r`
    :host {
      display: block;
    }

    ha-card {
      overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, white));
    }

    .card-content {
      padding: 16px;
    }

    .no-event {
      text-align: center;
      padding: 24px 16px;
      color: var(--secondary-text-color);
    }

    .no-event ha-icon {
      --mdc-icon-size: 48px;
      opacity: 0.5;
      margin-bottom: 8px;
    }

    /* Header with sport icon */
    .event-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .sport-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary-color);
      color: var(--text-primary-color);
      flex-shrink: 0;
    }

    .sport-icon ha-icon {
      --mdc-icon-size: 28px;
    }

    .sport-icon.live {
      background: var(--error-color, #db4437);
      animation: pulse-bg 2s infinite;
    }

    @keyframes pulse-bg {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }

    .header-text {
      flex: 1;
      min-width: 0;
    }

    .header-title {
      font-size: 0.85em;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .header-sport {
      font-size: 1.1em;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    /* Main event info */
    .event-title {
      font-size: 1.3em;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .event-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
      font-size: 0.9em;
      color: var(--secondary-text-color);
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .meta-item ha-icon {
      --mdc-icon-size: 16px;
      opacity: 0.7;
    }

    .league-badge {
      padding: 2px 8px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 4px;
      font-size: 0.85em;
      font-weight: 500;
    }

    /* Countdown section */
    .countdown-section {
      background: var(--secondary-background-color);
      border-radius: 12px;
      padding: 16px;
      text-align: center;
    }

    .countdown-label {
      font-size: 0.8em;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .countdown-value {
      font-size: 2em;
      font-weight: 700;
      color: var(--primary-text-color);
      font-variant-numeric: tabular-nums;
    }

    .countdown-value.soon {
      color: var(--warning-color, #ff9800);
    }

    .countdown-value.very-soon {
      color: var(--error-color, #db4437);
      animation: pulse-text 1s infinite;
    }

    @keyframes pulse-text {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .countdown-value.live {
      color: var(--error-color, #db4437);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .countdown-value.live ha-icon {
      --mdc-icon-size: 24px;
      animation: pulse-text 1s infinite;
    }

    .time-info {
      margin-top: 8px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }

    /* Teams display */
    .teams-display {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 16px 0;
    }

    .team {
      flex: 1;
      text-align: center;
      min-width: 0;
    }

    .team-name {
      font-size: 1.1em;
      font-weight: 600;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .team-logo {
      width: 48px;
      height: 48px;
      margin-bottom: 8px;
      object-fit: contain;
    }

    .vs-divider {
      font-size: 1.2em;
      font-weight: 700;
      color: var(--secondary-text-color);
      padding: 0 8px;
    }

    /* Starting soon warning */
    .starting-soon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 12px;
      background: var(--warning-color, #ff9800);
      color: white;
      border-radius: 8px;
      font-weight: 500;
      font-size: 0.9em;
      margin-top: 12px;
    }

    .starting-soon ha-icon {
      --mdc-icon-size: 18px;
    }

    .starting-soon.imminent {
      background: var(--error-color, #db4437);
      animation: pulse-bg 1s infinite;
    }
  `,t([pt({attribute:!1})],wt.prototype,"hass",void 0),t([ht()],wt.prototype,"_config",void 0),t([ht()],wt.prototype,"_countdown",void 0),wt=t([lt("sportsync-next-card")],wt);let bt=class extends rt{setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return R``;const t=Object.keys(this.hass.states).filter(t=>t.startsWith("sensor.sportsync")).sort();return R`
      <div class="card-config">
        <ha-select
          label="Entity"
          .value=${this._config.entity}
          @selected=${this._valueChanged}
          .configValue=${"entity"}
        >
          ${t.map(t=>R`
              <mwc-list-item .value=${t}>
                ${this.hass.states[t]?.attributes.friendly_name||t}
              </mwc-list-item>
            `)}
        </ha-select>

        <ha-textfield
          label="Titel (valfritt)"
          .value=${this._config.title||""}
          @input=${this._valueChanged}
          .configValue=${"title"}
        ></ha-textfield>

        <ha-formfield label="Visa nedräkning">
          <ha-switch
            .checked=${!1!==this._config.show_countdown}
            @change=${this._valueChanged}
            .configValue=${"show_countdown"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa kanal">
          <ha-switch
            .checked=${!1!==this._config.show_channel}
            @change=${this._valueChanged}
            .configValue=${"show_channel"}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Visa liga">
          <ha-switch
            .checked=${!1!==this._config.show_league}
            @change=${this._valueChanged}
            .configValue=${"show_league"}
          ></ha-switch>
        </ha-formfield>
      </div>
    `}_valueChanged(t){const e=t.target;if(!this._config||!e.configValue)return;let i=e.value;"HA-SWITCH"===e.tagName&&(i=e.checked);const o={...this._config,[e.configValue]:i},n=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(n)}};bt.styles=r`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    ha-select,
    ha-textfield {
      width: 100%;
    }

    ha-formfield {
      display: flex;
      height: 48px;
      align-items: center;
    }
  `,t([pt({attribute:!1})],bt.prototype,"hass",void 0),t([ht()],bt.prototype,"_config",void 0),bt=t([lt("sportsync-next-card-editor")],bt),window.customCards=window.customCards||[],window.customCards.push({type:"sportsync-next-card",name:"SportSync Next Card",description:"Visar nästa kommande match med nedräkning",preview:!0,documentationURL:"https://github.com/your-repo/sportsync-card"});export{vt as CHANNEL_LOGOS,gt as SPORT_ICONS,mt as SPORT_NAMES,_t as SportSyncCard,ft as SportSyncCardEditor,wt as SportSyncNextCard,bt as SportSyncNextCardEditor};
