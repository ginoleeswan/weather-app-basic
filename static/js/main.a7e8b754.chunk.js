(this["webpackJsonpweather-app-basic"]=this["webpackJsonpweather-app-basic"]||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(6),r=a.n(s),i=(a(18),a(4)),l=a(8),o=a.n(l),d=a(10),u=a(5),b=a(9),j=a(3),m=a(13),h=(a(21),a(2)),p="a18f2e1334c441d547d368049603798c",O="https://api.openweathermap.org/data/2.5/";var f=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({}),r=Object(u.a)(s,2),l=r[0],f=r[1],v=Object(c.useState)(""),y=Object(u.a)(v,2),x=(y[0],y[1]),_=Object(c.useState)(""),w=Object(u.a)(_,2),N=w[0],g=w[1],k=function(e){console.log(e);var t={street_number:["street_number"],postal_code:["postal_code"],street:["street_address","route"],province:["administrative_area_level_1","administrative_area_level_2","administrative_area_level_3","administrative_area_level_4","administrative_area_level_5"],city:["locality","sublocality","sublocality_level_1","sublocality_level_2","sublocality_level_3","sublocality_level_4"],country:["country"]},a={street_number:"",postal_code:"",street:"",province:"",city:"",country:""};return e.forEach((function(e){for(var c in t)-1!==t[c].indexOf(e.types[0])&&(a[c]="country"===c?e.short_name:e.long_name)})),a.address=a.street_number+" "+a.street,delete a.street_number,delete a.street,"US"===a.country&&(a.state=a.province,delete a.province),a};return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=N&&N.value,!e.t0){e.next=5;break}return e.next=4,Object(b.b)(N.value.place_id);case 4:e.t0=e.sent;case 5:t=e.t0,a=t&&k(t[0].address_components),console.log("addressObject",a),n(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[N]),Object(c.useEffect)((function(){fetch("".concat(O,"weather?q=").concat(a.city,"&units=metric&APPID=").concat(p)).then((function(e){if(404===e.status)throw new Error("I didn't find this city. Please try again!");return x(null),e.json()})).then((function(e){f(e),console.log(e)}),(function(e){return x(e)})),console.log(a.city)}),[a]),Object(c.useEffect)((function(){navigator.geolocation?console.log("GeoLocation is Available"):console.log("GeoLocation not available")}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"app-name",children:"WEATHER"}),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"weather-side warm":"weather-side",children:"undefined"!=typeof l.main?Object(h.jsxs)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"weather-gradient warm":"weather-gradient",children:[Object(h.jsxs)("div",{className:"date-container",children:[Object(h.jsx)("div",{className:"day",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return"".concat(t)}(new Date)}),Object(h.jsx)("div",{className:"date",children:function(e){var t=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c)}(new Date)}),Object(h.jsxs)("div",{className:"location",children:[Object(h.jsx)(m.a,{className:"location-icon"}),"".concat(l.name,", \n                    ").concat(l.sys.country)]})]}),Object(h.jsxs)("div",{className:"weather-container",children:[function(e){var t=null;switch(e){case"Clouds":t=Object(h.jsx)(j.a,{className:"weather-icon"});break;case"Clear":t=Object(h.jsx)(j.b,{className:"weather-icon"});break;case"Mist":t=Object(h.jsx)(j.c,{className:"weather-icon"});break;case"Rain":t=Object(h.jsx)(j.d,{className:"weather-icon"});break;case"Thunderstorm":t=Object(h.jsx)(j.e,{className:"weather-icon"});break;default:t=Object(h.jsx)(j.b,{className:"weather-icon"})}return t}(l.weather[0].main),Object(h.jsxs)("div",{className:"weather-temp",children:[Math.round(l.main.temp),"\xb0c"]}),Object(h.jsx)("div",{className:"weather-desc",children:l.weather[0].main})]})]}):""}),Object(h.jsxs)("div",{className:"info-side",children:[Object(h.jsx)("div",{className:"today-info-container",children:"undefined"!=typeof l.main?Object(h.jsxs)("div",{className:"today-info",children:[Object(h.jsxs)("div",{className:"feels-like",children:[Object(h.jsx)("span",{className:"title",children:"FEELS LIKE"}),Object(h.jsxs)("span",{className:"value",children:[Math.round(l.main.feels_like),"\xb0C"]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"humidity",children:[Object(h.jsx)("span",{className:"title",children:"HUMIDITY"}),Object(h.jsxs)("span",{className:"value",children:[l.main.humidity,"%"]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"wind",children:[Object(h.jsx)("span",{className:"title",children:"WIND"}),Object(h.jsxs)("span",{className:"value",children:[l.wind.speed," km/h"]})]})]}):""}),Object(h.jsx)("div",{className:"location-box",children:Object(h.jsx)(b.a,{apiKey:"AIzaSyAGKZ_AIonUbG33gB3fLiqfA0LQOxtbEPY",initialValue:"Port Elizabeth",placeholder:"Type in an address",minLength:2,returnKeyType:"search",listViewDisplayed:"auto",renderDescription:function(e){return e.description},fetchDetails:!0,selectProps:{address:N,onChange:function(e){g(e)},styles:{input:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"black"})},option:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"black"})},singleValue:function(e){return Object(i.a)(Object(i.a)({},e),{},{color:"black"})}}}})})]})]}),Object(h.jsxs)("footer",{className:"footer",children:["Simple Weather Application made by Gino Swanepoel ",Object(h.jsx)("br",{}),"\xa9 All rights reserved."]})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a7e8b754.chunk.js.map