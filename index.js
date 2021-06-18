const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser());
const port = 3000;

const path = require("path");
const mysql = require("mysql");


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/client', express.static(path.join(__dirname, 'client')));
app.use('/images', express.static(path.join(__dirname, 'images')));

const cors = require('cors');

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(cors()) // Use this after the variable declaration

const db = mysql.createConnection({

  host: "localhost",
  
  user: "root",
  
  password: "1234567890",
  
  database: "patients",
  
});

db.connect((err) => {

  if (err) {
  
    throw err;
  
  }
  
  console.log("MySql Connected");
  
});

app.get("/", (req, res) => {

  res.sendFile(path.join(__dirname, 'Home.html'));
  
});

app.get("/acceuil", (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));
  
});

app.get("/patients", (req, res) => {

  res.sendFile(path.join(__dirname, 'patients.html'));
  
});

app.get("/edit", (req, res) => {

  res.sendFile(path.join(__dirname, 'patient.html'));
  
});

app.get("/doctor", (req, res) => {

  res.sendFile(path.join(__dirname, 'patients2.html'));
  
});

app.get("/doctor-edit", (req, res) => {

  res.sendFile(path.join(__dirname, 'doctor.html'));
  
});

app.get("/perscription", (req, res) => {

  res.sendFile(path.join(__dirname, 'perscription.html'));
  
});

app.get("/pharmacy", (req, res) => {

  res.sendFile(path.join(__dirname, 'pharmacy.html'));
  
});

app.get("/radiology", (req, res) => {

  res.sendFile(path.join(__dirname, 'radiology.html'));
  
});

app.get("/radios", (req, res) => {

  res.sendFile(path.join(__dirname, 'radios.html'));
  
});

app.get("/script.js", (req, res) => {

  res.sendFile(path.join(__dirname, 'script.js'));

});

app.get("/style.css", (req, res) => {

  res.sendFile(path.join(__dirname, 'style.css'));

});

app.post("/register-patient", (req, res) => {

  let post = req.body.patient;
  
  let sql = "INSERT INTO infos SET ?";
  
  let query = db.query(sql, post, (err) => {
  
    if (err) {
  
      throw err;
  
    }
    console.log('Just added new patient : ' + req.body.patient);
    res.send("Patient added");
  
  });
  
});

app.post("/modify-patient", (req, res) => {

  let post = req.body.medical
  
  let sql = "INSERT INTO medical SET ?";

  let query = db.query(sql1, post1, (err) => {
  
    if (err) {
  
      throw err;
  
    }
  
  });
  
});

app.post("/patient-list", (req, res) => {

  let sql = "SELECT * FROM infos WHERE " + req.body.condition;
  
  let query = db.query(sql, (err, data, feilds) => {
  
    if (err) {
  
      throw err;
  
    }
      
    res.send(data);
  
  });

});

app.post("/add-obsv", (req, res) => {

  let post = req.body;
  
  let sql = "INSERT INTO observations SET ?";

  let query = db.query(sql, post, (err) => {
  
    if (err) {
  
      throw err;
  
    }
  
  });
  
});

app.post("/obsv-list", (req, res) => {

  let sql = "SELECT * FROM observations WHERE cin='" + req.body.cin + "'";
  
  let query = db.query(sql, (err, data, feilds) => {
  
    if (err) {
  
      throw err;
  
    }
      
    res.send(data);
  
  });

});

app.post("/add-inventory", (req, res) => {

  let post = req.body.med;
  
  let sql = "INSERT INTO pharmacy SET ?";
  
  let query = db.query(sql, post, (err) => {
  
    if (err) {
  
      throw err;
  
    }
    console.log('Just added to inventory : ' + req.body.med);
    res.send("Just added to inventory");
  
  });
  
});

app.post("/update-inventory", (req, res) => {

  let post = req.body.med;
  
  let sql = "UPDATE pharmacy SET ? WHERE name = '" + req.body.med.name + "'";
  
  let query = db.query(sql, post, (err) => {
  
    if (err) {
  
      throw err;
  
    }

    console.log('Updated Inventory');
  
  });
  
});

app.post("/get-inventory", (req, res) => {
  
  let sql = "SELECT * FROM pharmacy WHERE name='" + req.body.name + "'";
  
  let query = db.query(sql, (err, rows) => {
  
    if (err) {
  
      throw err;
  
    }

    res.send(rows[0]);
    console.log("Inventory Fetched");
  
  });

});

app.get("/inventory", (req, res) => {

  let sql = "SELECT * FROM pharmacy";
  
  let query = db.query(sql, (err, data, feilds) => {
  
    if (err) {
  
      throw err;
  
    }
      
    res.send(data);
  
  });

});

app.post('/upload-radios', upload.single('radio'), (req, res, next) => {
  
  let file = req.file;

  console.log(file, req.body.date);

  let post = {
    cin: req.body.cin,
    name: file.originalname,
    filename: file.filename,
    date: req.body.date
  }

  

  let sql = "INSERT INTO radios SET ?";
  
  let query = db.query(sql, post, (err) => {
  
    if (err) {
  
      throw err;
  
    }
    console.log('Just added radio : ' + file);
    res.redirect(req.headers.referer);
  
  });

})

app.post("/get-radio", (req, res) => {
  console.log("Get radio")

  let sql = "SELECT * FROM radios WHERE cin='" + req.body.cin + "'";
  
  let query = db.query(sql, (err, data, feilds) => {
  
    if (err) {
  
      throw err;
  
    }
    console.log(data);
    res.send(data);
  
  });

});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})