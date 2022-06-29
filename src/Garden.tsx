/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane005: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane008_1: THREE.Mesh;
    Plane008_2: THREE.Mesh;
    Plane008_3: THREE.Mesh;
    Plane008_4: THREE.Mesh;
    Plane008_5: THREE.Mesh;
    Plane008_6: THREE.Mesh;
    Plane008_7: THREE.Mesh;
    Plane008_8: THREE.Mesh;
    Plane008_9: THREE.Mesh;
    Plane008_10: THREE.Mesh;
    Plane008_11: THREE.Mesh;
    Plane008_12: THREE.Mesh;
    Plane008_13: THREE.Mesh;
    Plane008_14: THREE.Mesh;
    Plane008_15: THREE.Mesh;
    Plane008_16: THREE.Mesh;
    Plane008_17: THREE.Mesh;
    Plane008_18: THREE.Mesh;
    Plane008_19: THREE.Mesh;
    Plane008_20: THREE.Mesh;
    Plane008_21: THREE.Mesh;
    Plane008_22: THREE.Mesh;
    Plane008_23: THREE.Mesh;
    Plane008_24: THREE.Mesh;
    Plane008_25: THREE.Mesh;
    Plane008_26: THREE.Mesh;
    Plane008_27: THREE.Mesh;
    Plane008_28: THREE.Mesh;
    Plane008_29: THREE.Mesh;
    Plane008_30: THREE.Mesh;
    Plane008_31: THREE.Mesh;
    Plane008_32: THREE.Mesh;
  };
  materials: {
    ["Material.021"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.049"]: THREE.MeshStandardMaterial;
    ["Material.053"]: THREE.MeshStandardMaterial;
    ["Material.054"]: THREE.MeshStandardMaterial;
    ["Material.045"]: THREE.MeshStandardMaterial;
    ["Material.046"]: THREE.MeshStandardMaterial;
    ["Material.034"]: THREE.MeshStandardMaterial;
    ["Material.048"]: THREE.MeshStandardMaterial;
    ["Material.029"]: THREE.MeshStandardMaterial;
    ["Material.052"]: THREE.MeshStandardMaterial;
    ["Material.051"]: THREE.MeshStandardMaterial;
    ["Material.047"]: THREE.MeshStandardMaterial;
    ["Material.050"]: THREE.MeshStandardMaterial;
    ["Material.028"]: THREE.MeshStandardMaterial;
    jembatan: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Material.024"]: THREE.MeshStandardMaterial;
    ["Material.022"]: THREE.MeshStandardMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
    ["Smoke Domain Material.000"]: THREE.MeshStandardMaterial;
    ["Material.027"]: THREE.MeshStandardMaterial;
    ["Material.031"]: THREE.MeshStandardMaterial;
    ["Material.067"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/garden.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.021"]}
        position={[1.06, -4.04, 33.65]}
        scale={[2.32, 3.65, 3.65]}
      />
      <group scale={39.51}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_2.geometry}
          material={materials["Material.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_3.geometry}
          material={materials["Material.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_4.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_5.geometry}
          material={materials["Material.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_6.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_7.geometry}
          material={materials["Material.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_8.geometry}
          material={materials["Material.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_9.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_10.geometry}
          material={materials["Material.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_11.geometry}
          material={materials["Material.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_12.geometry}
          material={materials["Material.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_13.geometry}
          material={materials["Material.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_14.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_15.geometry}
          material={materials.jembatan}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_16.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_17.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_18.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_19.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_20.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_21.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_22.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_23.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_24.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_25.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_26.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_27.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_28.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_29.geometry}
          material={materials["Smoke Domain Material.000"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_30.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_31.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_32.geometry}
          material={materials["Material.067"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/garden.glb");