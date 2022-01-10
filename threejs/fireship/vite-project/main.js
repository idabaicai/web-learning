import './style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)


const geometry = new THREE.TorusBufferGeometry(12, 2, 8, 1000)
// const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true })
const material = new THREE.MeshStandardMaterial({ color: 0x00ffff})
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)
// pointLight.position.set(25,25,25)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
// const lightHelper = new THREE.PointLightHelper(ambientLight)

const gridHelper = new THREE.GridHelper(200, 5)

scene.add(lightHelper, gridHelper)

// 允许拖动
const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  const star = new THREE.Mesh(geometry, material)
  // scene.add(sphere)
  const [x, y, z] = Array(3).fill().map(() => {
    return THREE.MathUtils.randFloatSpread(100)
  })
  star.position.set(x,y,z)
  scene.add(star)
}
Array(200).fill().forEach(addStar)

// 设置背景
const spaceTexture = new THREE.TextureLoader().load('./public/space.jpg')
scene.background = spaceTexture

// 设置头像
const imageSize = 3
const texture = new THREE.TextureLoader().load('./public/yin.jpg')
const image = new THREE.Mesh(new THREE.BoxGeometry(imageSize, imageSize, imageSize), new THREE.MeshBasicMaterial({
  map: texture
}))
scene.add(image)

// moon
const moonTexture = new THREE.TextureLoader().load('./public/moon.jpg')
const normalTexture = new THREE.TextureLoader().load('./public/normal.jpg')

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  }))

scene.add(moon)

function animate() {
  requestAnimationFrame(animate)
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01
  
  image.rotation.x += 0.01
  image.rotation.y += 0.005
  image.rotation.z += 0.01
  controls.update()
  renderer.render(scene, camera)
}

animate()