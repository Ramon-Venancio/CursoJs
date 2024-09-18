const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 0', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Tarefa 1 Cancelada')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,6)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Tarefa 2 Executada!', new Date().getSeconds())
})

// setImmediate
// setInterval