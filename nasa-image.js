import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
    };
  }

  static get styles() {
    return [css`
    
    .image {
    display: inline-block;
    width: 240px;
    }

    .image:hover {
      background-color: purple;
    }

    .image div {
    max-width: 200px;
    font-size: 16px;
    font-weight: bold;
    }

    .image img {
    display: block;
    width: 240px;
    height: 240px;
    }

    `];
  }

  render() {
    return html`
    <a href="${this.source}" target="_blank">
      <div class="image">
        <img src="${this.source}" alt="${this.title}"/>
        <div>${this.title}</div>
        <div>${this.owner}</div>
      </div>
    </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
globalThis.customElements.define(NasaImage.tag, NasaImage);