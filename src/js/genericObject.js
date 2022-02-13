export class GenericObj {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
  }
  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}
