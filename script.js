function calcD(a,b,c)
{
    let res = b*b - 4*a*c;
    document.getElementById("demo").innerHTML = res;
}

function min(a,b)
{
    if (a < b)
    {
        res = a
    } else {
        res = b;
    }
    document.getElementById("demo2").innerHTML = res;
}