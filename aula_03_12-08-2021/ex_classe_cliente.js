/**
 * Imagine que você foi contratado(a) para desenvolver um script que possa criar objetos dos tipos cliente,
 * telefone e endereço.
 *
 * No script desenvolvido deverá existir classes para cada tipo de objeto e, para cada atributo, deverão
 * existir métodos de acesso, get e set, além de métodos que permitam recuperar o valor do atributo em caixa
 * alta e caixa baixa.
 */

class Client {
    constructor(name, email, phone, address) {
        // atributos personalizados
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    // métodos personalizados
    description() {
        return ` ------------------------------ \n Informações do Cliente \n Nome: ${this.getName} \n Email: ${this.getEmail} \n ------------------------------ \n Telefone \n ${this.getPhone} \n ------------------------------ \n Endereço \n ${this.getAddress} \n ------------------------------`;
    }

    nameUpperCase() {
        return this.getName.toUpperCase();
    }
    nameLowerCase() {
        return this.getName.toLowerCase();
    }

    emailUpperCase() {
        return this.getEmail.toUpperCase();
    }
    emailLowerCase() {
        return this.getEmail.toLowerCase();
    }

    phoneUpperCase() {
        return this.getPhone.toUpperCase();
    }
    phoneLowerCase() {
        return this.getPhone.toLowerCase();
    }

    addressUpperCase() {
        return this.getAddress.toUpperCase();
    }
    addressLowerCase() {
        return this.getAddress.toLowerCase();
    }

    // getters
    get getName() {
        return this.name;
    }

    get getEmail() {
        return this.email;
    }

    get getPhone() {
        return this.phone.description();
    }

    get getAddress() {
        return this.address.description();
    }

    // setters
    set setName(name) {
        this.name = name;
    }

    set setEmail(email) {
        this.email = email;
    }

    set setPhone(phone) {
        this.phone = phone;
    }

    set setAddress(address) {
        this.address = address;
    }
}
class Phone {
    constructor(ddd, number) {
        // atributos personalizados
        this.ddd = ddd;
        this.number = number;
    }

    // métodos personalizados
    description() {
        return `DDD: ${this.getDdd}  \n Número: ${this.getNumber}`;
    }

    // getters
    get getDdd() {
        return this.ddd;
    }

    get getNumber() {
        return this.number;
    }

    // setters
    set setDdd(ddd) {
        this.ddd = ddd;
    }

    set setNumber(number) {
        this.number = number;
    }
}
class Address {
    constructor(street, number, district, city, state) {
        // atributos personalizados
        this.street = street;
        this.number = number;
        this.district = district;
        this.city = city;
        this.state = state;
    }

    // métodos personalizados
    description() {
        return `Rua: ${this.getStreet} \n Número: ${this.getNumber} \n Bairro: ${this.getDistrict} \n Cidade: ${this.getCity} \n Estado: ${this.getState}`;
    }

    streetUpperCase() {
        return this.getStreet.toUpperCase();
    }
    streetLowerCase() {
        return this.getStreet.toLowerCase();
    }

    districtUpperCase() {
        return this.getDistrict.toUpperCase();
    }
    districtLowerCase() {
        return this.getDistrict.toLowerCase();
    }

    cityUpperCase() {
        return this.getCity.toUpperCase();
    }
    cityLowerCase() {
        return this.getCity.toLowerCase();
    }

    stateUpperCase() {
        return this.getState.toUpperCase();
    }
    stateLowerCase() {
        return this.getState.toLowerCase();
    }

    // getters
    get getStreet() {
        return this.street;
    }

    get getNumber() {
        return this.number;
    }

    get getDistrict() {
        return this.district;
    }

    get getCity() {
        return this.city;
    }

    get getState() {
        return this.state;
    }

    // setters
    set setStreet(street) {
        this.street = street;
    }

    set setNumber(number) {
        this.number = number;
    }

    set setDistrict(district) {
        this.district = district;
    }

    set setCity(city) {
        this.city = city;
    }

    set setState(state) {
        this.state = state;
    }
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

console.log(cliente.description());