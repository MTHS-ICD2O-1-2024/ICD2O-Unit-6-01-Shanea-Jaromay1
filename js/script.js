// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025

// This file contains the JS functions for index.html

"use-strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01-Shanea-Jaromay1/sw.js", {
    scope: "/ICD2O-Unit-6-01-Shanea-Jaromay1/",
  })
}


/**
* This function calculate, doing multiplication
*/
// eslint-disable-next-line no-unused-vars
function calculateNumber () {
  //input 
  let counter = 0
  let numberOne = parseFloat(document.getElementById('number-one').value)
  const numberTwo = parseFloat(document.getElementById('number-two').value)

  //process
  while (numberOne >= numberTwo ) {
    counter ++
    numberOne -= numberTwo

    if (numberOne < numberTwo){
      break
    }
  }

  // output
  document.getElementById('answer').innerHTML = 'Your answer is:' + counter + ' R ' + numberOne
}
