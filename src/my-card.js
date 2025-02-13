import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Abdul Carter";
    this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROiwB6j4B_koRartk57tx2giV1T-wJIadKXg&s";
    this.link = "";
  }

  static get styles() {
    return css`
      :host {
        display: block;
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
    `;
  }

  render() {
    return html`
    <div id = "cardlist">
      <div class = "cardBorder">
        <h1 class = "playerName"><b>${this.title}</b></h1>
          <img class = "playerPhoto" src = "${this.image}" alt=${this.title} />
      <p>Abdul Carter is a starting defensive end for the Pennsylvania State university. He is currently a junior and is planning on entering the 2024 NFL draft. He is expected to go top 10 overall.</p>  
      
      <a href = ${this.link} target = "_blank">
        <button class = "button"><em>Details</em></button>
      </a>
    </div>
  </div>`;
}

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link:  {type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
