// 利用Symbol去除魔法字符串，形成风格良好的代码；

const shapeType = {
    trianglep: Symbol('Triangle')
};

function getArea(shape, options) {
    let area = 0;
    switch (shape) {
      case shapeType.triangle:
        area = 0.5 * options.width * options.height;
        break;
    default:
        return 0;
    }
    return area;
  }
  getArea(shapeType.triangle, { width: 100, height: 100 });
