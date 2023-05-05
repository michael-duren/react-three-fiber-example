import { useRef, useEffect } from 'react';

export default function Box({ position, name }) {
  const ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, [name]);

  return (
    <mesh position={position} name={name}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
