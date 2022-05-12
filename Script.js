function city()
{
    if (confirm('Укажите город рождения')){
        var namecity = prompt('Введите ваш город','');
    }
    alert("Принято")

    document.getElementById("city").innerHTML = namecity;
}
function color()
{
    
    document.getElementById("color1").style.background ="red";
    document.getElementById("color2").style.background ="blue";
}
function ananas()
{
    var ava = document.getElementById('photo');
    ava.setAttribute('src','ananas.jpg');
}