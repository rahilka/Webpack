// module2:
// console.log('Module 2 stuff');

var _ = require('lodash');

var people = [{"id":1,"first_name":"Lebbie","last_name":"Whibley","email":"lwhibley0@mlb.com","gender":"Female","ip_address":"245.110.183.69"},
{"id":2,"first_name":"Charmaine","last_name":"Swindles","email":"cswindles1@nbcnews.com","gender":"Female","ip_address":"146.192.39.235"},
{"id":3,"first_name":"Albina","last_name":"Batkin","email":"abatkin2@comcast.net","gender":"Female","ip_address":"57.163.167.133"},
{"id":4,"first_name":"Kathryn","last_name":"Dumelow","email":"kdumelow3@ustream.tv","gender":"Female","ip_address":"69.124.108.219"},
{"id":5,"first_name":"Emmery","last_name":"Scraggs","email":"escraggs4@indiatimes.com","gender":"Male","ip_address":"47.20.204.248"},
{"id":6,"first_name":"Patsy","last_name":"Urion","email":"purion5@bravesites.com","gender":"Female","ip_address":"151.178.96.225"},
{"id":7,"first_name":"Luis","last_name":"Tennison","email":"ltennison6@slashdot.org","gender":"Male","ip_address":"220.148.48.28"},
{"id":8,"first_name":"Dore","last_name":"Bolf","email":"dbolf7@virginia.edu","gender":"Male","ip_address":"222.67.142.129"},
{"id":9,"first_name":"Lea","last_name":"Balk","email":"lbalk8@tmall.com","gender":"Female","ip_address":"233.142.80.209"},
{"id":10,"first_name":"Georgine","last_name":"McFade","email":"gmcfade9@apple.com","gender":"Female","ip_address":"214.11.205.187"},
{"id":11,"first_name":"Carry","last_name":"Billows","email":"cbillowsa@shop-pro.jp","gender":"Female","ip_address":"206.219.3.175"},
{"id":12,"first_name":"Dev","last_name":"Hanster","email":"dhansterb@dailymail.co.uk","gender":"Male","ip_address":"11.109.190.15"},
{"id":13,"first_name":"Tim","last_name":"Tours","email":"ttoursc@seattletimes.com","gender":"Female","ip_address":"41.168.85.190"},
{"id":14,"first_name":"Tressa","last_name":"Millott","email":"tmillottd@wikia.com","gender":"Female","ip_address":"64.220.16.19"},
{"id":15,"first_name":"Tabbitha","last_name":"Holdren","email":"tholdrene@people.com.cn","gender":"Female","ip_address":"174.73.18.19"},
{"id":16,"first_name":"Georgianne","last_name":"Depper","email":"gdepperf@google.com.au","gender":"Female","ip_address":"189.153.22.85"},
{"id":17,"first_name":"Gearalt","last_name":"Petronis","email":"gpetronisg@seattletimes.com","gender":"Male","ip_address":"186.198.143.246"},
{"id":18,"first_name":"Clark","last_name":"Rayner","email":"craynerh@storify.com","gender":"Male","ip_address":"33.73.119.4"},
{"id":19,"first_name":"Violetta","last_name":"Evamy","email":"vevamyi@flavors.me","gender":"Female","ip_address":"47.255.91.33"},
{"id":20,"first_name":"Hebert","last_name":"Sacase","email":"hsacasej@wisc.edu","gender":"Male","ip_address":"229.65.122.69"}]

var femaleCount =_.filter(people, {gender: "Female"}).length;

console.log(femaleCount);
