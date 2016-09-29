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

  var tween1 = TweenMax.staggerFromTo('#text-goes-right span', .5, {
    left: 10
  },
  {
    left: $(window).width() - $('#text-goes-right span').width() - 10
  });

  var tween2 = TweenMax.staggerFromTo('#text-goes-left span', .5, {
    right: 10
  },
  {
    right: $(window).width() - $('#text-goes-left span').width() - 10
  });

  var tween3 = TweenMax.staggerTo('#svg-arc svg', .5,
  {
    strokeDashoffset: 0
  });

  var scene1 = new Scene({
      triggerElement: '#text-goes-right',
      offset: 0,
      duration: $(window).height(),
      triggerHook: 0
    })
    .setPin('#text-goes-right')
    .setTween(tween1)
    .addTo(controller);

  var scene2 = new Scene({
      triggerElement: '#text-goes-left',
      offset: 0,
      duration: $(window).height(),
      triggerHook: 0
    })
    .setPin('#text-goes-left')
    .setTween(tween2)
    .addTo(controller);

  var scene3 = new Scene({
      triggerElement: '#svg-arc',
      offset: 0,
      duration: $(window).height(),
      triggerHook: 0
    })
    .setPin('#svg-arc')
    .setTween(tween3)
    .addTo(controller);

  scene1.addIndicators();
  scene2.addIndicators();
  scene3.addIndicators();
});
