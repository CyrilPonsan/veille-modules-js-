

export function modifierTailleTexte(objet, x) {
    objet.forEach((element) => {
        element.style.fontSize = x + "rem";
    });
}

export function applyStyle(objet, styles) {
    objet.forEach((element => {
        styles.forEach((style) => {
            let cmd = "element.style." + style[0] + "='" + style[1] + "'";
            console.log(cmd);
            eval(cmd);
        });
    }));
}