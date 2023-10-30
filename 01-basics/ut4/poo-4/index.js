
export class Birth{
    date;
    place;
    constructor(date, place){
        this.date= date;
        this.place = place;
    }

    get date() {
        return this.date;
    }

    set date(date){
        this.date = date;
    }

    get place() {
        return this.place;
    }

    set place(place){
        this.place = place;
    }
};

export class Director extends Birth{
    name;
    nationality;
    notableFilmography;
    constructor(name, nationality, notableFilmography, date, place){
        super(date, place)
        this.name = name;
        this.nationality = nationality;
        this.notableFilmography = notableFilmography;
        this.date = date;
        this.place = place;
    }
   
    get name() {
        return this.name;
    }

    set name(name){
        this.name = name;
    }

    get nationality() {
        return this.nationality;
    }

    set nationality(nationality){
        this.nationality = nationality;
    }

    get notableFilmography() {
        return this.notableFilmography;
    }

    set notableFilmography(notableFilmography){
        this.notableFilmography = notableFilmography;
    }

};



export class Movie extends Director{
title;
year;
genre;
duration;
rating;
sypnosis;
constructor(title, year, genre, duration, rating, sypnosis, name, nationality, notableFilmography, date, place){
    super(name, nationality, notableFilmography, date, place)
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.duration = duration;
    this.rating = rating;
    this.sypnosis = sypnosis;
    this.name = name;
    this.nationality = nationality;
    this.notableFilmography = notableFilmography;
    this.date = date;
    this.place = place;
};

get title() {
    return this.title;
};

set title(title){
    this.title = title;
};

get nationality() {
    return this.nationality;
};

set nationality(nationality){
    this.nationality = nationality;
};

get year() {
    return this.year;
};

set year(year){
    this.year = year;
};

get genre() {
    return this.genre;
};

set genre(genre){
    this.genre = genre;
};

get duration() {
    return this.duration;
};

set duration(duration){
    this.duration = duration;
};

get rating() {
    return this.rating;
};

set rating(rating){
    this.rating = rating;
};

get sypnosis() {
    return this.sypnosis;
};

set sypnosis(sypnosis){
    this.sypnosis = sypnosis;
};
};


//let director1 = new Director("pepe", "españa", "hello", "31 octubre 2030", "calle larios");

//console.log(director1);