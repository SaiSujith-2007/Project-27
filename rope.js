class rope
{
  constructor(body1,body2, offsetX, offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
  var options={
  bodyA:body1,
  bodyB:body2,
  stiffness:0.04,
  length:200,
  posB:{x:this.offsetX, y:this.offsetY}
  }
  this.rope = Constraint.create(options);
  World.add(world,this.rope);
  
}
display(){
   var posA=this.rope.bodyA.position;
   var posB=this.rope.bodyB.position;
   strokeWeight(4);
   line(posA.x,posA.y,posB.x,posB.y);

}
}