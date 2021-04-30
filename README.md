# Sapientia-2020-Android-RestAPI

This project was a replacement for [OpenTableAPI](https://github.com/sosedoff/opentable) during the development of [Android course project](https://github.com/hammasattila/Sapientia-2020-Android-Project). It is hosted on one of the subdomains at [Imok](https://imok.biz/).

## 1. Overview

- Secure API endpoint: [https://ratpark-api.imok.space/](https://ratpark-api.imok.space/)
- Response Format: JSON
- No authentication or API tokens required

## 2. API Reference

### 2.1. List all countries

```HTTPS
GET /api/countries
```

Returns response:

```JSON
{
  "count": 8,
  "countries": ["WY","AR", "CA", "CO", "HI", ...]
}
```

### 2.2. List all states

```HTTPS
GET /api/states
```

Returns response:

```JSON
{
  "count": 8,
  "states": ["WY","AR", "CA", "CO", "HI", ...]
}
```

### 2.3. List all cities

```HTTPS
GET /api/cities
```

Returns response:

```JSON
{
  "count": 1234,
  "cities": [
    "Chicago",
    "San Francisco",
    "New York",
    ...
  ]
}
```

### 2.4. Find restaurants

```HTTPS
GET /api/restaurants
```

Parameters for filtering:

- `price` - Price range for the restaurant. Values: 1-4.
- `name` - Name of the restaurant
- `address` - Address line. Should not contain state or city or zip.
- `state` - State code (ex.: IL)
- `city` - City name (ex.: Chicago)
- `zip` - Zipcode (ex: 60601)
- `country` - Country code (ex: US)
- `page` -  Page (default: 1)
- `per_page` - Entries per Page, can be one of [5, 10, 15, 25, 50, 100] (default: 25)

Returns response:

```JSON
{
  "count": 521,
  "per_page": 25,
  "current_page": 1,
  "restaurants": [ ... ]
}
```

### 2.5. Find a single restaurant

```HTTPS
GET /api/restaurants/:id
```

Returns a single restaurant record, see reference for details. Example:

```JSON
{
  "id": 107257,
  "name": "Las Tablas Colombian Steak House",
  "address": "2942 N Lincoln Ave",
  "city": "Chicago",
  "state": "IL",
  "area": "Chicago / Illinois",
  "postal_code": "60657",
  "country": "US",
  "phone": "7738712414",
  "lat": 41.935137,
  "lng": -87.662815,
  "price": 2,
  "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
  "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
  "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
}
```

## 3. Data Reference

Restaurant attributes:

```JSON
{
  "id": 107257,
  "name": "Las Tablas Colombian Steak House",
  "address": "2942 N Lincoln Ave",
  "city": "Chicago",
  "state": "IL",
  "area": "Chicago / Illinois",
  "postal_code": "60657",
  "country": "US",
  "phone": "7738712414",
  "lat": 41.935137,
  "lng": -87.662815,
  "price": 2,
  "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
  "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
  "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
}
```

## Disclaimer

- This service IS NOT affiliated with OpenTable Inc., any of its products or
employees.
