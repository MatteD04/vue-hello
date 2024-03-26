//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao Boolean',
            srcImage: 'https://www.focusjunior.it/content/uploads/2016/09/spiaggia.jpg'
        };
    }
}).mount('#app');