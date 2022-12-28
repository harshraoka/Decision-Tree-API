import logo from "./logo.svg";
import "./App.css";

function GetData() {
  var checkboxes = document.getElementsByTagName("input");
  var result = [];
  
            for (var i = 0; i < checkboxes.length; i++) {
             
                if (checkboxes[i].checked) {
                    result.push(1);
                    // console.log("1")
                }
                else{
                  result.push(0);
                  // console.log("0")
                }
            }
            let person = { 
              "symptoms" : [result]
          };    
  console.log(person)
  
  fetch("http://127.0.0.1:2000/", {
    method: "POST",
    body: JSON.stringify({
      symptoms: result,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      console.log(response.headers.get("Content-Type"));
      return response.json();
    })
    .then((myJson) => {
      console.log(JSON.stringify(myJson));
    })
    .catch((err) => {
      console.log("Fetch Error :-S", err);
    });
}

function GetCheck() {
  var checkboxes = document.getElementsByTagName("input");
  var result = [];
  
            for (var i = 0; i < checkboxes.length; i++) {
             
                if (checkboxes[i].checked) {
                    result.push(1);
                    // console.log("1")
                }
                else{
                  result.push(0);
                  // console.log("0")
                }
            }
            let person = { 
              "symptoms" : [result]
          };    
  console.log(person)
  
}

function App() {
  return (
    <div className="App">
      <h1>Please select any Symptoms you might have:</h1><br /><br />
        <label>Symptom 1 :<input type="checkbox" /></label><br />
<label>Symptom 2 :<input type="checkbox" /></label><br />
<label>Symptom 3 :<input type="checkbox" /></label><br />
<label>Symptom 4 :<input type="checkbox" /></label><br />
<label>Symptom 5 :<input type="checkbox" /></label><br />
<label>Symptom 6 :<input type="checkbox" /></label><br />
<label>Symptom 7 :<input type="checkbox" /></label><br />
<label>Symptom 8 :<input type="checkbox" /></label><br />
<label>Symptom 9 :<input type="checkbox" /></label><br />
<label>Symptom 10 :<input type="checkbox" /></label><br />
<label>Symptom 11 :<input type="checkbox" /></label><br />
<label>Symptom 12 :<input type="checkbox" /></label><br />
<label>Symptom 13 :<input type="checkbox" /></label><br />
<label>Symptom 14 :<input type="checkbox" /></label><br />
<label>Symptom 15 :<input type="checkbox" /></label><br />
<label>Symptom 16 :<input type="checkbox" /></label><br />
<label>Symptom 17 :<input type="checkbox" /></label><br />
<label>Symptom 18 :<input type="checkbox" /></label><br />
<label>Symptom 19 :<input type="checkbox" /></label><br />
<label>Symptom 20 :<input type="checkbox" /></label><br />
<label>Symptom 21 :<input type="checkbox" /></label><br />
<label>Symptom 22 :<input type="checkbox" /></label><br />
<label>Symptom 23 :<input type="checkbox" /></label><br />
<label>Symptom 24 :<input type="checkbox" /></label><br />
<label>Symptom 25 :<input type="checkbox" /></label><br />
<label>Symptom 26 :<input type="checkbox" /></label><br />
<label>Symptom 27 :<input type="checkbox" /></label><br />
<label>Symptom 28 :<input type="checkbox" /></label><br />
<label>Symptom 29 :<input type="checkbox" /></label><br />
<label>Symptom 30 :<input type="checkbox" /></label><br />
<label>Symptom 31 :<input type="checkbox" /></label><br />
<label>Symptom 32 :<input type="checkbox" /></label><br />
<label>Symptom 33 :<input type="checkbox" /></label><br />
<label>Symptom 34 :<input type="checkbox" /></label><br />
<label>Symptom 35 :<input type="checkbox" /></label><br />
<label>Symptom 36 :<input type="checkbox" /></label><br />
<label>Symptom 37 :<input type="checkbox" /></label><br />
<label>Symptom 38 :<input type="checkbox" /></label><br />
<label>Symptom 39 :<input type="checkbox" /></label><br />
<label>Symptom 40 :<input type="checkbox" /></label><br />
<label>Symptom 41 :<input type="checkbox" /></label><br />
<label>Symptom 42 :<input type="checkbox" /></label><br />
<label>Symptom 43 :<input type="checkbox" /></label><br />
<label>Symptom 44 :<input type= "checkbox"/></label><br />
<label>Symptom 45 :<input type= "checkbox"/></label><br />
<label>Symptom 46 :<input type= "checkbox"/></label><br />
<label>Symptom 47 :<input type= "checkbox"/></label><br />
<label>Symptom 48 :<input type= "checkbox"/></label><br />
<label>Symptom 49 :<input type= "checkbox"/></label><br />
<label>Symptom 50 :<input type= "checkbox"/></label><br />
<label>Symptom 51 :<input type= "checkbox"/></label><br />
<label>Symptom 52 :<input type= "checkbox"/></label><br />
<label>Symptom 53 :<input type= "checkbox"/></label><br />
<label>Symptom 54 :<input type= "checkbox"/></label><br />
<label>Symptom 55 :<input type= "checkbox"/></label><br />
<label>Symptom 56 :<input type= "checkbox"/></label><br />
<label>Symptom 57 :<input type= "checkbox"/></label><br />
<label>Symptom 58 :<input type= "checkbox"/></label><br />
<label>Symptom 59 :<input type="checkbox" /></label><br />
<label>Symptom 60 :<input type= "checkbox"/></label><br />
<label>Symptom 61 :<input type= "checkbox"/></label><br />
<label>Symptom 62 :<input type= "checkbox"/></label><br />
<label>Symptom 63 :<input type= "checkbox"/></label><br />
<label>Symptom 64 :<input type= "checkbox"/></label><br />
<label>Symptom 65 :<input type= "checkbox"/></label><br />
<label>Symptom 66 :<input type= "checkbox"/></label><br />
<label>Symptom 67 :<input type= "checkbox"/></label><br />
<label>Symptom 68 :<input type= "checkbox"/></label><br />
<label>Symptom 69 :<input type= "checkbox"/></label><br />
<label>Symptom 70 :<input type= "checkbox"/></label><br />
<label>Symptom 71 :<input type= "checkbox"/></label><br />
<label>Symptom 72 :<input type= "checkbox"/></label><br />
<label>Symptom 73 :<input type= "checkbox"/></label><br />
<label>Symptom 74 :<input type= "checkbox"/></label><br />
<label>Symptom 75 :<input type= "checkbox"/></label><br />
<label>Symptom 76 :<input type= "checkbox"/></label><br />
<label>Symptom 77 :<input type= "checkbox"/></label><br />
<label>Symptom 78 :<input type= "checkbox"/></label><br />
<label>Symptom 79 :<input type= "checkbox"/></label><br />
<label>Symptom 80 :<input type= "checkbox"/></label><br />
<label>Symptom 81 :<input type= "checkbox"/></label><br />
<label>Symptom 82 :<input type= "checkbox"/></label><br />
<label>Symptom 83 :<input type= "checkbox"/></label><br />
<label>Symptom 84 :<input type= "checkbox"/></label><br />
<label>Symptom 85 :<input type= "checkbox"/></label><br />
<label>Symptom 86 :<input type= "checkbox"/></label><br />
<label>Symptom 87 :<input type= "checkbox"/></label><br />
<label>Symptom 88 :<input type= "checkbox"/></label><br />
<label>Symptom 89 :<input type="checkbox" /></label><br />
<label>Symptom 90 :<input type= "checkbox"/></label><br />
<label>Symptom 91 :<input type= "checkbox"/></label><br />
<label>Symptom 92 :<input type= "checkbox"/></label><br />
<label>Symptom 93 :<input type= "checkbox"/></label><br />
<label>Symptom 94 :<input type= "checkbox"/></label><br />
<label>Symptom 95 :<input type= "checkbox"/></label><br/>
<label>Symptom 96 :<input type= "checkbox"/></label><br />
<label>Symptom 97 :<input type= "checkbox"/></label><br />
<label>Symptom 98 :<input type= "checkbox"/></label><br />
<label>Symptom 99 :<input type= "checkbox"/></label><br />
<label>Symptom 100 :<input type= "checkbox"/></label><br />
<label>Symptom 101 :<input type= "checkbox"/></label><br />
<label>Symptom 102 :<input type= "checkbox"/></label><br />
<label>Symptom 103 :<input type= "checkbox"/></label><br />
<label>Symptom 104 :<input type= "checkbox"/></label><br />
<label>Symptom 105 :<input type= "checkbox"/></label><br />
<label>Symptom 106 :<input type= "checkbox"/></label><br />
<label>Symptom 107 :<input type= "checkbox"/></label><br />
<label>Symptom 108 :<input type= "checkbox"/></label><br />
<label>Symptom 109 :<input type="checkbox" /></label><br />
<label>Symptom 110 :<input type= "checkbox"/></label><br />
<label>Symptom 111 :<input type= "checkbox"/></label><br />
<label>Symptom 112 :<input type= "checkbox"/></label><br />
<label>Symptom 113 :<input type= "checkbox"/></label><br />
<label>Symptom 114 :<input type="checkbox" /></label><br />
<label>Symptom 115 :<input type= "checkbox"/></label><br />
<label>Symptom 116 :<input type= "checkbox"/></label><br />
<label>Symptom 117 :<input type= "checkbox"/></label><br />
<label>Symptom 118 :<input type= "checkbox"/></label><br />
<label>Symptom 119 :<input type= "checkbox"/></label><br />
<label>Symptom 120 :<input type= "checkbox"/></label><br />
<label>Symptom 121 :<input type="checkbox" /></label><br />
<label>Symptom 122 :<input type="checkbox" /></label><br />
<label>Symptom 123 :<input type="checkbox" /></label><br />
<label>Symptom 124 :<input type="checkbox" /></label><br />
<label>Symptom 125 :<input type= "checkbox"/></label><br />
<label>Symptom 126 :<input type="checkbox" /></label><br />
<label>Symptom 127 :<input type="checkbox" /></label><br />
<label>Symptom 128 :<input type="checkbox" /></label><br />
<label>Symptom 129 :<input type="checkbox" /></label><br />
<label>Symptom 130 :<input type= "checkbox"/></label><br />
<label>Symptom 131 :<input type= "checkbox"/></label><br /><br /><br />
        {/* <button onClick={GetCheck}>Get check</button> */}

        <button id='getData' onClick={GetData}>Get Data</button>
        
    </div>
  );
}

export default App;
