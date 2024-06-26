const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
    .main-footer{
        color:rgb(144, 22, 23);
        background-color: rgb(170, 170, 170);
        font-family: inherit;
        font-size: 14px;
        padding: 30px 20px 40px 20px;
        margin-top: 70px;
    }
    .footer-right{
        float:right;
        text-align: right;
        font-weight: bold;
        font-style: italic;
    }
</style>
<footer class="main-footer">
    &#9400; Librairie l'indépendante
    <div class="footer-right">26, allée du Sphinx <br> 45020 Tournepioche</div>
</footer> 
`;

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}   

customElements.define('footer-component', Footer);