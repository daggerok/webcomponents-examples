window['daggerok.app.DEBUG'] = true;

(function bootstrap() {
  'use strict';

  const DEBUG = window['daggerok.app.DEBUG'];
  const debug = (...content) => {
    if (DEBUG) console.log(...content);
  };

  const webComponentsAreSupported = () =>
    ('registerElement' in document)
    && ('import' in document.createElement('link'))
    && ('content' in document.createElement('template'));

  const KEY_CODE = {
    ENTER: 13,
    SPACE: 32,
  };

  function finalizeLazyLoading() {
    debug('finalizing lazy loading...');

    const template = document.createElement('template');

    template.innerHTML = `
      <style>
      :host {
        display: inline-block;
        border: var(--toggle-border, 1px solid grey);
        padding: 3px;
      }
      :host([pressed]) {
        background: darkgray;
      }
      :host([disabled]) {
        background: lightgray;
      }
      </style>
      <slot></slot>
    `;

    class MyToggledButton extends HTMLElement {
      static get observedAttributes() {
        return [
          'pressed',
          'disabled',
        ];
      }

      constructor() {
        super();
        // shadow DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }

      connectedCallback() {
        if (!this.hasAttribute('role')) this.setAttribute('role', 'button');
        if (!this.hasAttribute('tabindex')) this.setAttribute('tabindex', '0');
        if (!this.hasAttribute('aria-pressed')) this.setAttribute('aria-pressed', 'false');

        this.addEventListener('click', this._onClick);
        this.addEventListener('keydown', this._onKeyDown);
      }

      set pressed(value) {
        const isPressed = Boolean(value);
        if (isPressed) this.setAttribute('pressed', '');
        else this.removeAttribute('pressed');
      }

      get pressed() {
        return this.hasAttribute('pressed');
      }

      set disabled(value) {
        const isDisabled = Boolean(value);
        if (isDisabled) this.setAttribute('disabled', '');
        else this.removeAttribute('disabled');
      }

      get disabled() {
        return this.hasAttribute('disabled');
      }

      attributesChangedCallbacl(name, _oldVal, newVal) {
        const hasValue = !!newVal;
        this.setAttribute(`aria-${name}`, hasValue);
      }

      _togglePressed() {
        this.pressed = !this.pressed;
      }

      _onClick() {
        this._togglePressed();
      }

      _onKeyDown(event) {
        if (event.altKey) return;
        switch (event.keyCode) {
          case KEY_CODE.ENTER:
          case KEY_CODE.SPACE:
            event.preventDefault();
            this._togglePressed();
            break;
          default:
            break;
        }
      }
    }

    window.customElements.define('my-toggled-button', MyToggledButton);

    debug('lazy loading finalized');
  }

  debug('web components are supported', webComponentsAreSupported());
  document.addEventListener('load', e => debug('load document'), false);
  document.addEventListener('DOMContentLoaded', e => debug('DOM content loaded'), false);

  if (!webComponentsAreSupported()) {

    const script = document.createElement('script');

    script.async = true;
    script.src = './bower_components/webcomponentsjs/webcomponents-loader.js';
    script.onload = finalizeLazyLoading;
    document.head.appendChild(script);
    debug('polyfills where added');
  }

  finalizeLazyLoading();

})();
