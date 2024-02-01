
# Simple Web API

Simple Web API is a "Web API" that communicate with json and allow to manage a orders, users, products with deletion, visualization, creation and edit with a autentication level for any requests



## API Reference

### Authentication

#### Login
```http
  POST /auth/login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `JSON Object with email and passowrd` | `JSON` | **Return**. Your Auth token saved on cookies |

#### Register
```http
  POST /auth/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `JSON Object with email and passowrd` | `JSON` | **Return**. Your Auth token saved on cookies |

### Products

#### Get Products

```http
  GET /products
```
 Return an JSON Array with all products if logged

#### Get product
```http
  GET /products/:id
```

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Get the product with same ID |

#### Create product
```http
  POST /products/create
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Item info` | `JSON Object` | **Required**. Passing the product information |

```
{
    "name": "Tramezino al pesce",
    "description": "Tramezino con gamberetti e salmone + maionese",
    "price": "5",
    "quantity": "15"
}
```

#### Delete product
```http
  DELETE /products/:id
```

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Delete the product with same ID |

#### Edit product
```http
  POST /products/:id
```

|  Body or Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Item info` | `JSON Object` | **Required**. Passing the product information |
| `id` | `string` | **Required**. Passing the id of product |

```
{
    "name": "Tramezino al pesce",
    "description": "Tramezino con gamberetti e salmone + maionese",
    "price": "5",
    "quantity": "15"
}
```

### Orders

#### Create order

```http
  POST /orders/create
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Order info` | `JSON Object` | **Required**. Set info of order |

```
{
    "productId": "3"
}
```

#### Get Orders

```http
  GET /orders
```

Get a list of orders

#### Get order

```http
  GET /orders/:id
```

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Get an order Object |

#### Edit order

```http
  POST /orders/:id
```

| Params and Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of Object |
| `updated info` | **Required**. Info as a JSON Object |

#### Delete order

```http
  DELETE /orders/delete/:id
```

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. to select an order to delete |

## Usage

- Clone repository
- install npm modules
- Connect your Supabase DB (edit with your keys /src/db/index.ts)

