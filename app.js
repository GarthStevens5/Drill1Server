const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT|| 3000

app.use(cors())

const cohortData = [{
  id: 1,
  cohortName: "17-01-WD-DP",
  cohortCode: "g100",
  numberOfStudents: 28
},{
  id: 2,
  cohortName: "17-01-DS-GT",
  cohortCode: "g105",
  numberOfStudents: 24
},{
  id: 3,
  cohortName: "17-02-WD-PX",
  cohortCode: "g109",
  numberOfStudents: 30
},{
  id: 4,
  cohortName: "17-03-WD-BD",
  cohortCode: "g110",
  numberOfStudents: 29
}]

function findById(cohortData, requestedId) {
  return cohortData.find(entry => entry.id === +requestedId)
}

app.get("/", (request, response) => {
  response.json(cohortData)
})

app.get('/:id', (request, response) => {
  var item = findById(cohortData, request.params.id)
  if (!item) {
    response.status(404).json({
      error: {
          message: 'Item not found'
      }
    })
  }
  response.json(item)
})

app.listen(port)