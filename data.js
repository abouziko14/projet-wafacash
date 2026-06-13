var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene-10",
      "name": "Scene 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09106359355287807,
          "pitch": 0.36432529809419734,
          "rotation": 0.7853981633974483,
          "target": "1-scene-9"
        },
        {
          "yaw": -0.9502738761469427,
          "pitch": -0.2043539972555557,
          "rotation": 3.141592653589793,
          "target": "2-scene-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene-9",
      "name": "Scene 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32661974997859744,
          "pitch": -0.20359399147093882,
          "rotation": 3.141592653589793,
          "target": "0-scene-10"
        },
        {
          "yaw": 0.9816844818615937,
          "pitch": 0.039260082291665555,
          "rotation": 2.356194490192345,
          "target": "2-scene-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-scene-8",
      "name": "Scene 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.6736893523643861,
          "pitch": 0.018414483348083266,
          "rotation": 0,
          "target": "1-scene-9"
        },
        {
          "yaw": 0.9234129640867099,
          "pitch": -0.25378146611225105,
          "rotation": 3.9269908169872414,
          "target": "0-scene-10"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
