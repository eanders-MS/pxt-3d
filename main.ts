controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    engine.camera.rotation.y -= 1;
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    engine.camera.position = threed.Vector3.Subtract(engine.camera.position, threed.Vector3.Scale(1, engine.camera.forward));
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    engine.camera.rotation.y += 1;
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    engine.camera.position = threed.Vector3.Subtract(engine.camera.position, threed.Vector3.Scale(1, engine.camera.forward));
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    engine.camera.rotation.y -= 1;
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    engine.camera.position = threed.Vector3.Add(engine.camera.position, threed.Vector3.Scale(1, engine.camera.forward));
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    engine.camera.position = threed.Vector3.Add(engine.camera.position, threed.Vector3.Scale(1, engine.camera.forward));
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    engine.camera.rotation.y += 1;
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    engine.renderer.lightModel += 1;
    engine.renderer.lightModel %= threed.LightModel.Count;
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    engine.renderer.overWire = !engine.renderer.overWire;
})
controller.setRepeatDefault(0, 10);
const engine = new threed.Engine();
const cube = threed.Model.Cube();
const redCube = new threed.Instance(cube, threed.Colors.Red, new threed.Vector3(0, 0, 10), new threed.Vector3(0, 0, 0), 1);
const blueCube = new threed.Instance(cube, threed.Colors.Blue, new threed.Vector3(2.75, 0, 10), new threed.Vector3(0, 0, 0), 1.25);
const greenCube = new threed.Instance(cube, threed.Colors.Green, new threed.Vector3(-2.75, 0, 10), new threed.Vector3(0, 0, 0), 1.25);
engine.instances.push(redCube)
//engine.instances.push(blueCube)
//engine.instances.push(greenCube)
game.onUpdateInterval(10, function () {
    engine.draw();
redCube.rotation.x += 1.76;
redCube.rotation.y += 2.33;
blueCube.rotation.z += 3.37;
blueCube.rotation.y -= 0.11;
greenCube.rotation.z -= 2.71;
greenCube.rotation.y += 1.03;
})
