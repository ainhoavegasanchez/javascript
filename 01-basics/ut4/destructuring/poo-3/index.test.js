import * as person from "./index.js";

describe("OOP Person", () => {
  it("should gets name, surname, country and age", () => {
    let persona = new person.Person("manuel", "perez", "españa", 34);
    expect(persona.name).toBe("manuel");
    expect(persona.surname).toBe("perez");
    expect(persona.country).toBe("españa");
    expect(persona.age).toBe(34);
  });
  it("should sets name=Peter, surname=Jackson, country=CANADA and age =39", () =>  {
  let persona1 = new person.Person();
  persona1.name="Peter";
  persona1.surname="Jackson";
  persona1.country="CANADA";
  persona1.age=39;

    expect(persona1.name).toBe("Peter");
    expect(persona1.surname).toBe("Jackson");
    expect(persona1.country).toBe("CANADA");
    expect(persona1.age).toBe(39);

  });
});
