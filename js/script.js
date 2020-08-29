const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

console.log(numberOfFilms);

const a = prompt('Последний просмотренный фильм?','');
const b = +prompt('На сколько его оцените?','');
c=prompt('Последний просмотренный фильм?','');
d=prompt('На сколько его оцените?','');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);