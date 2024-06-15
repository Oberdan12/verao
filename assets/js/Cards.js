class Cards {

    constructor(){
        this.posicaoSectionDicas = document.getElementById('section-dicas');
        this.cardEsqu =document.querySelector('.card-esqu');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards(){
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll(){
        const posicao = 
        this.posicaoSectionDicas.getBoundingClientRect()['y'];
        console.log(posicao);
        if (posicao >= 55){
            this.cardEsqu.style.transform = `translate(${((-posicao) +55)/15}%)`;
            this.cardDir.style.transform = `translate(${((posicao) - 55)/15}%)`;

        }

    }

    



}

export{ Cards }