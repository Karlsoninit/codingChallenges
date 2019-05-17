


//--------------------------------------
// function time

// const hand = document.querySelector('.hand')

// let time = 0;

// setInterval(function() {
//     time++
//     hand.style.transform = `rotate(${time + 'deg'})`
// },100)



//------------------ clock 

const secondsHand = document.querySelector('.seconds'),
    minutesHand = document.querySelector('.minutes'),
    hoursHand = document.querySelector('.hours');




function seTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes =  now.getMinutes();
    const hours = now.getHours();

    const handSeconds = ((seconds / 60) * 360) + 90;

    const handMinutes = ((minutes / 60) * 360) + 90;

    const handHours = ((hours / 12) * 360) + 90;

    secondsHand.style.transform = `rotate(${handSeconds}deg)`
    minutesHand.style.transform = `rotate(${handMinutes}deg)`
    hoursHand.style.transform = `rotate(${handHours}deg)`
    
}

setInterval(seTime, 1000)