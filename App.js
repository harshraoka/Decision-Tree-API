import logo from "./logo.svg";
import "./App.css";

function GetData() {
  var checkboxes = document.getElementsByTagName("input");
  var result = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(1);
      // console.log("1")
    } else {
      result.push(0);
      // console.log("0")
    }
  }
  let person = {
    symptoms: [result],
  };
  console.log(person);

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
      alert("You might have :" + myJson.disease);
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
    } else {
      result.push(0);
      // console.log("0")
    }
  }
  let person = {
    symptoms: [result],
  };
  console.log(person);
}

function App() {
  return (
    <div className="App">
      <h1>Please select any Symptoms you might have:</h1>
      <br />
      <br />
      <label>
        itching
        <input type="checkbox" />
      </label>
      <br />
      <label>
        skin rash
        <input type="checkbox" />
      </label>
      <br />
      <label>
        nodal skin eruptions
        <input type="checkbox" />
      </label>
      <br />
      <label>
        continous sneezing
        <input type="checkbox" />
      </label>
      <br />
      <label>
        shivering
        <input type="checkbox" />
      </label>
      <br />
      <label>
        Chills
        <input type="checkbox" />
      </label>
      <br />
      <label>
        Joint pain
        <input type="checkbox" />
      </label>
      <br />
      <label>
        stomach pain
        <input type="checkbox" />
      </label>
      <br />
      <label>
        acidity
        <input type="checkbox" />
      </label>
      <br />
      <label>
        Ulcers on tongue
        <input type="checkbox" />
      </label>
      <br />
      <label>
        muscle wasting
        <input type="checkbox" />
      </label>
      <br />
      <label>
        vomiting
        <input type="checkbox" />
      </label>
      <br />
      <label>
        burning micturition :<input type="checkbox" />
      </label>
      <br />
      <label>
        Spotting urination :<input type="checkbox" />
      </label>
      <br />
      <label>
        fatigue :<input type="checkbox" />
      </label>
      <br />
      <label>
        weight gain :<input type="checkbox" />
      </label>
      <br />
      <label>
        Anxiety :<input type="checkbox" />
      </label>
      <br />
      <label>
        Cold hand and feets :<input type="checkbox" />
      </label>
      <br />
      <label>
        Mood swings :<input type="checkbox" />
      </label>
      <br />
      <label>
        Weight Loss :<input type="checkbox" />
      </label>
      <br />
      <label>
        Restlessness :<input type="checkbox" />
      </label>
      <br />
      <label>
        lethargy :<input type="checkbox" />
      </label>
      <br />
      <label>
        patches in throat :<input type="checkbox" />
      </label>
      <br />
      <label>
        irregular sugar level :<input type="checkbox" />
      </label>
      <br />
      <label>
        cough :<input type="checkbox" />
      </label>
      <br />
      <label>
        high fever :<input type="checkbox" />
      </label>
      <br />
      <label>
        sunken eyes :<input type="checkbox" />
      </label>
      <br />
      <label>
        breathlessness :<input type="checkbox" />
      </label>
      <br />
      <label>
        sweating :<input type="checkbox" />
      </label>
      <br />
      <label>
        dehydration :<input type="checkbox" />
      </label>
      <br />
      <label>
        indigestion :<input type="checkbox" />
      </label>
      <br />
      <label>
        head ache :<input type="checkbox" />
      </label>
      <br />
      <label>
        yellowish skin :<input type="checkbox" />
      </label>
      <br />
      <label>
        dark urine :<input type="checkbox" />
      </label>
      <br />
      <label>
        nausea :<input type="checkbox" />
      </label>
      <br />
      <label>
        loss of appetite :<input type="checkbox" />
      </label>
      <br />
      <label>
        pain behind the eyes :<input type="checkbox" />
      </label>
      <br />
      <label>
        back pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        constipation :<input type="checkbox" />
      </label>
      <br />
      <label>
        abdominal pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        diarrhoea :<input type="checkbox" />
      </label>
      <br />
      <label>
        mild fever :<input type="checkbox" />
      </label>
      <br />
      <label>
        yellow urine :<input type="checkbox" />
      </label>
      <br />
      <label>
        yellowing of eyes :<input type="checkbox" />
      </label>
      <br />
      <label>
        acute liver failure :<input type="checkbox" />
      </label>
      <br />
      <label>
        fluid overload :<input type="checkbox" />
      </label>
      <br />
      <label>
        swelling of stomach :<input type="checkbox" />
      </label>
      <br />
      <label>
        swelled lymph nodes :<input type="checkbox" />
      </label>
      <br />
      <label>
        melaise :<input type="checkbox" />
      </label>
      <br />
      <label>
        blurred and distorted vision :<input type="checkbox" />
      </label>
      <br />
      <label>
        phlegm :<input type="checkbox" />
      </label>
      <br />
      <label>
        throat irritation :<input type="checkbox" />
      </label>
      <br />
      <label>
        redness of eyes :<input type="checkbox" />
      </label>
      <br />
      <label>
        sinus pressure :<input type="checkbox" />
      </label>
      <br />
      <label>
        runny nose :<input type="checkbox" />
      </label>
      <br />
      <label>
        congestion :<input type="checkbox" />
      </label>
      <br />
      <label>
        chest pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        weakness in limbs :<input type="checkbox" />
      </label>
      <br />
      <label>
        fast heart rate :<input type="checkbox" />
      </label>
      <br />
      <label>
        pain during bowel movements :<input type="checkbox" />
      </label>
      <br />
      <label>
        pain in anal region :<input type="checkbox" />
      </label>
      <br />
      <label>
        bloody stool :<input type="checkbox" />
      </label>
      <br />
      <label>
        irritation in anus :<input type="checkbox" />
      </label>
      <br />
      <label>
        neck pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        diziness :<input type="checkbox" />
      </label>
      <br />
      <label>
        cramps :<input type="checkbox" />
      </label>
      <br />
      <label>
        bruising :<input type="checkbox" />
      </label>
      <br />
      <label>
        obesity :<input type="checkbox" />
      </label>
      <br />
      <label>
        swollen legs :<input type="checkbox" />
      </label>
      <br />
      <label>
        swollen blood vessels :<input type="checkbox" />
      </label>
      <br />
      <label>
        puffy face and eyes :<input type="checkbox" />
      </label>
      <br />
      <label>
        enlarged thyroid :<input type="checkbox" />
      </label>
      <br />
      <label>
        brittle nails :<input type="checkbox" />
      </label>
      <br />
      <label>
        swollen extremeties :<input type="checkbox" />
      </label>
      <br />
      <label>
        excessive hunger :<input type="checkbox" />
      </label>
      <br />
      <label>
        extra marital contacts :<input type="checkbox" />
      </label>
      <br />
      <label>
        drying and tingling lips :<input type="checkbox" />
      </label>
      <br />
      <label>
        slurred speech :<input type="checkbox" />
      </label>
      <br />
      <label>
        knee pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        hip joint pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        muscle weakness :<input type="checkbox" />
      </label>
      <br />
      <label>
        stiff neck :<input type="checkbox" />
      </label>
      <br />
      <label>
        swelling joints :<input type="checkbox" />
      </label>
      <br />
      <label>
        movement stiffness :<input type="checkbox" />
      </label>
      <br />
      <label>
        spinning movements :<input type="checkbox" />
      </label>
      <br />
      <label>
        loss of balance :<input type="checkbox" />
      </label>
      <br />
      <label>
        unsteadiness :<input type="checkbox" />
      </label>
      <br />
      <label>
        weakness of one body side :<input type="checkbox" />
      </label>
      <br />
      <label>
        loss of smell :<input type="checkbox" />
      </label>
      <br />
      <label>
        bladder discomfort :<input type="checkbox" />
      </label>
      <br />
      <label>
        foul smell of urine :<input type="checkbox" />
      </label>
      <br />
      <label>
        continous feel of urine :<input type="checkbox" />
      </label>
      <br />
      <label>
        passage of gasses :<input type="checkbox" />
      </label>
      <br />
      <label>
        internal itching :<input type="checkbox" />
      </label>
      <br />
      <label>
        toxic look or typhos :<input type="checkbox" />
      </label>
      <br />
      <label>
        depression :<input type="checkbox" />
      </label>
      <br />
      <label>
        irritability :<input type="checkbox" />
      </label>
      <br />
      <label>
        muscle pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        altered sensorium :<input type="checkbox" />
      </label>
      <br />
      <label>
        red spots over body :<input type="checkbox" />
      </label>
      <br />
      <label>
        belly pain :<input type="checkbox" />
      </label>
      <br />
      <label>
        abnormal menstruation :<input type="checkbox" />
      </label>
      <br />
      <label>
        dischromic patches :<input type="checkbox" />
      </label>
      <br />
      <label>
        watering from eyes :<input type="checkbox" />
      </label>
      <br />
      <label>
        increased appetite :<input type="checkbox" />
      </label>
      <br />
      <label>
        poly uria :<input type="checkbox" />
      </label>
      <br />
      <label>
        family history :<input type="checkbox" />
      </label>
      <br />
      <label>
        mucoid sputum :<input type="checkbox" />
      </label>
      <br />
      <label>
        rusty sputum :<input type="checkbox" />
      </label>
      <br />
      <label>
        lack of concentration :<input type="checkbox" />
      </label>
      <br />
      <label>
        visual disturbances :<input type="checkbox" />
      </label>
      <br />
      <label>
        recieving blood transfusion :<input type="checkbox" />
      </label>
      <br />
      <label>
        recieving unsterile injections :<input type="checkbox" />
      </label>
      <br />
      <label>
        coma :<input type="checkbox" />
      </label>
      <br />
      <label>
        stomach bleeding :<input type="checkbox" />
      </label>
      <br />
      <label>
        distention of abdomen :<input type="checkbox" />
      </label>
      <br />
      <label>
        history of alcohol consumption :<input type="checkbox" />
      </label>
      <br />
      <label>
        fluid overload :<input type="checkbox" />
      </label>
      <br />
      <label>
        blood in sputum :<input type="checkbox" />
      </label>
      <br />
      <label>
        prominent veins on calf :<input type="checkbox" />
      </label>
      <br />
      <label>
        palpitations :<input type="checkbox" />
      </label>
      <br />
      <label>
        painful walking :<input type="checkbox" />
      </label>
      <br />
      <label>
        pus filled pimples :<input type="checkbox" />
      </label>
      <br />
      <label>
        black heads :<input type="checkbox" />
      </label>
      <br />
      <label>
        scurring :<input type="checkbox" />
      </label>
      <br />
      <label>
        skin peeling :<input type="checkbox" />
      </label>
      <br />
      <label>
        silver like dusting :<input type="checkbox" />
      </label>
      <br />
      <label>
        small dents in nails :<input type="checkbox" />
      </label>
      <br />
      <label>
        inflammatory nails :<input type="checkbox" />
      </label>
      <br />
      <label>
        blisters :<input type="checkbox" />
      </label>
      <br />
      <label>
        red soreness around nose :<input type="checkbox" />
      </label>
      <br />
      <br />
      <br />
      {/* <button onClick={GetCheck}>Get check</button> */}

      <button id="getData" onClick={GetData}>
        Get Data
      </button>
    </div>
  );
}

export default App;
