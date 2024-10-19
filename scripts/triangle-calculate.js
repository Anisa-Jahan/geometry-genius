function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    const triangleArae = 0.5 * base * height;

    // console.log(typeof base, typeof height);
    // console.log(base, height);
    // console.log(triangleArae);
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArae;
}

function calculateRectangleArae(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    const rectangleArea = width * length;

    // console.log(typeof width, typeof length);
    // console.log(width, length);
    // console.log(rectangleArea);
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}

function calculateParallelogramArea(){
    const parllelolgramBaseInput = document.getElementById('parallelogram-base');
    const parllelolgramBaseText = parllelolgramBaseInput.value
    const base = parseFloat(parllelolgramBaseText);
     
    const parllelolgramHeightInput = document.getElementById('parallelogram-height');
    const parllelolgramHeightText = parllelolgramHeightInput.value
    const height = parseFloat(parllelolgramHeightText);
    const parallelogramArea = base * height;

    // console.log(typeof base, typeof height);
    // console.log(base, height);
    // console.log(parallelogramArea);
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;
}

function calculateRhombusArea(){
    const rhombusFirstDiagonalInput = document.getElementById('diagonal-1');
    const rhombusFirstDiagonalText = rhombusFirstDiagonalInput.value;
    const FirstDiagonal = parseFloat(rhombusFirstDiagonalText);

    const rhombusSecondDiagonalInput = document.getElementById('diagonal-2');
    const rhombusSecondDiagonalText = rhombusSecondDiagonalInput.value;
    const SecondDiagonal = parseFloat(rhombusSecondDiagonalText);
    const rhombusArea = 0.5*FirstDiagonal*SecondDiagonal;

    // console.log(typeof FirstDiagonal, typeof SecondDiagonal);
    // console.log(FirstDiagonal, SecondDiagonal);
    // console.log(rhombusArea);
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = rhombusArea;
}

function calculatePentagonArae(){
    const pentagonPerimeterInput = document.getElementById('periemeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const perimeter = parseFloat(pentagonPerimeterText);

    const pentagonApothemInput = document.getElementById('apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const apothem = parseFloat(pentagonApothemText);
    const pentagonArea = 0.5*perimeter*apothem;

    // console.log(typeof perimeter, typeof apothem);
    // console.log(perimeter, apothem);
    // console.log(pentagonArea);
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = pentagonArea;
}

function calculateEllipseArea(){
    const ellipseMajorAxisInput = document.getElementById('major-axis');
    const ellipseMajorAxisText = ellipseMajorAxisInput.value;
    const majorAxis = parseFloat(ellipseMajorAxisText);

    const ellipseMinorAxisInput = document.getElementById('minor-axis');
    const ellipseMinorAxisText = ellipseMinorAxisInput.value;
    const minorAxis = parseFloat(ellipseMinorAxisText);
    const ellipseArea = 3.1416*majorAxis*minorAxis;

    // console.log(typeof majorAxis, typeof minorAxis);
    // console.log(majorAxis, minorAxis);
    // console.log(ellipseArea);
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = ellipseArea;
}