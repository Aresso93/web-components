class GameCardComponent extends HTMLElement{

    constructor(){
        super(); 
        this.attachShadow({mode: 'open'});
        
        }
    
    
        connectedCallback(){
            this.render();
        }
    
    
        render(){

            if (this.game) {
                //.game è una proprietà che abbiamo dato alla card nel file game-list-component
            
            // this.shadowRoot.innerHTML = '';
            // const div = document.createElement('div');
            // this.shadowRoot.appendChild(div);

            // const h3 = document.createElement('h3');
            // h3.appendChild(document.createTextNode(this.game.title))

            // div.appendChild(h3);

            this.shadowRoot.innerHTML = `
            <style>
            .card{
                display: flex;
                flex-direction: column;
                background-color: white;
                border-radius: 16px;
                padding: 16px;
                margin-bottom: 4px;
            }
            .card-title{
                font-size: x-large;
                font-weight: bold;
            }
            
            .card-author{
                font-size: large;
                
            }

            .card-details{
                display: flex;
            }

            .card-detail{
                flex: 1;
            }

            </style>
            `
            //il += qui sotto funziona come quello delle funzioni. Aggiunge quello che segue all'innerHTML anziché cancellarlo tutto
            this.shadowRoot.innerHTML += `  
            <div class ="card">
                <span class="card-title">${this.game.title}</span>
                <span class="card-author">${this.game.author}</span>
                <div class="card-details">
                    <span class="card-detail">${this.game.type}</span>
                    <span class="card-detail">${this.game.yop}</span>
                    <span class="card-detail">${this.game.isMultiplayer ? 'Multiplayer' : 'Single player'}</span>
                </div>
            </div>
            `

            const deleteBtn = document.createElement('button')
            deleteBtn.appendChild(document.createTextNode('cancellami'));
            this.shadowRoot.querySelector('.card').appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => this.emitEvent());

        }
    }
    
    emitEvent(){

        const customEvent = new CustomEvent('card-clicked', {detail: this.game.title});
        this.dispatchEvent(customEvent); //dispatch emana l'evento a TUTTI GLI ALTRI FILE JS

    }
    
    
}
    

    customElements.define('game-card', GameCardComponent);
    //collega HTML e JS