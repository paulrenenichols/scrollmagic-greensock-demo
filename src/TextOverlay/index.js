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

  var tween1 = TweenMax.to('svg text', 4, {
    attr: { 'fill-opacity': 0 }
  });
});
