"use strict";$(function(){$(".denglu").click(function(){var t,e;$(".mask").show(),t=($(document).width()-$(".login").outerWidth())/2,e=($(document).height()-$(".login").outerHeight())/2,$(".login").css({left:t,top:e})}),$(".ddel").click(function(){$(".mask").hide()}),$(".dtop").mousedown(function(t){var t=t||window.event,o=t.offsetX,n=t.offsetY;$(document).mousemove(function(t){var e=t.clientX-o,t=t.clientY-n;(e=e<0?0:e)>$(document).width()-$(".login").outerWidth()&&(e=$(document).width()-$(".login").outerWidth()),(t=t<0?0:t)>$(document).height()-$(".login").outerHeight()&&(t=$(document).height()-$(".login").outerHeight()),$(".login").css({left:e,top:t})})}),$(document).mouseup(function(){$(document).off("mousemove")}),$(document).keyup(function(t){27===(t||window.event).keyCode&&$(".mask").hide()});var e=$(".username"),o=$(".password"),t=$(".checkbox"),n={};function i(){n.passwordTest&&n.usernameTest&&t.prop("checked")?$("#dlu").prop("disabled",!1):$("#dlu").prop("disabled",!0)}t.change(function(){t.prop("checked")?$("#dlu").css("opacity",1):$("#dlu").css("opacity",.5),i()}),e.change(function(){var t=/^[a-z][0-9A-Za-z]{5,11}$/i.test(e.val());t?(n.usernameTest=t,$(this).next().html("")):$(this).next().html("用户名不合法"),i()}),o.change(function(){var t=/^[^\s]{6,18}$/.test(o.val());t?(n.passwordTest=t,$(this).next().html("")):$(this).next().html("密码不合法"),i()}),$("#dlu").click(function(){$(".mask").hide()})});