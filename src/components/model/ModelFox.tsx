import React, {Suspense, useRef} from 'react'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {Html} from '@react-three/drei'
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
// @ts-ignore
import model from "./andres.obj"


export const ModelFox = React.memo(() => {
    return (
        <Canvas dpr={[1, 2]} camera={{position: [-2, 2, 4], fov: 25}}>
            <directionalLight color={'#adafb4'} position={[10, 10, 0]} intensity={1.5}/>
            <directionalLight position={[-10, 10, 5]} intensity={1}/>
            <directionalLight color={'#adafb4'} position={[-10, 10, 0]} intensity={1.5}/>
            <directionalLight position={[0, -10, 0]} intensity={0.25}/>
            <Model position-y={-0.5}/>
        </Canvas>

    )
})


const Model = React.memo((props: any) => {
    const ref = useRef<any>(null)
    useFrame((state) => {
            if (ref && ref.current) {
                ref.current.rotation.y = state.clock.elapsedTime
            }
        }
    )
    return (
        <group ref={ref} {...props}>
            <Suspense fallback={<Html center>loading...</Html>}>
                <Suspense fallback={<Bust url={model}/>}>
                    <Bust url={model}/>
                </Suspense>
            </Suspense>
        </group>
    )
})


    const Bust = React.memo((props:{url:string}) => {

    const fbx = useLoader(OBJLoader, props.url);
    return <primitive scale={[0.009, 0.009, 0.009]} object={fbx}/>
})
