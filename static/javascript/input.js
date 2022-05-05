
async function accessCtrl()
{

    var accKey=document.getElementById("Key").value;
    document.getElementById("Key").value="";

    let response = await fetch(`https://kazan1.herokuapp.com/auth`,
    {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(accKey)
    });

    if (response.ok)
    {
        let res=await response.json();
        if (res==0)
        {
            alert("Введённый ключ не действителен!!!");
        }
        else if (res==1)
        {
            document.getElementById('functional-container').style.display='block';
            document.getElementById('input-container').style.display='none';
        }
    }


}
