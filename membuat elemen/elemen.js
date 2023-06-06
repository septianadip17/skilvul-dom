// Mengakses elemen <body>
let body = document.body;

// Membuat elemen <h1>
let heading = document.createElement("h1");
console.log(heading);

// Memasukkan elemen <h1> kedalam elemen <body>
body.appendChild(heading);

// Membuat attribut
let id = document.createAttribute('id');

// Memasukkan nilai attribut
id.value = "mainHeading";

// Set attribute pada <h1>
heading.setAttributeNode(id);

// Membuat konten pada elemen
let contentHeading = document.createTextNode('Ini heading');

// Memasukkan konten yang telah dibuat kedalam elemen heading <h1>
heading.appendChild(contentHeading);