import { memo, useMemo } from "react";
import { BufferGeometry, Float32BufferAttribute, Points, PointsMaterial } from "three";
import { useFrame } from "@react-three/fiber";

type TProps = {
  scrollOffset: number;
};

function Stars({ scrollOffset }: TProps) {
  const stars = useMemo(() => {
    const starCount = 500;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * 400 - 800;
      const y = Math.random() * 700 - 350;
      const z = Math.random() * 800 - 400;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;
    }

    const starGeometry = new BufferGeometry();
    starGeometry.setAttribute("position", new Float32BufferAttribute(starPositions, 3));

    const starMaterial = new PointsMaterial({ color: 0xffffff });

    return new Points(starGeometry, starMaterial);
  }, []);

  useFrame(() => {
    if (stars) {
      stars.position.y = -scrollOffset * 100; // Adjust the multiplier to control the movement speed
    }
  });

  return <primitive object={stars} />;
}

export default memo(Stars);
