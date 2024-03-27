<script setup>
import * as THREE from "three";
import { ref, onMounted } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// canvas 3D  html5 的绘图标签  数据可视化，游戏
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const containerRef = ref(null); // canvas

// 相机

const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight, // 横着拿
  0.1,
  1000
);

let controls = null;

// x   y    z 相机放置的位置， 酷家乐  3D家居
camera.position.set(0, 2, 6); // 摆好
// 场景

const scene = new THREE.Scene();
// 渲染器 canvas 幕布 不停的去输出
// OpenGL 3D建模 显卡计算 GPU  canvas 3D  GPU计算

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render); // 性能优化
};

onMounted(() => {
  containerRef.value.appendChild(renderer.domElement);
  renderer.setClearColor("#000");
  scene.background = new THREE.Color("#fff");
  scene.environment = new THREE.Color("#fff");
  render();

  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  // 坐标辅助线
  const gridHelper = new THREE.GridHelper(10, 10);
  gridHelper.material.opacity = 0.2;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);

  // 加载汽车模型
  const loader = new GLTFLoader(); // 3DMax gltf 格式
  const dracoLoader = new DRACOLoader(); // 解码器
  dracoLoader.setDecoderPath("../public/roadSter/draco/gltf/");
  loader.setDRACOLoader(dracoLoader);
  loader.load("../public/roadSter/model/bmw01.glb", (gltf) => {
    const bmw = gltf.scene;
    scene.add(bmw);
    // 模型由各个部分构成的， 数组一样， 可以让我们遍历
    bmw.traverse((child) => {
      if (child.isMesh && child.name.includes("轮毂")) {
        child.material = wheelsMaterial;
        wheels.push(child);
      }

      if (child.isMesh && child.name.includes("Mesh002")) {
        carBody = child;
        carBody.material = bodyMaterial;
      }

      if (child.isMesh && child.name.includes("前脸")) {
        frontCar = child;
        frontCar.material = frontMaterial;
      }

      if (child.isMesh && child.name.includes("引擎盖_1")) {
        hoodCar = child;
        hoodCar.material = hoodMaterial;
      }

      if (child.isMesh && child.name.includes("挡风玻璃")) {
        glassCar = child;
        glassCar.material = glassMaterial;
      }
    });
  });

  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(0, 0, 10);
  scene.add(light1);

  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(0, 0, -10);
  scene.add(light2);

  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(10, 0, 0);
  scene.add(light3);

  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(-10, 0, 0);
  scene.add(light4);

  const light5 = new THREE.DirectionalLight(0xffffff, 1);
  light5.position.set(0, 10, 0);
  scene.add(light5);

  const light6 = new THREE.DirectionalLight(0xffffff, 1);
  light6.position.set(5, 10, 0);
  scene.add(light6);

  const light7 = new THREE.DirectionalLight(0xffffff, 1);
  light7.position.set(0, 10, 5);
  scene.add(light7);

  const light8 = new THREE.DirectionalLight(0xffffff, 1);
  light8.position.set(0, 10, -5);
  scene.add(light8);

  const light9 = new THREE.DirectionalLight(0xffffff, 1);
  light9.position.set(-5, 10, 0);
  scene.add(light9);
});

let wheels = [];

let carBody, frontCar, hoodCar, glassCar;

const wheelsMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
});

// 材质

const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const frontMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const hoodMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 1,
  transparent: true,
});

let colors = [
  {
    name: "冷光银",
    color: "#424449",
  },
  {
    name: "经典黑",
    color: "black",
  },
  {
    name: "深海蓝",
    color: "#000f4a",
  },
  {
    name: "中国红",
    color: "#bd050f",
  },
  {
    name: "珍珠白",
    color: "white",
  },
];

const selectColor = (color) => {
  bodyMaterial.color.set(color);
  wheelsMaterial.color.set(color);
  frontMaterial.color.set(color);
  hoodMaterial.color.set(color);
};
</script>

<template>
  <div>
    <div class="header"></div>

    <div class="home">
      <div class="content-box">
        <div class="container" ref="containerRef"></div>
      </div>

      <div class="content">
        <div class="words">选择车身颜色</div>

        <div class="select">
          <div
            class="select-item"
            v-for="(item, index) in colors"
            :key="index"
            @click="selectColor(item.color)"
          >
            <div
              class="select-item-color"
              :style="{ background: item.color }"
            ></div>

            <div class="select-item-color-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.header {
  width: 100vw;
  height: 12vh;
}

.home {
  display: flex;
  .content-box {
    position: relative;
    // border: 1px solid #e8eaed;
  }

  .content {
    margin: 10px auto;
    .words {
      font-size: 20px;
      margin: 20px;
    }
  }

  .select {
    display: flex;
  }

  .select-item {
    margin: 5px;
    cursor: pointer;
  }

  .select-item-color {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50px;
    margin-bottom: 10px;
  }

  .select-item-color-name {
    font-size: 14px;
  }
}
</style>
