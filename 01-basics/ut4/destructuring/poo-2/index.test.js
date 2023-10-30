import { Book } from "./index.js";

describe("OOP", () => {
  it("should gets title, author and published for La vida del lazarillo de Tormes", () => {
    let libro1 = new Book("La vida del lazarillo de Tormes", "Anonymus", "1554" );

    expect(libro1.title).toBe("La vida del lazarillo de Tormes");
    expect(libro1.author).toBe("Anonymus");
    expect(libro1.published).toBe("1554");
  });
  it("should gets title, author and published for The NeverEnding Story", () => {
    let libro2 = new Book("The NeverEnding Story", "Michael Ende", "1984");

    expect(libro2.title).toBe("The NeverEnding Story");
    expect(libro2.author).toBe("Michael Ende");
    expect(libro2.published).toBe("1984");
  });
  it("should gets title, author and published for The Lord of the Rings", () => {
    let libro3 = new Book("The Lord of the Rings", "J. R. R. Tolkien", "1954");

    expect(libro3.title).toBe("The Lord of the Rings");
    expect(libro3.author).toBe("J. R. R. Tolkien");
    expect(libro3.published).toBe("1954");
  });
  it("should gets title, author and published for Beowulf", () => {
    let libro4 = new Book("Beowulf","Anonymus","900");

    expect(libro4.title).toBe("Beowulf");
    expect(libro4.author).toBe("Anonymus");
    expect(libro4.published).toBe("900");
  });
});
