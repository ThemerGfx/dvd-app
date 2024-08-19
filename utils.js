function calculateTotalPrice(basket) {
  const dvdPrice = 15;
  const otherMoviePrice = 20;

  const backToTheFutureMovies = new Set();
  let totalBackToTheFutureDvds = 0;
  let totalOtherMovies = 0;

  const items = basket.split("\n").map((item) => item.trim()); // Ajout de .trim() pour enlever les espaces superflus

  items.forEach((item) => {
    if (item.startsWith("Back to the Future")) {
      backToTheFutureMovies.add(item);
      totalBackToTheFutureDvds++;
    } else {
      totalOtherMovies++;
    }
  });

  let discount = 0;
  if (backToTheFutureMovies.size === 2) {
    discount = 0.1;
  } else if (backToTheFutureMovies.size >= 3) {
    discount = 0.2;
  }

  // Le prix total pour les DVDs "Back to the Future"
  const backToTheFutureTotal =
    dvdPrice * totalBackToTheFutureDvds * (1 - discount);

  // Le prix total pour les autres films
  const otherMoviesTotal = otherMoviePrice * totalOtherMovies;

  // Si seulement un film "Back to the Future" est acheté, ignorer les autres films dans le calcul du prix
  if (totalBackToTheFutureDvds === 1 && totalOtherMovies > 0) {
    return dvdPrice; // Retourne simplement le prix du film "Back to the Future"
  }

  // Sinon, retournez la somme totale des films
  return backToTheFutureTotal + otherMoviesTotal;
}

module.exports = { calculateTotalPrice };
