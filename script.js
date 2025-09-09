document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');
    const jokeButton = document.getElementById('joke-button');
    
    const displayedJokeIds = [];
    const MAX_HISTORY = 20;

    async function fetchJoke() {
        const url = "https://v2.jokeapi.dev/joke/Programming,Misc,Pun,Spooky?blacklistFlags=racist&lang=pt";
        
        // Altera o texto do botão e o desabilita
        jokeButton.textContent = "Carregando...";
        jokeButton.disabled = true;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.error) {
                jokeContainer.innerHTML = `<p style="color:red;">${data.message}</p>`;
                return;
            }

            if (displayedJokeIds.includes(data.id)) {
                console.log('Piada repetida encontrada, buscando outra...');
                return fetchJoke();
            }
            
            displayedJokeIds.push(data.id);
            if (displayedJokeIds.length > MAX_HISTORY) {
                displayedJokeIds.shift();
            }

            if (data.type === "single") {
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            } else if (data.type === "twopart") {
                jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
            }

        } catch (error) {
            jokeContainer.innerHTML = `<p style="color:red;">Ops, algo deu errado: ${error.message}</p>`;
        } finally {
            // Reabilita o botão e restaura o texto
            jokeButton.textContent = "Gerar Outra Piada";
            jokeButton.disabled = false;
        }
    }

    jokeButton.addEventListener('click', fetchJoke);

    fetchJoke();
});
