document.addEventListener("DOMContentLoaded", () => {
    //cube animation
    let isSpinning = false;

    document.querySelector(".canvas").addEventListener('click', () => {
        if (isSpinning){
            isSpinning = false;
        } else{
            isSpinning = true;
        }
    });

    const illo = new Zdog.Illustration({
        element: '.canvas',
        zoom: .5,
        dragRotate: true,
        onDragStart: function() {
            isSpinning = false;
        }
    })

    const cube = new Zdog.Box({
        addTo: illo,
        width: 40,
        height: 40, 
        depth: 20,
        stroke: 10,
        leftFace: "rgb(200,200,200)",
        rightFace: "rgb(0,0,0)",
        topFace: "rgb(255, 101, 101)",
        bottomFace: "rgb(151, 243, 255)",
    })

    illo.rotate.y = 10
    illo.rotate.x = 98

    illo.updateRenderGraph();

    function animate() {
        if (isSpinning) {
            illo.rotate.y += 0.008;
            illo.rotate.x += 0.008;
        }
        illo.updateRenderGraph();
        requestAnimationFrame(animate);
    }

    animate();
});