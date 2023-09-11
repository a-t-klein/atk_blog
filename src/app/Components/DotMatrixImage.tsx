import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DotMatrixImage = ({ altTxt, src }) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 1,
    height: 1,
  });

  const canvasRef = useRef(null);
  const halftoneCanvasRef = useRef(null);

  useEffect(()=>{
        const stillLife = new Image();

  },[])

  return <div></div>;
};

export default DotMatrixImage;


//   useEffect(() => {
//     // Load and initialize your stillLife image
//     const stillLife = new Image();
//     stillLife.src = "/projects/halftone/stilllife.jpeg";
//     stillLife.onload = () => {
//       const aspectRatio = stillLife.height / stillLife.width;
//       const maxWidth = window.screen.width - 50;
//       const newWidth = Math.min(stillLife.width, maxWidth);
//       const newHeight = newWidth * aspectRatio;

//       setStillLifeDimensions({ width: newWidth, height: newHeight });

//       // Access canvas contexts using refs
//       const stillLifeCtx = stillLifeCanvasRef.current.getContext("2d");
//       const halftoneCtx = stillLifeHalftoneCanvasRef.current.getContext("2d");

//       // Resize and draw the stillLife image
//       stillLifeCanvasRef.current.width = newWidth;
//       stillLifeCanvasRef.current.height = newHeight;
//       stillLifeCtx.drawImage(stillLife, 0, 0, newWidth, newHeight);

//       // Perform the halftone effect
//       halftone({
//         angle: 0,
//         dotSize: 5,
//         dotResolution: 3,
//         targetCtx: halftoneCtx,
//         sourceCtx: stillLifeCtx,
//         width: newWidth,
//         height: newHeight,
//         color: "black",
//       });
//     };
//   }, []);

//   return (
//     <div className="bg-gray-100">
//       <canvas
//         ref={stillLifeCanvasRef}
//         width={stillLifeDimensions.width}
//         height={stillLifeDimensions.height}
//       />
//       <canvas
//         ref={stillLifeHalftoneCanvasRef}
//         width={stillLifeDimensions.width}
//         height={stillLifeDimensions.height}
//       />
//       {/* Your HTML structure here */}
//       </div>
//       );
//     };

// export default DotToneEffect;
