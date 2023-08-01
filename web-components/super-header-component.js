class SuperHeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    //shadowRoot fa un po' quello che fa document per l'HTML generale, ma per questo nello specifico
  }

  //questa funzione ci dice cosa fare quando l'HTML riconosce il nostro web component, qui il super header
  connectedCallback() {
    const style = document.createElement("style");
    style.innerHTML = `h1{color: ${this.getAttribute('title-color')}}`
    this.shadowRoot.appendChild(style);

    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(this.getAttribute('super-title'))); //questo se lo pesca dal file HTML
    const page2Link = document.createElement("a");
    page2Link.href = "./page2.html";
    page2Link.appendChild(document.createTextNode("Pagina 2"));
    this.shadowRoot.appendChild(page2Link);
    this.shadowRoot.appendChild(h1);
    //this.shadowRoot.innerHTML = '<h1>GAMINGGGG</>'
  }
}

customElements.define("super-header", SuperHeaderComponent);
//collega HTML e JS
