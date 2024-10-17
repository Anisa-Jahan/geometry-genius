function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    const triangleArae = 0.5 * base * height;
    console.log(typeof base, typeof height);
    console.log(base, height);
    console.log(triangleArae);
}

function calculateRectangleArae(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    const rectangleArea = width * length;
    console.log(typeof width, typeof length);
    console.log(width, length);
    console.log(rectangleArea);
}

function calculateParallelogramArea(){
    const parllelolgramBaseInput = document.getElementById('parallelogram-base');
    const parllelolgramBaseText = parllelolgramBaseInput.value
    const base = parseFloat(parllelolgramBaseText);
     
    const parllelolgramHeightInput = document.getElementById('parallelogram-height');
    const parllelolgramHeightText = parllelolgramHeightInput.value
    const height = parseFloat(parllelolgramHeightText);
    const parallelogramArea = base * height;
    console.log(typeof base, typeof height);
    console.log(base, height);
    console.log(parallelogramArea);
}