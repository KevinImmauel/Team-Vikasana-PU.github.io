
const menu = document.getElementById('menu-icon')
menu.addEventListener("click", function() {
    var mobile = document.getElementById('mobile-nav')
    
    if(!mobile.classList.contains('mobile-activate')) {
        mobile.classList.add('mobile-activate')
    }

    else {
        mobile.classList.remove('mobile-activate')
    }
})

// THREE.JS HYPER DRIVE EFFECT
let scene, camera, renderer, stars, starGeo;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI/2;

    renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0x000000, 0 );
    document.body.appendChild(renderer.domElement);

    starGeo = new THREE.Geometry();
    for(let i=0;i<4500;i++) {
        star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.0006;
        starGeo.vertices.push(star);
    }

    let sprite = new THREE.TextureLoader().load( 'assets/star.png' );
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.81,
        map: sprite
    });

    stars = new THREE.Points(starGeo,starMaterial);
    scene.add(stars);

    window.addEventListener("resize", onWindowResize, false);

    animate(); 
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate() {
    starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
        
        if (p.y < -200) {
        p.y = 200;
        p.velocity = 0;
        }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y +=0.002;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();