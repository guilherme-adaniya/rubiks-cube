import { Mesh, BoxGeometry, MeshBasicMaterial } from "three"
import * as THREE from "three"

// 1 letra = back/front 2letra = Bottom/Top 3letra = Left/Rigth
export const useCubeMovements = (
  BBL: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  BBR: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  BTR: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  BTL: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  FBR: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  FBL: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  FTL: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  FTR: Mesh<BoxGeometry, MeshBasicMaterial[]>
) => {
  const FACE_SIZE = 1.575
  const DIRECTION = {
    UP: new THREE.Vector3(-1, 0, 0),
    DOWN: new THREE.Vector3(1, 0, 0),
    LEFT: new THREE.Vector3(0, -1, 0),
    RIGHT: new THREE.Vector3(0, 1, 0),
  }
  //[vertical atrás] [vertical frente] [horizontal topo] [horizontal baixo]
  let rigthSideLayer = [
    [BBR, BTR],
    [FBR, FTR],
    [BTR, FTR],
    [BBR, FBR],
  ]
  const R = () => {
    const newRigthSideLayer = [
      [rigthSideLayer[0][1], rigthSideLayer[1][1]],
      [rigthSideLayer[0][0], rigthSideLayer[1][0]],
      [rigthSideLayer[1][1], rigthSideLayer[1][0]],
      [rigthSideLayer[0][1], rigthSideLayer[0][0]],
    ]
    const newBackSide = [
      backLayer[0],
      [rigthSideLayer[1][1], rigthSideLayer[1][0]],
      [backLayer[2][1], rigthSideLayer[1][1]],
      [backLayer[3][0], rigthSideLayer[1][0]],
    ]
    const newFrontSide = [
      frontLayer[0],
      [rigthSideLayer[0][0], rigthSideLayer[1][0]],
      [frontLayer[2][0], rigthSideLayer[1][0]],
      [rigthSideLayer[0][0], frontLayer[3][1]],
    ]
    const newUpperLayer = [
      upperLayer[0],
      [rigthSideLayer[1][1], rigthSideLayer[1][0]],
      [rigthSideLayer[2][0], rigthSideLayer[1][0]],
      [rigthSideLayer[1][1], upperLayer[3][1]],
    ]
    const newDownLayer = [
      bottomLayer[0],
      [rigthSideLayer[0][1], rigthSideLayer[1][1]],
      [bottomLayer[2][1], rigthSideLayer[1][1]],
      [bottomLayer[3][0], rigthSideLayer[1][0]],
    ]
    //Rotação
    rigthSideLayer[0][0].rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)
    rigthSideLayer[0][1].rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)
    rigthSideLayer[1][1].rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)
    rigthSideLayer[1][0].rotateOnWorldAxis(DIRECTION.UP, FACE_SIZE)
    rigthSideLayer = newRigthSideLayer
    backLayer = newBackSide
    frontLayer = newFrontSide
    upperLayer = newUpperLayer
    bottomLayer = newDownLayer
  }
  const Rprime = () => {
    const newRightSideLayer = [
      [rigthSideLayer[1][0], rigthSideLayer[0][0]],
      [rigthSideLayer[1][1], rigthSideLayer[0][1]],
      [rigthSideLayer[0][1], rigthSideLayer[1][1]],
      [rigthSideLayer[1][0], rigthSideLayer[1][1]],
    ]
    const newBackSide = [
      backLayer[0],
      [rigthSideLayer[1][0], rigthSideLayer[0][0]],
      [],
    ]
    const newFrontSide = [frontLayer[0]]
    const newUpperLayer = [upperLayer[0]]
    const newDownLayer = [bottomLayer[0]]
    //Rotação
    rigthSideLayer[0][0].rotateOnWorldAxis(DIRECTION.DOWN, FACE_SIZE)
    rigthSideLayer[0][1].rotateOnWorldAxis(DIRECTION.DOWN, FACE_SIZE)
    rigthSideLayer[1][1].rotateOnWorldAxis(DIRECTION.DOWN, FACE_SIZE)
    rigthSideLayer[1][0].rotateOnWorldAxis(DIRECTION.DOWN, FACE_SIZE)
    rigthSideLayer = newRightSideLayer
    backLayer = newBackSide
    frontLayer = newFrontSide
    upperLayer = newUpperLayer
    bottomLayer = newDownLayer
  }

  //[vertical esquerda atrás] [vertical esquerda frente] [horizontal topo] [horizontal baixo]
  let leftSideLayer = [
    [BBL, BTL],
    [FBL, FTL],
    [BTL, FTL],
    [BBL, FBL],
  ]

  const L = () => {
    const newLeftSideLayer = [
      [leftSideLayer[1][0], leftSideLayer[0][0]],
      [leftSideLayer[1][1], leftSideLayer[0][1]],
      [leftSideLayer[0][0], leftSideLayer[0][1]],
      [leftSideLayer[1][0], leftSideLayer[1][1]],
    ]
    //Rotação
    leftSideLayer = newLeftSideLayer
  }
  const Lprime = () => {
    const newLeftSideLayer = [
      [leftSideLayer[0][1], leftSideLayer[1][1]],
      [leftSideLayer[0][0], leftSideLayer[1][0]],
      [leftSideLayer[1][1], leftSideLayer[1][0]],
      [leftSideLayer[0][1], leftSideLayer[0][0]],
    ]
    //Rotação
    leftSideLayer = newLeftSideLayer
  }

  //[vertical esquerda], [vertical direita], [hori cima], [hori baixo]
  let frontLayer = [
    [FBL, FTL],
    [FBR, FTR],
    [FTL, FTR],
    [FBR, FBL],
  ]
  const F = () => {}
  const Fprime = () => {}

  //[vertical esquerda], [vertical direita], [hori cima], [hori baixo]
  let backLayer = [
    [BBL, BTL],
    [BBR, BTR],
    [BTR, BTL],
    [BBL, BBR],
  ]
  const B = () => {}
  const Bprime = () => {}
  //[vertical esquerda], [vertical direita], [hori frente], [hori back]
  let bottomLayer = [
    [BBL, FBL],
    [BBR, FBR],
    [FBR, FBL],
    [BBL, BBR],
  ]
  const D = () => {}
  const Dprime = () => {}
  //[vertical esquerda], [vertical direita], [hori frente], [hori back]
  let upperLayer = [
    [BTL, FTL],
    [BTR, FTR],
    [FTL, FTR],
    [BTR, BTL],
  ]

  const U = () => {
    const newUpperLayer = [
      [upperLayer[0][1], upperLayer[1][1]],
      [upperLayer[0][0], upperLayer[1][0]],
      [upperLayer[1][1], upperLayer[1][0]],
      [upperLayer[0][1], upperLayer[0][0]],
    ]
    //Rotação
    upperLayer = newUpperLayer
  }
  const Uprime = () => {}

  return { R, Rprime, L, Lprime, U, Uprime, F, Fprime, B, Bprime, D, Dprime }
}
