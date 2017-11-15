let container = document.querySelector('.container');
//*** шаблонизатор

// let sourse = document.querySelector('#first-template').innerHTML;
// let template = Handlebars.compile(sourse);
// let html = template({
//         list: [
//             {list: 'первый список'},
//             {list: 'второй список'},
//             {list: 'третий список'},
//             {list: 'четвертый список'},
//             {list: 'пятый список'}
//         ]
//
//     }
// );
//
// container.innerHTML += html;
//
// console.log(sourse);
// console.log(template);
// console.log(html);


// Api в ВК доступ к друзьям и вывод (фотография + ФИО)
// new Promise(function (resolve) {
//     if(document.readyState === 'complete'){
//         resolve()
//     }else{
//         window.onload = resolve;
//     };
//
// }).then(function () {
//     return new Promise (function (resolve,reject) {
//         VK.init({
//             apiId: 6256611
//         });
//
//         VK.Auth.login(function (response) {
//             if(response.session){
//                 resolve()
//             }else{
//                 reject(new Error('Не удалось авторизоваться'));
//             }
//
//
//         },4);
//
//     })
//
// }).then(function () {
//     return new Promise(function (resolve, reject) {
//         VK.api('users.get', {name_case: 'gen'}, function (response) {
//             if (response.error) {
//                 reject(new Error(response.error.error_msg));
//
//             } else {
//                 var userData = response.response[0];
//                 var h1 = document.createElement('h1');
//                 document.body.appendChild(h1);
//                 h1.textContent = 'Друзья на странице ' + ' ' + userData.first_name + ' ' + userData.last_name;
//                 resolve();
//             }
//
//         })
//
//
//     })
// }).then(function () {
//     return new Promise(function (resolve,reject) {
//         VK.api('friends.get',{v: '5.69',fields: 'photo_100, bdate', count:'5' },function (response) {
//             if(response.error){
//                 reject(new Error(response.error.error_msg));
//             }else{
//                 let item = response.response.items;
//             for ( let key in item){
//                 let div = document.createElement('div');
//                 let img = new Image;
//                 img.src = item[key].photo_100;
//                 div.innerHTML = item[key].first_name + item[key].last_name;
//                 document.body.appendChild(img);
//                 document.body.appendChild(div);
//             }
//         }
//
//         })
//
//     })
//
// })
//     .catch(function (e) {
//     alert('Ощибка' + e.message)
//
// });


//Api Google maps
function initMap() {
    var div = document.querySelector('#map');
    var options = {
        zoom: 8,
        center: {
            lat: 48.738967,
            lng: 37.58435
        }
    };
    var myMap = new google.maps.Map(div,options);
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var marker = new google.maps.Marker({
        position:{ lat: 48.753188, lng: 37.609726 },
        map: myMap,
        icon: image
    })
    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>My house beach!!!</h3>'
    })

    marker.addListener('click',function () {
        infoWindow.open(myMap,marker);

    })

//    Add marker function

}
