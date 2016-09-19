import 'babel-polyfill';
import $ from 'jquery';;

const TweenMax = require('TweenMax');
const TimelineMax = require('TimelineMax');
const { Back } = TweenMax;

import ScrollMagic from 'ScrollMagic';
const { Controller, Scene } = ScrollMagic;
import animationGSAP from 'animation.gsap';
import debugIndicators from 'debug.addIndicators';
console.log(animationGSAP, debugIndicators);


import './styles/main.less';

$(document).ready(function () {
  var controller = new Controller({
  });

  // var timeline = new TimelineMax();

  var tween1 = TweenMax.staggerFromTo('#red-scroll-block', 3, {
      backgroundColor: 'white',
      rotation: 0
    },
    {
      backgroundColor: '#ffaaaa',
      rotation: 360
    });

  var tween2 = TweenMax.staggerFromTo('#green-scroll-block', 3, {
      backgroundColor: 'white',
      rotation: 0
    },
    {
      backgroundColor: '#aaffaa',
      rotation: 360
    });


  var tween3 = TweenMax.staggerFromTo('#blue-scroll-block', 3, {
      backgroundColor: 'white',
      rotation: 0
    },
    {
      backgroundColor: '#aaaaff',
      rotation: 360
    });

  // timeline.add([tween1, tween2, tween3]);

  var scene1 = new Scene({
      triggerElement: '#red-scroll-block',
      duration: 1000
    })
    .setClassToggle('body', 'red') // add class toggle
    .setTween(tween1)
    .addTo(controller);

  var scene2 = new Scene({
      triggerElement: '#green-scroll-block',
      duration: 1000
    })
    .setClassToggle('body', 'green') // add class toggle
    .setTween(tween2)
    .addTo(controller);

  var scene3 = new Scene({
      triggerElement: '#blue-scroll-block',
      duration: 1000
    })
    .setClassToggle('body', 'blue') // add class toggle
    .setTween(tween3)
    .addTo(controller);

  scene1.addIndicators();
  scene2.addIndicators();
  scene3.addIndicators();
});
