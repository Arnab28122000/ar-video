import React from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroNode,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroAnimations,
  ViroMaterials
} from "@reactvision/react-viro";

// Heart filter component
const HeartFilter = () => {
  // Explicitly type the positions as tuples of three numbers
  const heartPositions: [number, number, number][] = [
    [0.3, 0.5, -0.3],
    [-0.3, 0.5, -0.3],
    [0.5, 0.5, 0.2],
    [-0.5, 0.5, 0.2],
    [0, 0.5, 0.5],
  ];

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={25}
        direction={[0, -1, 0]}
        position={[0, 5, 1]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={2}
        shadowFarZ={7}
        shadowOpacity={0.7}
      />
      {heartPositions.map((position, index) => (
        <ViroNode
          key={index}
          position={position}
          scale={[0.05, 0.05, 0.05]}
          animation={{ name: "rotateAroundHead", run: true, loop: true }}
        >
          <Viro3DObject
            source={require('../../assets/images/heart.obj')}
            materials={["heartMaterial"]}
            type="OBJ"
          />
        </ViroNode>
      ))}
    </ViroARScene>
  );
};

// Main AR component
const LoveFilterAR = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HeartFilter,
      }}
      style={{ flex: 1 }}
    />
  );
};

// Define materials
ViroMaterials.createMaterials({
  heartMaterial: {
    diffuseColor: "red",
    lightingModel: "Blinn",
  },
});

// Define animations
ViroAnimations.registerAnimations({
  rotateAroundHead: {
    properties: {
      rotateY: "+=360",
    },
    duration: 5000, // Speed of rotation
  },
});

export default LoveFilterAR;
