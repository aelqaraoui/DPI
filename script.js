const xmlhttp = new XMLHttpRequest();

function registerNewPatient(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = parseInt(document.getElementById('age').value);
    let cin = document.getElementById('cin').value;
    let phone = document.getElementById('phone').value;
    let isMale = document.getElementById('male').checked;

    let data = {
        patient: {
            fname,
            lname,
            age, 
            cin, 
            phone,
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
    document.getElementById('phone').value = "";
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
}

function modifyPatient(){

    let i = getParameterByName('index');
    let cin;

    let hereditary_disease = document.getElementById('hereditary-disease').value;
	let had_surgical_operation = document.getElementById('had-surgical-operation').checked;
    let does_smoke = document.getElementById('does-smoke').checked;
    let does_drink = document.getElementById('does-drink').checked;
    let have_kidney_disease = document.getElementById('have-kidney-disease').checked;
    let have_hbp = document.getElementById('have-hbp').checked;
    let diabetic = document.getElementById('diabetic').checked;
    let have_tuberculosis = document.getElementById('have-tuberculosis').checked;
    let have_heart_disease = document.getElementById('have-heart-disease').checked;

    let d = {
        condition
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let list = JSON.parse(xhr.responseText);

            cin = list[i].cin

            let data = {
                medical: {
                    cin,
                    hereditary_disease,
                    had_surgical_operation,
                    does_smoke,
                    does_drink,
                    have_kidney_disease,
                    have_hbp,
                    diabetic,
                    have_tuberculosis,
                    have_heart_disease
                }
            }
        
            xmlhttp.open("POST", 'http://localhost:3000/modify-patient');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.send(JSON.stringify(data));

            alert("Medical information saved");
        
            window.location.href = "patients";
        }
    }
    xhr.open("POST", 'http://localhost:3000/patient-list');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));

    
}

let condition = '1'

function modifyCondition(){
    let t = document.getElementById("searchbox").value;

    condition = (t === "") ? '1' : "cin='" + t + "'";
    console.log(condition)
    renderPatients()
}

function renderPatients(){

    document.getElementById('table').innerHTML = ""

    let d = {
        condition
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let list = JSON.parse(xhr.responseText);

            console.log(list);

            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('table').innerHTML += "<tr style='height: 70px;'><td class='u-table-cell u-block-3d5f-13'>" + list[i].fname + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].lname + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].age + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].cin + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].phone + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].sex + "</td><td class='u-table-cell u-block-3d5f-13'><a href='edit?index=" + i + "'>Edit</a></td></tr>"
            }
        }
    }
    xhr.open("POST", 'http://localhost:3000/patient-list');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));
}

function renderPatients2(){

    document.getElementById('table').innerHTML = ""

    let d = {
        condition
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let list = JSON.parse(xhr.responseText);

            console.log(list);

            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('table').innerHTML += "<tr style='height: 70px;'><td class='u-table-cell u-block-3d5f-13'>" + list[i].fname + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].lname + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].age + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].cin + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].phone + "</td><td class='u-table-cell u-block-3d5f-13'>" + list[i].sex + "</td><td class='u-table-cell u-block-3d5f-13'><a href='doctor-edit?index=" + i + "'>Check</a></td></tr>"
            }
        }
    }
    xhr.open("POST", 'http://localhost:3000/patient-list');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));
}

let symp = ['abdominal_pain', 'abnormal_menstruation', 'acidity','acute_liver_failure', 'altered_sensorium', 'anxiety', 'back_pain','belly_pain', 'blackheads', 'bladder_discomfort', 'blister','blood_in_sputum', 'bloody_stool', 'blurred_and_distorted_vision','breathlessness', 'brittle_nails', 'bruising','burning_micturition', 'chest_pain', 'chills','cold_hands_and_feets', 'coma', 'congestion', 'constipation','continuous_feel_of_urine', 'continuous_sneezing', 'cough','cramps', 'dark_urine', 'dehydration', 'depression', 'diarrhoea','dischromic _patches', 'distention_of_abdomen', 'dizziness','drying_and_tingling_lips', 'enlarged_thyroid', 'excessive_hunger','extra_marital_contacts', 'family_history', 'fast_heart_rate','fatigue', 'fluid_overload', 'foul_smell_of urine', 'headache','high_fever', 'hip_joint_pain', 'history_of_alcohol_consumption','increased_appetite', 'indigestion', 'inflammatory_nails','internal_itching', 'irregular_sugar_level', 'irritability','irritation_in_anus', 'itching', 'joint_pain', 'knee_pain','lack_of_concentration', 'lethargy', 'loss_of_appetite','loss_of_balance', 'loss_of_smell', 'malaise', 'mild_fever','mood_swings', 'movement_stiffness', 'mucoid_sputum','muscle_pain', 'muscle_wasting', 'muscle_weakness', 'nausea','neck_pain', 'nodal_skin_eruptions', 'obesity','pain_behind_the_eyes', 'pain_during_bowel_movements','pain_in_anal_region', 'painful_walking', 'palpitations','passage_of_gases', 'patches_in_throat', 'phlegm', 'polyuria','prominent_veins_on_calf', 'puffy_face_and_eyes','pus_filled_pimples', 'receiving_blood_transfusion','receiving_unsterile_injections', 'red_sore_around_nose','red_spots_over_body', 'redness_of_eyes', 'restlessness','runny_nose', 'rusty_sputum', 'scurring', 'shivering','silver_like_dusting', 'sinus_pressure', 'skin_peeling','skin_rash', 'slurred_speech', 'small_dents_in_nails','spinning_movements', 'spotting_ urination', 'stiff_neck','stomach_bleeding', 'stomach_pain', 'sunken_eyes', 'sweating','swelled_lymph_nodes', 'swelling_joints', 'swelling_of_stomach','swollen_blood_vessels', 'swollen_extremeties', 'swollen_legs','throat_irritation', 'toxic_look_(typhos)', 'ulcers_on_tongue', 'unsteadiness', 'visual_disturbances', 'vomiting', 'watering_from_eyes', 'weakness_in_limbs', 'weakness_of_one_body_side', 'weight_gain', 'weight_loss', 'yellow_crust_ooze', 'yellow_urine', 'yellowing_of_eyes', 'yellowish_skin']

function renderSymptoms(){
    for(let i = 0; i < symp.length; i++)
    {
        document.getElementById('symptoms').innerHTML += "<option id='" + symp[i] + "' value='" + symp[i] + "'>" + symp[i] + "</option>"
    }
}

let symptomList = []

function addSymptom(){
    let s = document.getElementById('symptoms').value;
    symptomList.push(s);
    document.getElementById('symptomList').innerHTML += "<div>" + s + "</div>"
}

function predict(){
    let d = {
        symptoms: symptomList.toString()
    }
    console.log(d)

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(xhr.responseText);

            document.getElementById('prediction').innerHTML += "<h5>Most probable disease : </h5>" + response['disease'];
        }
    }
    xhr.open("POST", 'http://localhost:5000/model');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));
}

function renderObservations(){
    let i = getParameterByName('index');
    
    let d = {
        condition: '1'
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let list = JSON.parse(xhr.responseText);

            let data = {
                cin: list[i].cin
            }
        
            let xhr1 = new XMLHttpRequest();
            xhr1.onreadystatechange = function(){
                let response = JSON.parse(xhr1.responseText);

                document.getElementById('obsv-list').innerHTML = ""
                for(let i = 0; i < response.length; i++){
                    document.getElementById('obsv-list').innerHTML += "<tr style='height: 46px;'><td class='u-border-1 u-border-grey-dark-1 u-table-cell u-block-555b-22'>" + response[i].doctor + "</td><td class='u-border-1 u-border-grey-dark-1 u-table-cell u-block-555b-23'>" + response[i].speciality + "</td><td class='u-border-1 u-border-grey-dark-1 u-table-cell u-block-555b-24'>" + response[i].obsv + "</td><td class='u-border-1 u-border-grey-dark-1 u-table-cell u-block-555b-25'>" + response[i].date + "</td></tr>"
                }
                
            }

            xhr1.open("POST", 'http://localhost:3000/obsv-list');
            xhr1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr1.send(JSON.stringify(data));
        }
    }
    xhr.open("POST", 'http://localhost:3000/patient-list');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));
}

function addObservation(){
    let i = getParameterByName('index');
    
    let doctor = document.getElementById('doctor-id').value;
    let speciality = document.getElementById('speciality').value;
    let date = document.getElementById('date').value;
    let obsv = document.getElementById('observation').value;

    let d = {
        condition: '1'
    };

    let cin;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let list = JSON.parse(xhr.responseText);

            cin = list[i].cin;
            let data = {
                cin,
                doctor,
                speciality,
                obsv,
                date
            }

            xmlhttp.open("POST", 'http://localhost:3000/add-obsv');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.send(JSON.stringify(data));

            alert("Observation saved");
        
            window.location.reload();
        }
    }
    xhr.open("POST", 'http://localhost:3000/patient-list');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));
}

function renderRadios(){
    let i = getParameterByName('index');
    
    let d = {
        condition: '1'
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let list = JSON.parse(xhr.responseText);

            let data = {
                cin: list[i].cin
            }
        
            let xhr1 = new XMLHttpRequest();
            xhr1.onreadystatechange = function(){
                let response = JSON.parse(xhr1.responseText);

                document.getElementById('radios').innerHTML = ""
                for(let i = 0; i < response.length; i++){
                    document.getElementById('radios').innerHTML += "<tr style='height: 46px;'><td class='u-border-1 u-border-grey-dark-1 u-table-cell u-block-bb71-30'><a href='uploads/" + response[i].filename + "'>" + response[i].name + "</a></td><td class='u-border-1 u-border-grey-dark-1 u-table-cell u-block-bb71-31'>" + response[i].date + "</td></tr>"
                }
                
            }

            xhr1.open("POST", 'http://localhost:3000/get-radio');
            xhr1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr1.send(JSON.stringify(data));
        }
    }
    xhr.open("POST", 'http://localhost:3000/patient-list');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));
}












function renderDoc(){
    renderSymptoms();
    renderObservations();
    renderRadios();

    let i = getParameterByName('index');
    
    let d = {
        condition: '1'
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let list = JSON.parse(xhr.responseText);

            document.getElementById('cin-field').value = list[i].cin;
        }
    }
    xhr.open("POST", 'http://localhost:3000/patient-list');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(d));
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

function renderPharmacy(){
    fetch('http://localhost:3000/patient-list')
    .then(
        response => response.json()
    ).then(
        list => {
            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('table').innerHTML += "<tr style='height: 70px;'><td class='u-table-cell'>" + list[i].fname + "</td><td class='u-table-cell'>" + list[i].lname + "</td><td class='u-table-cell'>" + list[i].age + "</td><td class='u-table-cell'>" + list[i].cin + "</td><td class='u-table-cell'>" + list[i].sex + "</td><td class='u-table-cell'><a href='perscription?index=" + i + "'>Check Perscription</a></td></tr>"
            }
        }
    );

    fetch('http://localhost:3000/inventory')
    .then(
        response => response.json()
    ).then(
        list => {
            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('inventory').innerHTML += "<tr style='height: 70px;'><td class='u-table-cell'>" + list[i].id + "</td><td class='u-table-cell'>" + list[i].name + "</td><td class='u-table-cell'>" + list[i].amount + "</td><td class='u-table-cell'>" + list[i].price + "</td></tr>"
            }
        }
    );
}

function renderRadiology(){
    fetch('http://localhost:3000/patient-list')
    .then(
        response => response.json()
    ).then(
        list => {
            document.getElementById('table').innerHTML += "<tr><th>Firstname</th><th>Lastname</th><th>Age</th><th>CIN</th><th>Sex</th><th></th></tr>"
            for(let i = 0; i < list.length; i++)
            {
                document.getElementById('table').innerHTML += "<tr><th>" + list[i].fname + "</th><th>" + list[i].lname + "</th><th>" + list[i].age + "</th><th>" + list[i].cin + "</th><th>" + list[i].sex + "</th><th><a href='radios?index=" + i + "'>Check Radios</a></th></tr>"
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
            document.getElementById('sex').value = list[i].sex;
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
