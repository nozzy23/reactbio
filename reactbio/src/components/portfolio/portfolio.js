import React from 'react';
import {Link} from 'react-router-dom';

function PortfolioPage(props){
    return <div class="row row-cols-1 row-cols-md-3">
    <div class="col mb-4">
      <div class="card">
        <img src="assets/images/card1.jpg" class="card-img-top" alt="stock pic">
        <div class="card-body">
          <h5 class="card-title"> <a href="https://desolate-coast-26714.herokuapp.com/">Resturant App </a> </h5>
          <p class="card-text">Place an order!</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <img src="assets/images/card2.jpg" class="card-img-top" alt="stock pic">
        <div class="card-body">
          <h5 class="card-title"><a href="https://nozzy23.github.io/passwordGen/">Password Generater</a></h5>
          <p class="card-text">Create a Secure Password</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <img src="assets/images/card3.jpg" class="card-img-top" alt="stock pic">
        <div class="card-body">
          <h5 class="card-title"><a href="https://lweller1203.github.io/DriveSmart/">Drive Safe</a></h5>
          <p class="card-text">Plan your commute!</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <img src="assets/images/card4.jpg" class="card-img-top" alt="stock pic">
        <div class="card-body">
          <h5 class="card-title"><a href="hhttps://nozzy23.github.io/DayPlanner/">Day Planner</a></h5>
          <p class="card-text">Plan out your day!</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <img src="assets/images/card5.jpg" class="card-img-top" alt="stock pic">
        <div class="card-body">
          <h5 class="card-title"><a href="https://nozzy23.github.io/QuizChallenge/">Quiz</a></h5>
          <p class="card-text">Test Your Knowledge!</p>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card">
        <img src="assets/images/card6.jpg" class="card-img-top" alt="stock pic">
        <div class="card-body">
          <h5 class="card-title"><a href="https://rhubarb-pie-76836.herokuapp.com/">Note Taker</a></h5>
          <p class="card-text">Take some notes!</p>
        </div>
      </div>
    </div>

  </div>
}


export default PortfolioPage;