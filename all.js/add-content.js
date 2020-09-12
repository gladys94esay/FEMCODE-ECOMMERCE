var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting ='Good Evening!';
} else if (hourNow > 12){
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

var username;
var message;

username = 'esosa';
message = 'see our upcoming range';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;



var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);

var total = subtotal + shipping;
 

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;





function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvaibility = function() {
        return this.rooms - this.booked;
    };
}

var QuayHotel = new Hotel('Quay', 40, 25);
var ParkHotel = new Hotel('Park', 140, 95);
var RealHotel = new Hotel('Real', 81, 41);


var details1 = QuayHotel.name + ' rooms: '
    details1 += QuayHotel.checkAvaibility();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = ParkHotel.name + ' rooms: '
    details2 += ParkHotel.checkAvaibility();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = RealHotel.name + ' rooms: '
    details3 += RealHotel.checkAvaibility();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;





var hotel = {
    name : 'phil',
    rooms : 120,
    booked : 77,

};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById('hotelname');
    elName.textContent = hotel.name;

 var elGym = document.getElementById('gym');
    elGym.textContent = 'Gym: ' + hotel.gym;

 var elPool = document.getElementById('pool');
    elPool.textContent = 'Pool: ' + hotel.pool;


var score1 = 70;
var score2 = 90;
var pass1 = 50;
var pass2 = 60;


var comparison = ((score1 <= pass1) || (score2 <= pass2));
var msg = 'The both scores: ' + !(comparison);

var el = document.getElementById('answer');
el.textContent = msg;

var pen = 75; 
var chalk = 67;
var msg;



if (pen >= chalk) {
    msg = 'Proceed to the next round.';
}else {
    msg = 'try again some other time!';
}

var sharp = document.getElementById('sharp');
 sharp.textContent = msg;

var comment;
var level = 2;


switch(level) {
    case 1 :
    comment = 'great lady!';
    break;

    case 2 :
    comment = 'freashest lady!';
    break;
    
    
     case 3 :
     comment = 'wonderful lady from Edo!';
     break;

     default:
     comment =' you can be a better lady!';
     break;
        
        
}

var lady = document.getElementById('lady');

lady.textContent = comment;

var paragraph = document.createElement('p');
paragraph.textContent = "My name is Charles Nohense";
console.log(paragraph);
 var create = document.querySelector('.create');
create.appendChild(paragraph);

var grade = [30, 40, 34, 67, 36, 78, 23];
var arrayLength = grade.length;
var roundNumber = 0;
var mark ='';
var i = 0;


 for (i = 0; i < arrayLength; i++) {
     roundNumber = (i + 1);
     mark += 'Round ' + roundNumber + ' : '; 
     mark +=  grade[i] + '<br / >' ; 
 }
document.getElementById('grade').innerHTML = mark;



var i = 1;
var say = '';
  while (i < 11) {
   say += i + ' + 5 = ' + (i + 5) + '<br I>'; 
   i++;
  }

document.getElementById('dan').innerHTML = say;




 