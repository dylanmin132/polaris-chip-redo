import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js"



export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Abdul Carter";
    this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROiwB6j4B_koRartk57tx2giV1T-wJIadKXg&s";
    this.fancy = false;
    ;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([fancy]){
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      .cardBorder{
        width: 300px;
        border: 3px solid;
        border-radius: 12px;
      }
      .playerName{
        font-size: 24px;
        text-align: center;
        font-weight: bold;
      }
      .playerPhoto{
        width: 100%;
        border-radius: 8px;
    
      }
      .playerPos{
        text-align: center;
        font-weight: bold;
      }
      .playerTeam{
        text-align: center;
        font-weight: bold;
      }

      .button{
        text-align: center;
      }

      details summary{
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div{
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') != null) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div id = "cardlist">
      <div class = "cardBorder">
        <h1 class = "playerName"><b>${this.title}</b></h1>
        <meme-maker
                image-url = "${this.image}"
                  bottom-text = "The GOATS"
                top-text ="These guys are">
            </meme-maker>
        
            <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>

            <div>
                <slot></slot>
                <a href = ${this.link} target = "_blank">
                  <button class = "button"><em>Details</em></button>
                </a>
              </div>
            </details>
        </div>
      </div>`;
}

  static get properties() {
    return {
      fancy: {type: Boolean, Reflect: true},
      title: { type: String },
      image: { type: String },
      link:  {type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
