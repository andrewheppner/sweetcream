import React, { useEffect } from "react";
import { SceneWrapper } from "../components/styledElements";

const Drip = (function() {
  "use strict";

  var canvas,
    ctx,
    shapes = [{}, {}],
    i,
    width,
    height,
    ySpeed = 1,
    createShape = function() {
      var y, rad;

      shapes.forEach(function(shape, index) {
        shape.points = [];
        shape.alpha = 1 - index / shapes.length;
        shape.hue = 200;
        shape.saturation = 100;
        shape.lightness = 20;
        for (i = 0; i < 21; ++i) {
          y =
            (i % 2 === 0
              ? Math.random() * 20
              : Math.random() * (height * 0.25)) +
            index * (height / (shapes.length - 1));
          rad = Math.random() * 50;
          shape.points.push({
            x: i * 20,
            ox: i * 20,
            y: y,
            oy: y,
            ooy: y,
            rad: rad,
            orad: rad,
            angle: Math.PI * Math.random(),
            speed: (Math.PI / 180 + (Math.PI / 180) * Math.random()) * 0.1
          });
        }
      });
      shapes.reverse();
    },
    draw = function() {
      ctx.clearRect(0, 0, width, height);
      var toReorder;
      shapes.forEach(function(shape, index) {
        drawDrip(
          shape.points,
          shape.color,
          shape.alpha,
          shape.hue,
          shape.saturation,
          shape.lightness
        );
        var allDown = true,
          maxY = 0;

        shape.points.forEach(function(point) {
          point.angle += point.speed;
          point.y = point.oy + Math.sin(point.angle) * point.rad;
          point.oy += ySpeed;
          maxY = Math.max(point.y, maxY);
          if (point.y < height) {
            allDown = false;
          }
        });
        shape.alpha = 1 - Math.min(maxY, height) / height;
        if (allDown) {
          shape.points.forEach(function(point) {
            point.y -= maxY;
            point.oy -= maxY;
            toReorder = index;
          });
        }
      });
      if (toReorder !== undefined) {
        shapes.push(shapes.splice(toReorder, 1)[0]);
      }

      requestAnimationFrame(draw);
    },
    drawDrip = function(points, color, alpha, h, s, l) {
      ctx.fillStyle =
        "hsl(" + h + ", " + s * alpha + "%, " + (l * alpha + 7) + "%)";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(points[0].x, points[0].y);

      for (i = 1; i < points.length - 2; i++) {
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;

        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      ctx.quadraticCurveTo(
        points[i].x,
        points[i].y,
        points[i + 1].x,
        points[i + 1].y
      );
      ctx.lineTo(width, 0);
      ctx.lineTo(0, 0);
      ctx.fill();
    },
    resizeHandler = function() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      var xr = width / 400;
      var yr = height / 400;

      ySpeed = 1 * yr;
      shapes.forEach(function(shape, index) {
        shape.points.forEach(function(point) {
          point.x = point.ox * xr;
          point.oy = point.ooy * yr;
          point.rad = point.orad * yr;
        });
      });
    },
    Drip = {
      init: function(_canvas) {
        canvas = _canvas;
        width = canvas.getAttribute("width");
        height = canvas.getAttribute("height");
        ctx = canvas.getContext("2d");
        createShape();
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        draw();
      }
    };

  return Drip;
})();

const SceneFive = () => {
  useEffect(() => {}, []);

  return (
    <SceneWrapper backgroundColor="#ffffff">
      <h1>Scene 5</h1>
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0
        }}
      >
        <path
          d="M0,0 L0,200
           Q250,100 400,200
           T600 0 L0,0"
          fill="#A6B0D9"
          stroke="#A6B0D9"
          strokeWidth="2px"
        />
        <path
          d={`M${window.innerWidth},${window.innerHeight + 200} L550,800
           Q250,100 1000,200
           T1200 0 L${window.innerWidth},0 Z `}
          fill="#FEE7A4"
          stroke="#FEE7A4"
          strokeWidth="2px"
        />
      </svg>
    </SceneWrapper>
  );
};

export default SceneFive;
