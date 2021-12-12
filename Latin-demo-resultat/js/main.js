import styles from './styles.js';

const zoomIn = document.querySelector('.zoomIn');
const zoomOut = document.querySelector('.zoomOut');
const titre = document.querySelectorAll('h1');
const paragraphe = document.querySelectorAll('p');
const section = document.querySelectorAll('.mainPage');

zoomIn.addEventListener('click', async () => {
    const { applyStyle } = await import('./loupe.js');
    applyStyle(titre, styles.titre);   
    applyStyle(paragraphe, styles.paragraphe);  
    applyStyle(section, styles.section);   
});

zoomOut.addEventListener('click', async () => {
    const { modifierTailleTexte } = await import('./loupe.js');
    document.querySelector('section:nth-child(2)').style.width = "60%";
    modifierTailleTexte(titre, 2);
    modifierTailleTexte(paragraphe, 1);

});