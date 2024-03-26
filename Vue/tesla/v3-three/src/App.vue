<template>
  <div>
    <div class="header"></div>
    <div class="home">
      <div class="content-box">
        <div class="container" ref="containerRef"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import { ref , onMounted} from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const containerRef = ref(null) // canvas

const camera = new THREE.PerspectiveCamera( // 透视相机
  40, // 角度
  window.innerWidth / window.innerHeight, // 宽高比 横着
  0.1, // 近平面
  1000 // 远平面
) 

let controls = null

camera.position.set(0, 2, 6) // 设置相机位置

const scene = new THREE.Scene() // 场景

// OpenGL 3D建模 
const renderer =  new THREE.WebGLRenderer({ // 渲染器 canvas 幕布
  antialias: true, // 抗锯齿
}) 

renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8) // 设置渲染器尺寸

const render = () => {  
  renderer.render(scene, camera) // 渲染器渲染场景和相机
  requestAnimationFrame(render) // 循环渲染(性能优化)
}

onMounted(() => {
  containerRef.value.appendChild(renderer.domElement) // 挂载canvas
  renderer.setClearColor('#000') // 设置渲染器背景颜色
  scene.background = new THREE.Color('#fff') // 设置场景背景色
  scene.environment = new THREE.Color('#fff') // 设置场景环境色
  render()

  controls = new OrbitControls(camera, renderer.domElement)
  controls.update()

  // 坐标辅助线
  const gridHelper = new THREE.GridHelper(10, 10) // 网格辅助器
  gridHelper.material.opacity = 0.2 // 网格透明度
  gridHelper.material.transparent = true // 网格透明
  scene.add(gridHelper)

  // 加载汽车模型
  const loader = new GLTFLoader() // 加载器 3DMax gltf格式
  const dracoloader = new DRACOLoader()
  dracoloader.setDecoderPath('../public/roadSter/draco/gltf')
  loader.setDRACOLoader(dracoloader)
  loader.load('../public/roadSter/model/bmw01.glb', gltf => {
      const bmw = gltf.scene
      scene.add(bmw)
      bmw.traverse(child => {
        if(child.isMesh && child.name.includes("轮毂")) {
          child.material = wheelsMasterial
          child.material.envMapIntensity = 0.5
        }
      })
  })

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 10)
  scene.add(light)
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

})

let wheels = []

const wheelsMasterial = new THREE.MeshStandardMaterial({
  color: '0x424449',
  metalness: 1,
  roughness: 0.5,
})

</script>

<style lang="css" scoped>

</style>