
let jsonData;

fetch('data.json')
.then(res => res.json())
.then(data => {jsonData = data;
    console.log(data)})

const categories = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care']
const dailyButton = document.getElementById('dailyButton')
const weeklyButton = document.getElementById('weeklyButton')
const monthlyButton = document.getElementById('monthlyButton')


function showDaily () {
    for (let i = 0; i < categories.length; i++) {
        let timeId = document.getElementById('time' + [i])
        let prevId = document.getElementById('prev' + [i])
        let timeFrame = document.getElementById('timeframe' + [i])

        timeId.textContent = jsonData[i].timeframes.daily.current + "hrs"
        timeFrame.textContent = 'Yesterday - '
        prevId.textContent = jsonData[i].timeframes.daily.previous + "hrs"  
    }

    dailyButton.className = ('active')
    weeklyButton.className = ('inactive')
    monthlyButton.className = ('inactive')
}

function showWeekly () {
    for (let i = 0; i < categories.length; i++) {
        let timeId = document.getElementById('time' + [i])
        let prevId = document.getElementById('prev' + [i])
        let timeFrame = document.getElementById('timeframe' + [i])
        
        timeId.textContent = jsonData[i].timeframes.weekly.current + "hrs"
        timeFrame.textContent = 'Last Week - '
        prevId.textContent = jsonData[i].timeframes.weekly.previous + "hrs" 
    }

    dailyButton.className = ('inactive')
    weeklyButton.className = ('active')
    monthlyButton.className = ('inactive')
}

function showMonthly () {
    for (let i = 0; i < categories.length; i++) {
        let timeId = document.getElementById('time' + [i])
        let prevId = document.getElementById('prev' + [i])
        let timeFrame = document.getElementById('timeframe' + [i])

        timeId.textContent = jsonData[i].timeframes.monthly.current + "hrs"
        timeFrame.textContent = 'Last Month - '
        prevId.textContent = jsonData[i].timeframes.monthly.previous + "hrs"   
    }

    dailyButton.className = ('inactive')
    weeklyButton.className = ('inactive')
    monthlyButton.className = ('active')
}

dailyButton.addEventListener('onclick', showDaily)
weeklyButton.addEventListener('onclick', showWeekly)
monthlyButton.addEventListener('onclick', showMonthly)