class SuperFooterComponent extends HTMLElement{

    constructor(){
        super(); 
        this.attachShadow({mode: 'open'});
        
        }
    
    
        connectedCallback(){
            this.shadowRoot.innerHTML = '<p>GAMINNNNNNNNNNNNNNNNNNNNNNG</>'
        }
    
    
        render(){

            this.shadowRoot.innerHTML= `
            <link rel="stylesheet" href="./web-components/super-footer-stylestyle.css">
            <p>AAAAAAAAAAAAAAAAAAA</p>`

        }
    
    
    
    
    }
    

    customElements.define('super-footer', SuperFooterComponent);
    //collega HTML e JS