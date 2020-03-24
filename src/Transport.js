import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: () => ({
    results: [],
    chartdata: {
      //labels:['2020-3-05',4,5,6],
      labels: [],
      datasets: [
        {
          label: 'MRT Ridership in Singapore',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: "blue",
          backgroundColor: 'blue',
          fill: false
        },
        {
          label: 'LRT Ridership in Singapore',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: "red",
          backgroundColor: 'red',
          fill: false
        },
        {
          label: 'Bus Ridership in Singapore',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: "orange",
          backgroundColor: 'orange',
          fill: false
        },
        {
          label: 'Taxi Ridership in Singapore',
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: "green",
          backgroundColor: 'green',
          fill: false
        }
      ]

    },
    options: {

      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }

        }]
      }
    }
  }),
  methods: {

    fetchData: function () {
      axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response => {
        this.results = response.data.result.records
        // console.log(response.data)
        // console.log(this.results)
        for (let key in this.results) {
          var type = this.results[key].type_of_public_transport
          console.log(type)
          if (type=== 'MRT') {
            this.chartdata.datasets[0].data.push(this.results[key].average_ridership)
            this.chartdata.labels.push(this.results[key].year)


          } else if (type === 'LRT') {
            this.chartdata.datasets[1].data.push(this.results[key].average_ridership)
            // this.chartdata.labels.push(this.results[key].year)

          } else if (type === 'Bus') {
            this.chartdata.datasets[2].data.push(this.results[key].average_ridership)
            // this.chartdata.labels.push(this.results[key].year)

          } else if (type === 'Taxi') {
            this.chartdata.datasets[3].data.push(this.results[key].average_ridership)
            // this.chartdata.labels.push(this.results[key].year)
          }
        }

        this.renderChart(this.chartdata, this.options)

      })
    }



    },
    mounted() {
      //console.log('Do I come here')
      this.fetchData()

    }




  }