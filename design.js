var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="img.bulbon";
        bulb=1;
    }
    else{
        document.getElementById("image").src="img.bulb";
        bulb=0
    }
}