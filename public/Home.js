// Gonna need an API Fetch function to call the fetch API of the product
async function searchUniversity() {
  let website = document.getElementById('search').value;
  //checks if the entered website ends with .edu
  
  if (!website.endsWith(".edu")) {
    alert("Please enter a valid .edu website. Do NOT include https://");
    return;
  }

  let response = await fetch(`https://api.websitecarbon.com/site?url=${website}`);
  let data = await response.json();

  // Create a new div where the dog information will apepar when clicking the button
  let varChild = document.body.querySelector("#website-box-container") != null;
  let newDiv = ""
  // If the <div> already exists, replace it with a new one. Otherwsie, create a new <div> element.
  if(!varChild) {
  newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'website-box-container');
  let container = document.getElementById('content');
  newDiv.style.backgroundColor = "white";
  newDiv.style.border = "thick solid";
  container.appendChild(newDiv);

  } else {
      newDiv = document.getElementById('website-box-container')
      newDiv.innerHTML = "";
  }

  let title = document.createElement('h2');
  title.setAttribute('id', 'name');
  let name = data.url
  title.innerHTML = "Website: " + name + "\n";
  title.style.textAlign = 'left';
  newDiv.appendChild(title);
  let text = document.createElement('p');
  text.setAttribute('id', 'green');
  text.innerHTML = "This Website is considered 'green' by The Green Web Foundation: <b>" + data.green + "</b>\n";
  newDiv.appendChild(text);
  let minLife = document.createElement('p');
  minLife.setAttribute('id', 'cleanerThan');
  minLife.innerHTML = "This website is cleaner than <b>" + data.cleanerThan*100 + "%</b> of all websites tested by Website Carbon API\n";
  newDiv.appendChild(minLife);
  let maxLife = document.createElement('p');
  maxLife.setAttribute('id', 'rating');
  maxLife.innerHTML = "According to the Carbon Institute, this website receives a rating of: <b>" + data.rating + "</b>";
  newDiv.appendChild(maxLife);
}

//updated getGlobalRadiation function
async function getGlobalRadiation() {
    let response = await fetch('https://data.weather.gov.hk/weatherAPI/hko_data/csdi/dataset/daily_KP_GSR_2023.csv');
    let data = await response.text();
    console.log(data)
    let data_new = Papa.parse(data)
    console.log(data_new);
    let final_data = []
    let label_data = []
    let i=0;
    for (const innerArray of data_new.data) {
      if (innerArray.length >= 8) {
        label_data[i] = innerArray[1] + "/2023";
        i = i + 1;
      } else {
        console.log('Inner array does not have at least 8 elements');
        i = i + 1;
      }
    }
    let j=0;
    for (const innerArray of data_new.data) {
      if (innerArray.length >= 8) {
        final_data[j] = innerArray[7];
        j = j + 1;
      } else {
        console.log('Inner array does not have at least 8 elements');
        j = j + 1;
      }
    }
    console.log(label_data)
    console.log(final_data)

    let ctx = document.getElementById('myChart').getContext('2d');
    let myLineChart = new Chart(ctx, {
      type: 'line',
      plugin: {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
          let {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#99ffff';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
      }
      },
      data: {
        labels: label_data,
        datasets: [{
          label: `Daily Radiation Readings for 2023 in Celsius`,
          data: final_data,
          borderWidth: 1,
          backgroundColor: [
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)'
          ],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        },
        layout: {
            padding: 50
        }
      }
    });
  }

// Gonna need a function that Redirects user clicking "How To" to the "Help" Page
function redirectToHelp() {
    window.location.href = "./help.html";
}

window.onload = function(){
  getGlobalRadiation();
}
