
function exitFromAdd()
{
    document.getElementById('functional-container').style.display='none';
    document.getElementById('input-container').style.display='block';
    document.getElementById('post').style.display='none';
    document.getElementById("Key").value='';
    document.getElementById("Coordinate1").value='';
    document.getElementById("Coordinate2").value='';
    document.getElementById("Extra").value='';
    document.getElementById("Name").value='';
    document.getElementById('table-container').style.height='85%';
}

function addObject()
{
    document.getElementById('post').style.display='block';
    document.getElementById('table-container').style.height='60%';
}

async function postServer()
{
    let message=
    {
        File: document.getElementById('objectSelect').value,
        Coordinate1: document.getElementById('Coordinate1').value,
        Coordinate2: document.getElementById('Coordinate2').value,
        Name: document.getElementById('Name').value,
        Extra: document.getElementById('Extra').value
    };

    let response = await fetch(/*`https://kazan1.herokuapp.com/add`*/`http://localhost:5000/add`,
    {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(message)
        });

    if (response.ok)
    {
        alert("Объект успешно добавлен");
        document.getElementById('objectSelect').value="";
        document.getElementById('Coordinate1').value="";
        document.getElementById('Coordinate2').value="";
        document.getElementById('Name').value="";
        document.getElementById('Extra').value="";
    
        switch(message.File)
        {
            case "poo":
                getPOO();
                break
            case "kvo":
                getKVO()
                break
            case "infec":
                getInfec()
                break
            case "bridg":
                getBridges()
                break
            case "hospital":
                hospitalMap()
                break
        }
    }
}