import React from "react"
import "./App.css"
import { Canvas, Vector3 } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import "./index.css"
import * as THREE from "three"

function App() {
  const geometry = new THREE.BoxGeometry()
  const cubeMaterials = [
    new THREE.MeshBasicMaterial({
      color: "#b71234",
      side: THREE.DoubleSide,
    }),
    new THREE.MeshBasicMaterial({
      color: "#ff5800",
      side: THREE.DoubleSide,
    }),
    new THREE.MeshBasicMaterial({
      color: "#009b48",
      side: THREE.DoubleSide,
    }),
    new THREE.MeshBasicMaterial({
      color: "#0046ad",
      side: THREE.DoubleSide,
    }),
    new THREE.MeshBasicMaterial({
      color: "#ffd500",
      side: THREE.DoubleSide,
    }),
    new THREE.MeshBasicMaterial({
      color: "white",
      side: THREE.DoubleSide,
    }),
  ]

  const mesh = new THREE.Mesh(geometry, cubeMaterials)
  const mesh1 = new THREE.Mesh(geometry, cubeMaterials)
  const mesh2 = new THREE.Mesh(geometry, cubeMaterials)
  const mesh3 = new THREE.Mesh(geometry, cubeMaterials)
  const mesh4 = new THREE.Mesh(geometry, cubeMaterials)
  const mesh5 = new THREE.Mesh(geometry, cubeMaterials)
  const mesh6 = new THREE.Mesh(geometry, cubeMaterials)
  const mesh7 = new THREE.Mesh(geometry, cubeMaterials)


  const FACE_SIZE = 1.575
  const DIRECTION = {
    UP: new THREE.Vector3(-1, 0, 0),
    DOWN: new THREE.Vector3(1, 0, 0),
    LEFT: new THREE.Vector3(0, -1, 0),
    RIGHT: new THREE.Vector3(0, 1, 0),
  }

  mesh.rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)
  mesh3.rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)
  mesh5.rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)
  mesh6.rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)

  return (
    <Canvas
      className="canvas"
      style={{ height: "100vh", backgroundColor: " black" }}
    >
      <OrbitControls />
      <ambientLight intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <group>
        <primitive object={mesh} position={[0, 0, 0]} rotate={180} />
        <primitive object={mesh1} position={[1.05, 0, 0]} />
        <primitive object={mesh2} position={[1.05, 1.05, 0]} />
        <primitive object={mesh3} position={[0, 1.05, 0]} />
        <primitive object={mesh4} position={[1.05, 0, 1.05]} />
        <primitive object={mesh5} position={[0, 0, 1.05]} />
        <primitive object={mesh6} position={[0, 1.05, 1.05]} />
        <primitive object={mesh7} position={[1.05, 1.05, 1.05]} />
      </group>
    </Canvas>
  )
}

export default App
