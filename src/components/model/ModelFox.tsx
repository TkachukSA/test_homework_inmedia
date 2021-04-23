import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {Html} from '@react-three/drei'
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

export default function ModelFox() {
    return (
        <Canvas dpr={[1, 2]} camera={{position: [-2, 2, 4], fov: 25}}>
            <directionalLight color={'#adafb4'} position={[10, 10, 0]} intensity={1.5}/>
            <directionalLight position={[-10, 10, 5]} intensity={1}/>
            <directionalLight color={'#adafb4'} position={[-10, 10, 0]} intensity={1.5}/>
            <directionalLight position={[0, -10, 0]} intensity={0.25}/>
            <Model position-y={-0.5}/>
        </Canvas>
    )
}

function Model(props: any) {
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
                <Suspense fallback={<Bust url="/Poimandres.fbx"/>}>
                    <Bust url="/Poimandres.fbx"/>
                </Suspense>
            </Suspense>
        </group>
    )
}

function Bust({url}: { url: string }) {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [width, height]);


    const fbx = useLoader(FBXLoader, url);
    let screenMobile = [0.005, 0.005, 0.005]
    let screen = [0.009, 0.009, 0.009]
    return <primitive scale={width > 570 ? screen : screenMobile} object={fbx}/>
}