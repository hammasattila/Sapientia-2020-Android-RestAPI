const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./data.sql');

/*
(4294967296,'Pilvax','Strada Michael Weiss 16','Brașov','','Brașov','500031','RO','+40268 475 829',45.643439761452697,25.590824986455477,3,'https://www.foodpanda.ro/restaurant/h3mn/pilvax','https://www.takeaway.com/ro/meniu/pilvax','https://lh5.googleusercontent.com/p/AF1QipMcYJjRGr7aGOdW9uEP21ScRKuIsLjDAR5euPdD=w408-h272-k-no',13),
(4294967297,'Tomek','Piața Trandafirilor 16','Târgu Mureș','','Mureș','540053','RO','+40123456789',46.54487258590089,24.560947433692448,2,'https://www.foodpanda.ro/restaurant/b5rh/tomek-doner-kebab','https://www.foodpanda.ro/restaurant/b5rh/tomek-doner-kebab','https://www.google.com/maps/place/Restaurant+Tomek/@46.5448333,24.5609544,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMoxaFdoWcJJHSO5ds9FeuoMGaSINjlpxlQgDVL!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMoxaFdoWcJJHSO5ds9FeuoMGaSINjlpxlQgDVL%3Dw224-h298-k-no!7i3024!8i4032!4m7!3m6!1s0x474bb6344d3fdb7b:0x2814ae071ef99ac3!8m2!3d46.5448333!4d24.5609544!14m1!1BCgIgAQ#',13),
(4294967298,'China Fast Food','Piața Victoriei 10','Târgu Mureș','','Mureș','540053','RO','+40123456789',46.540585181638306,24.556963899074816,1,'','','https://www.google.com/maps/place/China+Fast+Food/@46.540573,24.5569682,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipO9kOx2L8pT-ZYyy9a_tRrL8ROneOMB--XLq_bH!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO9kOx2L8pT-ZYyy9a_tRrL8ROneOMB--XLq_bH%3Dw86-h114-k-no!7i3024!8i4032!4m5!3m4!1s0x0:0xcd9d0f1089fe366c!8m2!3d46.5405681!4d24.5569639#',13),
(4294967299,'Pofte','Strada Înfrățirii 27','Târgu Mureș','','Mureș','540478','RO','+40770843813',46.54000839578588,24.584447204891923,2,'https://cedelicii.ro/','https://cedelicii.ro/','https://cedelicii.ro/wp-content/uploads/2019/09/Homepage-Main-1.jpg',13),
(4294967300,'Pablito','Strada Ploiești 26','Cluj-Napoca','','Cluj','400000','RO','+40741609990',46.77669305208567,23.595654322104068,2,'https://cedelicii.ro/','https://www.foodpanda.ro/restaurant/v8ns/pablito','https://lh5.googleusercontent.com/p/AF1QipPRv3pvwkt5MidW_uzYzIkva2i2u-SrKlqozJQx=w408-h306-k-no', 13),
*/

const sql =`
insert into 'restaurant_table' (id,name,address,city,state,area,postalCode,country,phone,lat,lng,price,urlReserve,urlMobileReserve,urlImage,page)
values
(4294967296,'Pilvax','Strada Michael Weiss 16','Brașov','','Brașov','500031','RO','+40268 475 829',45.643439761452697,25.590824986455477,3,'https://www.foodpanda.ro/restaurant/h3mn/pilvax','https://www.takeaway.com/ro/meniu/pilvax','https://lh5.googleusercontent.com/p/AF1QipMcYJjRGr7aGOdW9uEP21ScRKuIsLjDAR5euPdD=w408-h272-k-no',13),
(4294967297,'Tomek','Piața Trandafirilor 16','Târgu Mureș','','Mureș','540053','RO','+40123456789',46.54487258590089,24.560947433692448,2,'https://www.foodpanda.ro/restaurant/b5rh/tomek-doner-kebab','https://www.foodpanda.ro/restaurant/b5rh/tomek-doner-kebab','https://www.google.com/maps/place/Restaurant+Tomek/@46.5448333,24.5609544,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMoxaFdoWcJJHSO5ds9FeuoMGaSINjlpxlQgDVL!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMoxaFdoWcJJHSO5ds9FeuoMGaSINjlpxlQgDVL%3Dw224-h298-k-no!7i3024!8i4032!4m7!3m6!1s0x474bb6344d3fdb7b:0x2814ae071ef99ac3!8m2!3d46.5448333!4d24.5609544!14m1!1BCgIgAQ#',13),
(4294967298,'China Fast Food','Piața Victoriei 10','Târgu Mureș','','Mureș','540053','RO','+40123456789',46.540585181638306,24.556963899074816,1,'','','https://www.google.com/maps/place/China+Fast+Food/@46.540573,24.5569682,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipO9kOx2L8pT-ZYyy9a_tRrL8ROneOMB--XLq_bH!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO9kOx2L8pT-ZYyy9a_tRrL8ROneOMB--XLq_bH%3Dw86-h114-k-no!7i3024!8i4032!4m5!3m4!1s0x0:0xcd9d0f1089fe366c!8m2!3d46.5405681!4d24.5569639#',13),
(4294967299,'Pofte','Strada Înfrățirii 27','Târgu Mureș','','Mureș','540478','RO','+40770843813',46.54000839578588,24.584447204891923,2,'https://cedelicii.ro/','https://cedelicii.ro/','https://cedelicii.ro/wp-content/uploads/2019/09/Homepage-Main-1.jpg',13),
(4294967300,'Pablito','Strada Ploiești 26','Cluj-Napoca','','Cluj','400000','RO','+40741609990',46.77669305208567,23.595654322104068,2,'https://www.foodpanda.ro/restaurant/v8ns/pablito','https://www.foodpanda.ro/restaurant/v8ns/pablito','https://lh5.googleusercontent.com/p/AF1QipPRv3pvwkt5MidW_uzYzIkva2i2u-SrKlqozJQx=w408-h306-k-no', 13);

`

db.all(sql, [], (err, rows) => {
    if (err) {
        console.error(err)
    }
})