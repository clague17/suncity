var event;
var day;
var hour;
var eventDescription;
    //getting elements for auth

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');

//Sign in User
    function firebaseLogin(){
        const email = document.getElementById('txtEmail').value;
        const pass = document.getElementById('txtPassword').value;
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, pass);
        console.log(email, pass);
        if(email)
        window.open('administrator.html');
        }
//Log out
    function firebaseLogout(){
        console.log('bye!');
        firebase.auth().signOut();
    }

    firebase.auth().onAuthStateChanged(firebaseUser => { //keeps checking if admin signed out
        if(firebaseUser) {
            console.log(firebaseUser);
        } else{
            console.log('not logged in');
        }
        })
    
    var database = firebase.database();

    function newEvent(){
        //a new event/class/etc
        var data = {
            event: document.getElementById('event').value,
            day: document.getElementById('days').value,
            hour: document.getElementById('hour').value,
            eventDescription:document.getElementById('addDescription').value
        }
        console.log(data)
        ref.push(data);
    }
    var ref = database.ref('events');
    ref.on('value', gotData, errData);

    function gotData(data){
        
        console.log(data.val());
        var events = data.val();
        var keys = Object.keys(events);
        console.log(keys);
        for(var i=0; i<keys.length; i++){
            var k = keys[i];
            var event = events[k].event;
            var day = events[k].day;
            var time = events[k].hour;
            var description = events[k].eventDescription;
            console.log(event,day,time,description);
            var table = document.getElementById('eventList');
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = event;
            cell2.innerHTML = day;
            cell3.innerHTML = time;
            cell4.innerHTML = description;
        }
    }
    function errData(err){
        console.log('Error!');
        console.log(err);
    }


    
       
