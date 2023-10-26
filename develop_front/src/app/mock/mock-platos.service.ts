import { Injectable } from "@angular/core";
import { Product } from "../interfaces/Product.interface"; 

@Injectable({
    providedIn: "root"
  })
  export class MockPlatos {
  
    constructor() { }
  
    getProduct(): any {
          
      var product = new Array<Product>();
  
      product =

[
    {
      idProduct: 1,
      name: "Ensalada Quinua",
      description: "Quinua con salmon, rabano, palta y arbejas",
      createdAt: "2023-10-01T08:00:00Z",
      updatedAt: "2023-10-05T14:30:00Z",
      price: 5.0,
      stock: 50,
      image: "https://i.imgur.com/cZurIW1.jpg",
      enable: true
    },
    {
      idProduct: 2,
      name: "Ensalada de lentejas",
      description: "Lentejas con lechuga, pepino, quinua, palta y pan",
      createdAt: "2023-10-02T09:15:00Z",
      updatedAt: "2023-10-04T16:45:00Z",
      price: 8.0,
      stock: 30,
      image: "https://i.imgur.com/6N5SIAI.jpg",
      enable: true
    },
    {
      idProduct: 3,
      name: "Vegetales crudos",
      description: "Zanahoria, arbejas, tomates secos y arroz",
      createdAt: "2023-10-03T10:30:00Z",
      updatedAt: "2023-10-03T10:45:00Z",
      price: 3.0,
      stock: 45,
      image: "https://i.imgur.com/57TesQb.jpg",
      enable: true
    },
    {
      idProduct: 4,
      name: "Granola",
      description: "Granola, frutos rojos y yogurt",
      createdAt: "2023-10-04T11:45:00Z",
      updatedAt: "2023-10-02T13:15:00Z",
      price: 3.5,
      stock: 60,
      image: "https://i.imgur.com/NGITrW3.jpg",
      enable: true
    },
    {
      idProduct: 5,
      name: "Camarones y fideos",
      description: "Ensalada de camarones con rabano, fideos, garbanzos y palta",
      createdAt: "2023-10-05T12:00:00Z",
      updatedAt: "2023-10-01T17:30:00Z",
      price: 4.0,
      stock: 25,
      image: "https://i.imgur.com/1BFcfGz.jpg",
      enable: true
    },
    {
      idProduct: 6,
      name: "Zanahoria pepino",
      description: "Ensalada de zanahoria con pepino, perejil, repollo, y carne",
      createdAt: "2023-10-06T13:15:00Z",
      updatedAt: "2023-10-06T14:45:00Z",
      price: 5.0,
      stock: 55,
      image: "https://i.imgur.com/83PWjP8.jpg",
      enable: true
    },
    {
      idProduct: 7,
      name: "Salmón fit",
      description: "Ensalada de salmón con lechuga",
      createdAt: "2023-10-07T14:30:00Z",
      updatedAt: "2023-10-07T16:15:00Z",
      price: 4.0,
      stock: 40,
      image: "https://i.imgur.com/q1PtYxU.jpg",
      enable: true
    },
    {
      idProduct: 8,
      name: "Vegetales asados",
      description: "Ensalada de leguga con camote asado, carne y maní",
      createdAt: "2023-10-08T15:45:00Z",
      updatedAt: "2023-10-08T18:00:00Z",
      price: 4.6,
      stock: 20,
      image: "https://i.imgur.com/zGEhFTv.jpg",
      enable: true
    },
    {
      idProduct: 9,
      name: "Tradicional",
      description: "Ensalada de lechuga, tomate, zanahoria y palmito",
      createdAt: "2023-10-09T16:00:00Z",
      updatedAt: "2023-10-09T17:45:00Z",
      price: 2.5,
      stock: 35,
      image: "https://i.imgur.com/62cWxxX.jpg",
      enable: true
    },
    {
      idProduct: 10,
      name: "Huevos cocidos",
      description: "Ensalada de huevo cocido con salmón, lechuga, pepino y palta",
      createdAt: "2023-10-10T17:15:00Z",
      updatedAt: "2023-10-10T19:30:00Z",
      price: 7.0,
      stock: 50,
      image: "https://i.imgur.com/gY7DRXn.jpg",
      enable: true
    },
    {
      idProduct: 11,
      name: "Pollo en tiras",
      description: "Ensalada de tiras de pollo con lechuga, tomate,palta y mostaza",
      createdAt: "2023-10-20T22:00:00Z",
      updatedAt: "2023-10-20T22:00:00Z",
      price: 5.5,
      stock: 50,
      image: "https://i.imgur.com/3waNT8y.jpg",
      enable: true
    },
    {
      idProduct: 12,
      name: "Ensalada pechuga",
      description: "Pollo con lechuga, huevo cocido, tomate crutons y parmesano",
      createdAt: "2023-10-21T23:45:00Z",
      updatedAt: "2023-10-21T23:45:00Z",
      price: 2.0,
      stock: 35,
      image: "https://i.imgur.com/gCYQEd4.jpg",
      enable: true
    },
    {
      idProduct: 13,
      name: "Cesar con tocino",
      description: "Ensalada cesar con tocino",
      createdAt: "2023-10-22T08:30:00Z",
      updatedAt: "2023-10-22T08:30:00Z",
      price: 1.5,
      stock: 28,
      image: "https://i.imgur.com/EJfQcVF.jpg",
      enable: true
    },
    {
      idProduct: 14,
      name: "Ensalada de huevo",
      description: "huevo con lechuga, atún, palta y pepino",
      createdAt: "2023-10-23T10:15:00Z",
      updatedAt: "2023-10-23T10:15:00Z",
      price: 1.5,
      stock: 42,
      image: "https://i.imgur.com/xKMMlZS.jpg",
      enable: true
    },
    {
      idProduct: 15,
      name: "Carne y Camote",
      description: "Ensalada de tiras de carne con lechuga, camote y palta",
      createdAt: "2023-10-24T12:00:00Z",
      updatedAt: "2023-10-24T12:00:00Z",
      price: 2.0,
      stock: 23,
      image: "https://i.imgur.com/0kaq8Bd.jpg",
      enable: true
    },
    {
      idProduct: 16,
      name: "Poke",
      description: "Poke de atun con mango, palta, arbejas, huevo y tomate",
      createdAt: "2023-10-25T13:45:00Z",
      updatedAt: "2023-10-25T13:45:00Z",
      price: 3.5,
      stock: 50,
      image: "https://i.imgur.com/YoreCwD.jpg",
      enable: true
    },
    {
      idProduct: 17,
      name: "Raviolis",
      description: "Raviolis de espinaca con salsa de tomate y queso",
      createdAt: "2023-10-26T15:30:00Z",
      updatedAt: "2023-10-26T15:30:00Z",
      price: 2.0,
      stock: 35,
      image: "https://i.imgur.com/RXQDBQg.jpg",
      enable: true
    },
    {
      idProduct: 18,
      name: "Tartar",
      description: "Tartar de espinaca y atún",
      createdAt: "2023-10-27T17:15:00Z",
      updatedAt: "2023-10-27T17:15:00Z",
      price: 2.5,
      stock: 28,
      image: "https://i.imgur.com/qDvJKRK.jpg",
      enable: true
    },
    {
      idProduct: 19,
      name: "Pimenton tomate",
      description: "Ensalada de pepino, pimenton, tomate y lechuga",
      createdAt: "2023-10-28T19:00:00Z",
      updatedAt: "2023-10-28T19:00:00Z",
      price: 1.8,
      stock: 42,
      image: "https://i.imgur.com/Go34oER.jpg",
      enable: true
    },
    {
      idProduct: 20,
      name: "Rucula Ranch",
      description: "Ensalada de Rucula con frutos secos, tomate secos y salsa ranch",
      createdAt: "2023-10-29T21:45:00Z",
      updatedAt: "2023-10-29T21:45:00Z",
      price: 3.0,
      stock: 23,
      image: "https://i.imgur.com/RkAskJr.jpg",
      enable: true
    }
  ]
  return product;
}

detailProducts():any{
    
}
}