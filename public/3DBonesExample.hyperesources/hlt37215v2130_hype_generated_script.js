//	HYPE.documents["3DBonesExample"]

(function () {
  (function m() {
    function k(a, b, c, d) {
      var e = !1;
      null == window[a] &&
        (null == window[b]
          ? ((window[b] = []),
            window[b].push(m),
            (a = document.getElementsByTagName("head")[0]),
            (b = document.createElement("script")),
            (e = l),
            false == !0 && (e = ""),
            (b.type = "text/javascript"),
            "" != d &&
              ((b.integrity = d), b.setAttribute("crossorigin", "anonymous")),
            (b.src = e + "/" + c),
            a.appendChild(b))
          : window[b].push(m),
        (e = !0));
      return e;
    }
    var l = "3DBonesExample.hyperesources",
      f = "3DBonesExample",
      g = "hlt37215v2130_hype_container";
    if (false == !1)
      try {
        for (
          var c = document.getElementsByTagName("script"), a = 0;
          a < c.length;
          a++
        ) {
          var d = c[a].src,
            b =
              null != d
                ? d.indexOf("/hlt37215v2130_hype_generated_script.js")
                : -1;
          if (-1 != b) {
            l = d.substr(0, b);
            break;
          }
        }
      } catch (p) {}
    c =
      null == navigator.userAgentData &&
      navigator.userAgent.match(/MSIE (\d+\.\d+)/);
    c = parseFloat(c && c[1]) || null;
    d =
      !0 == (null != window.HYPE_768F || null != window.HYPE_dtl_768F) ||
      true == !0 ||
      (null != c && 10 > c);
    a = !0 == d ? "HYPE-768.full.min.js" : "HYPE-768.thin.min.js";
    c = !0 == d ? "F" : "T";
    d = d ? "" : "";
    if (
      false == !1 &&
      ((a = k("HYPE_768" + c, "HYPE_dtl_768" + c, a, d)),
      false == !0 &&
        (a =
          a ||
          k("HYPE_w_768", "HYPE_wdtl_768", "HYPE-768.waypoints.min.js", "")),
      false == !0 &&
        (a = a || k("Matter", "HYPE_pdtl_768", "HYPE-768.physics.min.js", "")),
      a)
    )
      return;
    d = window.HYPE.documents;
    if (null != d[f]) {
      b = 1;
      a = f;
      do f = "" + a + "-" + b++;
      while (null != d[f]);
      for (
        var e = document.getElementsByTagName("div"), b = !1, a = 0;
        a < e.length;
        a++
      )
        if (e[a].id == g && null == e[a].getAttribute("HYP_dn")) {
          var b = 1,
            h = g;
          do g = "" + h + "-" + b++;
          while (null != document.getElementById(g));
          e[a].id = g;
          b = !0;
          break;
        }
      if (!1 == b) return;
    }
    b = [];
    b = [
      {
        name: "Breadcrumbs",
        source:
          'function(hypeDocument, element, event) {\n    const page_num = document.getElementsByClassName("breadcrumb")[0].getAttribute("page_number")\n    const current_page = hypeDocument.currentSceneName()\n    let result = []\n    for (let i = 0; i < page_num; i++) {\n\n        if (i + 1 == current_page) {\n            result.push(`reddot`)\n        } else {\n            result.push(`dot`)\n\n        }\n    }\n\n    result.map((item, i) => {\n        // return `<div class=${item}></div>`\n        // onClick=hypeDocument.showSceneNamed(${i+1})\n        const button = document.createElement(\'button\');\n        button.onclick = function() {\n            hypeDocument.showSceneNamed(`${i+1}`)\n\n            console.log(hypeDocument.currentSceneName())\n        }\n        button.setAttribute("tabindex", "0")\n        button.setAttribute("class", item)\n        document.getElementsByClassName("breadcrumb")[current_page - 1].appendChild(button)\n\n    })\t\n\t\n}',
        identifier: "412",
      },
      {
        name: "loadObject",
        source:
          "function(hypeDocument, element, event) {\n\tif (document.readyState !== \"complete\") {\n\t\t// Loading hasn't finished yet\n\t\tdocument.addEventListener(\"DOMContentLoaded\", (event) => {\n\t\t\tloadModel();\n\t\t});\n\n\t} else {\n\t\t// `DOMContentLoaded` has already fired\n\t\tloadModel();\n\t}\n\n\tfunction loadModel() {\n\n\t\tlet instruction = document.querySelector('.instruction');\n\t\tlet loadingBar = document.querySelector('.loadingBar');\n\t\tlet loadButton = document.querySelector('.loadButton');\n\t\tlet loadScreen = document.querySelector('.loadScreen');\n\t\tloadingBar.style.display = 'block';\n\t\tloadButton.style.display = 'none';\n\n\t\tconst canvas = document.querySelector('.webgl');\n\t\tconst scene = new THREE.Scene();\n\t\tscene.background = new THREE.Color(0xEDFDFF);\n\t\tconst sizes = {\n\t\t\twidth: canvas.width,\n\t\t\theight: canvas.height\n\t\t};\n\n\t\t// Base camera\n\t\tconst camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.1, 1000);\n\t\tcamera.position.x = -0.25;\n\t\tcamera.position.y = 0.8;\n\t\tcamera.position.z = 3.5;\n\t\tscene.add(camera);\n\n\t\t// Lights \n\t\tconst light1 = new THREE.PointLight(0xffffff, 4);\n\t\tscene.add(light1);\n\t\tlight1.position.set(0, 0, 0);\n\n\t\tconst spotLight = new THREE.SpotLight( 0xffffff, 0, 4, Math.PI / 5);\n\t\tspotLight.intensity = 15;\n\t\tspotLight.position.set( 0.25, 0.8, 4.5 );\n\t\tspotLight.map = new THREE.TextureLoader().load('3DBonesExample.hyperesources/AdobeStock_938916262.jpg');\n\t\tspotLight.castShadow = true;\n\t\tspotLight.shadow.mapSize.width = 512;\n\t\tspotLight.shadow.mapSize.height = 512;\n\t\tscene.add( spotLight );\n\n\t\tconst ambient = new THREE.AmbientLight(0xFFFFFF);\n\t\tambient.intensity = 1.5;\n\t\tscene.add(ambient);\n\n\t\t// Renderer\n\t\tconst renderer = new THREE.WebGLRenderer({\n\t\t\tcanvas: canvas,\n\t\t\tantialias: true,\n\t\t\talpha: false,\n\t\t\ttoneMappingExposure: 0.1,\n\t\t})\n\n\t\trenderer.setSize(sizes.width, sizes.height);\n\t\trenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n\t\trenderer.outputEncoding = THREE.sRGBEncoding;\n\n\t\t// PostProcessing\n\t\tconst composer = new EffectComposer(renderer);\n\t\tconst renderPass = new RenderPass(scene, camera);\n\t\tcomposer.addPass(renderPass);\n\n\t\t// BokehPass setup\n\t\tconst bokehPass = new BokehPass(scene, camera, {\n\t\tfocus: 1.1,       // Focus distance\n\t\taperture: 0.01,  // Aperture size\n\t\tmaxblur: 0.005     // Maximum blur size\n\t\t});\n\t\tcomposer.addPass(bokehPass);\n\n\t\tconst bloomPass = new UnrealBloomPass( new THREE.Vector2( canvas.width, canvas.height ), 1.5, 0.4, 0.85 );\n\t\tbloomPass.threshold = 0;\n\t\tbloomPass.strength = 0.1;\n\t\tbloomPass.radius = 0;\n\t\tcomposer.addPass( bloomPass );\n\n\t\tconst outputPass = new OutputPass();\n\t\tcomposer.addPass(outputPass)\n\n\t\t// Bone Material\n\t\tconst boneMaterial = new THREE.MeshStandardMaterial();\n\t\tboneMaterial.side = THREE.DoubleSide;\n\t\tboneMaterial.roughness = 0.8;\n\t\tboneMaterial.metalness = 0.0;\n\t\tboneMaterial.color.setHex(0xeddaaf);\n\n\t\t// Animation References\n\t\tlet center;\n\t\tlet hinge;\n\t\tlet bns;\n\t\tlet ellipsoid;\n\t\tlet pivot;\n\t\tlet plane;\n\t\tlet saddle1;\n\t\tlet saddle2;\n\n\t\t// Loader\n\t\tconst loader = new GLTFLoader();\n\t\tloader.load('3DBonesExample.hyperesources/joints.glb',\n\t\t\t(gltf) => {\n\t\t\t\tconst model = gltf.scene\n\n\t\t\t\tscene.add(model)\n\n\t\t\t\tmodel.traverse((child) => {\n\t\t\t\t\tif (typeof child.material !== \"undefined\") {\n\t\t\t\t\t\tchild.material = boneMaterial;\n\t\t\t\t\t}\n\n\t\t\t\t\tswitch (child.name) {\n\t\t\t\t\t\tcase \"Center\":\n\t\t\t\t\t\t\tcenter = child;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"H_Rotator\":\n\t\t\t\t\t\t\thinge = child;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"B_Rotator\":\n\t\t\t\t\t\t\tbns = child;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"E_Rotator\":\n\t\t\t\t\t\t\tellipsoid = child;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"P_Rotator\":\n\t\t\t\t\t\t\tpivot = child;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"F_Rotator\":\n\t\t\t\t\t\t\tplane = child;\n\t\t\t\t\t\t\tplane.position.set(0, 0, 0);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"F_Static\":\n\t\t\t\t\t\t\tchild.position.set(0, -0.08, 0);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"S_Rotator\":\n\t\t\t\t\t\t\tsaddle1 = child;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase \"S_Pivoter\":\n\t\t\t\t\t\t\tsaddle2 = child;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\tcamera.lookAt(model.position);\n\t\t\t\tcamera.position.y = 0.3;\n\n\t\t\t\tloadingBar.style.display = 'none';\n\t\t\t\tloadScreen.style.display = 'none';\n\t\t\t\tinstruction.style.marginLeft = '-100%';\n\n\t\t\t},\n\t\t\t(xhr) => {\n\t\t\t\tloadingBar.style.width = (xhr.loaded / xhr.total * 50) + '%';\n\t\t\t}\n\t\t)\n\n\t\t// Model Rotation\n\t\t// Variables to track mouse and rotation\n\t\tlet isDragging = false;\n\t\tconst rotationSpeed = 0.01; // Adjust sensitivity\n\n\t\t// Event listeners\n\t\tcanvas.addEventListener('pointerdown', (event) => {\n\t\t\tevent.preventDefault();\n\t\t\tisDragging = true;\n\t\t});\n\n\t\tcanvas.addEventListener('pointermove', (event) => {\n\t\t\tevent.preventDefault();\n\t\t\tif (isDragging) {\n\t\t\t\t// Calculate mouse movement delta\n\t\t\t\tconst deltaMove = {\n\t\t\t\t\tx: event.movementX || event.mozMovementX || event.webkitMovementX || 0,\n\t\t\t\t\ty: event.movementY || event.mozMovementY || event.webkitMovementY || 0,\n\t\t\t\t};\n\n\t\t\t\t// Apply rotation (restricting to specific axes)\n\t\t\t\thinge.rotation.x += deltaMove.y * rotationSpeed;\n\t\t\t\thinge.rotation.x = Math.max(-Math.PI / 2.75, Math.min(Math.PI / 2.75, hinge.rotation.x));\n\n\t\t\t\tpivot.rotation.y += deltaMove.x * rotationSpeed;\n\n\t\t\t\tbns.rotation.x += deltaMove.x * rotationSpeed;\n\t\t\t\tbns.rotation.z += deltaMove.y * rotationSpeed;\n\t\t\t\tbns.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, bns.rotation.x));\n\t\t\t\tbns.rotation.z = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, bns.rotation.z));\n\n\t\t\t\tellipsoid.rotation.x += deltaMove.x * rotationSpeed;\n\t\t\t\tellipsoid.rotation.z += deltaMove.y * rotationSpeed;\n\t\t\t\tellipsoid.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, ellipsoid.rotation.x));\n\t\t\t\tellipsoid.rotation.z = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, ellipsoid.rotation.z));\n\t\t\t\tellipsoid.rotation.y = 0;\n\n\t\t\t\tlet e = Math.abs(ellipsoid.rotation.z);\n\t\t\t\tlet ePos = ((0.11) / ((Math.PI / 2))) * (e) \n\t\t\t\tellipsoid.position.y = ePos;\n\n\t\t\t\t//utput = output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)\n\n\t\t\t\tplane.position.x += deltaMove.x * rotationSpeed;\n\t\t\t\tplane.position.z += deltaMove.y * rotationSpeed;\n\t\t\t\tlet t = limit_position(plane.position.x, plane.position.z, 0.1);\n\t\t\t\tplane.position.x = t.x;\n\t\t\t\tplane.position.z = t.y;\n\n\t\t\t\tsaddle1.rotation.z += deltaMove.y * rotationSpeed;\n\t\t\t\tsaddle1.rotation.z = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, saddle1.rotation.z));\n\t\t\t\tsaddle2.rotation.x += deltaMove.x * rotationSpeed;\n\t\t\t\tsaddle2.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, saddle2.rotation.x));\n\t\t\t}\n\t\t});\n\n\n\t\tfunction limit_position(x, y, radius) {\n\t\t\tvar dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));\n\t\t\tif (dist <= radius) {\n\t\t\t\treturn {x: x, y: y};\n\t\t\t} \n\t\t\telse {\n\t\t\t\tvar radians = Math.atan2(y, x)\n\t\t\t\treturn {\n\t\t\t\t\tx: Math.cos(radians) * radius,\n\t\t\t\t\ty: Math.sin(radians) * radius\n\t\t\t\t}\n\t\t\t} \n\t\t}\n\n\t\tcanvas.addEventListener('pointerup', (event) => {\n\t\t\tevent.preventDefault();\n\t\t\tisDragging = false;\n\n\t\t\treset(hinge.rotation);\n\t\t\treset(bns.rotation);\n\t\t\treset(plane.position);\n\t\t\treset(saddle1.rotation);\n\t\t\treset(saddle2.rotation);\n\t\t\treset(ellipsoid.rotation);\n\t\t\treset(ellipsoid.position);\n\t\t});\n\n\t\tconst reset = (Obj) => {\n\t\t\tnew TWEEN.Tween(Obj)\n\t\t\t\t.to({ x: 0, y: 0, z: 0 }, 500)\n\t\t\t\t.easing(TWEEN.Easing.Elastic.Out)\n\t\t\t\t.start();\n\t\t}\n\n\t\t// Center Angle Controls\n\t\tconst objAngle = ((2 * Math.PI) / 6);\n\t\tlet currentObjAngle = 0;\n\t\tconst titleText = document.querySelector('#title-text')\n\t\tconst descText = document.querySelector('#desc-text')\n\t\tdocument.querySelector('#Btn-Right').addEventListener(\"click\", function () {\n\t\t\tcurrentObjAngle += 1;\n\t\t\tsetCenterAngle(currentObjAngle * objAngle)\n\t\t});\n\t\tdocument.querySelector('#Btn-Left').addEventListener(\"click\", function () {\n\t\t\tcurrentObjAngle -= 1;\n\t\t\tsetCenterAngle(currentObjAngle * objAngle)\n\t\t});\n\t\tconst setCenterAngle = (centerAngle) => {\n\t\t\tlet modObjAngle = mod(currentObjAngle, 6);\n\t\t\tspotLight.intensity = 0;\n\t\t\tnew TWEEN.Tween(center.rotation)\n\t\t\t\t.to({ x: 0, y: centerAngle, z: 0 }, 500)\n\t\t\t\t.easing(TWEEN.Easing.Cubic.Out)\n\t\t\t\t.onComplete( function() {\n\t\t\t\t\tspotLight.intensity = 15;\n\t\t\t\t})\n\t\t\t\t.start();\n\n\t\t\tconsole.log(modObjAngle)\n\n\t\t\tswitch (modObjAngle) {\n\t\t\t\tcase 5:\n\t\t\t\t\ttitleText.innerHTML = '<h3>Pivot joint</h3>';\n\t\t\t\t\tdescText.innerHTML = '<p>At the top of the spine the atlas and axis form a pivot joint that allows for rotation of the head.</p>';\n\t\t\t\t\tbreak;\n\t\t\t\tcase 4:\n\t\t\t\t\ttitleText.innerHTML = '<h3>Ball and socket joint</h3>';\n\t\t\t\t\tdescText.innerHTML = '<p>The shoulder is a ball and socket joint - a freely moving joint that can rotate on any axis. </p>';\n\t\t\t\t\tbreak;\n\t\t\t\tcase 3:\n\t\t\t\t\ttitleText.innerHTML = '<h3>Condyloid joint</h3>';\n\t\t\t\t\tdescText.innerHTML = '<p>The wrist is a condyloid joint which allows for a circular motion as well as flexion and extension.</p>';\n\t\t\t\t\tbreak;\n\t\t\t\tcase 2:\n\t\t\t\t\ttitleText.innerHTML = '<h3>Saddle joint</h3>';\n\t\t\t\t\tdescText.innerHTML = '<p>The joint where the thumb joins the hand is a saddle joint which lets the thumb cross over the palm making it opposable.</p>';\n\t\t\t\t\tbreak;\n\t\t\t\tcase 1:\n\t\t\t\t\ttitleText.innerHTML = '<h3>Gliding Joint</h3>';\n\t\t\t\t\tdescText.innerHTML = '<p>Vertebrae are joints that move against each other in a gliding motion as the body moves.</p>';\n\t\t\t\t\tbreak;\n\t\t\t\tcase 0:\n\t\t\t\t\ttitleText.innerHTML = '<h3>Hinge joint</h3>';\n\t\t\t\t\tdescText.innerHTML = '<p>The elbow is a hinge joint and moves on just one axis and allows for flexion and extension.</p>';\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\tfunction mod(n, m) {\n\t\t\treturn ((n % m) + m) % m;\n\t\t  }\n\n\t\t// Animation\n\t\tconst tick = () => {\n\t\t\trenderer.render(scene, camera);\n\t\t\tcomposer.render();\n\t\t\tTWEEN.update();\n\t\t\twindow.requestAnimationFrame(tick);\n\t\t}\n\n\t\ttick()\n\n\t}\n\n}",
        identifier: "769",
      },
      {
        name: "reloadHype",
        source:
          "function(hypeDocument, element, event) {\twindow.location.href = window.location.href;\n}",
        identifier: "834",
      },
    ];
    e = {};
    h = {};
    for (a = 0; a < b.length; a++)
      try {
        (h[b[a].identifier] = b[a].name),
          (e[b[a].name] = eval("(function(){return " + b[a].source + "})();"));
      } catch (n) {
        window.console && window.console.log(n),
          (e[b[a].name] = function () {});
      }
    c = new window["HYPE_768" + c](
      f,
      g,
      {
        "-2": { n: "blank.gif" },
        2: { n: "FontAwesome.otf" },
        3: { n: "fontawesome-webfont.eot" },
        4: { n: "fontawesome-webfont.woff" },
        5: { n: "fontawesome-webfont.woff2" },
        6: { n: "GlobalConnectStyle-HLT.css" },
        7: { n: "joints.glb" },
        "-1": { n: "PIE.htc" },
        0: { n: "font-awesome.min.css" },
        8: { p: 1, n: "AdobeStock_938916262.jpg", g: "838", o: true, t: "@1x" },
        1: { n: "fontawesome-webfont.ttf" },
        9: { p: 1, n: "Preview.png", g: "832", t: "@1x" },
      },
      l,
      [
        "<style>\n     /* Make sure that 'i' class=\"fa\" elements are not actually italic */\n    .HYPE_scene i.fa {\n     font-style: normal !important;\n    }\n</style>",
      ],
      e,
      [{ n: "1", o: "498", X: [0] }],
      [
        {
          o: "509",
          p: "600px",
          a: 100,
          Y: 1140,
          Z: 550,
          b: 100,
          cA: false,
          c: "#FFF",
          L: [],
          bY: 1,
          d: 1140,
          U: {},
          T: {
            "819_hover": {
              q: false,
              z: 1,
              i: "819_hover",
              n: "819_hover",
              a: [
                {
                  f: "c",
                  y: 0,
                  z: 1,
                  i: "g",
                  e: "#10596E",
                  s: "#045491",
                  o: "850",
                },
                { y: 1, i: "g", s: "#10596E", z: 0, o: "850", f: "c" },
              ],
              f: 30,
              b: [],
            },
            kTimelineDefaultIdentifier: {
              q: false,
              z: 0,
              i: "kTimelineDefaultIdentifier",
              n: "Main Timeline",
              a: [],
              f: 30,
              b: [],
            },
          },
          bZ: 180,
          O: [
            "854",
            "861",
            "855",
            "852",
            "851",
            "862",
            "856",
            "844",
            "850",
            "860",
            "859",
            "858",
            "847",
            "849",
            "853",
            "848",
            "857",
            "846",
            "845",
          ],
          n: "Untitled Layout",
          _: 0,
          v: {
            859: {
              aU: 8,
              G: "#FFF",
              c: 487,
              aV: 8,
              r: "inline",
              d: 392,
              s: "Helvetica,Arial,Sans-Serif",
              t: 18,
              Y: 26,
              Z: "break-word",
              v: "bold",
              w: '<h2 style="color: white !important;">Types of joints</h2>\n<p style="color: white !important;">A joint is where two or more bones meet in the body, to allow movement. In the body, every bone (except the hyoid) meets in a joint with one or more other bones. There are many different types of bone joints:</p>\n<p style="color: white !important;">Click on the play button to start the interactive 3D diagram.</p>',
              bF: "858",
              j: "absolute",
              x: "visible",
              k: "div",
              y: "preserve",
              z: 2,
              aS: 8,
              aT: 8,
              a: -8,
              b: -4,
            },
            848: {
              aU: 8,
              G: "#848484",
              c: 1126,
              aV: 8,
              r: "inline",
              d: 28,
              s: "Helvetica,Arial,Sans-Serif",
              t: 16,
              Z: "break-word",
              v: "normal",
              w: "Click and drag on the 3D Model to see the type of rotation the joint can do.",
              bF: "845",
              j: "absolute",
              x: "visible",
              k: "div",
              y: "preserve",
              z: 11,
              aS: 8,
              aT: 8,
              a: -1,
              F: "center",
              b: -70,
            },
            854: {
              h: "832",
              p: "no-repeat",
              x: "visible",
              a: 0,
              dB: "img",
              q: "100% 100%",
              j: "absolute",
              r: "inline",
              z: 2,
              bF: "852",
              b: -5,
              d: 555,
              k: "div",
              c: 1140,
            },
            860: {
              x: "visible",
              a: -48,
              b: -16,
              j: "absolute",
              bF: "858",
              z: 1,
              dC: {
                path: [
                  [27.1769, 0, 27.1769, 0, 587.7001, 0, 587.7001, 0],
                  [
                    587.7001, 0, 602.7094, 0, 614.877, 15.7072, 614.877,
                    35.0826,
                  ],
                  [
                    614.877, 35.0826, 614.877, 35.0826, 531.6478, 203.9174,
                    531.6478, 203.9174,
                  ],
                  [
                    531.6478, 203.9174, 516.3608, 228.0367, 506.1695, 239,
                    480.6911, 239,
                  ],
                  [480.6911, 239, 480.6911, 239, 27.1769, 239, 27.1769, 239],
                  [27.1769, 239, 12.1676, 239, 0, 223.2928, 0, 203.9174],
                  [0, 203.9174, 0, 203.9174, 0, 35.0826, 0, 35.0826],
                  [0, 35.0826, 0, 15.7072, 12.1676, 0, 27.1769, 0],
                ],
                closed: true,
              },
              k: "div",
              d: 239,
              c: 615,
              dD: 0,
              dE: "#71D249",
              g: "#045491",
            },
            857: {
              c: 1160,
              cP: "loadingBar",
              d: 54,
              r: "inline",
              cY: "1",
              I: "Solid",
              J: "Solid",
              K: "Solid",
              g: "#FFFDFD",
              L: "Solid",
              M: 0,
              bF: "844",
              N: 0,
              A: "#324B51",
              x: "visible",
              j: "absolute",
              B: "#324B51",
              P: 0,
              O: 0,
              C: "#324B51",
              z: 17,
              k: "div",
              D: "#324B51",
              a: -10,
              b: 512,
            },
            846: {
              aU: 8,
              G: "#000",
              c: 1126,
              aV: 8,
              r: "inline",
              d: 28,
              s: "Helvetica,Arial,Sans-Serif",
              t: 24,
              Z: "break-word",
              v: "normal",
              i: "desc-text",
              w: "<p>The elbow is a hinge joint and moves on just one axis and allows for flexion and extension.</p>",
              bF: "845",
              j: "absolute",
              x: "visible",
              k: "div",
              y: "preserve",
              z: 4,
              aS: 8,
              aT: 8,
              a: -1,
              F: "center",
              b: -44,
            },
            852: {
              x: "visible",
              k: "div",
              c: 1140,
              d: 550,
              cP: "loadScreen",
              z: 15,
              r: "inline",
              a: 0,
              j: "absolute",
              bF: "844",
              b: 0,
            },
            849: {
              c: 43,
              cP: "navbutton",
              dE: "#324B51",
              d: 191,
              r: "inline",
              dF: "butt",
              dG: "round",
              g: "#BBD1D3",
              aP: "pointer",
              i: "Btn-Right",
              bF: "845",
              j: "absolute",
              x: "visible",
              k: "div",
              z: 1,
              dC: {
                path: [
                  [0, 191, 0, 191, 0, 0, 0, 0],
                  [0, 0, 0, 0, 43, 94.3494, 43, 94.3494],
                ],
                closed: false,
              },
              a: 1080,
              dL: "nonzero",
              dD: 0,
              b: -370,
            },
            850: {
              b: -550,
              z: 10,
              K: "None",
              c: 60,
              L: "None",
              d: 45,
              aE: { a: [{ p: 4, h: "834" }] },
              M: 0,
              e: 1,
              bD: "none",
              N: 0,
              cQ: 1,
              dB: "button",
              O: 0,
              g: "#045491",
              aU: 0,
              cR: 1,
              P: 0,
              bF: "845",
              aS: 0,
              aV: 0,
              aT: 0,
              j: "absolute",
              k: "div",
              aI: 15,
              aJ: 15,
              ti: "0",
              aK: 0,
              aL: 0,
              A: "#FFF",
              Y: 41,
              B: "#FFF",
              aM: "819_hover",
              r: "inline",
              C: "#FFF",
              cY: "0",
              s: "FontAwesome",
              D: "#FFF",
              Z: "break-word",
              t: 24,
              F: "center",
              G: "#FFF",
              aP: "pointer",
              w: '<i class="fa fa-home" aria-hidden="true"></i>',
              x: "visible",
              I: "None",
              a: 1072,
              y: "preserve",
              J: "None",
            },
            855: {
              c: 1140,
              d: 550,
              r: "inline",
              I: "Solid",
              J: "Solid",
              bL: 0,
              K: "Solid",
              BDbL: 6.59099265,
              g: "rgba(0, 0, 0, 0.500)",
              L: "Solid",
              aP: "default",
              M: 0,
              bF: "852",
              N: 0,
              A: "#324B51",
              x: "visible",
              j: "absolute",
              B: "#324B51",
              P: 0,
              O: 0,
              C: "#324B51",
              z: 3,
              k: "div",
              D: "#324B51",
              a: 0,
              b: 0,
            },
            844: {
              x: "hidden",
              a: 0,
              dB: "button",
              bS: 374,
              j: "absolute",
              r: "inline",
              c: 1140,
              k: "div",
              z: 2,
              d: 550,
              b: 0,
              aP: "pointer",
            },
            858: {
              x: "visible",
              k: "div",
              c: 362,
              d: 109,
              cP: "instruction",
              z: 16,
              r: "inline",
              a: 32,
              j: "absolute",
              bF: "844",
              b: 47,
            },
            853: {
              dF: "butt",
              x: "visible",
              a: 771,
              b: 186,
              j: "absolute",
              bF: "852",
              r: "inline",
              dC: {
                path: [
                  [0, 206, 0, 206, 0, 0, 0, 0],
                  [0, 0, 0, 0, 178, 101.759, 178, 101.759],
                ],
                closed: false,
              },
              dG: "round",
              d: 206,
              dL: "nonzero",
              z: 4,
              dD: 0,
              k: "div",
              c: 178,
              dE: "#324B51",
              g: "#FFFDFD",
            },
            847: {
              c: 43,
              cP: "navbutton",
              dE: "#324B51",
              d: 191,
              r: "inline",
              dF: "butt",
              cQ: -1,
              dG: "round",
              cR: -1,
              g: "#BBD1D3",
              aP: "pointer",
              i: "Btn-Left",
              uB: 0,
              bF: "845",
              j: "absolute",
              x: "visible",
              k: "div",
              z: 2,
              dC: {
                path: [
                  [0, 191, 0, 191, 0, 0, 0, 0],
                  [0, 0, 0, 0, 43, 94.3494, 43, 94.3494],
                ],
                closed: false,
              },
              a: 17,
              dL: "nonzero",
              dD: 0,
              b: -371,
            },
            861: {
              aE: { a: [{ p: 4, h: "769" }] },
              cP: "loadButton",
              c: 1140,
              d: 550,
              r: "inline",
              I: "Solid",
              e: 0,
              J: "Solid",
              K: "Solid",
              g: "#FFFDFD",
              L: "Solid",
              aP: "pointer",
              M: 0,
              w: "",
              bF: "844",
              j: "absolute",
              x: "visible",
              N: 0,
              B: "#324B51",
              P: 0,
              O: 0,
              C: "#324B51",
              A: "#324B51",
              z: 19,
              D: "#324B51",
              dB: "button",
              k: "div",
              a: 0,
              b: 0,
            },
            856: {
              c: 1140,
              d: 550,
              I: "Solid",
              J: "Solid",
              K: "Solid",
              g: "#EDFDFF",
              L: "Solid",
              M: 0,
              w: "",
              bF: "844",
              A: "#F1F8FF",
              x: "visible",
              j: "absolute",
              B: "#F1F8FF",
              P: 0,
              N: 0,
              C: "#F1F8FF",
              z: 10,
              O: 0,
              D: "#F1F8FF",
              k: "div",
              a: 0,
              b: 0,
            },
            845: {
              x: "visible",
              k: "div",
              c: 1140,
              aP: "default",
              d: 0,
              z: 12,
              r: "inline",
              a: 0,
              j: "absolute",
              bF: "844",
              b: 550,
            },
            851: {
              aU: 8,
              G: "#000",
              c: 1126,
              aV: 8,
              r: "inline",
              d: 28,
              s: "Helvetica,Arial,Sans-Serif",
              t: 24,
              Z: "break-word",
              v: "bold",
              i: "title-text",
              w: "<h3>Hinge joint</h3>",
              bF: "845",
              j: "absolute",
              x: "visible",
              k: "div",
              y: "preserve",
              z: 3,
              aS: 8,
              aT: 8,
              a: -1,
              F: "center",
              b: -549,
            },
            862: {
              c: 1140,
              bS: 383,
              d: 550,
              r: "inline",
              I: "None",
              J: "None",
              bD: "none",
              K: "None",
              L: "None",
              aP: "move",
              M: 0,
              w: '<canvas class="webgl" width="1140" height="550"></canvas>',
              bF: "844",
              A: "#F1F8FF",
              j: "absolute",
              N: 0,
              B: "#F1F8FF",
              P: 0,
              x: "hidden",
              C: "#F1F8FF",
              O: 0,
              z: 11,
              D: "#F1F8FF",
              dB: "button",
              k: "div",
              a: 0,
              F: "center",
              b: 0,
            },
          },
        },
      ],
      {},
      h,
      {},
      function (shouldShow, mainContentContainer) {
        var loadingPageID = mainContentContainer.id + "_loading";
        var loadingDiv = document.getElementById(loadingPageID);

        if (shouldShow == true) {
          if (loadingDiv == null) {
            loadingDiv = document.createElement("div");
            loadingDiv.id = loadingPageID;
            loadingDiv.style.cssText =
              "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
            loadingDiv.innerHTML = "Loading";
            mainContentContainer.appendChild(loadingDiv);
          }

          loadingDiv.style.display = "block";
          loadingDiv.removeAttribute("aria-hidden");
          mainContentContainer.setAttribute("aria-busy", true);
        } else {
          loadingDiv.style.display = "none";
          loadingDiv.setAttribute("aria-hidden", true);
          mainContentContainer.removeAttribute("aria-busy");
        }
      },
      false,
      true,
      -1,
      true,
      true,
      false,
      true,
      true
    );
    d[f] = c.API;
    document.getElementById(g).setAttribute("HYP_dn", f);
    c.z_o(this.body);
  })();
})();
