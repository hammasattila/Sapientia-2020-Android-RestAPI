const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./data.sql');

const sql =`
insert into 'restaurant_table' (id,name,address,city,state,area,postalCode,country,phone,lat,lng,price,urlReserve,urlMobileReserve,urlImage,page)
values
(4294967296,'Pilvax','Strada Michael Weiss 16','Brașov','','Brașov','500031','RO','+40268 475 829',45.643439761452697,25.590824986455477,3,'https://www.foodpanda.ro/restaurant/h3mn/pilvax','https://www.takeaway.com/ro/meniu/pilvax','https://lh5.googleusercontent.com/p/AF1QipMcYJjRGr7aGOdW9uEP21ScRKuIsLjDAR5euPdD=w408-h272-k-no',13),
(4294967297,'Tomek','Piața Trandafirilor 16','Târgu Mureș','','Mureș','540053','RO','+40123456789',46.54487258590089,24.560947433692448,2,'https://www.foodpanda.ro/restaurant/b5rh/tomek-doner-kebab','https://www.foodpanda.ro/restaurant/b5rh/tomek-doner-kebab','https://scontent.fsbz3-1.fna.fbcdn.net/v/t1.0-9/93600923_1120245511665322_163825183839223808_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=AmGTD4btlMQAX9Q6bkI&_nc_ht=scontent.fsbz3-1.fna&oh=e4eca96696c8527838c852ef2dacc7dc&oe=600263CA',13),
(4294967298,'China Fast Food','Piața Victoriei 10','Târgu Mureș','','Mureș','540053','RO','+40123456789',46.540585181638306,24.556963899074816,1,'','','https://lh5.googleusercontent.com/p/AF1QipP4aswJHg-OYNerqSoOoLaK6WG567APmo5DtFH_=w400-h300-k-no',13),
(4294967299,'Pofte','Strada Înfrățirii 27','Târgu Mureș','','Mureș','540478','RO','+40770843813',46.54000839578588,24.584447204891923,2,'https://cedelicii.ro/','https://cedelicii.ro/','https://cedelicii.ro/wp-content/uploads/2019/09/Homepage-Main-1.jpg',13),
(4294967300,'Pablito','Strada Ploiești 26','Cluj-Napoca','','Cluj','400000','RO','+40741609990',46.77669305208567,23.595654322104068,2,'https://www.foodpanda.ro/restaurant/v8ns/pablito','https://www.foodpanda.ro/restaurant/v8ns/pablito','https://lh5.googleusercontent.com/p/AF1QipPRv3pvwkt5MidW_uzYzIkva2i2u-SrKlqozJQx=w408-h306-k-no', 13);

`

db.all(sql, [], (err, rows) => {
    if (err) {
        console.error(err)
    }
})