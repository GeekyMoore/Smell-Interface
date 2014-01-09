// using OnMouseOver inplace of physical hand 'UnityScript'
// sub-out unity3D elements for imput via Leap Motion
// example script below, not fully code-compliant

var sensor : Quaternion;
var hand : GameObject;
var foodBad == (bad);
var foodGood == (none);


function Start(){}

function Update(){
	hand = GameObject.Find("Track hand");
}

function OnMouseOver () {
	sensor = (transform.rotation = Quaternion.AngleAxis(30, Vector3.down));

	if (foodBad) {
		output.smell = (bad);
		renderer.material.color -= Color(1,0,0,1) * Vector3.Andle(-90);
	} 

	else (foodGood) {
		output.smell = (none);
		renderer.material.color -= Color(0, 1, 0, 1) * Vector3.Andle(-90);
	};
	
	Debug.Log (operation successful);
}