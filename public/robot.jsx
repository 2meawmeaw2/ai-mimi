import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Robot(props) {
  const { nodes, materials } = useGLTF("/Untitled.gltf");

  return (
    <group scale={props.boxSize} {...props} dispose={null}>
      <group rotation={[-3.14, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Acetal_Resin_White_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_Grey"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.ABS_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Acetal_Resin_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Acetal_Resin_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Acetal_Resin_White_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Aluminum_-_Anodized_Rough_Grey"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Untitled.gltf");
