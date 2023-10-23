const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

/**
 * Usando Destructuración de arrays,
 * debes devolver todas las tecnologías
 * @returns
 */
export const getAllTechnologies = () => {
const [ ,a, ] = student;
return a;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver todos los valores
 * @returns
 */
export const getAllValues = () => {
  const [a ,b,c ] = student;
  return a,b,c;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver solo React
 * @returns
 */
export const getReact = () => {
  const [ ,a, ] = student;
  const [a1,b,c,d]= a;
  return d;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver CSS y 85
 * @returns
 */
export const getCSSAnd85 = () => {
  const [ ,a1, b1] = student;
  const [a,b,c,d]= a1;

  const[ ,segundo, , ] = b1;
  
  return [b, segundo];
};

/*****************************************************
 * ***************************************************
 ******************************************************/
const books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título del primer libro
 * @returns
 */
export const getTitleFirstBook = () => {
const [a, , , ] = books;

const {title:titulo, author:autor, published:anyo} = a;

return titulo;

};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el año de publicación del segundo libro
 * @returns
 */
export const getPublishedSecondBook = () => {
 
    const [ ,b , , ] = books;
    
    const {title:titulo, author:autor, published:anyo} = b;
    
    return anyo;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título y el autor del último libro
 * @returns
 */
export const getAuthorsAndTitleLastBook = () => {
  const [ , , , d] = books;
    
  const {title:titulo, author:autor, published:anyo} = d;
  
  return [titulo, autor];
};
