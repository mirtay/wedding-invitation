/**
 * Created by miranda on 16/04/15.
 */

var myDataRef = new Firebase('https://the-jutrzenkas.firebaseIO.com/');

$('#bmessage').val('');

function submitRSVP (){
        var name = $('#bname').val();
        var email = $('#bemail').val();
        var phone = $('#bphone').val();
        var people = $('#bpeople').val();
        var message = $('#bmessage').val();
        myDataRef.push({name: name, email: email, phone: phone, people: people, message: message});
    thanks(name);
}

function thanks(name) {
    $('#bname').val('');
    $('#bphone').val('');
    $('#bemail').val('');
    $('#bpeople').val('');
    $('#bmessage').val('');
    alert("Hey, thanks " + name + "!" )
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
}
