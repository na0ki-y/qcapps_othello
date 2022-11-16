export const Square = ({ value, isPutStone, onClick, disabled }) => {
return (
<button classname="{isPutStone" ?="" "put-square"="" :="" "square"}="" onclick="{onClick}" disabled="{disabled}">
<div classname="{value" =="=" "x"="" ?="" "player"="" :="" value="==" "o"="" "opponent"="" null}=""></div>
</button>
);
};