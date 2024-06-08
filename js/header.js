const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
.titre-header{
    font-family: Lucida Calligraphy, cursive;
    color:rgb(170, 51, 34); 
    font-size:34px; 
    text-align: center;
    text-shadow: 1px 2px 2px lightgray;
    font-weight: bold;
    padding-bottom: 20px;
}
.menu-header{
    background-color: rgb(170, 51, 34);
    width: 100%;
    text-align: center;
}
.menu-col{
    color:rgb(204,204,204);
    font-weight: bold;
    font-size:12px;
    display: inline-block;
    border-right: 1px dashed rgb(204,204,204);
    padding: 10px 20px 10px 20px;
    text-decoration: none;
}
.menu-col a{
    color:rgb(204,204,204);
    text-decoration: none;
}
.menu-col:hover, a:hover, a:visited:hover{
    color: white;
    background-color: rgb(204,204,204);
}
</style
<head>
    <div class="titre-header">
        Librairie L'indépendante
    </div>
    <div class="menu-header">
            <div class="menu-col"><a href="index.html">Accueil</a></div>
            <div class="menu-col"><a href="presentation.html">Présentation</a></div>
            <div class="menu-col"><a href="coupsCoeur.html">Nos coups de coeur</a></div>
            <div class="menu-col"><a href="extraits.html">Extraits choisis</a></div>
            <div class="menu-col"><a href="template.html">Template</a></div>
    </div>
    <img src="../img/bandeau.jpg" width="100%" style="margin-bottom: 30px;">
</head>
`;

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}   

customElements.define('header-component', Header);
