var Pastis=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,f=globalThis,p=f.trustedTypes,ie=p?p.emptyScript:``,ae=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},oe=(e,t)=>!u(e,t),g={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??g}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:`open`},_[m(`elementProperties`)]=new Map,_[m(`finalized`)]=new Map,ae?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var v=globalThis,y=e=>e,b=v.trustedTypes,x=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,S=`$lit$`,C=`lit$${Math.random().toFixed(9).slice(2)}$`,w=`?`+C,se=`<${w}>`,T=document,E=()=>T.createComment(``),D=e=>e===null||typeof e!=`object`&&typeof e!=`function`,O=Array.isArray,ce=e=>O(e)||typeof e?.[Symbol.iterator]==`function`,k=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,M=/>/g,N=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),P=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),R=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),B=new WeakMap,V=T.createTreeWalker(T,129);function H(e,t){if(!O(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return x===void 0?t:x.createHTML(t)}var le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=A;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===A?c[1]===`!--`?o=j:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=N):(I.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=N):o=M:o===N?c[0]===`>`?(o=i??A,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?N:c[3]===`"`?F:P):o===F||o===P?o=N:o===j||o===M?o=A:(o=N,i=void 0);let d=o===N&&e[t+1].startsWith(`/>`)?` `:``;a+=o===A?n+se:l>=0?(r.push(s),n.slice(0,l)+S+n.slice(l)+C+d):n+C+(l===-2?t:d)}return[H(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},U=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=le(t,n);if(this.el=e.createElement(l,r),V.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=V.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(S)){let t=u[o++],n=i.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?de:r[1]===`?`?fe:r[1]===`@`?pe:K}),i.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(I.test(i.tagName)){let e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],E()),V.nextNode(),c.push({type:2,index:++a});i.append(e[t],E())}}}else if(i.nodeType===8)if(i.data===w)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(C,e+1))!==-1;)c.push({type:7,index:a}),e+=C.length-1}a++}}static createElement(e,t){let n=T.createElement(`template`);return n.innerHTML=e,n}};function W(e,t,n=e,r){if(t===R)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=D(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=W(e,i._$AS(e,t.values),i,r)),t}var ue=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??T).importNode(t,!0);V.currentNode=r;let i=V.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new G(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=V.nextNode(),a++)}return V.currentNode=T,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},G=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),D(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==R&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=U.createElement(H(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ue(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return t===void 0&&B.set(e.strings,t=new U(e)),t}k(t){O(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(E()),this.O(E()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=y(e).nextSibling;y(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},K=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=W(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=W(this,r[n+o],t,o),s===R&&(s=this._$AH[o]),a||=!D(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},de=class extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},fe=class extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},pe=class extends K{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??z)===R)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},he=v.litHtmlPolyfillSupport;he?.(U,G),(v.litHtmlVersions??=[]).push(`3.3.2`);var ge=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new G(t.insertBefore(E(),e),e,void 0,n??{})}return i._$AI(e),i},q=globalThis,J=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};J._$litElement$=!0,J.finalized=!0,q.litElementHydrateSupport?.({LitElement:J});var _e=q.litElementPolyfillSupport;_e?.({LitElement:J}),(q.litElementVersions??=[]).push(`4.2.2`);var Y=class extends J{static properties={variant:{type:String,reflect:!0},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},href:{type:String}};static styles=s`
    :host { display: inline-block; }

    button, a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border: var(--border-width, 1px) solid var(--action-primary, #fcba28);
      border-radius: var(--radius-2xl, 24px);
      cursor: pointer;
      text-decoration: none;
      transition: box-shadow 120ms ease, transform 80ms ease;
      white-space: nowrap;
      background: var(--bg-primary, #0d0d0d);
      color: var(--action-primary, #fcba28);
    }

    button:hover, a:hover { box-shadow: var(--shadow-md, 5px 5px 0 #231f20); }
    button:active, a:active { transform: translate(2px, 2px); box-shadow: var(--shadow-sm, 3px 3px 0 #262522); }

    :host([size="sm"]) button, :host([size="sm"]) a { font-size: 12px; padding: 0 12px; height: 32px; }
    :host([size="lg"]) button, :host([size="lg"]) a { font-size: 18px; padding: 0 24px; height: 56px; }
    button, a { font-size: 14px; padding: 0 16px; height: 40px; }

    :host([variant="primary"]) button,
    :host(:not([variant])) button {
      background: var(--action-primary, #fcba28);
      color: var(--action-primary-text, #0d0d0d);
      border-color: var(--action-primary, #fcba28);
    }
    :host([variant="primary"]) button:hover,
    :host(:not([variant])) button:hover {
      box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428);
    }
    :host([variant="primary"]) button:active,
    :host(:not([variant])) button:active {
      transform: translate(2px, 2px);
      box-shadow: var(--shadow-lg, 5px 5px 0 #fcba28);
    }

    :host([variant="secondary"]) button {
      background: var(--bg-primary, #0d0d0d);
      color: var(--action-secondary, #fc7428);
      border-color: var(--action-secondary, #fc7428);
    }
    :host([variant="secondary"]) button:hover { box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428); }

    :host([variant="ghost"]) button {
      background: transparent;
      color: var(--text-primary, #f9f4da);
      border-color: var(--action-ghost-border, #383c44);
    }
    :host([variant="ghost"]) button:hover { box-shadow: var(--shadow-md, 5px 5px 0 #231f20); }

    :host([variant="destructive"]) button {
      background: var(--action-destructive, #ed203d);
      color: var(--action-destructive-text, #000000);
      border-color: var(--action-destructive, #ed203d);
    }
    :host([variant="destructive"]) button:hover { box-shadow: var(--shadow-lg, 5px 5px 0 #fcba28); }

    :host([disabled]) button {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
      box-shadow: none;
    }

    .spinner {
      width: 14px; height: 14px;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    button:focus-visible, a:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 3px;
    }
  `;constructor(){super(),this.variant=`primary`,this.size=`md`,this.disabled=!1,this.loading=!1}render(){return L`
      <button
        ?disabled=${this.disabled||this.loading}
        @click=${this._handleClick}
        aria-busy=${this.loading}
        part="button"
      >
        ${this.loading?L`<span class="spinner" aria-hidden="true"></span>`:``}
        <slot></slot>
      </button>
    `}_handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent(`pastis-click`,{bubbles:!0,composed:!0}))}};customElements.define(`pastis-button`,Y);var X=class extends J{static properties={label:{type:String},placeholder:{type:String},value:{type:String,reflect:!0},type:{type:String},helper:{type:String},error:{type:String},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},leadingIcon:{type:String,attribute:`leading-icon`},trailingIcon:{type:String,attribute:`trailing-icon`},name:{type:String}};static styles=s`
    :host { display: block; background: var(--bg-primary, #0d0d0d); }

    .field { display: flex; flex-direction: column; gap: 6px; }

    label {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .required-dot {
      color: var(--status-error, #ed203d);
      font-size: 16px;
      line-height: 1;
    }

    .input-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 14px;
      font-weight: 700;
      color: var(--text-secondary, #fff);
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
      padding: 10px 12px;
      height: auto;
      outline: none;
      transition: border-color 120ms ease;
      box-sizing: border-box;
    }

    :host([size="sm"]) input { font-size: 12px; padding: 8px 10px; }
    :host([size="lg"]) input { font-size: 16px; padding: 12px 16px; }

    input:hover { border-color: var(--text-tertiary, #909498); }

    input:focus {
      border-color: var(--border-focus, #fcba28);
      box-shadow: 4px 4px 0 var(--border-focus, #fcba28);
    }

    input::placeholder { color: var(--text-tertiary, #909498); }

    :host([disabled]) input {
      opacity: 0.3;
      cursor: not-allowed;
    }

    :host([readonly]) input {
      opacity: 0.6;
      cursor: default;
    }

    .has-error input {
      border-color: var(--status-error, #ed203d);
    }

    .has-error input:focus {
      box-shadow: 4px 4px 0 var(--status-error, #ed203d);
    }

    .leading-icon, .trailing-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-tertiary, #909498);
      display: flex;
      align-items: center;
      pointer-events: none;
    }

    .leading-icon { left: 10px; }
    .trailing-icon { right: 10px; }

    .has-leading input { padding-left: 34px; }
    .has-trailing input { padding-right: 34px; }

    .helper-text {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      color: var(--text-tertiary, #909498);
      margin: 0;
    }

    .error-text {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      color: var(--status-error, #ed203d);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    input:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
    }
  `;constructor(){super(),this.type=`text`,this.value=``,this.disabled=!1,this.readonly=!1,this.required=!1,this.size=`md`,this._inputId=`pastis-input-${Math.random().toString(36).slice(2,9)}`}render(){let e=!!this.error,t=!!this.leadingIcon,n=!!this.trailingIcon,r=[`input-wrap`,e?`has-error`:``,t?`has-leading`:``,n?`has-trailing`:``].filter(Boolean).join(` `),i=this._inputId;return L`
      <div class="field">
        ${this.label?L`
          <label for="${i}">
            ${this.label}
            ${this.required?L`<span class="required-dot" aria-hidden="true">*</span><span class="sr-only">required</span>`:``}
          </label>
        `:``}
        <div class="${r}">
          ${t?L`<span class="leading-icon" aria-hidden="true">${this.leadingIcon}</span>`:``}
          <input
            id="${i}"
            type="${this.type}"
            .value="${this.value}"
            placeholder="${this.placeholder||``}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            name="${this.name||``}"
            aria-invalid="${e}"
            aria-describedby="${e?`error`:this.helper?`helper`:``}"
            @input="${this._handleInput}"
            @change="${this._handleChange}"
            part="input"
          />
          ${n?L`<span class="trailing-icon" aria-hidden="true">${this.trailingIcon}</span>`:``}
        </div>
        ${e?L`<p class="error-text" id="error" role="alert">⚠ ${this.error}</p>`:this.helper?L`<p class="helper-text" id="helper">${this.helper}</p>`:``}
      </div>
    `}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent(`pastis-input`,{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent(`pastis-change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}};customElements.define(`pastis-input`,X);var Z=class extends J{static properties={label:{type:String},checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},name:{type:String},value:{type:String},helper:{type:String}};static styles=s`
    :host { display: inline-flex; align-items: flex-start; }

    label {
      display: inline-flex;
      align-items: flex-start;
      gap: 10px;
      cursor: pointer;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-secondary, #fff);
      user-select: none;
    }

    :host([disabled]) label { cursor: not-allowed; opacity: 0.3; }

    input[type="checkbox"] { position: absolute; opacity: 0; width: 0; height: 0; }

    .box {
      width: 20px;
      height: 20px;
      min-width: 20px;
      border-radius: var(--radius-sm, 4px);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      background: var(--bg-primary, #0d0d0d);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color 120ms ease, background 120ms ease;
      margin-top: 1px;
    }

    :host([checked]) .box,
    :host([indeterminate]) .box {
      background: var(--action-primary, #fcba28);
      border-color: var(--action-primary, #fcba28);
    }

    .checkmark {
      display: none;
      width: 10px;
      height: 7px;
      border-left: 3px solid var(--action-primary-text, #0d0d0d);
      border-bottom: 3px solid var(--action-primary-text, #0d0d0d);
      transform: rotate(-45deg) translateY(-1px);
    }

    .indeterminate-mark {
      display: none;
      width: 10px;
      height: 3px;
      background: var(--action-primary-text, #0d0d0d);
      border-radius: 0;
    }

    :host([checked]) .checkmark { display: block; }
    :host([indeterminate]) .indeterminate-mark { display: block; }
    :host([indeterminate]) .checkmark { display: none; }

    label:hover .box { border-color: var(--action-primary, #fcba28); }
    :host([checked]) label:hover .box,
    :host([indeterminate]) label:hover .box { opacity: 0.85; }

    input:focus-visible ~ .box {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .label-content { display: flex; flex-direction: column; gap: 2px; }
    .helper {
      font-size: 11px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--text-tertiary, #909498);
      text-transform: none;
    }
  `;constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value=``}updated(e){if(e.has(`indeterminate`)){let e=this.shadowRoot?.querySelector(`input`);e&&(e.indeterminate=this.indeterminate)}}render(){return L`
      <label @click="${this._handleClick}">
        <input
          type="checkbox"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          name="${this.name||``}"
          value="${this.value||``}"
          aria-checked="${this.indeterminate?`mixed`:this.checked}"
          @change="${this._handleChange}"
        />
        <span class="box">
          <span class="checkmark"></span>
          <span class="indeterminate-mark"></span>
        </span>
        ${this.label?L`
          <span class="label-content">
            <span>${this.label}</span>
            ${this.helper?L`<span class="helper">${this.helper}</span>`:``}
          </span>
        `:``}
      </label>
    `}_handleClick(e){if(this.disabled){e.preventDefault();return}}_handleChange(e){this.checked=e.target.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent(`pastis-change`,{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}};customElements.define(`pastis-checkbox`,Z);var Q=class extends J{static properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},label:{type:String},labelPosition:{type:String,attribute:`label-position`},size:{type:String,reflect:!0},name:{type:String}};static styles=s`
    :host { display: inline-flex; align-items: center; }

    label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-secondary, #fff);
    }

    :host([disabled]) label { cursor: not-allowed; opacity: 0.3; }

    input { position: absolute; opacity: 0; width: 0; height: 0; }

    .track {
      display: inline-flex;
      align-items: center;
      position: relative;
      width: 56px;
      height: 28px;
      background: var(--bg-elevated, #383c44);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-full, 9999px);
      transition: border-color 120ms ease;
      flex-shrink: 0;
      padding: 2px;
    }

    :host([size="sm"]) .track { width: 40px; height: 22px; }
    :host([size="lg"]) .track { width: 64px; height: 32px; }

    :host([checked]) .track { border-color: var(--action-primary, #fcba28); }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      background: var(--text-tertiary, #909498);
      border-radius: 50%;
      transition: transform 120ms ease, background 120ms ease;
    }

    :host([size="sm"]) .thumb { width: 10px; height: 10px; }
    :host([size="lg"]) .thumb { width: 20px; height: 20px; }

    :host([checked]) .thumb {
      transform: translateX(28px);
      background: var(--action-primary, #fcba28);
    }

    :host([size="sm"][checked]) .thumb { transform: translateX(18px); }
    :host([size="lg"][checked]) .thumb { transform: translateX(36px); }

    input:focus-visible ~ .track {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .label-text { line-height: 1.4; }
  `;constructor(){super(),this.checked=!1,this.disabled=!1,this.labelPosition=`right`,this.size=`md`}render(){let e=this.label?L`<span class="label-text">${this.label}</span>`:``;return L`
      <label>
        ${this.labelPosition===`left`?e:``}
        <input
          type="checkbox"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          name="${this.name||``}"
          role="switch"
          aria-checked="${this.checked}"
          @change="${this._handleChange}"
        />
        <span class="track" aria-hidden="true">
          <span class="thumb"></span>
        </span>
        ${this.labelPosition===`left`?``:e}
      </label>
    `}_handleChange(e){this.disabled||(this.checked=e.target.checked,this.dispatchEvent(new CustomEvent(`pastis-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})))}};customElements.define(`pastis-toggle`,Q);var ve=class extends J{static properties={variant:{type:String,reflect:!0},size:{type:String,reflect:!0},dot:{type:Boolean,reflect:!0},count:{type:Number},max:{type:Number},label:{type:String}};static styles=s`
    :host { display: inline-flex; align-items: center; }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border: var(--border-width, 1px) solid currentColor;
      border-radius: var(--radius-full, 9999px);
      white-space: nowrap;
      line-height: 1;
    }

    /* Sizes */
    .badge { font-size: 11px; padding: 3px 10px; }
    :host([size="sm"]) .badge { font-size: 10px; padding: 2px 8px; }
    :host([size="lg"]) .badge { font-size: 13px; padding: 4px 12px; }

    /* Dot variant */
    :host([dot]) .badge { padding: 0; width: 10px; height: 10px; border-radius: 50%; }
    :host([dot][size="sm"]) .badge { width: 8px; height: 8px; }
    :host([dot][size="lg"]) .badge { width: 14px; height: 14px; }

    /* Variants */
    :host(:not([variant])) .badge,
    :host([variant="default"]) .badge {
      color: var(--text-primary, #f9f4da);
      background: transparent;
    }

    :host([variant="primary"]) .badge {
      color: var(--action-primary, #fcba28);
      background: transparent;
    }

    :host([variant="success"]) .badge {
      color: var(--status-success, #0ba95b);
      background: transparent;
    }

    :host([variant="warning"]) .badge {
      color: var(--status-warning, #fcba28);
      background: transparent;
    }

    :host([variant="error"]) .badge {
      color: var(--status-error, #ed203d);
      background: transparent;
    }

    :host([variant="info"]) .badge {
      color: var(--status-info, #12b5e5);
      background: transparent;
    }

    :host([variant="solid-primary"]) .badge {
      background: var(--action-primary, #fcba28);
      color: var(--action-primary-text, #0d0d0d);
      border-color: var(--action-primary, #fcba28);
    }

    :host([variant="solid-success"]) .badge {
      background: var(--status-success, #0ba95b);
      color: #000000;
      border-color: var(--status-success, #0ba95b);
    }

    :host([variant="solid-error"]) .badge {
      background: var(--status-error, #f0505e);
      color: #000000;
      border-color: var(--status-error, #f0505e);
    }

    :host([variant="solid-warning"]) .badge {
      background: var(--status-warning, #fcba28);
      color: var(--action-primary-text, #0d0d0d);
      border-color: var(--status-warning, #fcba28);
    }

    .dot-indicator {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
      flex-shrink: 0;
    }
  `;constructor(){super(),this.variant=`default`,this.size=`md`,this.dot=!1,this.max=99}render(){if(this.dot)return L`<span class="badge" role="status" part="badge" aria-label="${this.label||`indicator`}"></span>`;let e;return this.count!==void 0&&(e=this.count>this.max?`${this.max}+`:`${this.count}`),L`
      <span class="badge" part="badge">
        ${e===void 0?L`<slot></slot>`:e}
      </span>
    `}};customElements.define(`pastis-badge`,ve);var ye=class extends J{static properties={src:{type:String},alt:{type:String},name:{type:String},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},status:{type:String,reflect:!0},color:{type:String}};static styles=s`
    :host {
      display: inline-flex;
      position: relative;
      --avatar-color-1: #0071E3;
      --avatar-color-2: #34C759;
      --avatar-color-3: #FF9500;
      --avatar-color-4: #FF3B30;
      --avatar-color-5: #AF52DE;
      --avatar-color-6: #5856D6;
      --avatar-color-7: #5AC8FA;
      --avatar-color-8: #FF2D55;
    }

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-primary, #f9f4da);
      user-select: none;
    }

    /* Shape variants */
    :host([shape="circle"]) .avatar,
    :host(:not([shape])) .avatar { border-radius: 50%; }

    :host([shape="rounded"]) .avatar { border-radius: var(--radius-lg, 8px); }

    :host([shape="square"]) .avatar { border-radius: 0; }

    /* Sizes */
    .avatar { width: 40px; height: 40px; font-size: 14px; }
    :host([size="xs"]) .avatar { width: 24px; height: 24px; font-size: 9px; }
    :host([size="sm"]) .avatar { width: 32px; height: 32px; font-size: 11px; }
    :host([size="lg"]) .avatar { width: 56px; height: 56px; font-size: 18px; }
    :host([size="xl"]) .avatar { width: 72px; height: 72px; font-size: 22px; }
    :host([size="2xl"]) .avatar { width: 96px; height: 96px; font-size: 28px; }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .status-dot {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: var(--border-width, 1px) solid var(--bg-primary, #0d0d0d);
    }

    :host([size="xs"]) .status-dot { width: 6px; height: 6px; }
    :host([size="sm"]) .status-dot { width: 8px; height: 8px; }
    :host([size="lg"]) .status-dot { width: 12px; height: 12px; }
    :host([size="xl"]) .status-dot { width: 14px; height: 14px; }
    :host([size="2xl"]) .status-dot { width: 18px; height: 18px; }

    :host([status="online"]) .status-dot { background: var(--status-success, #fcba28); }
    :host([status="away"]) .status-dot { background: var(--status-warning, #fcba28); }
    :host([status="busy"]) .status-dot { background: var(--status-error, #ed203d); }
    :host([status="offline"]) .status-dot { background: var(--text-tertiary, #909498); }

    .icon { font-size: 1.2em; }
  `;constructor(){super(),this.size=`md`,this.shape=`circle`,this.alt=``}_getInitials(){if(!this.name)return`?`;let e=this.name.trim().split(/\s+/);return e.length===1?e[0][0].toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}_getColorFromName(){if(this.color)return this.color;let e=[`var(--avatar-color-1)`,`var(--avatar-color-2)`,`var(--avatar-color-3)`,`var(--avatar-color-4)`,`var(--avatar-color-5)`,`var(--avatar-color-6)`,`var(--avatar-color-7)`,`var(--avatar-color-8)`];if(!this.name)return e[0];let t=0;for(let e=0;e<this.name.length;e++)t=this.name.charCodeAt(e)+((t<<5)-t);return e[Math.abs(t)%e.length]}render(){let e=this._getColorFromName();return L`
      <div class="avatar" part="avatar" style="background:${this.src?`transparent`:e}" role="img" aria-label="${this.alt||this.name||`Avatar`}${this.status?`, status: `+this.status:``}">
        ${this.src?L`<img src="${this.src}" alt="${this.alt||this.name||``}" />`:this.name?L`<span>${this._getInitials()}</span>`:L`<span class="icon">👤</span>`}
      </div>
      ${this.status?L`<span class="status-dot" aria-hidden="true"></span>`:``}
    `}};customElements.define(`pastis-avatar`,ye);var be=class extends J{static properties={variant:{type:String,reflect:!0},padding:{type:String,reflect:!0},hoverable:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0},selected:{type:Boolean,reflect:!0}};static styles=s`
    :host {
      display: block;
    }

    .card {
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      overflow: hidden;
      transition:
        box-shadow 120ms ease,
        transform 120ms ease;
      font-family: var(--font-family-mono, "Fira Code", monospace);
      padding: 16px;
    }

    :host([variant="elevated"]) .card {
      border-color: var(--text-primary, #f9f4da);
    }

    :host([variant="outlined"]) .card {
      box-shadow: none;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
    }

    :host([variant="ghost"]) .card {
      background: var(--bg-primary, #0d0d0d);
      border-color: var(--text-tertiary, #909498);
    }

    :host([hoverable]) .card:hover,
    :host([clickable]) .card:hover {
      box-shadow: var(--shadow-md, 5px 5px 0 #231f20);
      transform: translate(-2px, -2px);
    }

    :host([clickable]) .card {
      cursor: pointer;
      width: 100%;
      text-align: left;
    }

    :host([clickable]) .card:active {
      transform: translate(2px, 2px);
      box-shadow: 4px 4px 0 var(--action-secondary, #fc7428);
    }

    button.card {
      appearance: none;
      -webkit-appearance: none;
    }

    button.card:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    :host([selected]) .card {
      border-color: var(--action-primary, #fcba28);
    }

    .card-header {
      padding: 16px;
    }

    .card-body {
      color: var(--text-secondary, #fff);
      font-size: 14px;
    }

    :host([padding="sm"]) .card-header {
      padding: 12px 12px 0;
    }
    :host([padding="sm"]) .card-body {
      padding: 12px;
    }
    :host([padding="lg"]) .card-header {
      padding: 28px 28px 0;
    }
    :host([padding="lg"]) .card-body {
      padding: 28px;
    }
    :host([padding="none"]) .card-header {
      padding: 0;
    }
    :host([padding="none"]) .card-body {
      padding: 0;
    }

    .card-footer {
      padding: 16px 24px;
      border-top: var(--border-width, 1px) solid var(--border-default, #fcba28);
      background: var(--bg-primary, #0d0d0d);
    }

    :host([padding="sm"]) .card-footer {
      padding: 8px 16px;
    }
    :host([padding="lg"]) .card-footer {
      padding: 16px 24px;
    }

    slot[name="header"]::slotted(*) {
      margin: 0;
      font-family: var(--font-family-mono, "Fira Code", monospace);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
    }

    slot[name="media"]::slotted(*) {
      display: block;
      width: 100%;
    }

    /* ── Cover variant ─────────────────────────────────────────── */

    :host([variant="cover"]) .card {
      position: relative;
      min-height: var(--card-cover-min-height, 320px);
      padding: 0;
      border-color: var(--border-default, #fcba28);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .cover-bg {
      display: none;
    }

    :host([variant="cover"]) .cover-bg {
      display: block;
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      border-radius: inherit;
    }

    :host([variant="cover"]) .cover-bg::slotted(*),
    :host([variant="cover"]) slot[name="media"]::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    :host([variant="cover"]) .cover-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      border-radius: inherit;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.88) 0%,
        rgba(0, 0, 0, 0.5) 45%,
        rgba(0, 0, 0, 0.08) 100%
      );
    }

    .cover-overlay {
      display: none;
    }

    :host([variant="cover"]) .cover-content {
      position: relative;
      z-index: 2;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .cover-content {
      display: none;
    }

    :host([variant="cover"]) .cover-content .card-header {
      padding: 0;
    }

    :host([variant="cover"]) .cover-content .card-body {
      color: rgba(255, 255, 255, 0.75);
      font-size: 13px;
    }

    :host([variant="cover"]) .cover-content .card-footer {
      padding: 16px 0 0;
      background: none;
      border-top-color: rgba(255, 255, 255, 0.15);
    }

    :host([variant="cover"]) slot[name="header"]::slotted(*) {
      color: var(--text-primary, #f9f4da);
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    }

    :host([variant="cover"][hoverable]) .card:hover,
    :host([variant="cover"][clickable]) .card:hover {
      transform: translate(-2px, -2px);
      box-shadow: var(--shadow-md, 5px 5px 0 #231f20);
    }
  `;constructor(){super(),this.variant=`default`,this.padding=`md`,this.hoverable=!1,this.clickable=!1,this.selected=!1}render(){if(this.variant===`cover`){let e=L`
        <div class="cover-bg"><slot name="media"></slot></div>
        <div class="cover-overlay"></div>
        <div class="cover-content">
          <slot name="header" class="card-header"></slot>
          <div class="card-body"><slot></slot></div>
          <slot name="footer" class="card-footer"></slot>
        </div>
      `;return this.clickable?L`
          <button class="card" part="card" aria-pressed="${this.selected}" @click="${this._handleClick}">
            ${e}
          </button>
        `:L`
        <div class="card" part="card" aria-selected="${this.selected||void 0}">
          ${e}
        </div>
      `}return this.clickable?L`
        <button
          class="card"
          part="card"
          aria-pressed="${this.selected}"
          @click="${this._handleClick}"
        >
          <slot name="media"></slot>
          <slot name="header" class="card-header"></slot>
          <div class="card-body">
            <slot></slot>
          </div>
          <slot name="footer" class="card-footer"></slot>
        </button>
      `:L`
      <div
        class="card"
        part="card"
        aria-selected="${this.selected||void 0}"
      >
        <slot name="media"></slot>
        <slot name="header" class="card-header"></slot>
        <div class="card-body">
          <slot></slot>
        </div>
        <slot name="footer" class="card-footer"></slot>
      </div>
    `}_handleClick(){this.clickable&&this.dispatchEvent(new CustomEvent(`pastis-click`,{bubbles:!0,composed:!0}))}};customElements.define(`pastis-card`,be);var xe=class extends J{static properties={variant:{type:String,reflect:!0},title:{type:String},dismissible:{type:Boolean,reflect:!0},visible:{type:Boolean,reflect:!0},icon:{type:String}};static styles=s`
    :host { display: block; }
    :host([visible="false"]) { display: none; }

    .alert {
      display: flex;
      gap: 12px;
      padding: 14px 16px;
      border-radius: var(--radius-md, 6px);
      border: var(--border-width, 1px) solid currentColor;
      border-left: 4px solid currentColor;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      background: var(--bg-primary, #0d0d0d);
    }

    :host([variant="success"]) .alert {
      color: var(--status-success, #fcba28);
    }

    :host([variant="warning"]) .alert {
      color: var(--status-warning, #fcba28);
    }

    :host([variant="error"]) .alert {
      color: var(--status-error, #ed203d);
    }

    :host([variant="info"]) .alert,
    :host(:not([variant])) .alert {
      color: var(--status-info, #fc7428);
    }

    .alert-icon {
      font-size: 18px;
      flex-shrink: 0;
      line-height: 1.4;
    }

    .alert-content {
      flex: 1;
      min-width: 0;
    }

    .alert-title {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      margin: 0 0 4px;
      color: inherit;
    }

    .alert-body {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      color: var(--text-secondary, #fff);
      margin: 0;
    }

    .dismiss-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font-size: 16px;
      padding: 0;
      line-height: 1;
      flex-shrink: 0;
      align-self: flex-start;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }
    .dismiss-btn:focus-visible { outline: 2px solid var(--border-focus, #fcba28); outline-offset: 2px; }
  `;constructor(){super(),this.variant=`info`,this.dismissible=!1,this.visible=!0}_getIcon(){return this.icon?this.icon:{success:`✓`,warning:`⚠`,error:`✕`,info:`ℹ`}[this.variant]||`ℹ`}render(){return this.visible?L`
      <div class="alert" role="alert" part="alert">
        <span class="alert-icon" aria-hidden="true">${this._getIcon()}</span>
        <div class="alert-content">
          ${this.title?L`<p class="alert-title">${this.title}</p>`:``}
          <div class="alert-body"><slot></slot></div>
        </div>
        ${this.dismissible?L`
          <button class="dismiss-btn" @click="${this._dismiss}" aria-label="Dismiss">✕</button>
        `:``}
      </div>
    `:L``}_dismiss(){this.visible=!1,this.dispatchEvent(new CustomEvent(`pastis-dismiss`,{bubbles:!0,composed:!0}))}};customElements.define(`pastis-alert`,xe);var Se=class extends J{static properties={open:{type:Boolean,reflect:!0},title:{type:String},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0},persistent:{type:Boolean,reflect:!0}};static styles=s`
    :host { display: contents; }

    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    .dialog {
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-lg, 8px);
      width: 100%;
      max-height: calc(100vh - 32px);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    :host(:not([size])) .dialog,
    :host([size="md"]) .dialog { max-width: 540px; }
    :host([size="sm"]) .dialog { max-width: 380px; }
    :host([size="lg"]) .dialog { max-width: 720px; }
    :host([size="xl"]) .dialog { max-width: 960px; }
    :host([size="full"]) .dialog { max-width: calc(100vw - 32px); height: calc(100vh - 32px); }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px 16px;
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      flex-shrink: 0;
    }

    .modal-title {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      margin: 0;
    }

    .close-btn {
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--text-primary, #f9f4da);
      border-radius: var(--radius-sm, 4px);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text-primary, #f9f4da);
      font-size: 14px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      transition: box-shadow 120ms ease;
      flex-shrink: 0;
    }

    .close-btn:hover {
      box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428);
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .modal-body {
      padding: 24px;
      overflow-y: auto;
      flex: 1;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--text-secondary, #fff);
      font-size: 14px;
    }

    .modal-footer {
      padding: 16px 24px;
      border-top: var(--border-width, 1px) solid var(--border-default, #fcba28);
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      flex-shrink: 0;
    }
  `;constructor(){super(),this.open=!1,this.closable=!0,this.persistent=!1,this.size=`md`,this._boundKeydown=this._handleKeydown.bind(this),this._previousFocus=null}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._boundKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._boundKeydown)}_getFocusableElements(){let e=this.shadowRoot?.querySelector(`.dialog`);if(!e)return[];let t=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`,`);return Array.from(e.querySelectorAll(t)).filter(e=>!e.closest(`[hidden]`)&&e.offsetParent!==null)}updated(e){e.has(`open`)&&(this.open?(this._previousFocus=document.activeElement,document.body.style.overflow=`hidden`,requestAnimationFrame(()=>{(this._getFocusableElements()[0]||this.shadowRoot?.querySelector(`.close-btn`))?.focus()})):(document.body.style.overflow=``,this._previousFocus?.focus(),this._previousFocus=null))}render(){return this.open?L`
      <div
        class="backdrop"
        @click="${this._handleBackdropClick}"
        role="dialog"
        aria-modal="true"
        aria-label="${this.title||`Dialog`}"
        part="backdrop"
      >
        <div class="dialog" part="dialog" @click="${e=>e.stopPropagation()}">
          <div class="modal-header">
            <h2 class="modal-title">${this.title||``}</h2>
            ${this.closable?L`
              <button class="close-btn" @click="${this.close}" aria-label="Close dialog">✕</button>
            `:``}
          </div>
          <div class="modal-body" tabindex="0">
            <slot></slot>
          </div>
          <slot name="footer" class="modal-footer"></slot>
        </div>
      </div>
    `:L``}_handleBackdropClick(){this.persistent||this.close()}_handleKeydown(e){if(this.open){if(e.key===`Escape`&&!this.persistent){this.close();return}if(e.key===`Tab`){let t=this._getFocusableElements();if(!t.length){e.preventDefault();return}let n=t[0],r=t[t.length-1];e.shiftKey?(document.activeElement===n||this.shadowRoot.activeElement===n)&&(e.preventDefault(),r.focus()):(document.activeElement===r||this.shadowRoot.activeElement===r)&&(e.preventDefault(),n.focus())}}}open_(){this.open=!0,this.dispatchEvent(new CustomEvent(`pastis-open`,{bubbles:!0,composed:!0}))}close(){this.open=!1,this.dispatchEvent(new CustomEvent(`pastis-close`,{bubbles:!0,composed:!0}))}};customElements.define(`pastis-modal`,Se);var Ce=class extends J{static properties={message:{type:String},variant:{type:String,reflect:!0},duration:{type:Number},position:{type:String,reflect:!0},visible:{type:Boolean,reflect:!0},title:{type:String},dismissible:{type:Boolean,reflect:!0},_hiding:{state:!0}};static styles=s`
    :host { display: block; }

    .toast-container {
      position: fixed;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    }

    :host([position="top-right"]) .toast-container,
    :host(:not([position])) .toast-container {
      top: 20px; right: 20px; align-items: flex-end;
    }
    :host([position="top-left"]) .toast-container { top: 20px; left: 20px; align-items: flex-start; }
    :host([position="bottom-right"]) .toast-container { bottom: 20px; right: 20px; align-items: flex-end; }
    :host([position="bottom-left"]) .toast-container { bottom: 20px; left: 20px; align-items: flex-start; }
    :host([position="top-center"]) .toast-container { top: 20px; left: 50%; transform: translateX(-50%); align-items: center; }
    :host([position="bottom-center"]) .toast-container { bottom: 20px; left: 50%; transform: translateX(-50%); align-items: center; }

    .toast {
      pointer-events: all;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 14px 16px;
      border-radius: var(--radius-md, 6px);
      border: var(--border-width, 1px) solid currentColor;
      max-width: 360px;
      min-width: 280px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      background: var(--bg-primary, #0d0d0d);
      position: relative;
      overflow: hidden;
    }

    .toast.hiding {
      opacity: 0;
    }

    :host([variant="success"]) .toast { color: var(--status-success, #fcba28); }
    :host([variant="error"]) .toast { color: var(--status-error, #ed203d); }
    :host([variant="warning"]) .toast { color: var(--status-warning, #fcba28); }
    :host([variant="info"]) .toast,
    :host(:not([variant])) .toast { color: var(--status-info, #fc7428); }
    :host([variant="default"]) .toast {
      color: var(--text-primary, #f9f4da);
    }

    .toast-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }

    .toast-content { flex: 1; min-width: 0; }

    .toast-title {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      margin: 0 0 4px;
      color: inherit;
    }

    .toast-message {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      color: var(--text-secondary, #fff);
      margin: 0;
      line-height: 1.4;
    }

    .dismiss-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font-size: 14px;
      padding: 0;
      flex-shrink: 0;
      line-height: 1;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: var(--border-width, 1px);
      background: currentColor;
      opacity: 0.6;
      border-radius: 0;
      animation: progress linear forwards;
    }

    @keyframes progress {
      from { width: 100%; }
      to { width: 0%; }
    }
  `;constructor(){super(),this.variant=`default`,this.duration=4e3,this.position=`top-right`,this.visible=!1,this.dismissible=!0,this._hiding=!1,this._timer=null,this._hideTimer=null}_getIcon(){return{success:`✓`,error:`✕`,warning:`⚠`,info:`ℹ`,default:`🔔`}[this.variant]||`🔔`}show(){this.visible=!0,this.duration>0&&(clearTimeout(this._timer),this._timer=setTimeout(()=>this.hide(),this.duration)),this.dispatchEvent(new CustomEvent(`pastis-show`,{bubbles:!0,composed:!0}))}hide(){clearTimeout(this._hideTimer),this._hiding=!0,this._hideTimer=setTimeout(()=>{this._hiding=!1,this.visible=!1,this.dispatchEvent(new CustomEvent(`pastis-hide`,{bubbles:!0,composed:!0}))},200)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._timer),clearTimeout(this._hideTimer)}render(){return this.visible?L`
      <div class="toast-container" part="container">
        <div class="toast ${this._hiding?`hiding`:``}" role="alert" aria-live="${this.variant===`error`?`assertive`:`polite`}" part="toast">
          <span class="toast-icon" aria-hidden="true">${this._getIcon()}</span>
          <div class="toast-content">
            ${this.title?L`<p class="toast-title">${this.title}</p>`:``}
            <p class="toast-message">${this.message||``}<slot></slot></p>
          </div>
          ${this.dismissible?L`
            <button class="dismiss-btn" @click="${this.hide}" aria-label="Dismiss">✕</button>
          `:``}
          ${this.duration>0?L`
            <div class="progress-bar" style="animation-duration:${this.duration}ms"></div>
          `:``}
        </div>
      </div>
    `:L``}};customElements.define(`pastis-toast`,Ce);var we=class extends J{static properties={size:{type:String,reflect:!0},color:{type:String},variant:{type:String,reflect:!0},label:{type:String}};static styles=s`
    :host { display: inline-flex; align-items: center; justify-content: center; }

    .spinner-wrap {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      flex-direction: column;
    }

    .spinner-wrap.inline { flex-direction: row; }

    .ring {
      border-radius: var(--radius-sm, 4px);
      border: var(--border-width, 1px) solid var(--text-primary, #f9f4da);
      border-top-color: transparent;
      animation: pixel-spin 0.5s steps(8) infinite;
      flex-shrink: 0;
    }

    :host([variant="dots"]) .ring { display: none; }

    .dots {
      display: none;
      gap: 4px;
      align-items: center;
    }

    :host([variant="dots"]) .dots { display: flex; }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: var(--radius-sm, 4px);
      background: var(--text-primary, #f9f4da);
      animation: pixel-blink 0.8s steps(2) infinite;
    }

    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }

    :host([size="xs"]) .ring { width: 16px; height: 16px; border-width: var(--border-width, 1px); }
    :host([size="sm"]) .ring { width: 20px; height: 20px; border-width: var(--border-width, 1px); }
    :host(:not([size])) .ring,
    :host([size="md"]) .ring { width: 32px; height: 32px; }
    :host([size="lg"]) .ring { width: 44px; height: 44px; border-width: 2px; }
    :host([size="xl"]) .ring { width: 60px; height: 60px; border-width: 3px; }

    :host([size="xs"]) .dot { width: 5px; height: 5px; }
    :host([size="sm"]) .dot { width: 6px; height: 6px; }
    :host([size="lg"]) .dot { width: 10px; height: 10px; }
    :host([size="xl"]) .dot { width: 14px; height: 14px; }

    @keyframes pixel-spin { to { transform: rotate(360deg); } }

    @keyframes pixel-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.2; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ring {
        animation: none;
        animation-duration: 0.001ms;
      }
      .dot {
        animation: none;
        animation-duration: 0.001ms;
      }
    }

    .label {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-tertiary, #909498);
    }
  `;constructor(){super(),this.size=`md`,this.variant=`ring`}render(){return L`
      <div class="spinner-wrap" role="status" aria-label="${this.label||`Loading`}">
        <span class="ring" style="${this.color?`border-top-color:${this.color}`:``}"></span>
        <span class="dots">
          <span class="dot" style="${this.color?`background:${this.color}`:``}"></span>
          <span class="dot" style="${this.color?`background:${this.color}`:``}"></span>
          <span class="dot" style="${this.color?`background:${this.color}`:``}"></span>
        </span>
        ${this.label?L`<span class="label">${this.label}</span>`:``}
        <slot></slot>
      </div>
    `}};customElements.define(`pastis-spinner`,we);var Te=class extends J{static properties={variant:{type:String,reflect:!0},width:{type:String},height:{type:String},lines:{type:Number},animated:{type:Boolean,reflect:!0},borderRadius:{type:String,attribute:`border-radius`}};static styles=s`
    :host { display: block; }

    .skeleton {
      background: var(--bg-elevated, #383c44);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-sm, 4px);
    }

    :host([animated]) .skeleton {
      animation: pixel-pulse 1s steps(2) infinite;
    }

    @keyframes pixel-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    @media (prefers-reduced-motion: reduce) {
      :host([animated]) .skeleton {
        animation: none;
      }
    }

    :host([variant="circle"]) .skeleton {
      border-radius: 50%;
    }

    :host([variant="text"]) .skeleton {
      height: 14px;
      border-radius: var(--radius-sm, 4px);
    }

    .lines-wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .line { height: 14px; border-radius: var(--radius-sm, 4px); border: var(--border-width, 1px) solid var(--border-subtle, #383c44); background: var(--bg-elevated, #383c44); }
    .line:last-child { width: 70% !important; }
  `;constructor(){super(),this.variant=`rect`,this.animated=!0,this.lines=3}render(){if(this.variant===`lines`)return L`
        <div class="lines-wrap" part="skeleton">
          ${Array.from({length:this.lines},(e,t)=>L`
            <div
              class="skeleton line"
              style="width:${t===this.lines-1?`70%`:`100%`}"
            ></div>
          `)}
        </div>
      `;let e=[this.width?`width:${this.width}`:``,this.height?`height:${this.height}`:``,this.borderRadius?`border-radius:${this.borderRadius}`:``].filter(Boolean).join(`;`);if(this.variant===`circle`){let e=this.width||this.height||`40px`;return L`<div class="skeleton" style="width:${e};height:${e};border-radius:50%${this.borderRadius?`;border-radius:`+this.borderRadius:``}" part="skeleton"></div>`}return L`<div class="skeleton" style="${e||`width:100%;height:16px`}" part="skeleton"></div>`}};customElements.define(`pastis-skeleton`,Te);var Ee=class extends J{static properties={content:{type:String},position:{type:String,reflect:!0},visible:{type:Boolean,reflect:!0},delay:{type:Number},maxWidth:{type:String,attribute:`max-width`},variant:{type:String,reflect:!0}};static styles=s`
    :host { display: inline-flex; position: relative; }

    .trigger { display: contents; }

    .tooltip {
      position: absolute;
      z-index: 9000;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--bg-primary, #0d0d0d);
      background: var(--text-primary, #f9f4da);
      border: var(--border-width, 1px) solid var(--text-primary, #f9f4da);
      border-radius: var(--radius-md, 6px);
      padding: 6px 10px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 120ms ease;
      max-width: 240px;
      line-height: 1.4;
    }

    :host([variant="light"]) .tooltip {
      background: var(--bg-card, #1e1e1e);
      color: var(--text-primary, #f9f4da);
      border: var(--border-width, 1px) solid var(--text-primary, #f9f4da);
    }

    /* Top */
    :host(:not([position])) .tooltip,
    :host([position="top"]) .tooltip {
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    /* Bottom */
    :host([position="bottom"]) .tooltip {
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    /* Left */
    :host([position="left"]) .tooltip {
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }

    /* Right */
    :host([position="right"]) .tooltip {
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }

    :host([visible]) .tooltip {
      opacity: 1;
    }
  `;constructor(){super(),this.position=`top`,this.visible=!1,this.delay=300,this._showTimer=null,this._hideTimer=null}render(){return L`
      <span
        class="trigger"
        @mouseenter="${this._show}"
        @mouseleave="${this._hide}"
        @focusin="${this._show}"
        @focusout="${this._hide}"
      >
        <slot></slot>
      </span>
      <div
        class="tooltip"
        role="tooltip"
        aria-hidden="${!this.visible}"
        style="${this.maxWidth?`max-width:${this.maxWidth}`:``}"
        part="tooltip"
      >
        ${this.content||``}
        <slot name="content"></slot>
      </div>
    `}_show(){clearTimeout(this._hideTimer),this._showTimer=setTimeout(()=>{this.visible=!0},this.delay)}_hide(){clearTimeout(this._showTimer),this._hideTimer=setTimeout(()=>{this.visible=!1},100)}};customElements.define(`pastis-tooltip`,Ee);var De=class extends J{static properties={label:{type:String},placeholder:{type:String},options:{type:Array},value:{type:String,reflect:!0},open:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},searchable:{type:Boolean,reflect:!0},multiple:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},error:{type:String}};static styles=s`
    :host { display: block; background: var(--bg-primary, #0d0d0d); }

    .field { display: flex; flex-direction: column; gap: 6px; }

    label {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
    }

    .trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 10px 12px;
      height: auto;
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
      cursor: pointer;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 14px;
      font-weight: 700;
      color: var(--text-secondary, #fff);
      transition: border-color 120ms ease;
      user-select: none;
    }

    :host([size="sm"]) .trigger { font-size: 12px; padding: 8px 10px; }
    :host([size="lg"]) .trigger { font-size: 16px; padding: 12px 16px; }

    .trigger:hover { border-color: var(--text-tertiary, #909498); }

    :host([open]) .trigger {
      border-color: var(--border-focus, #fcba28);
    }

    :host([disabled]) .trigger {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .trigger-text { flex: 1; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .placeholder { color: var(--text-tertiary, #909498); }

    .chevron {
      flex-shrink: 0;
      color: var(--text-tertiary, #909498);
      transition: transform 120ms ease;
      font-size: 12px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    :host([open]) .chevron { transform: rotate(180deg); }

    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      z-index: 1000;
      overflow: hidden;
      max-height: 260px;
      display: flex;
      flex-direction: column;
    }

    .search-wrap {
      padding: 8px;
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      flex-shrink: 0;
    }

    .search-input {
      width: 100%;
      padding: 6px 10px;
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-secondary, #fff);
      outline: none;
      box-sizing: border-box;
    }

    .search-input:focus { border-color: var(--border-focus, #fcba28); }

    .options-list {
      overflow-y: auto;
      padding: 4px;
    }

    .option {
      padding: 8px 12px;
      border-radius: var(--radius-md, 6px);
      cursor: pointer;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      color: var(--text-secondary, #fff);
      transition: background 120ms ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .option:hover { background: rgba(252, 186, 40, 0.1); color: var(--text-primary, #f9f4da); }

    .option.selected {
      background: var(--action-primary, #fcba28);
      color: #000;
    }

    .option.disabled {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    }

    .check { margin-left: auto; font-size: 12px; }

    .no-options {
      padding: 16px;
      text-align: center;
      color: var(--text-tertiary, #909498);
      font-size: 12px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
    }

    .wrap {
      position: relative;
    }

    .error-text {
      font-size: 11px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--status-error, #ed203d);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
    }
  `;constructor(){super(),this.options=[],this.open=!1,this.disabled=!1,this.searchable=!1,this.multiple=!1,this.size=`md`,this._search=``,this._selectedValues=[],this._boundClose=this._handleOutsideClick.bind(this),this._focusedIndex=-1,this._labelId=`pastis-dropdown-label-${Math.random().toString(36).slice(2,9)}`,this._listboxId=`pastis-dropdown-listbox-${Math.random().toString(36).slice(2,9)}`}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._boundClose)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._boundClose)}_handleOutsideClick(e){this.contains(e.target)||(this.open=!1)}_toggle(){this.disabled||(this.open=!this.open,this.open&&(this._focusedIndex=-1,this.searchable?requestAnimationFrame(()=>this.shadowRoot?.querySelector(`.search-input`)?.focus()):requestAnimationFrame(()=>this._focusOptionAt(0))))}_getOptionElements(){return Array.from(this.shadowRoot?.querySelectorAll(`.option`)||[])}_focusOptionAt(e){let t=this._getOptionElements();if(!t.length)return;let n=Math.max(0,Math.min(e,t.length-1));this._focusedIndex=n,t[n]?.focus()}_handleTriggerKeydown(e){e.key===`ArrowDown`?(e.preventDefault(),this.open?this._focusOptionAt(this._focusedIndex+1):(this.open=!0,this._focusedIndex=-1,requestAnimationFrame(()=>this._focusOptionAt(0)))):e.key===`ArrowUp`?(e.preventDefault(),this.open&&this._focusOptionAt(this._focusedIndex-1)):e.key===`Escape`?this.open&&(this.open=!1,this.shadowRoot?.querySelector(`.trigger`)?.focus()):(e.key===`Enter`||e.key===` `)&&this._toggle()}_handleOptionKeydown(e,t,n){e.key===`ArrowDown`?(e.preventDefault(),this._focusOptionAt(n+1)):e.key===`ArrowUp`?(e.preventDefault(),n===0?this.shadowRoot?.querySelector(`.trigger`)?.focus():this._focusOptionAt(n-1)):e.key===`Escape`?(this.open=!1,this.shadowRoot?.querySelector(`.trigger`)?.focus()):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._selectOption(t))}_selectOption(e){e.disabled||(this.multiple?(this._selectedValues.indexOf(e.value)>-1?this._selectedValues=this._selectedValues.filter(t=>t!==e.value):this._selectedValues=[...this._selectedValues,e.value],this.requestUpdate()):(this.value=e.value,this.open=!1,this._search=``),this.dispatchEvent(new CustomEvent(`pastis-change`,{detail:{value:this.multiple?this._selectedValues:e.value,option:e},bubbles:!0,composed:!0})))}_getLabel(){return this.multiple?this._selectedValues.length?this._selectedValues.map(e=>this.options.find(t=>t.value===e)?.label||e).join(`, `):null:this.options.find(e=>e.value===this.value)?.label||null}_isSelected(e){return this.multiple?this._selectedValues.includes(e.value):e.value===this.value}_getFilteredOptions(){return this._search?this.options.filter(e=>e.label.toLowerCase().includes(this._search.toLowerCase())):this.options}render(){let e=this._getLabel(),t=this._getFilteredOptions();return L`
      <div class="field">
        ${this.label?L`<label id="${this._labelId}">${this.label}</label>`:``}
        <div class="wrap">
          <div
            class="trigger"
            @click="${this._toggle}"
            @keydown="${this._handleTriggerKeydown}"
            tabindex="${this.disabled?-1:0}"
            role="combobox"
            aria-expanded="${this.open}"
            aria-haspopup="listbox"
            aria-labelledby="${this.label?this._labelId:``}"
            aria-controls="${this._listboxId}"
            part="trigger"
          >
            <span class="trigger-text">
              ${e?L`${e}`:L`<span class="placeholder">${this.placeholder||`Select an option`}</span>`}
            </span>
            <span class="chevron">▾</span>
          </div>

          ${this.open?L`
            <div class="dropdown" part="dropdown">
              ${this.searchable?L`
                <div class="search-wrap">
                  <input
                    class="search-input"
                    type="text"
                    placeholder="Search…"
                    .value="${this._search}"
                    @input="${e=>{this._search=e.target.value,this.requestUpdate()}}"
                    @click="${e=>e.stopPropagation()}"
                  />
                </div>
              `:``}
              <div class="options-list" role="listbox" id="${this._listboxId}" aria-label="${this.label||`Options`}">
                ${t.length?t.map((e,t)=>L`
                  <div
                    class="option ${this._isSelected(e)?`selected`:``} ${e.disabled?`disabled`:``}"
                    role="option"
                    aria-selected="${this._isSelected(e)?`true`:`false`}"
                    aria-disabled="${e.disabled?`true`:`false`}"
                    @click="${t=>{t.stopPropagation(),this._selectOption(e)}}"
                    @keydown="${n=>this._handleOptionKeydown(n,e,t)}"
                    tabindex="${e.disabled?-1:0}"
                  >
                    ${e.icon?L`<span>${e.icon}</span>`:``}
                    ${e.label}
                    ${this._isSelected(e)?L`<span class="check">✓</span>`:``}
                  </div>
                `):L`<div class="no-options">No options found</div>`}
              </div>
            </div>
          `:``}
        </div>
        ${this.error?L`<span class="error-text">⚠ ${this.error}</span>`:``}
      </div>
    `}};customElements.define(`pastis-dropdown`,De);var Oe=class extends J{static properties={tabs:{type:Array},active:{type:String,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},fullWidth:{type:Boolean,attribute:`full-width`,reflect:!0}};static styles=s`
    :host { display: block; }

    .tabs-container { display: flex; flex-direction: column; }

    .tab-list {
      display: flex;
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      overflow-x: auto;
      scrollbar-width: none;
      gap: 0;
    }

    .tab-list::-webkit-scrollbar { display: none; }

    :host([variant="pills"]) .tab-list {
      border-bottom: none;
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      padding: 4px;
      gap: 4px;
    }

    :host([full-width]) .tab-list { justify-content: stretch; }

    .tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 10px 16px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-tertiary, #909498);
      background: none;
      border: none;
      border-bottom: var(--border-width, 1px) solid transparent;
      margin-bottom: calc(-1 * var(--border-width, 1px));
      cursor: pointer;
      white-space: nowrap;
      position: relative;
      transition: color 120ms ease;
    }

    :host([size="sm"]) .tab-btn { padding: 7px 12px; font-size: 11px; }
    :host([size="lg"]) .tab-btn { padding: 13px 20px; font-size: 13px; }

    :host([full-width]) .tab-btn { flex: 1; justify-content: center; }

    .tab-btn:hover { color: var(--text-secondary, #fff); }

    .tab-btn.active {
      color: var(--text-primary, #f9f4da);
      border-bottom-color: var(--text-primary, #f9f4da);
      font-weight: 700;
    }

    .tab-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .tab-btn:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    /* Pills variant */
    :host([variant="pills"]) .tab-btn {
      border-bottom: none;
      border-radius: var(--radius-sm, 4px);
      margin-bottom: 0;
      border: var(--border-width, 1px) solid transparent;
    }

    :host([variant="pills"]) .tab-btn.active {
      background: var(--action-primary, #fcba28);
      color: #000;
      border-color: var(--action-primary, #fcba28);
    }

    .badge {
      background: var(--bg-elevated, #383c44);
      color: var(--text-tertiary, #909498);
      border-radius: var(--radius-full, 9999px);
      border: var(--border-width, 1px) solid currentColor;
      font-size: 10px;
      font-weight: 700;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      padding: 1px 5px;
      line-height: 14px;
    }

    .tab-btn.active .badge {
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-primary, #f9f4da);
      border-color: var(--text-primary, #f9f4da);
    }

    :host([variant="pills"]) .tab-btn.active .badge {
      background: #000;
      color: var(--text-primary, #f9f4da);
      border-color: var(--text-primary, #f9f4da);
    }

    .tab-panel {
      padding: 20px 0;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--text-secondary, #fff);
      font-size: 14px;
    }
  `;constructor(){super(),this.tabs=[],this.variant=`default`,this.size=`md`,this.fullWidth=!1}updated(e){if(e.has(`tabs`)&&this.tabs.length&&!this.active){let e=this.tabs.find(e=>!e.disabled);e&&(this.active=e.id)}}_selectTab(e){e.disabled||(this.active=e.id,this.dispatchEvent(new CustomEvent(`pastis-tab-change`,{detail:{tab:e.id},bubbles:!0,composed:!0})))}_handleKeydown(e,t){if(e.key===`Enter`||e.key===` `)e.preventDefault(),this._selectTab(t);else if(e.key===`ArrowRight`){let e=this.tabs.indexOf(t),n=this.tabs.find((t,n)=>n>e&&!t.disabled);n&&(this._selectTab(n),this.shadowRoot?.querySelector(`[data-id="${n.id}"]`)?.focus())}else if(e.key===`ArrowLeft`){let e=this.tabs.indexOf(t),n=[...this.tabs].reverse().find((t,n)=>this.tabs.length-1-n<e&&!t.disabled);n&&(this._selectTab(n),this.shadowRoot?.querySelector(`[data-id="${n.id}"]`)?.focus())}}render(){let e=this.tabs.find(e=>e.id===this.active);return L`
      <div class="tabs-container">
        <div class="tab-list" role="tablist" part="tablist">
          ${this.tabs.map(e=>L`
            <button
              class="tab-btn ${e.id===this.active?`active`:``}"
              role="tab"
              aria-selected="${e.id===this.active}"
              aria-controls="panel-${e.id}"
              data-id="${e.id}"
              ?disabled="${e.disabled}"
              @click="${()=>this._selectTab(e)}"
              @keydown="${t=>this._handleKeydown(t,e)}"
              tabindex="${e.id===this.active?0:-1}"
              part="tab"
            >
              ${e.icon?L`<span aria-hidden="true">${e.icon}</span>`:``}
              ${e.label}
              ${e.badge===void 0?``:L`<span class="badge">${e.badge}</span>`}
            </button>
          `)}
        </div>
        <div
          class="tab-panel"
          id="panel-${this.active}"
          role="tabpanel"
          part="panel"
        >
          ${e?.content?L`${e.content}`:L`<slot name="${this.active}"></slot>`}
        </div>
      </div>
    `}};customElements.define(`pastis-tabs`,Oe);var ke=class extends J{static properties={items:{type:Array},multiple:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},openItems:{type:Array,attribute:!1}};static styles=s`
    :host { display: block; }

    .accordion {
      display: flex;
      flex-direction: column;
      gap: 0;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      overflow: hidden;
    }

    :host([variant="flush"]) .accordion {
      border: none;
      border-radius: 0;
      box-shadow: none;
    }

    :host([variant="separated"]) .accordion {
      gap: 8px;
      border: none;
      background: none;
      overflow: visible;
      box-shadow: none;
    }

    .item {
      background: var(--bg-card, #1e1e1e);
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
    }

    .item:last-child { border-bottom: none; }

    :host([variant="flush"]) .item {
      border-radius: 0;
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
    }

    :host([variant="separated"]) .item {
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      overflow: hidden;
      margin-bottom: 4px;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      padding: 16px 20px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      text-align: left;
      transition: background 120ms ease;
    }

    .header:hover { background: rgba(252, 186, 40, 0.05); }

    .header:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .header-content { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }

    .icon { font-size: 16px; flex-shrink: 0; }

    .chevron {
      flex-shrink: 0;
      color: var(--text-tertiary, #909498);
      font-size: 12px;
      transition: transform 120ms ease;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .item.open .chevron { transform: rotate(180deg); }

    .body {
      overflow: hidden;
      height: 0;
      transition: height 100ms;
    }

    .body-inner {
      padding: 0 20px 16px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      color: var(--text-secondary, #fff);
      line-height: 1.6;
      text-transform: none;
      letter-spacing: normal;
    }

    .badge {
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-tertiary, #909498);
      border: var(--border-width, 1px) solid var(--text-tertiary, #909498);
      border-radius: var(--radius-full, 9999px);
      font-size: 10px;
      font-weight: 700;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      padding: 1px 6px;
    }
  `;constructor(){super(),this.items=[],this.multiple=!1,this.openItems=[],this.variant=`default`}_isOpen(e){return this.openItems.includes(e)}_toggle(e){this.multiple?this.openItems=this._isOpen(e)?this.openItems.filter(t=>t!==e):[...this.openItems,e]:this.openItems=this._isOpen(e)?[]:[e],this.requestUpdate(),this.dispatchEvent(new CustomEvent(`pastis-toggle`,{detail:{id:e,open:this._isOpen(e)},bubbles:!0,composed:!0}))}updated(){this.shadowRoot?.querySelectorAll(`.body`).forEach(e=>{let t=e.closest(`.item`),n=e.querySelector(`.body-inner`);t?.classList.contains(`open`)?e.style.height=n.scrollHeight+`px`:e.style.height=`0px`})}render(){return L`
      <div class="accordion" part="accordion">
        ${this.items.map(e=>L`
          <div class="item ${this._isOpen(e.id)?`open`:``}" part="item">
            <button
              id="header-${e.id}"
              class="header"
              @click="${()=>this._toggle(e.id)}"
              aria-expanded="${this._isOpen(e.id)}"
              aria-controls="body-${e.id}"
              part="header"
            >
              <span class="header-content">
                ${e.icon?L`<span class="icon" aria-hidden="true">${e.icon}</span>`:``}
                <span>${e.title}</span>
                ${e.badge===void 0?``:L`<span class="badge">${e.badge}</span>`}
              </span>
              <span class="chevron" aria-hidden="true">▾</span>
            </button>
            <div class="body" id="body-${e.id}" role="region" aria-labelledby="header-${e.id}" part="body">
              <div class="body-inner">${e.content}</div>
            </div>
          </div>
        `)}
      </div>
    `}};customElements.define(`pastis-accordion`,ke);var Ae=class extends J{static properties={items:{type:Array},separator:{type:String},maxItems:{type:Number,attribute:`max-items`}};static styles=s`
    :host { display: block; }

    nav {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0;
    }

    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0;
    }

    li {
      display: inline-flex;
      align-items: center;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
    }

    .crumb {
      color: var(--text-tertiary, #909498);
      text-decoration: none;
      transition: color 120ms ease;
      padding: 4px 2px;
      border-radius: var(--radius-md, 6px);
    }

    .crumb:hover { color: var(--text-primary, #f9f4da); }

    .crumb:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .crumb.active {
      color: var(--text-primary, #f9f4da);
      font-weight: 700;
      cursor: default;
      pointer-events: none;
    }

    .crumb-icon { margin-right: 4px; font-size: 11px; }

    .separator {
      color: var(--text-tertiary, #909498);
      font-size: 12px;
      margin: 0 8px;
      user-select: none;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .ellipsis {
      color: var(--text-tertiary, #909498);
      cursor: pointer;
      padding: 4px 6px;
      border-radius: var(--radius-md, 6px);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      font-size: 12px;
      transition: color 120ms ease;
      background: none;
      border: none;
    }

    .ellipsis:hover { color: var(--text-secondary, #fff); }

    .ellipsis:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }
  `;constructor(){super(),this.items=[],this.separator=`/`,this._expanded=!1}_getVisibleItems(){return!this.maxItems||this.items.length<=this.maxItems||this._expanded?this.items:[this.items[0],{id:`__ellipsis__`,label:`…`},...this.items.slice(-Math.min(2,this.maxItems-1))]}render(){let e=this._getVisibleItems();return L`
      <nav aria-label="Breadcrumb">
        <ol>
          ${e.map((t,n)=>{let r=n===e.length-1;return L`
              <li>
                ${t.id===`__ellipsis__`?L`
                    <button class="ellipsis" @click="${()=>{this._expanded=!0,this.requestUpdate()}}" aria-label="Show all breadcrumb items">…</button>
                  `:r?L`<span class="crumb active" aria-current="page">${t.icon?L`<span class="crumb-icon">${t.icon}</span>`:``}${t.label}</span>`:L`<a class="crumb" href="${t.href||`#`}">${t.icon?L`<span class="crumb-icon">${t.icon}</span>`:``}${t.label}</a>`}
                ${r?``:L`<span class="separator" aria-hidden="true">${this.separator}</span>`}
              </li>
            `})}
        </ol>
      </nav>
    `}};customElements.define(`pastis-breadcrumb`,Ae);var je=class extends J{static properties={total:{type:Number},page:{type:Number,reflect:!0},pageSize:{type:Number,attribute:`page-size`},siblingCount:{type:Number,attribute:`sibling-count`},variant:{type:String,reflect:!0},showInfo:{type:Boolean,attribute:`show-info`}};static styles=s`
    :host { display: block; }

    .pagination {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-wrap: wrap;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .info {
      font-size: 11px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-tertiary, #909498);
      margin-left: auto;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
      padding: 0 6px;
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
      background: var(--bg-primary, #0d0d0d);
      cursor: pointer;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--text-tertiary, #909498);
      transition: border-color 120ms ease, color 120ms ease, box-shadow 120ms ease;
      user-select: none;
    }

    .btn:hover:not(:disabled) {
      border-color: var(--text-primary, #f9f4da);
      color: var(--text-primary, #f9f4da);
    }

    .btn.active {
      background: var(--action-primary, #fcba28);
      border-color: var(--action-primary, #fcba28);
      color: #000;
      font-weight: 700;
    }

    .btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .btn:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .ellipsis {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      color: var(--text-tertiary, #909498);
      font-size: 12px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
    }

    .nav-btn {
      font-size: 14px;
      min-width: 36px;
    }

    /* Pills variant */
    :host([variant="pills"]) .btn {
      border-radius: var(--radius-full, 9999px);
    }

    /* Minimal variant */
    :host([variant="minimal"]) .btn {
      border-color: transparent;
      background: none;
    }

    :host([variant="minimal"]) .btn:hover:not(:disabled) {
      background: rgba(252, 186, 40, 0.05);
      border-color: var(--text-primary, #f9f4da);
    }

    :host([variant="minimal"]) .btn.active {
      background: rgba(252, 186, 40, 0.15);
      color: var(--text-primary, #f9f4da);
      border-color: var(--text-primary, #f9f4da);
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
    }
  `;constructor(){super(),this.page=1,this.pageSize=10,this.total=0,this.siblingCount=1,this.variant=`default`,this.showInfo=!1}get totalPages(){return Math.max(1,Math.ceil(this.total/this.pageSize))}_getPages(){let e=this.totalPages,t=this.page,n=this.siblingCount;if(e<=7)return Array.from({length:e},(e,t)=>t+1);let r=Math.max(2,t-n),i=Math.min(e-1,t+n),a=[1];r>2&&a.push(`...`);for(let e=r;e<=i;e++)a.push(e);return i<e-1&&a.push(`...`),a.push(e),a}_goTo(e){e<1||e>this.totalPages||e===this.page||(this.page=e,this.dispatchEvent(new CustomEvent(`pastis-page-change`,{detail:{page:this.page,pageSize:this.pageSize},bubbles:!0,composed:!0})))}render(){let e=this._getPages(),t=(this.page-1)*this.pageSize+1,n=Math.min(this.page*this.pageSize,this.total);return L`
      <nav aria-label="Pagination">
        <span class="sr-only" aria-live="polite" aria-atomic="true">Page ${this.page} of ${this.totalPages}</span>
        <div class="pagination">
          <button
            class="btn nav-btn"
            @click="${()=>this._goTo(this.page-1)}"
            ?disabled="${this.page<=1}"
            aria-label="Previous page"
          >←</button>

          ${e.map(e=>e===`...`?L`<span class="ellipsis">…</span>`:L`
                <button
                  class="btn ${e===this.page?`active`:``}"
                  @click="${()=>this._goTo(e)}"
                  aria-label="Page ${e}"
                  aria-current="${e===this.page?`page`:void 0}"
                >${e}</button>
              `)}

          <button
            class="btn nav-btn"
            @click="${()=>this._goTo(this.page+1)}"
            ?disabled="${this.page>=this.totalPages}"
            aria-label="Next page"
          >→</button>

          ${this.showInfo?L`
            <span class="info">${t}–${n} of ${this.total}</span>
          `:``}
        </div>
      </nav>
    `}};customElements.define(`pastis-pagination`,je);var Me=class extends J{static properties={value:{type:Number,reflect:!0},max:{type:Number},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},color:{type:String},label:{type:String},showValue:{type:Boolean,attribute:`show-value`,reflect:!0},animated:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},radius:{type:Number},strokeWidth:{type:Number,attribute:`stroke-width`}};static styles=s`
    :host { display: block; }

    .progress-wrap {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .progress-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-tertiary, #909498);
    }

    .label {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
    }

    .track {
      width: 100%;
      background: var(--bg-elevated, #383c44);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-sm, 4px);
      overflow: hidden;
    }

    /* Sizes */
    :host(:not([size])) .track,
    :host([size="md"]) .track { height: 24px; }
    :host([size="xs"]) .track { height: 12px; border-width: var(--border-width, 1px); }
    :host([size="sm"]) .track { height: 16px; border-width: var(--border-width, 1px); }
    :host([size="lg"]) .track { height: 32px; }
    :host([size="xl"]) .track { height: 40px; }

    .bar {
      height: 100%;
      border-radius: 0;
      transition: width 100ms steps(10);
      background: var(--action-primary, #fcba28);
    }

    :host([animated]) .bar {
      background: repeating-linear-gradient(
        90deg,
        var(--action-primary, #fcba28) 0px,
        var(--action-primary, #fcba28) 8px,
        rgba(252,186,40,0.4) 8px,
        rgba(252,186,40,0.4) 12px
      );
      animation: pixel-march 0.5s steps(4) infinite;
    }

    :host([indeterminate]) .bar {
      width: 40% !important;
      animation: pixel-indeterminate 1s steps(8) infinite;
    }

    @keyframes pixel-march {
      0% { background-position: 0 0; }
      100% { background-position: 12px 0; }
    }

    @keyframes pixel-indeterminate {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(350%); }
    }

    /* Ring variant */
    .ring-wrap {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;
    }

    .ring-svg { transform: rotate(-90deg); }

    .ring-track {
      fill: none;
      stroke: var(--bg-elevated, #383c44);
    }

    .ring-fill {
      fill: none;
      stroke: var(--action-primary, #fcba28);
      stroke-linecap: square;
      transition: stroke-dashoffset 100ms steps(10);
    }

    .ring-value {
      position: absolute;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      color: var(--text-primary, #f9f4da);
    }

    :host([size="sm"]) .ring-value { font-size: 14px; }
    :host(:not([size])) .ring-value, :host([size="md"]) .ring-value { font-size: 18px; }
    :host([size="lg"]) .ring-value { font-size: 24px; }
    :host([size="xl"]) .ring-value { font-size: 32px; }

    @media (prefers-reduced-motion: reduce) {
      .bar {
        transition: none;
        animation: none;
      }
      :host([animated]) .bar {
        animation: none;
      }
      :host([indeterminate]) .bar {
        animation: none;
      }
      .ring-fill {
        transition: none;
      }
    }
  `;constructor(){super(),this.value=0,this.max=100,this.variant=`bar`,this.size=`md`,this.animated=!1,this.indeterminate=!1,this.showValue=!1,this.radius=36,this.strokeWidth=6}_getPercentage(){return Math.min(100,Math.max(0,this.value/this.max*100))}_renderRing(){let e=this.radius,t=this.strokeWidth,n=(e+t)*2,r=2*Math.PI*e,i=this._getPercentage(),a=r-i/100*r;return L`
      <div class="ring-wrap" part="ring" role="progressbar" aria-valuenow="${this.indeterminate?void 0:Math.round(i)}" aria-valuemin="0" aria-valuemax="100" aria-label="${this.label||`Progress`}">
        <svg class="ring-svg" width="${n}" height="${n}" viewBox="0 0 ${n} ${n}" aria-hidden="true">
          <circle class="ring-track" cx="${n/2}" cy="${n/2}" r="${e}" stroke-width="${t}" />
          <circle
            class="ring-fill"
            cx="${n/2}" cy="${n/2}" r="${e}"
            stroke-width="${t}"
            stroke-dasharray="${r}"
            stroke-dashoffset="${this.indeterminate?r*.6:a}"
            style="${this.color?`stroke:${this.color}`:``}"
          />
        </svg>
        ${this.showValue&&!this.indeterminate?L`<span class="ring-value">${Math.round(i)}%</span>`:``}
      </div>
      ${this.label?L`<div class="progress-header"><span class="label">${this.label}</span></div>`:``}
    `}render(){if(this.variant===`ring`)return this._renderRing();let e=this._getPercentage();return L`
      <div class="progress-wrap" part="progress">
        ${this.label||this.showValue?L`
          <div class="progress-header">
            ${this.label?L`<span class="label">${this.label}</span>`:``}
            ${this.showValue&&!this.indeterminate?L`<span>${Math.round(e)}%</span>`:``}
          </div>
        `:``}
        <div class="track" role="progressbar" aria-valuenow="${this.indeterminate?void 0:this.value}" aria-valuemin="0" aria-valuemax="${this.max}" aria-label="${this.label||`Progress`}" part="track">
          <div
            class="bar"
            style="width:${this.indeterminate?`40%`:e+`%`};${this.color?`background:${this.color}`:``}"
            part="bar"
          ></div>
        </div>
      </div>
    `}};customElements.define(`pastis-progress`,Me);var Ne=class extends J{static properties={variant:{type:String,reflect:!0},size:{type:String,reflect:!0},removable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},icon:{type:String},color:{type:String}};static styles=s`
    :host { display: inline-flex; align-items: center; }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      border-radius: var(--radius-full, 9999px);
      border: var(--border-width, 1px) solid currentColor;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      cursor: default;
      user-select: none;
      transition: box-shadow 120ms ease;
    }

    /* Sizes */
    .tag { font-size: 11px; padding: 3px 10px; }
    :host([size="sm"]) .tag { font-size: 10px; padding: 2px 7px; }
    :host([size="lg"]) .tag { font-size: 13px; padding: 5px 14px; }

    /* Default variant */
    :host(:not([variant])) .tag,
    :host([variant="default"]) .tag {
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-primary, #f9f4da);
    }

    :host([variant="primary"]) .tag {
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-primary, #f9f4da);
    }

    :host([variant="success"]) .tag {
      background: var(--bg-primary, #0d0d0d);
      color: var(--status-success, #fcba28);
    }

    :host([variant="warning"]) .tag {
      background: var(--bg-primary, #0d0d0d);
      color: var(--status-warning, #fcba28);
    }

    :host([variant="error"]) .tag {
      background: var(--bg-primary, #0d0d0d);
      color: var(--status-error, #ed203d);
    }

    :host([variant="info"]) .tag {
      background: var(--bg-primary, #0d0d0d);
      color: var(--status-info, #fc7428);
    }

    :host([variant="solid"]) .tag {
      background: var(--action-primary, #fcba28);
      color: #000;
      border-color: var(--action-primary, #fcba28);
    }

    :host([variant="outline"]) .tag {
      background: transparent;
      color: var(--text-tertiary, #909498);
      border-color: var(--text-tertiary, #909498);
    }

    :host([disabled]) .tag { opacity: 0.3; pointer-events: none; }

    .remove-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      padding: 0;
      font-size: 12px;
      line-height: 1;
      margin-left: 1px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .remove-btn:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .tag-icon { font-size: 11px; }
  `;constructor(){super(),this.variant=`default`,this.size=`md`,this.removable=!1,this.disabled=!1}render(){return L`
      <span
        class="tag"
        part="tag"
        style="${this.color?`background:${this.color}20;color:${this.color};border:1.5px solid ${this.color}40`:``}"
      >
        ${this.icon?L`<span class="tag-icon" aria-hidden="true">${this.icon}</span>`:``}
        <slot></slot>
        ${this.removable?L`
          <button
            class="remove-btn"
            @click="${this._remove}"
            aria-label="Remove tag"
            ?disabled="${this.disabled}"
          >✕</button>
        `:``}
      </span>
    `}_remove(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`pastis-remove`,{bubbles:!0,composed:!0,detail:{value:this.textContent.trim()}}))}};customElements.define(`pastis-tag`,Ne);var Pe=class extends J{static properties={orientation:{type:String,reflect:!0},variant:{type:String,reflect:!0},label:{type:String},spacing:{type:String,reflect:!0},color:{type:String},thickness:{type:String}};static styles=s`
    :host { display: block; }

    :host([orientation="vertical"]) {
      display: inline-block;
      height: 100%;
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 12px;
      border: none;
      margin: 0;
    }

    /* Horizontal */
    :host(:not([orientation])) .divider,
    :host([orientation="horizontal"]) .divider {
      width: 100%;
      flex-direction: row;
    }

    /* Vertical */
    :host([orientation="vertical"]) .divider {
      width: auto;
      height: 100%;
      flex-direction: column;
      display: inline-flex;
    }

    .line {
      flex: 1;
      background: var(--border-default, #fcba28);
    }

    :host(:not([orientation])) .line,
    :host([orientation="horizontal"]) .line {
      height: var(--border-width, 1px);
    }

    :host([orientation="vertical"]) .line {
      width: var(--border-width, 1px);
      min-height: 16px;
    }

    :host([variant="subtle"]) .line {
      background: var(--border-subtle, #383c44);
      height: var(--border-width, 1px);
    }

    :host([variant="dashed"]) .line {
      background: none;
      border-top: var(--border-width, 1px) dashed var(--text-tertiary, #909498);
      height: 0;
    }

    :host([orientation="vertical"][variant="dashed"]) .line {
      border-top: none;
      border-left: var(--border-width, 1px) dashed var(--text-tertiary, #909498);
      width: 0;
      height: auto;
    }

    :host([variant="dotted"]) .line {
      background: none;
      border-top: var(--border-width, 1px) dotted var(--border-default, #fcba28);
      height: 0;
    }

    :host([variant="thick"]) .line { height: 4px; }

    /* Spacing */
    :host([spacing="sm"]) { margin: 8px 0; }
    :host([spacing="md"]) { margin: 16px 0; }
    :host([spacing="lg"]) { margin: 24px 0; }
    :host([spacing="xl"]) { margin: 32px 0; }

    :host([orientation="vertical"][spacing="sm"]) { margin: 0 8px; }
    :host([orientation="vertical"][spacing="md"]) { margin: 0 16px; }
    :host([orientation="vertical"][spacing="lg"]) { margin: 0 24px; }

    .label {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-tertiary, #909498);
      white-space: nowrap;
    }
  `;constructor(){super(),this.orientation=`horizontal`,this.variant=`solid`}render(){let e=[this.color?`background:${this.color};border-color:${this.color}`:``,this.thickness?`height:${this.thickness};width:${this.thickness}`:``].filter(Boolean).join(`;`);return L`
      <div class="divider" role="separator" aria-orientation="${this.orientation||`horizontal`}" part="divider">
        <span class="line" style="${e}"></span>
        ${this.label?L`<span class="label">${this.label}</span>`:L`<slot></slot>`}
        ${this.label||this.querySelector(`*`)?L`<span class="line" style="${e}"></span>`:``}
      </div>
    `}};customElements.define(`pastis-divider`,Pe);var Fe=class extends J{static properties={heading:{type:String},subheading:{type:String},cta:{type:String},ctaSecondary:{type:String,attribute:`cta-secondary`},image:{type:String},imageAlt:{type:String,attribute:`image-alt`},align:{type:String,reflect:!0},variant:{type:String,reflect:!0},badge:{type:String},fullHeight:{type:Boolean,attribute:`full-height`,reflect:!0},bgColor:{type:String,attribute:`bg-color`},gradient:{type:Boolean,reflect:!0}};static styles=s`
    :host { display: block; }

    .hero {
      padding: 80px 40px;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: var(--bg-primary, #0d0d0d);
    }

    :host([full-height]) .hero { min-height: 100vh; }
    :host([variant="dark"]) .hero { background: var(--bg-primary, #0d0d0d); }
    :host([variant="light"]) .hero { background: var(--bg-card, #1e1e1e); }

    :host([gradient]) .hero {
      background: var(--bg-primary, #0d0d0d);
    }

    .content {
      max-width: 1100px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 60px;
    }

    :host([align="center"]) .content {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    :host([align="right"]) .content { flex-direction: row-reverse; }

    .text-col { flex: 1; min-width: 0; }
    .image-col { flex: 1; display: flex; justify-content: center; }

    .badge-wrap {
      display: inline-flex;
      margin-bottom: 20px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-primary, #f9f4da);
      border: var(--border-width, 1px) solid var(--text-primary, #f9f4da);
      border-radius: var(--radius-full, 9999px);
      padding: 4px 12px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
    }

    h1 {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: clamp(28px, 5vw, 56px);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      text-transform: uppercase;
      color: var(--text-primary, #f9f4da);
      margin: 0 0 20px;
      text-shadow: 4px 4px 0 rgba(252, 186, 40, 0.2);
    }

    p {
      font-family: var(--font-family-body, 'Outfit', sans-serif);
      font-size: 16px;
      line-height: 1.6;
      color: var(--text-secondary, #fff);
      margin: 0 0 36px;
      max-width: 540px;
    }

    :host([align="center"]) p { margin-left: auto; margin-right: auto; }

    .cta-group {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    :host([align="center"]) .cta-group { justify-content: center; }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      border-radius: var(--radius-md, 6px);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      cursor: pointer;
      text-decoration: none;
      border: var(--border-width, 1px) solid currentColor;
      transition: box-shadow 120ms ease, transform 120ms ease;
    }

    .cta-btn.primary {
      background: var(--action-primary, #fcba28);
      color: #000;
      border-color: var(--action-primary, #fcba28);
    }

    .cta-btn.primary:hover {
      box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428);
    }

    .cta-btn.primary:active {
      transform: translate(2px, 2px);
      box-shadow: 4px 4px 0 var(--action-primary, #fcba28);
    }

    .cta-btn.secondary {
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-secondary, #fff);
      border-color: var(--text-secondary, #fff);
    }

    .cta-btn.secondary:hover {
      box-shadow: 6px 6px 0 var(--text-secondary, #fff);
    }

    .cta-btn.secondary:active {
      transform: translate(2px, 2px);
      box-shadow: 4px 4px 0 var(--text-secondary, #fff);
    }

    .hero-image {
      width: 100%;
      max-width: 500px;
      border-radius: var(--radius-md, 6px);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      box-shadow: 8px 8px 0 var(--text-primary, #f9f4da);
    }

    @media (max-width: 768px) {
      .hero { padding: 60px 20px; }
      .content { flex-direction: column !important; }
      .image-col { display: none; }
    }
  `;constructor(){super(),this.align=`left`,this.variant=`light`,this.gradient=!1,this.fullHeight=!1}render(){return L`
      <section class="hero" part="hero" style="${this.bgColor?`background:${this.bgColor}`:``}">
        <div class="content">
          <div class="text-col">
            ${this.badge?L`
              <div class="badge-wrap">
                <span class="badge">✨ ${this.badge}</span>
              </div>
            `:``}
            <h1>${this.heading||``}<slot name="heading"></slot></h1>
            ${this.subheading?L`<p>${this.subheading}</p>`:L`<slot name="subheading"></slot>`}
            <div class="cta-group">
              ${this.cta?L`<button class="cta-btn primary" @click="${()=>this.dispatchEvent(new CustomEvent(`pastis-cta`,{bubbles:!0,composed:!0}))}">${this.cta} <span aria-hidden="true">→</span></button>`:``}
              ${this.ctaSecondary?L`<button class="cta-btn secondary" @click="${()=>this.dispatchEvent(new CustomEvent(`pastis-cta-secondary`,{bubbles:!0,composed:!0}))}">${this.ctaSecondary}</button>`:``}
              <slot name="cta"></slot>
            </div>
          </div>
          ${this.image?L`
            <div class="image-col">
              <img class="hero-image" src="${this.image}" alt="${this.imageAlt||this.heading||`Hero image`}" part="image" />
            </div>
          `:L`<slot name="image"></slot>`}
        </div>
      </section>
    `}};customElements.define(`pastis-hero`,Fe);var Ie=class extends J{static properties={placeholder:{type:String},value:{type:String,reflect:!0},suggestions:{type:Array},loading:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},open:{type:Boolean,reflect:!0},label:{type:String},minChars:{type:Number,attribute:`min-chars`},noResultsText:{type:String,attribute:`no-results-text`}};static styles=s`
    :host { display: block; }

    .field { display: flex; flex-direction: column; gap: 6px; }

    label {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
    }

    .wrap { position: relative; }

    .search-input {
      width: 100%;
      padding: 10px 40px 10px 38px;
      height: auto;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 14px;
      font-weight: 700;
      color: var(--text-secondary, #fff);
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
      outline: none;
      transition: border-color 120ms ease;
      box-sizing: border-box;
    }

    :host([size="sm"]) .search-input { font-size: 12px; padding: 7px 32px 7px 30px; }
    :host([size="lg"]) .search-input { font-size: 16px; padding: 13px 48px 13px 44px; }

    .search-input:focus {
      border-color: var(--border-focus, #fcba28);
      box-shadow: 4px 4px 0 var(--border-focus, #fcba28);
    }

    .search-input::placeholder { color: var(--text-tertiary, #909498); }

    :host([disabled]) .search-input { opacity: 0.3; cursor: not-allowed; }

    .icon-wrap {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      color: var(--text-tertiary, #909498);
      pointer-events: none;
    }

    .search-icon { left: 12px; font-size: 14px; }
    :host([size="sm"]) .search-icon { left: 9px; font-size: 12px; }
    :host([size="lg"]) .search-icon { left: 14px; font-size: 16px; }

    .clear-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: var(--bg-elevated, #383c44);
      border: var(--border-width, 1px) solid var(--text-tertiary, #909498);
      border-radius: var(--radius-sm, 4px);
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text-tertiary, #909498);
      font-size: 11px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      transition: color 120ms ease, border-color 120ms ease;
      pointer-events: all;
    }

    .clear-btn:hover { color: var(--text-primary, #f9f4da); border-color: var(--text-primary, #f9f4da); }

    .spinner-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-top-color: var(--text-primary, #f9f4da);
      border-radius: var(--radius-sm, 4px);
      animation: pixel-spin 0.5s steps(8) infinite;
    }

    @keyframes pixel-spin { to { transform: translateY(-50%) rotate(360deg); } }

    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      z-index: 1000;
      max-height: 300px;
      overflow-y: auto;
      padding: 4px;
    }

    .suggestion {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 12px;
      border-radius: var(--radius-md, 6px);
      cursor: pointer;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      color: var(--text-secondary, #fff);
      transition: background 120ms ease;
    }

    .suggestion:hover, .suggestion.focused {
      background: rgba(252, 186, 40, 0.1);
      color: var(--text-primary, #f9f4da);
    }

    .suggestion-icon { color: var(--text-tertiary, #909498); font-size: 13px; }

    .suggestion-label { flex: 1; }

    .suggestion-sub {
      font-size: 11px;
      color: var(--text-tertiary, #909498);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .no-results {
      padding: 16px;
      text-align: center;
      color: var(--text-tertiary, #909498);
      font-size: 11px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
    }

    mark {
      background: var(--action-primary, #fcba28);
      color: #000;
      border-radius: var(--radius-xs, 2px);
      padding: 0 2px;
      font-weight: 700;
    }
  `;constructor(){super(),this.value=``,this.suggestions=[],this.open=!1,this.loading=!1,this.disabled=!1,this.size=`md`,this.minChars=1,this.noResultsText=`No results found`,this._focusedIndex=-1,this._boundClose=this._handleOutsideClick.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._boundClose)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._boundClose)}_handleOutsideClick(e){this.contains(e.target)||(this.open=!1)}_handleInput(e){this.value=e.target.value,this._focusedIndex=-1,this.open=this.value.length>=this.minChars,this.dispatchEvent(new CustomEvent(`pastis-search`,{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleKeydown(e){let t=this.suggestions;e.key===`ArrowDown`?(e.preventDefault(),this._focusedIndex=Math.min(this._focusedIndex+1,t.length-1),this.requestUpdate()):e.key===`ArrowUp`?(e.preventDefault(),this._focusedIndex=Math.max(this._focusedIndex-1,-1),this.requestUpdate()):e.key===`Enter`?this._focusedIndex>=0&&t[this._focusedIndex]?this._select(t[this._focusedIndex]):(this.dispatchEvent(new CustomEvent(`pastis-submit`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.open=!1):e.key===`Escape`&&(this.open=!1)}_select(e){this.value=e.label||e.value||e,this.open=!1,this.dispatchEvent(new CustomEvent(`pastis-select`,{detail:{item:e},bubbles:!0,composed:!0}))}_clear(){this.value=``,this.open=!1,this.shadowRoot?.querySelector(`.search-input`)?.focus(),this.dispatchEvent(new CustomEvent(`pastis-clear`,{bubbles:!0,composed:!0}))}_highlight(e){if(!this.value)return L`${e}`;let t=e.toLowerCase().indexOf(this.value.toLowerCase());return t===-1?L`${e}`:L`${e.slice(0,t)}<mark>${e.slice(t,t+this.value.length)}</mark>${e.slice(t+this.value.length)}`}render(){return L`
      <div class="field">
        ${this.label?L`<label>${this.label}</label>`:``}
        <div class="wrap" @click="${e=>e.stopPropagation()}">
          <span class="icon-wrap search-icon" aria-hidden="true">🔍</span>
          <input
            class="search-input"
            type="search"
            placeholder="${this.placeholder||`Search…`}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            autocomplete="off"
            role="combobox"
            aria-expanded="${this.open}"
            aria-autocomplete="list"
            @input="${this._handleInput}"
            @focus="${()=>{this.value.length>=this.minChars&&(this.open=!0)}}"
            @keydown="${this._handleKeydown}"
            part="input"
          />
          ${this.loading?L`<span class="spinner-icon"></span>`:``}
          ${this.value&&!this.loading?L`
            <button class="clear-btn" @click="${this._clear}" aria-label="Clear search">✕</button>
          `:``}

          ${this.open?L`
            <div class="dropdown" role="listbox" part="dropdown">
              ${this.suggestions.length?this.suggestions.map((e,t)=>L`
                <div
                  class="suggestion ${t===this._focusedIndex?`focused`:``}"
                  role="option"
                  aria-selected="${t===this._focusedIndex}"
                  @click="${()=>this._select(e)}"
                >
                  ${e.icon?L`<span class="suggestion-icon">${e.icon}</span>`:``}
                  <span class="suggestion-label">${this._highlight(e.label||e)}</span>
                  ${e.sub?L`<span class="suggestion-sub">${e.sub}</span>`:``}
                </div>
              `):L`
                <div class="no-results">${this.noResultsText}</div>
              `}
            </div>
          `:``}
        </div>
      </div>
    `}};customElements.define(`pastis-search`,Ie);var Le=class extends J{static properties={open:{type:Boolean,reflect:!0},position:{type:String,reflect:!0},title:{type:String},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0},persistent:{type:Boolean,reflect:!0},overlay:{type:Boolean,reflect:!0}};static styles=s`
    :host { display: contents; }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
    }

    .drawer {
      position: absolute;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-lg, 8px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 1;
    }

    /* Right */
    :host(:not([position])) .drawer,
    :host([position="right"]) .drawer {
      top: 0; right: 0; bottom: 0;
      width: 400px;
      border-right: none;
    }

    /* Left */
    :host([position="left"]) .drawer {
      top: 0; left: 0; bottom: 0;
      width: 400px;
      border-left: none;
      box-shadow: 6px 0 0 var(--text-primary, #f9f4da);
    }

    /* Bottom */
    :host([position="bottom"]) .drawer {
      bottom: 0; left: 0; right: 0;
      height: auto;
      max-height: 90vh;
      border-bottom: none;
      box-shadow: 0 -6px 0 var(--text-primary, #f9f4da);
    }

    /* Top */
    :host([position="top"]) .drawer {
      top: 0; left: 0; right: 0;
      height: auto;
      max-height: 70vh;
      border-top: none;
      box-shadow: 0 6px 0 var(--text-primary, #f9f4da);
    }

    /* Sizes */
    :host([size="sm"]:not([position="bottom"]):not([position="top"])) .drawer { width: 280px; }
    :host([size="lg"]:not([position="bottom"]):not([position="top"])) .drawer { width: 560px; }
    :host([size="xl"]:not([position="bottom"]):not([position="top"])) .drawer { width: 720px; }
    :host([size="full"]:not([position="bottom"]):not([position="top"])) .drawer { width: 100vw; border-radius: 0; }

    :host([size="sm"][position="bottom"]) .drawer { max-height: 40vh; }
    :host([size="lg"][position="bottom"]) .drawer { max-height: 80vh; }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      flex-shrink: 0;
    }

    :host([position="bottom"]) .drawer-header { padding-top: 8px; }

    .handle {
      width: 36px;
      height: 4px;
      background: var(--text-tertiary, #909498);
      border-radius: var(--radius-sm, 4px);
      margin: 0 auto 8px;
      flex-shrink: 0;
    }

    .drawer-title {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      margin: 0;
    }

    .close-btn {
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--text-primary, #f9f4da);
      border-radius: var(--radius-sm, 4px);
      width: 32px; height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text-primary, #f9f4da);
      font-size: 13px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      transition: box-shadow 120ms ease;
    }

    .close-btn:hover { box-shadow: 4px 4px 0 var(--text-primary, #f9f4da); }
    .close-btn:focus-visible { outline: 2px solid var(--border-focus, #fcba28); outline-offset: 2px; }

    .drawer-body {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--text-secondary, #fff);
      font-size: 14px;
    }

    .drawer-footer {
      padding: 16px 24px;
      border-top: var(--border-width, 1px) solid var(--border-default, #fcba28);
      flex-shrink: 0;
    }
  `;constructor(){super(),this.open=!1,this.position=`right`,this.closable=!0,this.persistent=!1,this.overlay=!0,this.size=`md`,this._boundKeydown=this._handleKeydown.bind(this),this._previousFocus=null}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._boundKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._boundKeydown)}_getFocusableElements(){let e=this.shadowRoot?.querySelector(`.drawer`);if(!e)return[];let t=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`,`);return Array.from(e.querySelectorAll(t)).filter(e=>!e.closest(`[hidden]`)&&e.offsetParent!==null)}updated(e){e.has(`open`)&&(this.open?(this._previousFocus=document.activeElement,document.body.style.overflow=`hidden`,requestAnimationFrame(()=>{(this._getFocusableElements()[0]||this.shadowRoot?.querySelector(`.close-btn`))?.focus()})):(document.body.style.overflow=``,this._previousFocus?.focus(),this._previousFocus=null))}close(){this.open=!1,document.body.style.overflow=``,this.dispatchEvent(new CustomEvent(`pastis-close`,{bubbles:!0,composed:!0}))}_handleKeydown(e){if(this.open){if(e.key===`Escape`&&!this.persistent){this.close();return}if(e.key===`Tab`){let t=this._getFocusableElements();if(!t.length){e.preventDefault();return}let n=t[0],r=t[t.length-1];e.shiftKey?(document.activeElement===n||this.shadowRoot.activeElement===n)&&(e.preventDefault(),r.focus()):(document.activeElement===r||this.shadowRoot.activeElement===r)&&(e.preventDefault(),n.focus())}}}render(){return this.open?L`
      <div class="backdrop" part="backdrop">
        ${this.overlay?L`
          <div class="overlay" @click="${()=>!this.persistent&&this.close()}"></div>
        `:``}
        <div class="drawer" role="dialog" aria-modal="true" aria-label="${this.title||`Drawer`}" part="drawer">
          ${this.position===`bottom`||this.position===`top`?L`<div class="handle"></div>`:``}
          <div class="drawer-header">
            <h2 class="drawer-title">${this.title||``}</h2>
            ${this.closable?L`
              <button class="close-btn" @click="${this.close}" aria-label="Close">✕</button>
            `:``}
          </div>
          <div class="drawer-body" tabindex="0">
            <slot></slot>
          </div>
          <slot name="footer" class="drawer-footer"></slot>
        </div>
      </div>
    `:L``}};customElements.define(`pastis-drawer`,Le);var Re=class extends J{static properties={accept:{type:String},multiple:{type:Boolean,reflect:!0},maxSize:{type:Number,attribute:`max-size`},disabled:{type:Boolean,reflect:!0},label:{type:String},helper:{type:String},dragover:{type:Boolean,reflect:!0},files:{type:Array,attribute:!1},variant:{type:String,reflect:!0},error:{type:String,attribute:!1},maxFiles:{type:Number,attribute:`max-files`}};static styles=s`
    :host { display: block; }

    .field { display: flex; flex-direction: column; gap: 6px; }

    .field-label {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
    }

    .dropzone {
      border: var(--border-width, 1px) dashed var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      padding: 40px 20px;
      text-align: center;
      cursor: pointer;
      transition: background 120ms ease, box-shadow 120ms ease;
      background: var(--bg-card, #1e1e1e);
    }

    .dropzone:hover, :host([dragover]) .dropzone {
      background: rgba(252, 186, 40, 0.05);
      box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428);
    }

    :host([disabled]) .dropzone {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    }

    .has-error .dropzone {
      border-color: var(--status-error, #ed203d);
    }

    .upload-icon {
      font-size: 28px;
      margin-bottom: 12px;
      display: block;
    }

    .upload-text {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      color: var(--text-secondary, #fff);
      margin: 0 0 6px;
    }

    .upload-sub {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      color: var(--text-tertiary, #909498);
      margin: 0;
    }

    .browse-link {
      color: var(--text-primary, #f9f4da);
      font-weight: 700;
      cursor: pointer;
      text-decoration: underline;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    input[type="file"] { display: none; }

    .file-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 12px;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .file-icon { font-size: 18px; flex-shrink: 0; }

    .file-info { flex: 1; min-width: 0; }

    .file-name {
      font-size: 12px;
      font-weight: 700;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--text-secondary, #fff);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-size {
      font-size: 10px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--text-tertiary, #909498);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
    }

    .remove-file {
      background: none;
      border: var(--border-width, 1px) solid var(--text-tertiary, #909498);
      border-radius: var(--radius-sm, 4px);
      cursor: pointer;
      color: var(--text-tertiary, #909498);
      font-size: 12px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      padding: 4px 6px;
      transition: color 120ms ease, border-color 120ms ease;
    }

    .remove-file:hover { color: var(--status-error, #ed203d); border-color: var(--status-error, #ed203d); }

    .error-text {
      font-size: 11px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--status-error, #ed203d);
    }

    .helper-text {
      font-size: 11px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      color: var(--text-tertiary, #909498);
    }

    .progress-bar {
      height: 8px;
      background: var(--bg-elevated, #383c44);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-sm, 4px);
      overflow: hidden;
      margin-top: 4px;
    }

    .progress-fill {
      height: 100%;
      background: var(--action-primary, #fcba28);
      border-radius: 0;
      transition: width 100ms steps(10);
    }
  `;constructor(){super(),this.files=[],this.multiple=!1,this.disabled=!1,this.dragover=!1,this.maxSize=10,this.maxFiles=10,this.error=``}_formatSize(e){return e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(1)+` KB`:(e/(1024*1024)).toFixed(1)+` MB`}_getFileIcon(e){let t=e.type;return t.startsWith(`image/`)?`🖼`:t.startsWith(`video/`)?`🎬`:t.startsWith(`audio/`)?`🎵`:t.includes(`pdf`)?`📄`:t.includes(`zip`)||t.includes(`rar`)?`📦`:t.includes(`spreadsheet`)||t.includes(`excel`)||t.name?.endsWith(`.xlsx`)?`📊`:`📎`}_processFiles(e){this.error=``;let t=Array.from(e);for(let e of t)if(e.size>this.maxSize*1024*1024){this.error=`File "${e.name}" exceeds the ${this.maxSize}MB limit.`;return}if(!this.multiple)this.files=t.slice(0,1);else{let e=[...this.files,...t];if(e.length>this.maxFiles){this.error=`Maximum ${this.maxFiles} files allowed.`;return}this.files=e}this.dispatchEvent(new CustomEvent(`pastis-files-change`,{detail:{files:this.files},bubbles:!0,composed:!0})),this.requestUpdate()}_handleDrop(e){e.preventDefault(),this.dragover=!1,!this.disabled&&this._processFiles(e.dataTransfer.files)}_handleFileInput(e){this._processFiles(e.target.files),e.target.value=``}_removeFile(e){this.files=this.files.filter((t,n)=>n!==e),this.dispatchEvent(new CustomEvent(`pastis-files-change`,{detail:{files:this.files},bubbles:!0,composed:!0})),this.requestUpdate()}_openPicker(){this.disabled||this.shadowRoot?.querySelector(`input[type="file"]`)?.click()}render(){return L`
      <div class="field ${this.error?`has-error`:``}">
        ${this.label?L`<span class="field-label">${this.label}</span>`:``}

        <div
          class="dropzone"
          @click="${this._openPicker}"
          @dragover="${e=>{e.preventDefault(),this.dragover=!0}}"
          @dragleave="${()=>{this.dragover=!1}}"
          @drop="${this._handleDrop}"
          role="button"
          tabindex="${this.disabled?-1:0}"
          @keydown="${e=>(e.key===`Enter`||e.key===` `)&&this._openPicker()}"
          aria-label="Upload files"
          part="dropzone"
        >
          <span class="upload-icon" aria-hidden="true">📁</span>
          <p class="upload-text">
            <span class="browse-link">Choose files</span> or drag & drop
          </p>
          <p class="upload-sub">
            ${this.accept?`Supported: ${this.accept}`:`Any file type accepted`}
            · Max ${this.maxSize}MB${this.multiple?` · Up to ${this.maxFiles} files`:``}
          </p>
        </div>

        <input
          type="file"
          accept="${this.accept||``}"
          ?multiple="${this.multiple}"
          @change="${this._handleFileInput}"
        />

        ${this.files.length?L`
          <div class="file-list">
            ${this.files.map((e,t)=>L`
              <div class="file-item" part="file-item">
                <span class="file-icon">${this._getFileIcon(e)}</span>
                <div class="file-info">
                  <div class="file-name">${e.name}</div>
                  <div class="file-size">${this._formatSize(e.size)}</div>
                </div>
                <button
                  class="remove-file"
                  @click="${e=>{e.stopPropagation(),this._removeFile(t)}}"
                  aria-label="Remove ${e.name}"
                >✕</button>
              </div>
            `)}
          </div>
        `:``}

        ${this.error?L`<p class="error-text" aria-live="polite" role="alert">⚠ ${this.error}</p>`:``}
        ${this.helper&&!this.error?L`<p class="helper-text">${this.helper}</p>`:``}
      </div>
    `}};customElements.define(`pastis-file-upload`,Re);var ze=class extends J{static properties={visible:{type:Boolean,reflect:!0},position:{type:String,reflect:!0},title:{type:String},message:{type:String},acceptText:{type:String,attribute:`accept-text`},rejectText:{type:String,attribute:`reject-text`},settingsText:{type:String,attribute:`settings-text`},privacyUrl:{type:String,attribute:`privacy-url`},showSettings:{type:Boolean,attribute:`show-settings`,reflect:!0},categories:{type:Array},_showDetails:{type:Boolean,attribute:!1}};static styles=s`
    :host { display: block; }
    :host(:not([visible])) { display: none; }

    .banner {
      position: fixed;
      z-index: 9999;
      max-width: 480px;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-lg, 8px);
      padding: 24px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    :host([position="bottom-left"]) .banner,
    :host(:not([position])) .banner { bottom: 24px; left: 24px; }
    :host([position="bottom-right"]) .banner { bottom: 24px; right: 24px; }
    :host([position="bottom-center"]) .banner {
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 600px;
    }
    :host([position="top-left"]) .banner { top: 24px; left: 24px; }
    :host([position="top-right"]) .banner { top: 24px; right: 24px; }

    .cookie-icon { font-size: 24px; margin-bottom: 12px; display: block; }

    .banner-title {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      margin: 0 0 8px;
    }

    .banner-message {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      color: var(--text-secondary, #fff);
      line-height: 1.6;
      margin: 0 0 16px;
    }

    .privacy-link {
      color: var(--text-primary, #f9f4da);
      text-decoration: underline;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .categories {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 16px;
      padding: 12px;
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
    }

    .category {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .category-info {}

    .category-name {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-secondary, #fff);
      margin: 0;
    }

    .category-desc {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 10px;
      color: var(--text-tertiary, #909498);
      margin: 2px 0 0;
    }

    .required-badge {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      background: var(--bg-elevated, #383c44);
      color: var(--text-tertiary, #909498);
      border: var(--border-width, 1px) solid var(--text-tertiary, #909498);
      border-radius: var(--radius-full, 9999px);
      padding: 2px 6px;
      white-space: nowrap;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .btn-row {
      display: flex;
      gap: 8px;
    }

    .btn {
      flex: 1;
      padding: 10px 16px;
      border-radius: var(--radius-md, 6px);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      cursor: pointer;
      border: var(--border-width, 1px) solid currentColor;
      transition: box-shadow 120ms ease, transform 120ms ease;
      text-align: center;
    }

    .btn-primary:hover  { box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428); }
    .btn-primary:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--action-secondary, #fc7428); }
    .btn-secondary:hover  { box-shadow: 4px 4px 0 var(--action-primary, #fcba28); }
    .btn-secondary:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--action-primary, #fcba28); }

    .btn-primary {
      background: var(--action-primary, #fcba28);
      color: #000;
      border-color: var(--action-primary, #fcba28);
    }

    .btn-secondary {
      background: var(--bg-primary, #0d0d0d);
      color: var(--text-secondary, #fff);
      border-color: var(--text-secondary, #fff);
    }

    .btn-ghost {
      background: none;
      color: var(--text-tertiary, #909498);
      border-color: var(--text-tertiary, #909498);
      font-weight: 700;
      font-size: 11px;
      padding: 6px;
    }

    .btn-ghost:hover { color: var(--text-secondary, #fff); border-color: var(--text-secondary, #fff); box-shadow: 4px 4px 0 var(--action-primary, #fcba28); }

    .details-toggle {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      text-decoration: underline;
      margin-bottom: 8px;
      display: block;
    }
  `;constructor(){super(),this.visible=!0,this.position=`bottom-left`,this.title=`We use cookies 🍪`,this.message=`We use cookies to improve your experience and analyze site traffic. By clicking "Accept All", you consent to our use of cookies.`,this.acceptText=`Accept All`,this.rejectText=`Reject All`,this.settingsText=`Manage Preferences`,this.showSettings=!1,this._showDetails=!1,this.categories=[{id:`necessary`,name:`Necessary`,description:`Required for the site to function.`,required:!0,enabled:!0},{id:`analytics`,name:`Analytics`,description:`Help us understand how visitors use the site.`,required:!1,enabled:!1},{id:`marketing`,name:`Marketing`,description:`Used for personalized advertisements.`,required:!1,enabled:!1}]}_accept(){this.visible=!1,this.dispatchEvent(new CustomEvent(`pastis-cookie-accept`,{detail:{categories:this.categories.map(e=>({...e,enabled:!0}))},bubbles:!0,composed:!0}))}_reject(){this.visible=!1,this.dispatchEvent(new CustomEvent(`pastis-cookie-reject`,{detail:{categories:this.categories.map(e=>({...e,enabled:e.required}))},bubbles:!0,composed:!0}))}_savePreferences(){this.visible=!1,this.dispatchEvent(new CustomEvent(`pastis-cookie-save`,{detail:{categories:this.categories},bubbles:!0,composed:!0}))}_toggleCategory(e){this.categories=this.categories.map(t=>t.id===e?{...t,enabled:!t.enabled}:t),this.requestUpdate()}render(){return L`
      <div class="banner" role="dialog" aria-label="Cookie consent" part="banner">
        <span class="cookie-icon" aria-hidden="true">🍪</span>
        <h2 class="banner-title">${this.title}</h2>
        <p class="banner-message">
          ${this.message}
          ${this.privacyUrl?L` <a class="privacy-link" href="${this.privacyUrl}" target="_blank">Privacy Policy</a>`:``}
        </p>

        ${this._showDetails?L`
          <div class="categories">
            ${this.categories.map(e=>L`
              <div class="category">
                <div class="category-info">
                  <p class="category-name">${e.name}</p>
                  <p class="category-desc">${e.description}</p>
                </div>
                ${e.required?L`<span class="required-badge">Required</span>`:L`
                    <pastis-toggle
                      size="sm"
                      ?checked="${e.enabled}"
                      @pastis-change="${()=>this._toggleCategory(e.id)}"
                    ></pastis-toggle>
                  `}
              </div>
            `)}
          </div>
          <div class="actions">
            <div class="btn-row">
              <button class="btn btn-primary" @click="${this._savePreferences}">Save Preferences</button>
            </div>
          </div>
        `:L`
          <div class="actions">
            <div class="btn-row">
              <button class="btn btn-secondary" @click="${this._reject}">${this.rejectText}</button>
              <button class="btn btn-primary" @click="${this._accept}">${this.acceptText}</button>
            </div>
            ${this.showSettings?L`
              <button class="btn btn-ghost" @click="${()=>{this._showDetails=!0,this.requestUpdate()}}">${this.settingsText}</button>
            `:``}
          </div>
        `}
      </div>
    `}};customElements.define(`pastis-cookie-banner`,ze);var Be=class extends J{static properties={label:{type:String},value:{type:String},name:{type:String},checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},helper:{type:String}};static styles=s`
    :host { display: block; }

    label {
      display: inline-flex;
      align-items: flex-start;
      gap: 10px;
      cursor: pointer;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 14px;
      color: var(--text-secondary, #fff);
      user-select: none;
    }

    :host([disabled]) label { opacity: 0.4; cursor: not-allowed; }

    input[type="radio"] {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      margin: 0;
    }

    .radio-visual {
      width: 20px;
      height: 20px;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      background: var(--bg-primary, #0d0d0d);
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 1px;
      position: relative;
      transition: box-shadow 120ms ease;
    }

    :host([checked]) .radio-visual {
      border-color: var(--action-primary, #fcba28);
    }

    :host([checked]) .radio-visual::after {
      content: '';
      position: absolute;
      inset: 2px;
      background: var(--action-primary, #fcba28);
      border-radius: 50%;
    }

    label:hover .radio-visual { box-shadow: 4px 4px 0 var(--action-secondary, #fc7428); }
    :host([disabled]) label:hover .radio-visual { box-shadow: none; }

    :host(:focus-within) .radio-visual { outline: 2px solid var(--border-focus, #fcba28); outline-offset: 2px; }

    .label-wrap { display: flex; flex-direction: column; gap: 2px; }
    .label-text { line-height: 1.4; }
    .helper { font-size: 12px; color: var(--text-tertiary, #909498); margin: 0; }
  `;constructor(){super(),this.checked=!1,this.disabled=!1}render(){return L`
      <label>
        <input
          type="radio"
          .name=${this.name||``}
          .value=${this.value||``}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        />
        <span class="radio-visual" aria-hidden="true"></span>
        ${this.label||this.helper?L`
          <span class="label-wrap">
            ${this.label?L`<span class="label-text">${this.label}</span>`:``}
            ${this.helper?L`<span class="helper">${this.helper}</span>`:``}
          </span>
        `:``}
      </label>
    `}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent(`pastis-change`,{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}_handleKey(e){(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this.disabled||(this.checked=!0,this._handleChange({target:{checked:!0}})))}};customElements.define(`pastis-radio`,Be);var Ve=class extends J{static properties={label:{type:String},value:{type:String},delta:{type:String},trend:{type:String},icon:{type:String},variant:{type:String,reflect:!0}};static styles=s`
    :host { display: block; }

    .stat-card {
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      padding: 20px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: box-shadow 120ms ease;
    }

    .stat-card:hover {
      box-shadow: var(--shadow-md, 5px 5px 0 #231f20);
    }

    :host([variant="primary"]) .stat-card { border-color: var(--action-primary, #fcba28); }
    :host([variant="success"]) .stat-card { border-color: var(--status-success, #fcba28); }
    :host([variant="warning"]) .stat-card { border-color: var(--status-warning, #fcba28); }
    :host([variant="error"]) .stat-card   { border-color: var(--status-error, #ed203d); }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--text-secondary, #f9f4da);
    }

    .icon {
      font-size: 18px;
      opacity: 0.8;
    }

    .value {
      font-size: 32px;
      font-weight: 700;
      color: var(--text-primary, #f9f4da);
      line-height: 1;
    }

    .footer {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
    }

    .delta {
      font-weight: 700;
      text-transform: uppercase;
    }

    .trend-up   { color: var(--status-success, #fcba28); }
    .trend-down { color: var(--status-error, #ed203d); }
    .trend-neutral { color: var(--text-tertiary, #909498); }

    .delta-label { color: var(--text-tertiary, #909498); }
  `;constructor(){super(),this.variant=`default`,this.trend=`neutral`}render(){let e=this.trend===`up`?`▲`:this.trend===`down`?`▼`:`─`,t=`delta trend-${this.trend}`,n=this.delta?`${this.trend===`up`?`up`:this.trend===`down`?`down`:`no change`} ${this.delta} vs last period`:``;return L`
      <div class="stat-card" part="stat-card" role="region" aria-label="${[this.label||`Metric`,this.value||`0`,n].filter(Boolean).join(`, `)}">
        <div class="header">
          <span class="label" aria-hidden="true">${this.label||`Metric`}</span>
          ${this.icon?L`<span class="icon" aria-hidden="true">${this.icon}</span>`:``}
        </div>
        <div class="value" aria-hidden="true">${this.value||`0`}</div>
        ${this.delta?L`
          <div class="footer">
            <span class=${t} aria-hidden="true">${e} ${this.delta}</span>
            <span class="delta-label" aria-hidden="true">vs last period</span>
          </div>
        `:``}
      </div>
    `}};customElements.define(`pastis-stat-card`,Ve);var $=class extends J{static properties={columns:{type:Array},rows:{type:Array},selectable:{type:Boolean,reflect:!0},selected:{type:Array},striped:{type:Boolean,reflect:!0},hoverable:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},emptyText:{type:String}};static styles=s`
    :host { display: block; overflow-x: auto; }

    table {
      width: 100%;
      border-collapse: collapse;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
    }

    thead { background: var(--bg-elevated, #383c44); }

    th {
      text-align: left;
      padding: 10px 14px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--text-primary, #f9f4da);
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      white-space: nowrap;
    }

    td {
      padding: 10px 14px;
      color: var(--text-secondary, #fff);
      border-bottom: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      vertical-align: middle;
    }

    tr:last-child td { border-bottom: none; }

    :host([striped]) tr:nth-child(even) td { background: var(--bg-secondary, #1e1e1e); }

    :host([hoverable]) tbody tr:hover td { background: var(--bg-elevated, #383c44); cursor: pointer; }

    .row-selected td { background: color-mix(in srgb, var(--action-primary, #fcba28) 12%, transparent); }

    .checkbox-cell {
      width: 44px;
      padding: 10px;
    }

    .checkbox-wrapper {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
    }

    .checkbox-real {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      margin: 0;
    }

    .checkbox-visual {
      width: 16px;
      height: 16px;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-sm, 4px);
      background: var(--bg-primary, #0d0d0d);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--action-primary, #fcba28);
      font-size: 11px;
      font-weight: 700;
      pointer-events: none;
    }

    .checkbox-real:focus-visible + .checkbox-visual {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .empty-row td {
      text-align: center;
      color: var(--text-tertiary, #909498);
      padding: 32px;
    }

    .skeleton-cell {
      height: 12px;
      background: var(--bg-elevated, #383c44);
      border-radius: var(--radius-sm, 4px);
      animation: pulse 1s steps(2) infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
  `;constructor(){super(),this.columns=[],this.rows=[],this.selected=[],this.striped=!1,this.hoverable=!1,this.loading=!1,this.emptyText=`No data found.`}_isSelected(e){return this.selected.includes(e)}_toggleRow(e){let t=this._isSelected(e)?this.selected.filter(t=>t!==e):[...this.selected,e];this.selected=t,this.dispatchEvent(new CustomEvent(`pastis-select`,{detail:{selected:t},bubbles:!0,composed:!0}))}_toggleAll(){let e=this.rows.map(e=>e.id);this.selected=e.every(e=>this.selected.includes(e))?[]:e,this.dispatchEvent(new CustomEvent(`pastis-select`,{detail:{selected:this.selected},bubbles:!0,composed:!0}))}render(){let e=this.rows.length>0&&this.rows.every(e=>this._isSelected(e.id));return L`
      <table part="table">
        <thead>
          <tr>
            ${this.selectable?L`
              <th class="checkbox-cell">
                <label class="checkbox-wrapper">
                  <input
                    class="checkbox-real"
                    type="checkbox"
                    .checked=${e}
                    aria-label="Select all rows"
                    @change=${this._toggleAll}
                  />
                  <span class="checkbox-visual" aria-hidden="true">${e?`✓`:``}</span>
                </label>
              </th>
            `:``}
            ${this.columns.map(e=>L`<th>${e.label||e.key}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.loading?[,,,,].fill(0).map(()=>L`
            <tr>
              ${this.selectable?L`<td class="checkbox-cell"></td>`:``}
              ${this.columns.map(()=>L`<td><div class="skeleton-cell"></div></td>`)}
            </tr>
          `):this.rows.length===0?L`
            <tr class="empty-row">
              <td colspan=${this.columns.length+(this.selectable?1:0)}>${this.emptyText}</td>
            </tr>
          `:this.rows.map(e=>L`
            <tr class=${this._isSelected(e.id)?`row-selected`:``}>
              ${this.selectable?L`
                <td class="checkbox-cell">
                  <label class="checkbox-wrapper">
                    <input
                      class="checkbox-real"
                      type="checkbox"
                      .checked=${this._isSelected(e.id)}
                      aria-label="Select row"
                      @change=${()=>this._toggleRow(e.id)}
                    />
                    <span class="checkbox-visual" aria-hidden="true">${this._isSelected(e.id)?`✓`:``}</span>
                  </label>
                </td>
              `:``}
              ${this.columns.map(t=>L`<td>${e[t.key]??`—`}</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    `}};customElements.define(`pastis-table`,$);var He=class extends J{static properties={code:{type:String},language:{type:String},filename:{type:String},copyable:{type:Boolean,reflect:!0},lineNumbers:{type:Boolean,reflect:!0},_copied:{type:Boolean,state:!0}};static styles=s`
    :host { display: block; }

    .code-block {
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      overflow: hidden;
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 14px;
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      background: var(--bg-elevated, #383c44);
      gap: 12px;
    }

    .code-meta {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .filename {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-secondary, #fff);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .lang-badge {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-full, 9999px);
      padding: 1px 6px;
    }

    .copy-btn {
      background: none;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-sm, 4px);
      color: var(--text-primary, #f9f4da);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 4px 10px;
      cursor: pointer;
      transition: background 120ms ease;
    }

    .copy-btn:hover { background: var(--action-primary, #fcba28); color: var(--action-primary-text, #000); }
    .copy-btn.copied { border-color: var(--status-success, #fcba28); color: var(--status-success, #fcba28); }

    .code-scroll { overflow-x: auto; }

    pre {
      margin: 0;
      padding: 16px;
      color: var(--text-code, #fc7428);
      font-size: 13px;
      line-height: 1.6;
      display: flex;
      gap: 0;
    }

    .line-numbers {
      display: flex;
      flex-direction: column;
      min-width: 36px;
      text-align: right;
      padding-right: 16px;
      border-right: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      margin-right: 16px;
      user-select: none;
      color: var(--text-tertiary, #909498);
      font-size: 12px;
      line-height: 1.6;
    }

    code { white-space: pre; flex: 1; }
  `;constructor(){super(),this.code=``,this.language=`text`,this.copyable=!0,this.lineNumbers=!1,this._copied=!1}async _copy(){try{await navigator.clipboard.writeText(this.code),this._copied=!0,setTimeout(()=>{this._copied=!1},2e3)}catch(e){console.warn(`Copy failed`,e)}}render(){let e=(this.code||``).split(`
`);return L`
      <div class="code-block" part="code-block">
        ${this.filename||this.language!==`text`||this.copyable?L`
          <div class="code-header">
            <div class="code-meta">
              ${this.filename?L`<span class="filename">${this.filename}</span>`:``}
              ${this.language&&this.language!==`text`?L`<span class="lang-badge">${this.language}</span>`:``}
            </div>
            ${this.copyable?L`
              <button
                class="copy-btn ${this._copied?`copied`:``}"
                @click=${this._copy}
                aria-label="${this._copied?`Copied to clipboard`:`Copy code`}"
              >
                ${this._copied?`✓ Copied`:`⎘ Copy`}
              </button>
              <span aria-live="polite" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;">
                ${this._copied?`Copied to clipboard`:``}
              </span>
            `:``}
          </div>
        `:``}
        <div class="code-scroll">
          <pre part="pre"><slot>
            ${this.lineNumbers?L`
              <span class="line-numbers">
                ${e.map((e,t)=>L`${t+1}\n`)}
              </span>
            `:``}
            <code>${this.code}</code>
          </slot></pre>
        </div>
      </div>
    `}};customElements.define(`pastis-code-block`,He);var Ue=class extends J{static properties={icon:{type:String},heading:{type:String},body:{type:String},cta:{type:String},ctaSecondary:{type:String},variant:{type:String,reflect:!0}};static styles=s`
    :host { display: block; }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 48px 32px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-md, 6px);
      background: var(--bg-card, #1e1e1e);
      gap: 16px;
    }

    .icon-wrap {
      font-size: 48px;
      line-height: 1;
      opacity: 0.6;
    }

    .heading {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      margin: 0;
    }

    .body {
      font-size: 13px;
      color: var(--text-tertiary, #909498);
      max-width: 320px;
      line-height: 1.6;
      margin: 0;
    }

    .actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 4px;
    }

    .cta-primary {
      background: var(--action-primary, #fcba28);
      color: var(--action-primary-text, #000);
      border: var(--border-width, 1px) solid var(--action-primary, #fcba28);
      border-radius: var(--radius-md, 6px);
      padding: 0 20px;
      height: 44px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      cursor: pointer;
      transition: box-shadow 120ms ease;
    }
    /* primary CTA hover shadow */
    .cta-primary:hover { box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428); filter: brightness(0.9); }

    .cta-secondary {
      background: transparent;
      color: var(--text-tertiary, #909498);
      border: var(--border-width, 1px) solid var(--action-ghost-border, #909498);
      border-radius: var(--radius-md, 6px);
      padding: 0 20px;
      height: 44px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      cursor: pointer;
      transition: box-shadow 120ms ease;
    }
    /* secondary CTA hover shadow */
    .cta-secondary:hover { box-shadow: 4px 4px 0 var(--action-primary, #fcba28); }

    :host([variant="error"]) .heading { color: var(--status-error, #ed203d); }
    :host([variant="error"]) .empty-state { border-color: var(--status-error, #ed203d); }

    .pixel-deco {
      width: 80px;
      height: var(--border-width, 1px);
      background: var(--border-default, #fcba28);
      opacity: 0.3;
    }
  `;constructor(){super(),this.variant=`default`}_getDefaultIcon(){let e={search:`🔍`,error:`✕`,loading:`⟳`,default:`□`};return e[this.variant]||e.default}render(){return L`
      <div class="empty-state" part="empty-state">
        <span class="icon-wrap" aria-hidden="true">${this.icon||this._getDefaultIcon()}</span>
        <div class="pixel-deco"></div>
        ${this.heading?L`<h3 class="heading">${this.heading}</h3>`:``}
        ${this.body?L`<p class="body">${this.body}</p>`:``}
        ${this.cta||this.ctaSecondary?L`
          <div class="actions">
            ${this.cta?L`<button class="cta-primary" aria-label="${this.cta||`Action`}" @click=${()=>this.dispatchEvent(new CustomEvent(`pastis-cta`,{bubbles:!0,composed:!0}))}>${this.cta}</button>`:``}
            ${this.ctaSecondary?L`<button class="cta-secondary" aria-label="${this.ctaSecondary||`Action`}" @click=${()=>this.dispatchEvent(new CustomEvent(`pastis-cta-secondary`,{bubbles:!0,composed:!0}))}>${this.ctaSecondary}</button>`:``}
          </div>
        `:``}
        <slot></slot>
      </div>
    `}};customElements.define(`pastis-empty-state`,Ue);var We=class extends J{static properties={label:{type:String},value:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},removable:{type:Boolean,reflect:!0},icon:{type:String},count:{type:Number}};static styles=s`
    :host { display: inline-block; }

    button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 12px;
      height: 34px;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      color: var(--text-tertiary, #909498);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
      border-radius: var(--radius-full, 9999px);
      transition: border-color 120ms ease, color 120ms ease;
      white-space: nowrap;
    }

    button:hover {
      border-color: var(--action-primary, #fcba28);
      color: var(--text-secondary, #fff);
    }

    :host([selected]) button {
      background: var(--action-primary, #fcba28);
      border-color: var(--action-primary, #fcba28);
      color: var(--action-primary-text, #000);
      filter: brightness(0.9);
    }

    :host([disabled]) button {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }

    .icon { font-size: 14px; }
    .count {
      background: var(--bg-elevated, #383c44);
      color: var(--text-tertiary, #909498);
      font-size: 10px;
      padding: 1px 5px;
      min-width: 18px;
      text-align: center;
      border-radius: var(--radius-full, 9999px);
    }

    :host([selected]) .count {
      background: var(--action-primary-text, #000);
      color: var(--action-primary, #fcba28);
    }

    .remove {
      margin-left: 2px;
      opacity: 0.7;
      font-size: 13px;
      line-height: 1;
      cursor: pointer;
    }
    .remove:hover { opacity: 1; }

    button:focus-visible { outline: 2px solid var(--border-focus, #fcba28); outline-offset: 2px; }
  `;constructor(){super(),this.selected=!1,this.disabled=!1,this.removable=!1}_toggle(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new CustomEvent(`pastis-toggle`,{detail:{selected:this.selected,value:this.value},bubbles:!0,composed:!0})))}_remove(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`pastis-remove`,{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return L`
      <button @click=${this._toggle} aria-pressed="${this.selected}" part="filter-chip">
        ${this.icon?L`<span class="icon" aria-hidden="true">${this.icon}</span>`:``}
        ${this.label||this.value||``}
        ${this.count==null?``:L`<span class="count">${this.count}</span>`}
        ${this.removable?L`<span class="remove" @click=${this._remove} aria-label="Remove">✕</span>`:``}
      </button>
    `}};customElements.define(`pastis-filter-chip`,We);var Ge=class extends J{static properties={filters:{type:Array},active:{type:Array},label:{type:String}};static styles=s`
    :host { display: block; }

    .filter-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      padding: 12px 0;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .filter-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--text-tertiary, #909498);
      margin-right: 4px;
      white-space: nowrap;
    }

    .clear-btn {
      background: none;
      border: var(--border-width, 1px) solid var(--action-ghost-border, #909498);
      border-radius: var(--radius-full, 9999px);
      color: var(--text-tertiary, #909498);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 4px 10px;
      height: 34px;
      cursor: pointer;
    }

    .clear-btn:hover { border-color: var(--status-error, #ed203d); color: var(--status-error, #ed203d); }
  `;constructor(){super(),this.filters=[],this.active=[],this.label=`Filter`}_isActive(e){return this.active.includes(e)}_handleToggle(e){let{value:t,selected:n}=e.detail;this.active=n?[...this.active,t]:this.active.filter(e=>e!==t),this.dispatchEvent(new CustomEvent(`pastis-filter-change`,{detail:{active:this.active},bubbles:!0,composed:!0}))}_clearAll(){this.active=[],this.dispatchEvent(new CustomEvent(`pastis-filter-change`,{detail:{active:[]},bubbles:!0,composed:!0}))}render(){return L`
      <div class="filter-bar" part="filter-bar">
        ${this.label?L`<span class="filter-label">${this.label}:</span>`:``}
        ${this.filters.map(e=>L`
          <pastis-filter-chip
            .label=${e.label}
            .value=${e.value}
            .icon=${e.icon||``}
            .count=${e.count}
            ?selected=${this._isActive(e.value)}
            @pastis-toggle=${this._handleToggle}
          ></pastis-filter-chip>
        `)}
        ${this.active.length>0?L`
          <button class="clear-btn" @click=${this._clearAll}>✕ Clear</button>
        `:``}
      </div>
    `}};customElements.define(`pastis-filter-bar`,Ge);var Ke=class extends J{static properties={theme:{type:String,reflect:!0},size:{type:String,reflect:!0},label:{type:Boolean,reflect:!0},target:{type:String}};static styles=s`
    :host { display: inline-block; }

    button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      color: var(--text-primary, #f9f4da);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      cursor: pointer;
      padding: 0 14px;
      height: 40px;
      transition: box-shadow 120ms ease, background 120ms ease;
    }

    button:hover {
      box-shadow: 4px 4px 0 var(--action-primary, #fcba28);
      background: var(--bg-elevated, #383c44);
    }

    button:focus-visible { outline: 2px solid var(--border-focus, #fcba28); outline-offset: 2px; }

    :host([size="sm"]) button { height: 32px; padding: 0 10px; font-size: 11px; }
    :host([size="lg"]) button { height: 48px; padding: 0 20px; font-size: 15px; }

    .icon { font-size: 16px; line-height: 1; }
    :host([size="sm"]) .icon { font-size: 13px; }
    :host([size="lg"]) .icon { font-size: 20px; }

    .label-text { }
  `;constructor(){super(),this.theme=`dark`,this.size=`md`,this.label=!0}connectedCallback(){super.connectedCallback();let e=this._getTarget();e&&(this.theme=e.getAttribute(`data-theme`)||`dark`),this._observer=new MutationObserver(()=>{let e=this._getTarget()?.getAttribute(`data-theme`)||`dark`;e!==this.theme&&(this.theme=e)}),this._observer.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]})}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect()}_getTarget(){return this.target?document.querySelector(this.target):document.documentElement}_toggle(){let e=this.theme===`dark`?`light`:`dark`,t=()=>{this.theme=e;let t=this._getTarget();t&&t.setAttribute(`data-theme`,e),this.dispatchEvent(new CustomEvent(`pastis-theme-change`,{detail:{theme:e},bubbles:!0,composed:!0}))};if(!document.startViewTransition){t();return}let n=this.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2,a=Math.hypot(Math.max(r,window.innerWidth-r),Math.max(i,window.innerHeight-i));document.startViewTransition(t).ready.then(()=>{document.documentElement.animate({clipPath:[`circle(0px at ${r}px ${i}px)`,`circle(${a}px at ${r}px ${i}px)`]},{duration:500,easing:`ease-in-out`,pseudoElement:`::view-transition-new(root)`})})}render(){let e=this.theme===`dark`,t=e?`☀`:`◑`,n=e?`Light`:`Dark`;return L`
      <button @click=${this._toggle} aria-label="Toggle theme: switch to ${n} mode" part="theme-toggle">
        <span class="icon" aria-hidden="true">${t}</span>
        ${this.label?L`<span class="label-text">${n} Mode</span>`:``}
      </button>
    `}};customElements.define(`pastis-theme-toggle`,Ke);var qe=class extends J{static properties={slides:{type:Array},active:{type:Number,reflect:!0},autoplay:{type:Number},loop:{type:Boolean,reflect:!0},showDots:{type:Boolean,reflect:!0},showArrows:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},_timer:{state:!0}};static styles=s`
    :host { display: block; }

    .carousel {
      position: relative;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      overflow: hidden;
      background: var(--bg-card, #1e1e1e);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
    }

    .slides-track {
      display: flex;
      transition: transform 0.25s steps(5);
    }

    :host([variant="fade"]) .slides-track {
      display: block;
      position: relative;
    }

    .slide {
      flex-shrink: 0;
      width: 100%;
      min-height: 200px;
      position: relative;
    }

    :host([variant="fade"]) .slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.2s steps(4);
      pointer-events: none;
    }

    :host([variant="fade"]) .slide.active-slide {
      opacity: 1;
      position: relative;
      pointer-events: auto;
    }

    .slide-content {
      padding: 32px;
    }

    .slide-image {
      width: 100%;
      display: block;
    }

    .slide-caption {
      padding: 16px;
      border-top: var(--border-width, 1px) solid var(--border-subtle, #383c44);
    }

    .slide-title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      margin: 0 0 4px;
    }

    .slide-body {
      font-size: 12px;
      color: var(--text-tertiary, #909498);
      margin: 0;
    }

    /* Arrows */
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: var(--bg-elevated, #383c44);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-sm, 4px);
      color: var(--text-primary, #f9f4da);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      z-index: 10;
      transition: background 120ms ease;
    }
    .arrow:hover { background: var(--action-primary, #fcba28); color: var(--action-primary-text, #000); }
    .arrow:focus-visible { outline: 2px solid var(--border-focus, #fcba28); outline-offset: 2px; }
    .arrow.prev { left: 8px; }
    .arrow.next { right: 8px; }
    .arrow[disabled] { opacity: 0.3; cursor: not-allowed; pointer-events: none; }

    /* Dots */
    .dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      border-top: var(--border-width, 1px) solid var(--border-subtle, #383c44);
    }

    .dot {
      width: 10px;
      height: 10px;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-sm, 4px);
      background: transparent;
      cursor: pointer;
      transition: background 120ms ease;
      padding: 0;
      flex-shrink: 0;
    }

    .dot:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    .dot.active-dot {
      background: var(--action-primary, #fcba28);
    }

    /* Counter */
    .counter {
      position: absolute;
      top: 8px;
      right: 8px;
      background: var(--bg-elevated, #383c44);
      border: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      border-radius: var(--radius-sm, 4px);
      color: var(--text-primary, #f9f4da);
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      padding: 3px 8px;
    }

    @media (prefers-reduced-motion: reduce) {
      .slides-track {
        transition: none;
      }
      .slide {
        transition: none;
      }
      .arrow {
        transition: none;
      }
      .dot {
        transition: none;
      }
    }
  `;constructor(){super(),this.slides=[],this.active=0,this.autoplay=0,this.loop=!0,this.showDots=!0,this.showArrows=!0,this.variant=`default`}connectedCallback(){super.connectedCallback(),this.autoplay>0&&this._startAutoplay()}disconnectedCallback(){super.disconnectedCallback(),this._stopAutoplay()}_startAutoplay(){this._timer=setInterval(()=>this._next(),this.autoplay)}_stopAutoplay(){this._timer&&=(clearInterval(this._timer),null)}_goTo(e){let t=this.slides.length;t&&(this.active=(e%t+t)%t,this.dispatchEvent(new CustomEvent(`pastis-slide-change`,{detail:{index:this.active},bubbles:!0,composed:!0})))}_prev(){this._goTo(this.active-1)}_next(){this._goTo(this.active+1)}render(){let e=this.slides.length,t=this.loop||this.active>0,n=this.loop||this.active<e-1;return L`
      <div class="carousel" part="carousel">
        <div
          class="slides-track"
          style=${this.variant===`fade`?``:`transform: translateX(-${this.active*100}%)`}
        >
          ${this.slides.map((e,t)=>L`
            <div class="slide ${t===this.active?`active-slide`:``}" part="slide">
              ${e.image?L`<img class="slide-image" src=${e.image} alt=${e.title||`Slide `+(t+1)} />`:``}
              ${e.title||e.body?L`
                <div class="slide-caption">
                  ${e.title?L`<p class="slide-title">${e.title}</p>`:``}
                  ${e.body?L`<p class="slide-body">${e.body}</p>`:``}
                </div>
              `:L`<div class="slide-content"><slot name="slide-${t}"></slot></div>`}
            </div>
          `)}
        </div>

        <span class="counter" aria-live="polite" aria-atomic="true">${this.active+1} / ${e}</span>

        ${this.showArrows?L`
          <button class="arrow prev" ?disabled=${!t} @click=${this._prev} aria-label="Previous">◀</button>
          <button class="arrow next" ?disabled=${!n} @click=${this._next} aria-label="Next">▶</button>
        `:``}

        ${this.showDots?L`
          <div class="dots">
            ${this.slides.map((e,t)=>L`
              <button
                class="dot ${t===this.active?`active-dot`:``}"
                aria-label="Go to slide ${t+1}"
                aria-pressed=${t===this.active}
                @click=${()=>this._goTo(t)}
              ></button>
            `)}
          </div>
        `:``}
      </div>
    `}};customElements.define(`pastis-carousel`,qe);var Je=class extends J{static properties={items:{type:Array},variant:{type:String,reflect:!0}};static styles=s`
    :host { display: block; }

    .timeline {
      position: relative;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    /* vertical rule */
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 0;
      bottom: 0;
      width: var(--border-width, 1px);
      background: var(--border-default, #383c44);
    }

    .item {
      position: relative;
      padding: 0 0 var(--space-2xl, 48px) 40px;
    }

    .item:last-child {
      padding-bottom: 0;
    }

    /* dot */
    .dot {
      position: absolute;
      left: 0;
      top: 4px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--action-primary, #fcba28);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      color: var(--action-primary, #fcba28);
      flex-shrink: 0;
      z-index: 1;
    }

    .card {
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #383c44);
      border-radius: var(--radius-md, 6px);
      padding: var(--space-md, 16px);
      transition: box-shadow 120ms ease, transform 120ms ease;
    }

    .card:hover {
      box-shadow: var(--shadow-md, 5px 5px 0 #231f20);
      transform: translate(-2px, -2px);
    }

    .meta {
      display: flex;
      align-items: center;
      gap: var(--space-sm, 8px);
      margin-bottom: var(--space-xs, 4px);
    }

    .date {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-tertiary, #909498);
    }

    .tag {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: var(--radius-full, 9999px);
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--action-primary, #fcba28);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--action-primary, #fcba28);
    }

    .title {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      margin: 0 0 var(--space-xs, 4px);
    }

    .body {
      font-family: var(--font-family-body, 'Outfit', sans-serif);
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-secondary, #f9f4da);
      margin: 0;
    }

    /* compact: tighter spacing, no card chrome */
    :host([variant="compact"]) .item {
      padding-bottom: var(--space-lg, 24px);
    }

    :host([variant="compact"]) .card {
      background: transparent;
      border: none;
      padding: 0;
      box-shadow: none;
      transform: none;
    }

    :host([variant="compact"]) .card:hover {
      box-shadow: none;
      transform: none;
    }
  `;constructor(){super(),this.items=[],this.variant=`default`}render(){return L`
      <ol class="timeline" part="timeline">
        ${this.items.map(e=>L`
          <li class="item" part="item">
            <div class="dot" aria-hidden="true">${e.icon||`◆`}</div>
            <div class="card" part="card">
              <div class="meta">
                ${e.date?L`<span class="date">${e.date}</span>`:``}
                ${e.tag?L`<span class="tag">${e.tag}</span>`:``}
              </div>
              <p class="title">${e.title}</p>
              ${e.body?L`<p class="body">${e.body}</p>`:``}
              <slot name="item-${e.title}"></slot>
            </div>
          </li>
        `)}
      </ol>
    `}};customElements.define(`pastis-timeline`,Je);var Ye=class extends J{static properties={quote:{type:String},name:{type:String},role:{type:String},company:{type:String},src:{type:String},rating:{type:Number},variant:{type:String,reflect:!0}};static styles=s`
    :host { display: block; }

    .testimonial {
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #383c44);
      border-radius: var(--radius-md, 6px);
      padding: var(--space-xl, 32px);
      position: relative;
      transition: box-shadow 120ms ease, transform 120ms ease;
    }

    .testimonial:hover {
      box-shadow: var(--shadow-md, 5px 5px 0 #231f20);
      transform: translate(-2px, -2px);
    }

    :host([variant="featured"]) .testimonial {
      border-color: var(--action-primary, #fcba28);
      box-shadow: var(--shadow-lg, 5px 5px 0 #fcba28);
    }

    :host([variant="featured"]) .testimonial:hover {
      box-shadow: var(--shadow-xl, 5px 5px 0 #fc7428);
    }

    .mark {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 64px;
      line-height: 1;
      color: var(--action-primary, #fcba28);
      margin: 0 0 var(--space-md, 16px);
      display: block;
      user-select: none;
    }

    .rating {
      display: flex;
      gap: 2px;
      margin-bottom: var(--space-md, 16px);
    }

    .star {
      font-size: 14px;
      color: var(--text-disabled, #383c44);
    }

    .star.filled {
      color: var(--action-primary, #fcba28);
    }

    blockquote {
      margin: 0 0 var(--space-xl, 32px);
      padding: 0;
    }

    .quote-text {
      font-family: var(--font-family-body, 'Outfit', sans-serif);
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-secondary, #f9f4da);
      font-style: italic;
    }

    :host([variant="featured"]) .quote-text {
      font-size: 18px;
    }

    .author {
      display: flex;
      align-items: center;
      gap: var(--space-md, 16px);
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--action-primary, #fcba28);
      overflow: hidden;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 14px;
      font-weight: 700;
      color: var(--text-primary, #f9f4da);
      text-transform: uppercase;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .author-info { display: flex; flex-direction: column; gap: 2px; }

    .author-name {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
    }

    .author-meta {
      font-family: var(--font-family-body, 'Outfit', sans-serif);
      font-size: 12px;
      color: var(--text-tertiary, #909498);
    }
  `;constructor(){super(),this.rating=0,this.variant=`default`}_initials(){if(!this.name)return`?`;let e=this.name.trim().split(/\s+/);return e.length===1?e[0][0].toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}render(){let e=[this.role,this.company].filter(Boolean);return L`
      <figure class="testimonial" part="testimonial">
        <span class="mark" aria-hidden="true">"</span>

        ${this.rating>0?L`
          <div class="rating" role="img" aria-label="Rating: ${this.rating} out of 5 stars">
            ${[1,2,3,4,5].map(e=>L`
              <span class="star ${e<=this.rating?`filled`:``}" aria-hidden="true">★</span>
            `)}
          </div>
        `:``}

        <blockquote>
          <p class="quote-text">
            <slot>${this.quote||``}</slot>
          </p>
        </blockquote>

        <figcaption class="author">
          <div class="avatar" aria-hidden="true">
            ${this.src?L`<img src="${this.src}" alt="${this.name||`Author`}" />`:this._initials()}
          </div>
          <div class="author-info">
            <span class="author-name">${this.name||``}</span>
            ${e.length?L`<span class="author-meta">${e.join(` · `)}</span>`:``}
          </div>
        </figcaption>
      </figure>
    `}};customElements.define(`pastis-testimonial`,Ye);var Xe=class extends J{static properties={label:{type:String},heading:{type:String},subheading:{type:String},align:{type:String,reflect:!0},padding:{type:String,reflect:!0},background:{type:String,reflect:!0},hasDivider:{type:Boolean,attribute:`has-divider`,reflect:!0},maxWidth:{type:String,attribute:`max-width`}};static styles=s`
    :host { display: block; }

    section {
      background: var(--bg-primary, #0d0d0d);
      padding: var(--space-4xl, 96px) var(--grid-margin, 40px);
    }

    :host([background="card"]) section     { background: var(--bg-card, #1e1e1e); }
    :host([background="elevated"]) section { background: var(--bg-elevated, #262522); }
    :host([background="none"]) section     { background: transparent; }

    :host([padding="sm"]) section  { padding-top: var(--space-2xl, 48px); padding-bottom: var(--space-2xl, 48px); }
    :host([padding="lg"]) section  { padding-top: var(--space-5xl, 128px); padding-bottom: var(--space-5xl, 128px); }
    :host([padding="none"]) section { padding-top: 0; padding-bottom: 0; }

    :host([has-divider]) section {
      border-top: var(--border-width, 1px) solid var(--border-default, #383c44);
    }

    .container {
      max-width: var(--section-max-width, 1100px);
      margin: 0 auto;
      width: 100%;
    }

    .header {
      margin-bottom: var(--space-3xl, 64px);
    }

    :host([align="center"]) .header { text-align: center; }
    :host([align="right"])  .header { text-align: right; }

    .label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--bg-primary, #0d0d0d);
      color: var(--action-primary, #fcba28);
      border: var(--border-width, 1px) solid var(--action-primary, #fcba28);
      border-radius: var(--radius-full, 9999px);
      padding: 4px 12px;
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      margin-bottom: var(--space-md, 16px);
    }

    /* Light backgrounds need adjusted label */
    :host([background="card"]) .label,
    :host([background="elevated"]) .label {
      background: var(--bg-elevated, #262522);
    }

    h2 {
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: clamp(22px, 4vw, 40px);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      text-transform: uppercase;
      color: var(--text-primary, #f9f4da);
      margin: 0 0 var(--space-md, 16px);
    }

    p {
      font-family: var(--font-family-body, 'Outfit', sans-serif);
      font-size: 16px;
      line-height: 1.6;
      color: var(--text-secondary, #f9f4da);
      margin: 0;
      max-width: 640px;
    }

    :host([align="center"]) p { margin-left: auto; margin-right: auto; }
    :host([align="right"])  p { margin-left: auto; }

    @media (max-width: 768px) {
      section { padding: var(--space-3xl, 64px) var(--grid-margin-mobile, 16px); }
    }
  `;constructor(){super(),this.align=`left`,this.padding=`md`,this.background=`primary`,this.hasDivider=!1}render(){let e=this.label||this.heading||this.subheading;return L`
      <section part="section" style="${this.maxWidth?`--section-max-width:${this.maxWidth}`:``}">
        <div class="container" part="container">
          ${e?L`
            <header class="header" part="header">
              ${this.label?L`<div class="label">${this.label}</div>`:``}
              ${this.heading?L`<h2>${this.heading}</h2>`:L`<slot name="heading"></slot>`}
              ${this.subheading?L`<p>${this.subheading}</p>`:L`<slot name="subheading"></slot>`}
            </header>
          `:``}
          <slot></slot>
        </div>
      </section>
    `}};customElements.define(`pastis-section`,Xe);var Ze=class extends J{static properties={brand:{type:String},tagline:{type:String},copyright:{type:String},links:{type:Array},socials:{type:Array},variant:{type:String,reflect:!0}};static styles=s`
    :host { display: block; }

    footer {
      margin: var(--space-lg, 24px);
      border-radius: var(--radius-2xl, 2px);
      background: var(--bg-card, #1e1e1e);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      padding: var(--space-4xl, 96px) var(--grid-margin, 40px) var(--space-xl, 32px);
    }

    :host([variant="minimal"]) footer {
      padding: var(--space-xl, 32px) var(--grid-margin, 40px);
      border-radius: 16px;
    }

    .inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ── Main row ─────────────────────────────────────── */
    .main {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(--space-3xl, 64px);
      margin-bottom: var(--space-3xl, 64px);
      align-items: start;
    }

    :host([variant="minimal"]) .main { display: none; }

    .brand-col {}

    .brand-name {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-primary, #f9f4da);
      margin: 0 0 var(--space-xs, 4px);
    }

    .tagline {
      font-family: var(--font-family-body, 'Outfit', sans-serif);
      font-size: 14px;
      color: var(--text-tertiary, #909498);
      margin: 0 0 var(--space-lg, 24px);
    }

    .socials {
      display: flex;
      gap: var(--space-sm, 8px);
      flex-wrap: wrap;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: var(--radius-2xl, 24px);
      background: var(--bg-primary, #0d0d0d);
      border: var(--border-width, 1px) solid var(--border-default, #383c44);
      color: var(--text-secondary, #f9f4da);
      text-decoration: none;
      font-size: 16px;
      transition: box-shadow 120ms ease, transform 120ms ease, border-color 120ms ease;
    }

    .social-link:hover {
      border-color: var(--action-primary, #fcba28);
      box-shadow: var(--shadow-md, 5px 5px 0 #231f20);
      transform: translate(-2px, -2px);
    }

    .social-link:active {
      transform: translate(2px, 2px);
      box-shadow: none;
    }

    .social-link:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
    }

    /* ── Link columns ─────────────────────────────────── */
    .link-columns {
      display: flex;
      gap: var(--space-3xl, 64px);
    }

    .link-col {}

    .col-heading {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      color: var(--text-tertiary, #909498);
      margin: 0 0 var(--space-md, 16px);
    }

    .col-links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-sm, 8px);
    }

    .col-links a {
      font-size: 13px;
      color: var(--text-secondary, #f9f4da);
      text-decoration: none;
      transition: color 120ms ease;
    }

    .col-links a:hover {
      color: var(--action-primary, #fcba28);
    }

    .col-links a:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: 2px;
      border-radius: var(--radius-xs, 2px);
    }

    /* ── Bottom bar ───────────────────────────────────── */
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: var(--space-xl, 32px);
      border-top: var(--border-width, 1px) solid var(--border-default, #383c44);
      gap: var(--space-md, 16px);
      flex-wrap: wrap;
    }

    .copyright {
      font-size: 12px;
      color: var(--text-tertiary, #909498);
    }

    .slot-actions {
      display: flex;
      align-items: center;
      gap: var(--space-sm, 8px);
    }

    /* ── Minimal variant ──────────────────────────────── */
    :host([variant="minimal"]) .bottom {
      border-top: none;
      padding-top: 0;
      justify-content: center;
    }

    @media (max-width: 768px) {
      footer { padding: var(--space-3xl, 64px) var(--grid-margin-mobile, 16px) var(--space-xl, 32px); }
      .main { grid-template-columns: 1fr; }
      .link-columns { flex-wrap: wrap; gap: var(--space-xl, 32px); }
    }
  `;constructor(){super(),this.links=[],this.socials=[],this.variant=`default`}render(){return L`
      <footer part="footer">
        <div class="inner">
          <div class="main" part="main">
            <div class="brand-col">
              <slot name="brand">
                <p class="brand-name">${this.brand||``}</p>
              </slot>
              ${this.tagline?L`<p class="tagline">${this.tagline}</p>`:``}
              ${this.socials.length?L`
                <nav class="socials" aria-label="Social links">
                  ${this.socials.map(e=>L`
                    <a class="social-link" href="${e.href}" aria-label="${e.label}" target="_blank" rel="noopener noreferrer">
                      ${e.icon}
                    </a>
                  `)}
                </nav>
              `:L`<slot name="socials"></slot>`}
            </div>

            ${this.links.length?L`
              <nav class="link-columns" aria-label="Footer navigation">
                ${this.links.map(e=>L`
                  <div class="link-col">
                    <p class="col-heading">${e.heading}</p>
                    <ul class="col-links">
                      ${e.items.map(e=>L`
                        <li><a href="${e.href}">${e.label}</a></li>
                      `)}
                    </ul>
                  </div>
                `)}
              </nav>
            `:L`<slot name="links"></slot>`}
          </div>

          <div class="bottom" part="bottom">
            <span class="copyright">${this.copyright||``}</span>
            <div class="slot-actions">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </footer>
    `}};customElements.define(`pastis-footer`,Ze);var Qe=class extends J{static properties={brand:{type:String},items:{type:Array},active:{type:String},sticky:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},_mobileOpen:{state:!0},_openDropdown:{state:!0}};static styles=s`
    :host { display: block; }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0;
      background: var(--bg-card, #1e1e1e);
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      padding: 0 24px;
      height: 64px;
      position: relative;
      z-index: 100;
    }

    :host([sticky]) nav {
      position: sticky;
      top: 0;
    }

    :host([variant="minimal"]) nav {
      background: transparent;
      border-bottom-color: var(--border-subtle, #383c44);
    }

    /* ── Brand ── */
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text-primary, #f9f4da);
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .brand:hover { color: var(--text-primary, #f9f4da); }

    .brand-icon { font-size: 20px; line-height: 1; }

    /* ── Desktop links ── */
    .nav-links {
      display: flex;
      align-items: stretch;
      gap: 0;
      height: 100%;
      flex: 1;
      padding: 0 24px;
    }

    .nav-item {
      position: relative;
    }

    .nav-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 16px;
      height: 100%;
      color: var(--text-primary, #f9f4da);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      white-space: nowrap;
      position: relative;
      transition: color 120ms ease;
      border-bottom: var(--border-width, 1px) solid transparent;
      margin-bottom: calc(-1 * var(--border-width, 1px));
    }

    .nav-link:hover {
      color: var(--text-secondary, #fff);
      border-bottom-color: var(--action-secondary, #fc7428);
    }

    .nav-link.active {
      color: var(--text-primary, #f9f4da);
      border-bottom-color: var(--action-primary, #fcba28);
    }

    .nav-link:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: -4px;
    }

    .chevron {
      font-size: 9px;
      transition: transform 100ms;
      line-height: 1;
    }

    .chevron-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 8px 0 0;
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font-size: 9px;
      line-height: 1;
    }

    .chevron-btn:focus-visible {
      outline: 2px solid var(--border-focus, #fcba28);
      outline-offset: -4px;
    }

    .nav-item.dropdown-open > .nav-link-wrap .chevron-btn .chevron { transform: rotate(180deg); }

    .nav-link-wrap {
      display: inline-flex;
      align-items: stretch;
      height: 100%;
    }

    /* ── Dropdown ── */
    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      min-width: 200px;
      background: var(--bg-card, #1e1e1e);
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-md, 6px);
      z-index: 200;
      display: none;
      flex-direction: column;
    }

    .nav-item.dropdown-open > .dropdown { display: flex; }

    .dropdown-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      color: var(--text-primary, #f9f4da);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      border-bottom: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      width: 100%;
      text-align: left;
      transition: background 120ms ease, color 120ms ease;
    }

    .dropdown-link:last-child { border-bottom: none; }

    .dropdown-link:hover {
      background: var(--bg-elevated, #383c44);
      color: var(--text-secondary, #fff);
      box-shadow: inset 4px 0 0 var(--action-secondary, #fc7428);
    }

    .dropdown-link.active {
      color: var(--text-primary, #f9f4da);
      box-shadow: inset 4px 0 0 var(--action-primary, #fcba28);
    }

    /* ── Actions slot ── */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    /* ── Hamburger ── */
    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      padding: 8px;
      background: none;
      border: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-radius: var(--radius-sm, 4px);
      cursor: pointer;
      color: var(--text-primary, #f9f4da);
      flex-shrink: 0;
      transition: box-shadow 120ms ease;
    }

    .hamburger:hover { box-shadow: 4px 4px 0 var(--action-secondary, #fc7428); }
    .hamburger:focus-visible { outline: 2px solid var(--border-focus, #fcba28); outline-offset: 2px; }

    .bar {
      display: block;
      width: 100%;
      height: 3px;
      background: var(--text-primary, #f9f4da);
      transition: transform 100ms, opacity 100ms;
    }

    .hamburger[aria-expanded="true"] .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .hamburger[aria-expanded="true"] .bar:nth-child(2) { opacity: 0; }
    .hamburger[aria-expanded="true"] .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

    /* ── Mobile menu ── */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--bg-card, #1e1e1e);
      border-bottom: var(--border-width, 1px) solid var(--border-default, #fcba28);
      border-top: none;
      flex-direction: column;
      z-index: 99;
      max-height: calc(100vh - 64px);
      overflow-y: auto;
    }

    .mobile-menu.open { display: flex; }

    .mobile-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 24px;
      color: var(--text-primary, #f9f4da);
      font-family: var(--font-family-mono, 'Fira Code', monospace);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide, 0.05em);
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      border-bottom: var(--border-width, 1px) solid var(--border-subtle, #383c44);
      width: 100%;
      text-align: left;
      transition: background 120ms ease, color 120ms ease;
    }

    .mobile-link:last-child { border-bottom: none; }
    .mobile-link:hover { background: var(--bg-elevated, #383c44); color: var(--text-secondary, #fff); }
    .mobile-link.active { color: var(--text-primary, #f9f4da); border-left: 4px solid var(--action-primary, #fcba28); padding-left: 20px; }

    .mobile-sub-link {
      padding-left: 48px;
      font-size: 11px;
      background: var(--bg-secondary, #1e1e1e);
    }

    .mobile-sub-link:hover { background: var(--bg-elevated, #383c44); }

    ::slotted([slot="mobile-actions"]) {
      display: block;
      width: 100%;
      margin: 0;
      border-top: var(--border-width, 1px) solid var(--border-subtle, #383c44);
    }

    /* ── Responsive breakpoint ── */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-actions { display: none; }
      .hamburger { display: flex; }
    }

    @media (min-width: 769px) {
      .mobile-menu { display: none !important; }
    }
  `;constructor(){super(),this.items=[],this.variant=`default`,this.sticky=!1,this._mobileOpen=!1,this._openDropdown=null,this._boundClose=this._handleOutsideClick.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._boundClose)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._boundClose)}_handleOutsideClick(e){this.contains(e.target)||(this._openDropdown=null)}_toggleMobile(){this._mobileOpen=!this._mobileOpen}_toggleDropdown(e){this._openDropdown=this._openDropdown===e?null:e}_handleNavClick(e,t){if(e.children?.length){t.preventDefault(),this._toggleDropdown(e.id);return}this._mobileOpen=!1,this._openDropdown=null,this.dispatchEvent(new CustomEvent(`pastis-nav-click`,{detail:{item:e},bubbles:!0,composed:!0}))}_renderDropdownLink(e){return L`
      <a
        class="dropdown-link ${this.active===e.id?`active`:``}"
        href=${e.href||`#`}
        @click=${t=>this._handleNavClick(e,t)}
      >
        ${e.icon?L`<span aria-hidden="true">${e.icon}</span>`:``}
        ${e.label}
      </a>
    `}_renderDesktopItem(e){let t=this.active===e.id||e.children?.some(e=>e.id===this.active),n=e.children?.length>0,r=this._openDropdown===e.id;return L`
      <div class="nav-item ${r?`dropdown-open`:``}">
        ${n?L`
          <div class="nav-link-wrap">
            <a
              class="nav-link ${t?`active`:``}"
              href=${e.href||`#`}
              @click=${t=>this._handleNavClick(e,t)}
            >
              ${e.icon?L`<span aria-hidden="true">${e.icon}</span>`:``}
              ${e.label}
            </a>
            <button
              class="chevron-btn"
              aria-haspopup="true"
              aria-expanded=${String(r)}
              aria-label="Toggle ${e.label} submenu"
              @click=${t=>{t.preventDefault(),this._toggleDropdown(e.id)}}
            ><span class="chevron" aria-hidden="true">▼</span></button>
          </div>
        `:L`
          <a
            class="nav-link ${t?`active`:``}"
            href=${e.href||`#`}
            @click=${t=>this._handleNavClick(e,t)}
          >
            ${e.icon?L`<span aria-hidden="true">${e.icon}</span>`:``}
            ${e.label}
          </a>
        `}
        ${n?L`
          <div class="dropdown" role="menu">
            ${e.children.map(e=>this._renderDropdownLink(e))}
          </div>
        `:``}
      </div>
    `}_renderMobileItem(e){return L`
      <a
        class="mobile-link ${this.active===e.id?`active`:``}"
        href=${e.href||`#`}
        @click=${t=>this._handleNavClick(e,t)}
      >
        ${e.icon?L`<span aria-hidden="true">${e.icon}</span>`:``}
        ${e.label}
      </a>
      ${e.children?.map(e=>L`
        <a
          class="mobile-link mobile-sub-link ${this.active===e.id?`active`:``}"
          href=${e.href||`#`}
          @click=${t=>this._handleNavClick(e,t)}
        >
          ${e.icon?L`<span aria-hidden="true">${e.icon}</span>`:``}
          ${e.label}
        </a>
      `)}
    `}render(){return L`
      <nav part="nav" role="navigation" aria-label="Main navigation">
        <!-- Brand -->
        <a class="brand" href="/" part="brand">
          <slot name="brand-icon">
            ${this.brand?L`<span class="brand-icon">▶</span>`:``}
          </slot>
          <slot name="brand">${this.brand||``}</slot>
        </a>

        <!-- Desktop links -->
        <div class="nav-links" role="list">
          ${this.items.map(e=>this._renderDesktopItem(e))}
          <slot name="links"></slot>
        </div>

        <!-- Actions -->
        <div class="nav-actions">
          <slot name="actions"></slot>
        </div>

        <!-- Hamburger -->
        <button
          class="hamburger"
          aria-label=${this._mobileOpen?`Close menu`:`Open menu`}
          aria-expanded=${String(this._mobileOpen)}
          aria-controls="mobile-menu"
          @click=${this._toggleMobile}
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </nav>

      <!-- Mobile menu -->
      <div
        id="mobile-menu"
        class="mobile-menu ${this._mobileOpen?`open`:``}"
        part="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
      >
        ${this.items.map(e=>this._renderMobileItem(e))}
        <slot name="mobile-links"></slot>
        <slot name="mobile-actions"></slot>
      </div>
    `}};return customElements.define(`pastis-nav`,Qe),e.PastisAccordion=ke,e.PastisAlert=xe,e.PastisAvatar=ye,e.PastisBadge=ve,e.PastisBreadcrumb=Ae,e.PastisButton=Y,e.PastisCard=be,e.PastisCarousel=qe,e.PastisCheckbox=Z,e.PastisCodeBlock=He,e.PastisCookieBanner=ze,e.PastisDivider=Pe,e.PastisDrawer=Le,e.PastisDropdown=De,e.PastisEmptyState=Ue,e.PastisFileUpload=Re,e.PastisFilterBar=Ge,e.PastisFilterChip=We,e.PastisFooter=Ze,e.PastisHero=Fe,e.PastisInput=X,e.PastisModal=Se,e.PastisNav=Qe,e.PastisPagination=je,e.PastisProgress=Me,e.PastisRadio=Be,e.PastisSearch=Ie,e.PastisSection=Xe,e.PastisSkeleton=Te,e.PastisSpinner=we,e.PastisStatCard=Ve,e.PastisTable=$,e.PastisTabs=Oe,e.PastisTag=Ne,e.PastisTestimonial=Ye,e.PastisThemeToggle=Ke,e.PastisTimeline=Je,e.PastisToast=Ce,e.PastisToggle=Q,e.PastisTooltip=Ee,e})({});