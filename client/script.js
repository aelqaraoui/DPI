const xmlhttp = new XMLHttpRequest();

function registerNewPatient(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = parseInt(document.getElementById('age').value);
    let cin = document.getElementById('cin').value;
    let isMale = document.getElementById('male').checked;

    let data = {
        patient: {
            fname,
            lname,
            age, 
            cin, 
            sex: isMale ? "male" : "female"
        }
    }

    xmlhttp.open("POST", 'http://localhost:3000/register-patient');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));
    alert("Patient " + fname + " " + lname + " has been added.");

    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('age').value = "";
    document.getElementById('cin').value = "";
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
}

function addToInventory(){
    let id = parseInt(document.getElementById('id').value);
    let name = document.getElementById('name').value;
    let amount = parseInt(document.getElementById('amount').value);
    let price = parseInt(document.getElementById('price').value);

    let data = {
        med: {
            id,
            name,
            amount, 
            price
        }
    }

    xmlhttp.open("POST", 'http://localhost:3000/add-inventory');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));
    alert(name + " has been added to inventory.");

    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('price').value = "";

    window.location.href = "pharmacy";
}

function updateInventory(){
    
    let drugName = document.getElementById('drug-name').value;
    let drugAmount = parseInt(document.getElementById('drug-amount').value);
    let isAdding = document.getElementById('add').checked;

    let d = {
        name: drugName
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(xhr.responseText);

            console.log(response);

            let data = {
                med: {
                    id: response.id,
                    name: drugName,
                    amount: isAdding ? response.amount + drugAmount : response.amount - drugAmount, 
                    price: response.price
                }
            }

            xmlhttp.open("POST", 'http://localhost:3000/update-inventory');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.send(JSON.stringify(data));
            alert("Inventory has been updated");

            document.getElementById('drug-name').value = "";
            document.getElementById('drug-amount').value = "";
        }
    }
    xhr.open("POST", 'http://localhost:3000/get-inventory');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));

    window.location.href = "pharmacy";
}

function renderPatients(){
    fetch('http://localhost:3000/patient-list')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('table').innerHTML += "<tr><th>Firstname</th><th>Lastname</th><th>Age</th><th>CIN</th><th>Sex</th><th></th></tr>"
            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('table').innerHTML += "<tr><th>" + list[i].fname + "</th><th>" + list[i].lname + "</th><th>" + list[i].age + "</th><th>" + list[i].cin + "</th><th>" + list[i].sex + "</th><th><a href='edit?index=" + i + "'>Edit</a></th></tr>"
            }
        }
    );
}

function renderPharmacy(){
    fetch('http://localhost:3000/patient-list')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('table').innerHTML += "<tr><th>Firstname</th><th>Lastname</th><th>Age</th><th>CIN</th><th>Sex</th><th></th></tr>"
            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('table').innerHTML += "<tr><th>" + list[i].fname + "</th><th>" + list[i].lname + "</th><th>" + list[i].age + "</th><th>" + list[i].cin + "</th><th>" + list[i].sex + "</th><th><a href='perscription?index=" + i + "'>Check Perscription</a></th></tr>"
            }
        }
    );

    fetch('http://localhost:3000/inventory')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('inventory').innerHTML += "<tr><th>ID</th><th>Name</th><th>Amount</th><th>Price</th></tr>"
            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('inventory').innerHTML += "<tr><th>" + list[i].id + "</th><th>" + list[i].name + "</th><th>" + list[i].amount + "</th><th>" + list[i].price + "</th></tr>"
            }
        }
    );
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function renderPatient(){
    let i = getParameterByName('index');

    fetch('http://localhost:3000/patient-list')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('fname').value = list[i].fname;
            document.getElementById('lname').value = list[i].lname;
            document.getElementById('age').value = list[i].age;
            document.getElementById('cin').value = list[i].cin;
            document.getElementById('male').checked = list[i].sex === "male";
            document.getElementById('female').checked = list[i].sex !== "male";
        }
    );

    fetch('http://localhost:3000/obsv-list')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('observations').value = list[i].obsv;
        }
    );
}

function renderPerscription(){
    let i = getParameterByName('index');

    fetch('http://localhost:3000/patient-list')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('fname').innerHTML += list[i].fname;
            document.getElementById('lname').innerHTML += list[i].lname;
            document.getElementById('age').innerHTML += list[i].age;
            document.getElementById('cin').innerHTML += list[i].cin;
            document.getElementById('sex').innerHTML += list[i].sex;
        }
    );

    fetch('http://localhost:3000/obsv-list')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('observations').innerHTML += list[i].obsv;
        }
    );
}

function goBack(){
    window.location.href = "pharmacy";
}

function modifyPatient(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = parseInt(document.getElementById('age').value);
    let cin = document.getElementById('cin').value;
    let isMale = document.getElementById('male').checked;
    let obsv = document.getElementById('observations').value;

    let data = {
        patient: {
            fname,
            lname,
            age, 
            cin, 
            sex: isMale ? "male" : "female"
        },
        obsv: obsv
    }

    xmlhttp.open("POST", 'http://localhost:3000/modify-patient');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));
    alert("Patient " + fname + " " + lname + " records has been modified.");

    window.location.href = "doctor";
}
