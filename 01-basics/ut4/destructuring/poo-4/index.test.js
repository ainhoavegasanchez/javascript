
import {Movie, Director, Birth} from "./index.js";

describe("Inheritance- Birth class",()=>{
    it("should gets date and place birth of peter Jacson", ()=>{
        let nacimiento = new Birth("31 de octubre de 1961", "Pukerua Bay, Nueva Zelanda");
        expect(nacimiento.date).toBe("31 de octubre de 1961");
        expect(nacimiento.place).toBe("Pukerua Bay, Nueva Zelanda");
    });
});

describe("Inheritance- Director class",()=>{
    it("should gets name, natinality and notableFilmography for Director", ()=>{
        let director = new Director("Peter Jackson", "Neozelandés", ["El Señor de los Anillos", "El Hobbit", "King Kong"]);
        expect(director.name).toBe("Peter Jackson");
        expect(director.nationality).toBe("Neozelandés");
        expect(director.notableFilmography.toString()).toBe(["El Señor de los Anillos", "El Hobbit", "King Kong"].toString());
    });
});

describe("Inheritance- Movie class",()=>{
    it("should gets title, year, genre, duration, rating and sypnosis for El Señor de los Anillos", ()=>{
        let movie = new Movie("El Señor de los Anillos: La Comunidad del Anillo", 2001,"Fantasía", 178, 9.2, "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo.");
        expect(movie.title).toBe("El Señor de los Anillos: La Comunidad del Anillo");
        expect(movie.year).toBe(2001);
        expect(movie.genre).toBe("Fantasía");
        expect(movie.duration).toBe(178);
        expect(movie.rating).toBe(9.2);
        expect(movie.sypnosis).toBe("Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo.");
    });
});