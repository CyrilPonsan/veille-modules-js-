const styles = fetch('../ressources/styles.json')
.then(response => response.json());

export default await styles;