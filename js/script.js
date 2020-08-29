'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {
    const a = prompt('Последний просмотренный фильм?', ''),
          b = prompt('На сколько его оцените?', '');

    if (a != null && b != null && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done'); 
} else {
        console.log('error');
        i--
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("ВЫ КИНОМАН!");
} else {
    console.log("Ошибка");
}

console.log(personalMovieDB)