import { Mesh, BoxGeometry, MeshBasicMaterial } from "three"

export const useCubeMovements = (
  mesh: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  mesh1: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  mesh2: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  mesh3: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  mesh4: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  mesh5: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  mesh6: Mesh<BoxGeometry, MeshBasicMaterial[]>,
  mesh7: Mesh<BoxGeometry, MeshBasicMaterial[]>
) => {
  //[vertical atrás] [vertical frente] [horizontal topo] [horizontal baixo]
  let rigthSideLayer = [
    [mesh1, mesh2],
    [mesh4, mesh7],
    [mesh2, mesh7],
    [mesh1, mesh4],
  ]
  //[vertical esquerda], [vertical direita], [hori cima], [hori baixo]
  let backLayer = [
    [mesh, mesh3],
    [mesh1, mesh2],
    [mesh2, mesh3],
    [mesh, mesh1],
  ]
  const R = () => {
    const newRightSideLayer = [
      [rigthSideLayer[0][1], rigthSideLayer[1][1]],
      [rigthSideLayer[0][0], rigthSideLayer[1][0]],
      [rigthSideLayer[1][1], rigthSideLayer[1][0]],
      [rigthSideLayer[0][1], rigthSideLayer[0][0]],
    ]
    const newBackSide = [
      backLayer[0],
      [rigthSideLayer[0][1], rigthSideLayer[1][1]],
      [],
      [],
    ]
    const newFrontSide = []
    const newUpperLayer = []
    const newDownLayer = []
    //Rotação
    rigthSideLayer = newRightSideLayer
  }
  const Rprime = () => {
    const newRightSideLayer = [
      [rigthSideLayer[1][0], rigthSideLayer[0][0]],
      [rigthSideLayer[1][1], rigthSideLayer[0][1]],
      [rigthSideLayer[0][1], rigthSideLayer[1][1]],
      [rigthSideLayer[1][0], rigthSideLayer[1][1]],
    ]
    //rotação
    rigthSideLayer = newRightSideLayer
  }

  //[vertical esquerda atrás] [vertical esquerda frente] [horizontal topo] [horizontal baixo]
  let leftSideLayer = [
    [mesh, mesh3],
    [mesh5, mesh6],
    [mesh3, mesh6],
    [mesh, mesh5],
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
    [mesh5, mesh6],
    [mesh4, mesh7],
    [mesh6, mesh7],
    [mesh4, mesh5],
  ]
  const F = () => {}
  const Fprime = () => {}

  //[vertical esquerda], [vertical direita], [hori cima], [hori baixo]
  let backLayer = [
    [mesh, mesh3],
    [mesh1, mesh2],
    [mesh2, mesh3],
    [mesh, mesh1],
  ]
  const B = () => {}
  const Bprime = () => {}
  //[vertical esquerda], [vertical direita], [hori frente], [hori back]
  let bottomLayer = [
    [mesh, mesh5],
    [mesh1, mesh4],
    [mesh4, mesh5],
    [mesh, mesh1],
  ]
  const D = () => {}
  const Dprime = () => {}
  //[vertical esquerda], [vertical direita], [hori frente], [hori back]
  let upperLayer = [
    [mesh3, mesh6],
    [mesh2, mesh7],
    [mesh6, mesh7],
    [mesh2, mesh3],
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
