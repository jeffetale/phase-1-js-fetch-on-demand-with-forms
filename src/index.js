const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
      const movieDetails = document.querySelector('#movieDetails');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            movieDetails.innerHTML = `<p>No movie found with ID ${input.value}</p>`;
          } else {
            movieDetails.innerHTML = `
              <h4>${data.title}</h4>
              <p>${data.summary}</p>
            `;
          }
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
  