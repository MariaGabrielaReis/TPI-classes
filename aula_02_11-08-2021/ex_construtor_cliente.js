/**
 * Imagine que você foi contratado(a) para desenvolver um script que possa criar objetos dos tipos cliente,
 * telefone e endereço.
 *
 * No script desenvolvido deverá existir funções construtoras para cada tipo de objeto. Para cada atributo, deverão
 * existir métodos de acesso, get e set. Estes métodos deverão estar disponíveis na própria função construtora
 * do objeto. Para cada atributo, deverão existir métodos que permitam recuperar o valor do atributo em caixa
 * alta e caixa baixa.
 */

function Client(name, email, phone, address) {
    // atributos personalizados
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;

    // métodos personalizados
    Object.defineProperty(this, 'description', {
        get: function() {
            return ` ------------------------------ \n Informações do Cliente \n Nome: ${this.getName} \n Email: ${this.getEmail} \n ------------------------------ \n Telefone \n ${this.getPhone} \n ------------------------------ \n Endereço \n ${this.getAddress} \n ------------------------------`;
        },
    });

    Object.defineProperty(this, 'nameUpperCase', {
        get: function() {
            return this.getName.toUpperCase();
        },
    });

    Object.defineProperty(this, 'nameLowerCase', {
        get: function() {
            return this.getName.toLowerCase();
        },
    });

    Object.defineProperty(this, 'emailUpperCase', {
        get: function() {
            return this.getEmail.toUpperCase();
        },
    });

    Object.defineProperty(this, 'emailLowerCase', {
        get: function() {
            return this.getEmail.toLowerCase();
        },
    });

    Object.defineProperty(this, 'phoneUpperCase', {
        get: function() {
            return this.getPhone.toUpperCase();
        },
    });

    Object.defineProperty(this, 'phoneLowerCase', {
        get: function() {
            return this.getPhone.toLowerCase();
        },
    });

    Object.defineProperty(this, 'addressUpperCase', {
        get: function() {
            return this.getAddress.toUpperCase();
        },
    });

    Object.defineProperty(this, 'addressLowerCase', {
        get: function() {
            return this.getAddress.toLowerCase();
        },
    });

    // getters
    Object.defineProperty(this, 'getName', {
        get: function() {
            return this.name;
        },
    });

    Object.defineProperty(this, 'getEmail', {
        get: function() {
            return this.email;
        },
    });

    Object.defineProperty(this, 'getPhone', {
        get: function() {
            return this.phone.description;
        },
    });

    Object.defineProperty(this, 'getAddress', {
        get: function() {
            return this.address.description;
        },
    });

    // setters
    Object.defineProperty(this, 'setName', {
        set: function(name) {
            this.name = name;
        },
    });

    Object.defineProperty(this, 'setEmail', {
        set: function(email) {
            this.email = email;
        },
    });

    Object.defineProperty(this, 'setPhone', {
        set: function(phone) {
            this.phone = phone;
        },
    });

    Object.defineProperty(this, 'setAddress', {
        set: function(address) {
            this.address = address;
        },
    });
}

function Phone(ddd, number) {
    // atributos personalizados
    this.ddd = ddd;
    this.number = number;

    // métodos personalizados
    Object.defineProperty(this, 'description', {
        get: function() {
            return `DDD: ${this.getDdd}  \n Número: ${this.getNumber}`;
        },
    });

    // getters
    Object.defineProperty(this, 'getDdd', {
        get: function() {
            return this.ddd;
        },
    });

    Object.defineProperty(this, 'getNumber', {
        get: function() {
            return this.number;
        },
    });

    // setters
    Object.defineProperty(this, 'setDdd', {
        set: function(ddd) {
            this.ddd = ddd;
        },
    });

    Object.defineProperty(this, 'setNumber', {
        set: function(number) {
            this.number = number;
        },
    });
}

function Address(street, number, district, city, state) {
    // atributos personalizados
    this.street = street;
    this.number = number;
    this.district = district;
    this.city = city;
    this.state = state;

    // métodos personalizados
    Object.defineProperty(this, 'description', {
        get: function() {
            return `Rua: ${this.getStreet} \n Número: ${this.getNumber} \n Bairro: ${this.getDistrict} \n Cidade: ${this.getCity} \n Estado: ${this.getState}`;
        },
    });

    Object.defineProperty(this, 'streetUpperCase', {
        get: function() {
            return this.getStreet.toUpperCase();
        },
    });

    Object.defineProperty(this, 'streetLowerCase', {
        get: function() {
            return this.getStreet.toLowerCase();
        },
    });

    Object.defineProperty(this, 'districtUpperCase', {
        get: function() {
            return this.getDistrict.toUpperCase();
        },
    });

    Object.defineProperty(this, 'districtLowerCase', {
        get: function() {
            return this.getDistrict.toLowerCase();
        },
    });

    Object.defineProperty(this, 'cityUpperCase', {
        get: function() {
            return this.getCity.toUpperCase();
        },
    });

    Object.defineProperty(this, 'cityLowerCase', {
        get: function() {
            return this.getCity.toLowerCase();
        },
    });

    Object.defineProperty(this, 'stateUpperCase', {
        get: function() {
            return this.getState.toUpperCase();
        },
    });

    Object.defineProperty(this, 'stateLowerCase', {
        get: function() {
            return this.getState.toLowerCase();
        },
    });

    // getters
    Object.defineProperty(this, 'getStreet', {
        get: function() {
            return this.street;
        },
    });

    Object.defineProperty(this, 'getNumber', {
        get: function() {
            return this.number;
        },
    });

    Object.defineProperty(this, 'getDistrict', {
        get: function() {
            return this.district;
        },
    });

    Object.defineProperty(this, 'getCity', {
        get: function() {
            return this.city;
        },
    });

    Object.defineProperty(this, 'getState', {
        get: function() {
            return this.state;
        },
    });

    // setters
    Object.defineProperty(this, 'setStreet', {
        set: function(street) {
            this.street = street;
        },
    });

    Object.defineProperty(this, 'setNumber', {
        set: function(number) {
            this.number = number;
        },
    });

    Object.defineProperty(this, 'setDistrict', {
        set: function(district) {
            this.district = district;
        },
    });

    Object.defineProperty(this, 'setCity', {
        set: function(city) {
            this.city = city;
        },
    });

    Object.defineProperty(this, 'setState', {
        set: function(state) {
            this.state = state;
        },
    });
}

let telefone = new Phone('12', '40028922');
let endereco = new Address(
    'Av. Baguete',
    '21',
    'Pão Quentinho',
    'Pão Doce',
    'Rosquinha'
);

let cliente = new Client(
    'Papai Noel',
    'hohoho@hohotmail.com',
    telefone,
    endereco
);

console.log(cliente.description);