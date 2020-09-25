const { __esModule } = require("@testing-library/react");
// const math = Math.PI * Math.pow(10, 2);

// console.log(math.toFixed(2));

// const string = "lima";

// console.log(string.charAt(3));
// console.log(string.charCodeAt(3));
// console.log(string.indexOf("a"));
// console.log(string.substring(1));
// console.log(string.substring(0, 3));
// console.log(string.substring(string.indexOf("l"), 1));
// console.log("Jakson ".concat("lima ").concat("sucess!"));
// console.log(string.replace(/\w/, "-"));

// const array = "jakson,wilson,bonfim,de,lima";

// console.log(array.split(","));

// const reduce = array.split(",").reduce((p1, p2) => {
//   return p1 + " " + p2;
// });

// console.log(reduce);

// const reduceNumber = [1, 2, 3, 4, 5, 6].reduce((p1, p2) => {
//   return p1 + p2;
// });

// console.log(reduceNumber);

// const isTrue = true;

// console.log(!!null);

// const nome = "jakson";

// console.log(nome || "lima");

// const arra = ["jakson", "lima"];

// console.log(arra);

// arra[2] = "wilson";

// console.log(arra);

// arra.push("bonfim");

// console.log(arra);

// const prod1 = {
//   tipe: "produto",
// };

// prod1.nome = "lima";

// prod1["jakson "] = "lima";

// prod1.qtd = 10;

// // console.log(prod1);

// const json = JSON.stringify(prod1);

// // console.log(json);

// const obj = JSON.parse(json);

// // console.log(obj);

// const data = {
//   nome: "jakson",
//   sobrenome: "lima",
// };

// console.log(JSON.stringify(data));

// console.log(JSON.parse(JSON.stringify(data)));

// const fuAnnonymus = function (a, b) {
//   return a + b;
// };

// const fnArrow = (a, b) => {
//   return a + b;
// };

// const fnArrowShortHeand = (a, b) => a + b;

// const functions = {
//   soma: (a) => a,
//   subtracao: (a) => a,
// };

// const fnArrowShortHeandV2 = (a) => {
//   console.log(a);
// };

// var numero = 1;
// {
//   let numero = 2;
//   console.log(numero);
// }
// console.log(numero);

// const funcs = [];

// for (let i = 0; i < 10; i++) {
//   funcs.push(() => console.log(i));
// }

// funcs.push("jakson");

// funcs.forEach((f) => {
//   if (f instanceof Function) {
//     f();
//   } else {
//     console.log(f);
//   }
// });

// const arraw = () => {};

// console.log(typeof arraw);

// class Pessoa {}

// console.log(typeof Pessoa);

// console.log(typeof new Pessoa());

// console.log(Math.ceil(6.1));

// const obj = {};

// obj.nome = "lima";
// obj["nome"] = "lima2";

// console.log(obj);

// const numero = 7.2;

// console.log(numero % 2);

// function destrut({ nome }) {
//   console.log(nome);
// }

// destrut("lima");

// function destrut2({ nome }) {
//   console.log(nome);
// }

// destrut2({ nome: "lima" });

// const pessoa = {
//   nome: "lima",
//   idade: 22,
//   endereco: {
//     logradouro: "Maria Tereza Figueiredo",
//     numero: 208,
//   },
// };

// const { nome, idade } = pessoa;

// // console.log(nome);
// // console.log(idade);
// // console.log(pessoa);

// const { nome: n, idade: i } = pessoa;

// // console.log(n);
// // console.log(i);

// const { sobrenome = "lima" } = pessoa;

// // console.log(sobrenome);

// const {
//   endereco: { logradouro, numero },
// } = pessoa;

// // console.log(logradouro);
// // console.log(numero);

// console.log(pessoa?.nome);

// const [set] = [function get() {}, function set() {}];

// console.log(set);

// const [, [, number]] = [[1], [1, 2]];

// console.log(number);

// function rand({ min = 0, max = 1000 } = {}) {
//   const math = Math.random() * (max - min) + min;
//   return Math.floor(math);
// }

// const obj = {
//   min: 0,
//   max: 10,
// };

// console.log(rand());

// function rand([min = 0, max = 100]) {
//   console.log(min, max);

//   if (min < max) [min, max] = [max, min];

//   console.log(min, max);

//   const valor = Math.random() * (max - min) + min;
//   return Math.floor(valor);
// }

// rand([]);

// const resultado = (r) => (r > 7 ? "Aprovado" : "Repovado");

// console.log(resultado(10));

// let a = 3;

// global.b = 3;

// this.c = 5;

// this.e = "teste";

// console.log(this.a);
// console.log(global.b);
// console.log(this.c);
// console.log(module.exports);
// console.log(module.exports === this);

// module.exports = {
//   nome: "jakson",
//   idade: 22,
// };

// console.log(module.exports);

// globalVar = 3;

// // console.log(globalVar);

// console.log();

// global.setTimeout(() => console.log(new Date()), 5000);

// global.setInterval(() => console.log(new Date()), 5000);

// const arrow = () => Math.random();

// console.log(arrow());

// function Pessoa() {
//   this.idade = 0;

//   setInterval(() => {
//     console.log(this.idade++);
//   }, 1000);
// }

// new Pessoa();

// const soma = (x, y) => x + y;

// const imprimirResult = (x, y, operador = soma) => {
//   // console.log(operador);
//   // console.log(operador(x, y));
// };

// imprimirResult(2, 5);
// imprimirResult(2, 5, (x, y) => x * y);

// const functions = {
//   result: (x, y) => x * y,
//   name: "anonymos",
//   type: "arrow",
//   types: ["arrow", "anonymos"],
// };

// // console.log(functions.result(10, 10));

// const objectKeys = () =>
//   Object.keys(functions).forEach((keys) => {
//     console.log(keys, " = ", functions[keys]);
//   });

// objectKeys();

// const array = [
//   {
//     id: 1,
//     name: "JAKSON",
//   },
//   {
//     id: 1,
//     name: "JAKSON",
//   },
//   {
//     id: 2,
//     name: "LIMA",
//   },
//   {
//     id: 2,
//     name: "LIMA",
//   },
//   {
//     id: 3,
//     name: "WILSON",
//   },
//   {
//     id: 3,
//     name: "WILSON",
//   },
//   {
//     id: 4,
//     name: "BONFIM",
//   },
//   {
//     id: 4,
//     name: "BONFIM",
//   },
//   {
//     id: "G2341FS1",
//     name: "RANDOM",
//   },
//   {
//     id: "G2341FS1",
//     name: "RANDOM",
//   },
// ];

// const disctinctFilter = (key) => (valeu, index, array) => array.map((item) => item[key]).indexOf(valeu[key]) === index;

// const disctinctData = array.filter(disctinctFilter());

// console.log(disctinctData);

// const data = {
//   nome: "Lima",
//   idade: 23,
//   array: [
//     {
//       message: "lima",
//       arrayMessage: [
//         {
//           messages: "limav2",
//         },
//       ],
//     },
//   ],
// };

// Object.keys(data).forEach((field) => {
//   console.log(field, data[field]);
// });

// const params = (nome, param) => {
//   console.log("nome", nome);
//   console.log("param", param);
// };

// const param = {
//   property: "id",
//   disctinct: "asc",
// };

// params(param, param);

// const notas = [7.7, 7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// for (let index = 0; index < notas.length; index++) {
//   console.log(notas[index]);
//   console.log(notas.indexOf(notas[index]));
// }

// class Pessoa {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   falar() {
//     console.log(this.nome);
//   }
// }

// const pessoa = new Pessoa("Jakson Lima");
// pessoa.falar();

// function Pessoa(nome) {
//   this.nome = nome;

//   this.falar = () => console.log(nome);
// }

// const pessoa = new Pessoa("(Hello Word) Jakson Lima");

// pessoa.falar();

// const props = { props: "lima" };

// const data = { ...array, ...props };

// (() => {
//   console.log("data");
// })();

// function getPreco(imposto = 0, moeda = "R$") {
// return `${moeda} ${this.preco * -this.desc * (1 + imposto)}`;
// }

// const produto = {
//   nome: "notebook",
//   preco: 4589,
//   desc: 0.15,
//   getPreco,
// };

// console.log(getPreco.call(produto));
// console.log(getPreco.apply(produto));

// produto.method = (props) => props;

// console.log(produto.method("hello word"));

// console.log(JSON.stringify(produto));

// import React from "react";

// const Props = ({ data: { nome } }) => {
//   return <div></div>;
// };

// const data = {
//   nome: "jakson",
//   idade: 23,
// };

// console.log(<Props data={data} />);

// const data = {
//   nome: "jakson lima",
//   idade: 23,
//   endereco: {
//     rua: "rua maria tereza figueiredo",
//     numero: 208,
//   },
// };

// delete data.endereco;

// console.log(data["endereco"]);
// console.log(data.endereco.rua);

// const data = { nome: "jakson", idade: 23 };

// console.log(JSON.stringify(data));

// const pessoa = {
//   nome: "lima",
//   idade: 23,
// };

// pessoa.nome = "jakson lima";

// pessoa.sexo = "m";

// Object.freeze(pessoa);

// delete pessoa.nome;

// pessoa.endereco = {
//   rua: "x",
//   numero: "y",
// };

// console.log(pessoa);

// const { ...obj } = [
//   { nome: "lima", idade: 22 },
//   { nome: "aa", idade: 20 },
// ];

// // console.log(obj);

// const { ...pessoa } = { nome: "jakson", idade: 23 };

// // console.log(pessoa);

// Object.keys(pessoa).forEach((x) => console.log(`${x}: ${pessoa[x]}`));

// const props = {
//   nome: "jakson",
//   idade: 23,
// };

// const pessoa = {};

// Object.keys(props).forEach((x) => (pessoa[x] = props[x]));

// console.log(pessoa);

// const mapToProps = (origem, destino) => {
//   return Object.keys(origem).map((field) => (destino[field] = origem[field]));
// };

// console.log(mapToProps(props, pessoa));

// const carro = {
//   qtdMarcha: 4,
// };

// const ferrari = {
//   modelo: "F40",
//   velMax: 324,
// };

// const volvo = {
//   modelo: "V40",
//   velMax: 324,
// };

// console.log(ferrari.__proto__);
// console.log(ferrari.__proto__ === Object.prototype);

// Object.setPrototypeOf(ferrari, carro);
// Object.setPrototypeOf(volvo, carro);

// console.log(ferrari.qtdMarcha);
// console.log(volvo.qtdMarcha);

// const props = (...param) => console.log(param);

// props("jakson", 1, "lima", () => {});

// const data = {
//   nome: "Jakson lima",
//   idade: 23,
//   endereco: {
//     rua: "Maria tereza figueiredo",
//     numero: 208,
//   },
//   functions: [
//     {
//       id: 1,
//       fn: () => {},
//     },
//     {
//       id: 2,
//       fn: () => {},
//     },
//   ],
// };

// console.log(data);
// console.log(nome);
// console.log(rest);

// function Component({ Component: EnhacerComponent }) {}

// console.log(JSON.stringify(data));
// console.log(JSON.parse(JSON.stringify(data)));

// const { nome, ...rest } = data;

// const [b, a, ...restArray] = [{ id: 1 }, { id: 2 }, { id: 3 }];

// const array = [{ id: 1 }, { id: 2 }, { id: 3 }];

// console.log({ ...data });
// console.log(...array);
// const props = [...array, { ...data }];

// props.forEach((item) => console.log(item));

// class Dinheiro {
//   constructor(nota) {
//     this.nota = nota;
//   }
//   static funcDinheiro() {}
// }

// class Lancamento extends Error {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
//   static funcLancamento() {}
// }

// const array = ["lima"];

// array.push("jakson");

// // console.log(array);

// const data = {
//   nome: "Jakson lima",
//   idade: 23,
//   endereco: {
//     rua: "Maria tereza figueiredo",
//     numero: 208,
//   },
//   functions: [
//     {
//       id: 1,
//       fn: () => {},
//     },
//     {
//       id: 2,
//       fn: () => {},
//     },
//   ],
// };

// Object.keys(data).forEach((filed) => {
//   if (data[filed]) {
//     console.log(filed, data[filed]); =>

// eslint-disable-next-line no-extend-native
// Array.prototype.forEachV2 = function (callBack) {
//   for (let index = 0; index < this.length; index++) {
//     console.log(callBack);
//     callBack(this[index], index, this);
//   }
// };

// const array = ["Jakson", "Lima", "Wilson", "Bonfim"];

// // array.forEach((item) => console.log(item));
// array.forEachV2((item, index, array) => {
//   console.log(item, index, array);
// });

// const data = [
//   { nome: "jakson", nota: 10, bolsista: true },
//   { nome: "carlos", nota: 9, bolsista: false },
//   { nome: "tiago", nota: 8, bolsista: true },
//   { nome: "alder", nota: 7, bolsista: false },
// ];

// const reducer = data
//   .filter(({ bolsista }) => bolsista)
//   .reduce((initialValueToTotal, { nota: currentValeu }) => initialValueToTotal + currentValeu, 0);

// // eslint-disable-next-line no-extend-native
// Array.prototype.reduce2 = function (callBack) {
//   console.log(callBack);
//   let acumulator = this[0];
//   for (let i = 1; i < this.length; i++) {
//     acumulator = callBack(acumulator, this[i]);
//   }
//   return acumulator;
// };

// function calularNoReducer(acumulator, value) {
//   return acumulator + value;
// }

// const total2 = data.map(({ nota }) => nota).reduce2(calularNoReducer);
// console.log(total2);

// const total3 = data.map(({ nota }) => nota).reduce2((acumulator, valor) => acumulator + valor);
// console.log(total3);

// let pessoaToField = [
//   {
//     field: "nome",
//     valeu: "Jakson Lima",
//   },
//   {
//     field: "idade",
//     valeu: 23,
//   },
//   {
//     field: "altura",
//     valeu: 1.68,
//   },
// ];

// let profissionalToField = [
//   {
//     field: "identificador",
//     valeu: "Lima",
//   },
//   {
//     field: "idade",
//     valeu: 22,
//   },
//   {
//     field: "altura",
//     valeu: 1.6,
//   },
// ];

// const fields =

// console.log(pessoaToField.flatMap((pe) => profissionalToField.filter((pf) => pf.field.includes(pe.field))));

// profissionalToField.flatMap(console.log);

// console.log([1, 2, 3].flatMap((item) => [item, item * 100]));
// import lodash from "lodash";

// setInterval(() => console.log(lodash.random(10, 100)), 2000);

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("Hello Word...");
//     res.end();
//   })
//   .listen(8080);

// const axios = require("axios");
// const fs = require("fs");

// const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

// (async function profile() {
//   const response = await axios.get(url);

//   const profile = response.data
//     .filter((p) => p.pais === "China")
//     .filter((p) => p.genero === "F")
//     .reduce((currentFunctionario, functionarioAtual) =>
//       currentFunctionario.salario < functionarioAtual.salario ? currentFunctionario : functionarioAtual
//     );

//   console.log(profile);
// })();

// console.log("FILE");

// const caminho = __filename;
/**sincrono */
// const file = fs.readFileSync(caminho, "utf-8");
// // console.log(file);

/**asincrono */
// fs.readFile(__dirname, "utf-8", (error, content) => {
//   // console.log(JSON.parse(content));
// });

// fs.readdir(__dirname, "utf-8", (error, arquivo) => {
//   // console.log(arquivo);
// });

// const fs = require("fs");

// const produto = {
//   nome: "Celular",
//   preco: 1249.99,
//   desconto: 0.15,
// };

// fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), (err) => {
//   console.log(err || "Arquivo Salvo");
// });

// fs.readFile(__dirname + "/arquivoGerado.json", "utf-8", (error, content) => {
//   console.log(error || "Sucess:", JSON.parse(content));
// });

// const [l, i, m, a, ...restString] = "Lima Jakson";
// console.log(l, i, m, a, restString);

// const [um, dois, tres, ...rest] = [1, 2, 3, 4, 5];
// console.log(um, dois, tres, rest);

// const { nome, idade: I, ...restObject } = { nome: "Jakson Lima", idade: 23, sobrenome: "Lima" };
// console.log(nome, I, restObject);

// const arrow = (a, b) => a + b;
// console.log("Arrow", arrow(1, 2));

// const defautlParam = (param = "Param") => param;

// console.log(defautlParam());
// console.log(defautlParam("Lima"));

// const restOperation = (...rest) => {
//   console.log(rest);
//   return rest.reduce((currentValue, value) => currentValue + value, 0);
// };

// console.log(restOperation(5, 52, 3, 87));
// const field = "props";
// const obj = { a: 1, b: 2, c: 3, d: 4, [field]: "InProps" };

// obj.segundaryObject = { sobrenome: "Wilson Bonfim de Lima" };
// obj.array = ["Jakson", "Lima"];

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const nome = "Jakson Lima";

// const pessoa = {
//   nome,

//   ola(props) {
//     return props;
//   },
// };

// console.log(pessoa);
// console.log(pessoa.ola("Lima"));

// const funcionario = { nome: "Jakson Lima", salario: 25000 };
// const clone = { ativo: true, ...funcionario };

// console.log(funcionario);
// console.log(clone);

// const array = ["lima", "jakson"];
// const arrayClone = ["wilson", ...array];

// console.log(array);
// console.log(arrayClone);

// const array = ["Jakson", "Lima", "Bonfim", "Wilson"];
// console.log(array.join(" "));

// const toMap = new Map();

// toMap.set("react", { framework: true });
// toMap.set("angular", { framework: true });

// console.log(toMap);

// const set = new Set();

// set.add(["React"]);
// set.add("Vue");
// set.add("Node");
// set.add("Node");

// set.forEach((v) => console.log(v));

// console.log(set.has("Vue"));

// for (let letras of "react") {
//   console.log(letras);
// }

// for (let letras in "react") {
//   console.log(letras);
// }

// const array = [
//   { nome: "lima", sobrenome: "wilson" },
//   { nome: "bonfim", sobrenome: "jakson" },
// ];

// for (let value in array) {
//   console.log(value);
// }

// console.log("############");

// for (let value of array) {
//   console.log(value);
// }

// const toMap = new Map([
//   ["Map", { abordado: true }],
//   ["Set", { abordado: true }],
//   ["Promisse", { abordado: false }],
// ]);

// for (let map of toMap) {
//   // console.log(map);
// }

// for (let map of toMap.keys()) {
//   // console.log(map);
// }

// for (let map of toMap.values()) {
//   // console.log(map);
// }

// for (let [key, value] of toMap) {
//   console.log(key, value);
// }
// function falar(segundo, frase) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(frase);
//     }, segundo * 1000);
//   });
// }

// falar(3, "lima").then((x) => console.log(x));

const http = require("http");
const { reject } = require("lodash");

const getTurma = (turma) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;

  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let result = "";

      res.on("data", (dados) => {
        result += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(result));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

// getTurma("A", (aluno) => {
//   console.log(aluno.map((aluno) => aluno));
// });

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((x) => [].concat(...x))
  .then((x) => x.map((x) => x.nome))
  .then((x) => console.log(x));

Promise.all([getTurma("F")]).catch((x) => console.log(x));
