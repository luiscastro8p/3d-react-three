import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Minecraft(props) {
  const { nodes, materials } = useGLTF("/Minecraft.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pisso.geometry} material={materials.Chisel} />
      <mesh geometry={nodes.rejilla.geometry} material={materials.Block_1} />
      <mesh geometry={nodes.cubos_musgo.geometry} material={materials.Musgo} />
      <mesh
        geometry={nodes.cubo_ladrillo.geometry}
        material={materials.Pared2}
      />
      <mesh geometry={nodes.barril_1.geometry} material={materials.block_3} />
      <mesh geometry={nodes.cubo_sincel.geometry} material={materials.Caja} />
      <mesh geometry={nodes.pozo_cubo.geometry} material={materials.Caja} />
      {props.cofres &&  <>
          <mesh
            geometry={nodes.chest_1.geometry}
            material={materials["Caja 2"]}
          />
          <mesh
            geometry={nodes.chest_2.geometry}
            material={materials["Caja 2"]}
          />
        </>}
      {props.antorchas && 
      <mesh geometry={nodes.antorchas.geometry} material={materials.Antorcha} />}
      <mesh geometry={nodes.barril_2.geometry} material={materials.block_3} />
      <group position={[0, -2, 0]}>
        <mesh
          geometry={nodes.Cube296.geometry}
          material={materials.block_4_1}
        />
        <mesh
          geometry={nodes.Cube296_1.geometry}
          material={materials.block_4}
        />
      </group>
      <mesh
        geometry={nodes.Cube122.geometry}
        material={materials.Tronco_Tapa}
      />
      <mesh geometry={nodes.Cube122_1.geometry} material={materials.Tronco} />
      <mesh geometry={nodes.Cube176.geometry} material={materials.HornoTop} />
      <mesh
        geometry={nodes.Cube176_1.geometry}
        material={materials.HornoParedes}
      />
      <mesh geometry={nodes.Cube176_2.geometry} material={materials.Horno} />
      <mesh
        geometry={nodes.Cube186.geometry}
        material={materials["table front"]}
      />
      <mesh geometry={nodes.Cube186_1.geometry} material={materials.Mesa} />
      <mesh geometry={nodes.Cube194.geometry} material={materials.block_4_1} />
      <mesh geometry={nodes.Cube194_1.geometry} material={materials.block_4} />
      <mesh geometry={nodes.Cube266.geometry} material={materials.musgo_2} />
      <mesh geometry={nodes.Cube266_1.geometry} material={materials.flores} />
    </group>
  );
}

useGLTF.preload("/Minecraft.gltf");
