import React from "react"
import "./App.css"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import "./index.css"
import * as THREE from "three"
import { useCubeMovements } from "./useCubeMovements"

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
  const mesh = new THREE.Mesh(geometry, cubeMaterials) //bbl
  const mesh1 = new THREE.Mesh(geometry, cubeMaterials) //bbr
  const mesh2 = new THREE.Mesh(geometry, cubeMaterials) //btr
  const mesh3 = new THREE.Mesh(geometry, cubeMaterials) //btl
  const mesh4 = new THREE.Mesh(geometry, cubeMaterials) //fbr
  const mesh5 = new THREE.Mesh(geometry, cubeMaterials) //fbl
  const mesh6 = new THREE.Mesh(geometry, cubeMaterials) //ftl
  const mesh7 = new THREE.Mesh(geometry, cubeMaterials) //ftr
  const { R, Rprime, L, Lprime, U, Uprime, F, Fprime, B, Bprime, D, Dprime } =
    useCubeMovements(mesh, mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7)

  return (
    <>
      <button onClick={R}> R </button>
      <button onClick={Rprime}> R' </button>
      <button onClick={L}> L </button>
      <button onClick={Lprime}> L' </button>
      <button onClick={U}> U </button>
      <button onClick={Uprime}> U' </button>
      <button onClick={F}> F </button>
      <button onClick={Fprime}> F' </button>
      <button onClick={B}> B </button>
      <button onClick={Bprime}> B' </button>
      <button onClick={D}> D </button>
      <button onClick={Dprime}> D' </button>
      <Canvas
        className="canvas"
        style={{ height: "100vh", backgroundColor: " black" }}
      >
        <OrbitControls />
        <ambientLight intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <group>
          <primitive object={mesh} position={[0, 0, 0]} />
          <primitive object={mesh1} position={[1.05, 0, 0]} />
          <primitive object={mesh2} position={[1.05, 1.05, 0]} />
          <primitive object={mesh3} position={[0, 1.05, 0]} />
          <primitive object={mesh4} position={[1.05, 0, 1.05]} />
          <primitive object={mesh5} position={[0, 0, 1.05]} />
          <primitive object={mesh6} position={[0, 1.05, 1.05]} />
          <primitive object={mesh7} position={[1.05, 1.05, 1.05]} />
        </group>
      </Canvas>
    </>
  )
}

export default App
