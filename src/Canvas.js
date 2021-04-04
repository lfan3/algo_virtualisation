import React from "react";
import Sketch from "react-p5";


export const Canvas = (props) => {
    let h = [50,100,150]

	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		const cns = p5.createCanvas(500, 500).parent(canvasParentRef);
		const x = (p5.windowWidth - p5.width) / 2;
    	const y = (p5.windowHeight - p5.height) / 2;
 
        cns.position(x, y);
    };
    
    const partition = (arr, low, high)=>{
        let pivot = arr[high];
        let i = low - 1;

        for(let j=low; j<high; j++){
            if(arr[j] < pivot){
                
            }
        }
    }

	const draw = (p5) => {
		p5.background(0);
		p5.rect(30, 20, 30, h[0]);
		p5.rect(90, 20, 30, h[1]);
		p5.rect(150, 20, 30, h[2]);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
	};

	return <Sketch setup={setup} draw={draw} />;
};