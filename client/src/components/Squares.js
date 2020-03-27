import React, { useState, useEffect } from "react";
import { Pack } from "@potion/layout";
import { Svg, Rect } from "@potion/element";

const Squares = ({ colors }) => {
  const [squareData, setSquareData] = useState([]);
  useEffect(() => {
    const generateSquareData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setSquareData(generateSquareData);
  }, [colors]);

  return (
    <div className="square-wrap">
      <p>squares</p>
      <Svg width={400} height={400}>
        <Pack
          data={{
            children: squareData
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < colors.length) {
                  return (
                    <Rect
                      key={key}
                      x={x}
                      y={y}
                      width={r*1}
                      height={r*1}
                      fill={colors[i].code.hex}
                    />
                  );
                }
                return null;
              })
              .filter(v => v)
          }
        </Pack>
      </Svg>
    </div>
  );
};

export default Squares;
