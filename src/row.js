
// row.js
// Squareをimportする
import { Square } from "./square";

export const Row = ({ array, board, row, isPutStone, onClick, disabled }) => {
return (
<div classname="row">
      {array.map((index) => {
let isPut;

// 石が置けるかをチェックする
for (const el of isPutStone) {
isPut = el[0] === row && el[1] === index;
if (isPut) break;
}

return (
<square key="{index}" value="{board[row][index]}" isputstone="{isPut}" putposition="{[row," index]}="" onclick="{()" ==""> onClick(row, index)}
disabled={disabled}
/>
);
})}
</square>

</div>
);
};
