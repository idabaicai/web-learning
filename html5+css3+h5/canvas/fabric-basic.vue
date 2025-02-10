<!-- fabric 在图片上添加形状 -->
<template>
  <div>
    <canvas id="canvas" width="800" height="800"></canvas>
    <img id="img" :src="url" alt="" style="display: none;">
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as fabric from 'fabric';

const url = 'https://storage.googleapis.com/ai-resource-bucket/source_file/1739151331_c2f20f362b741f29f5870eead8194c92.png'

const addCanvas = () => {
  const canvas = new fabric.Canvas('canvas');
  // canvas 背景色
  canvas.backgroundColor = '#ccc';

  const url = 'https://storage.googleapis.com/ai-resource-bucket/source_file/1739151331_c2f20f362b741f29f5870eead8194c92.png'


  const image = document.getElementById('img');

  // 获取 canvas 的宽度和高度
  const canvasWidth = canvas.getWidth();
  const canvasHeight = canvas.getHeight();

  // 计算宽度和高度的缩放比例
  const scaleX = canvas.width / image.width;
  const scaleY = canvas.width / image.height;
  console.log(scaleX, scaleY, 'scaleXY');
  console.log(canvas.width / image.width, canvas.height / image.height, 'scaleXY');
  // const scaleY = canvasHeight / imgHeight;
  // Initiate a Fabric instance
  const fabricImage = new fabric.Image(image, {
    left: 0, // 图片距离画布左边的距离
    top: 0,  // 图片距离画布顶部的距离
    scaleX, // 水平缩放比例
    scaleY, // 垂直缩放比例

  });
  canvas.add(fabricImage);
  // x, y, width, height
  const rect = [40, 42, 1137, 1102]

  // 定义多边形的顶点
  const points = [
  ];
  let [x, y, width, height] = rect
  x *= scaleX
  y *= scaleY
  width *= scaleX
  height *= scaleY
  const dx = (x + width)
  const dy = (y + height)


  console.log(dx, dy, 'dxdy');
  points.push({ x, y });
  points.push({ x: dx, y });
  points.push({ x: dx, y: dy });
  points.push({ x, y: dy });
  // 创建多边形对象
  const polygon = new fabric.Polygon(points, {
    fill: 'rgba(255, 255, 255, .5)',
    stroke: 'rgb(210, 0, 0)',
    strokeWidth: 2
  });
  polygon.selectable = false;
  // 禁用对象的缩放功能
  polygon.lockScalingX = true;
  polygon.lockScalingY = true;

  // 禁用对象的拖动功能
  rect.lockMovementX = true;
  rect.lockMovementY = true;
  // 禁用对象的旋转功能
  rect.lockRotation = true;
  // 将多边形添加到画布
  canvas.add(polygon);
  // canvas.renderAll();
  // 添加点击事件
  canvas.on('mouse:down', function (options) {
    console.log(options, 'options');
  })
};

onMounted(() => {
  nextTick(() => {
    addCanvas();
  })
});
</script>

<style lang="scss" scoped></style>