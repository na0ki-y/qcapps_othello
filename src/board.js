// board.js
import React, { useState } from "react";
import { Row } from "./row";
import { OthelloBoard } from "./othello";
import { opponentSelect } from "../utils/opponentSelect";
import { selectPosition } from "../utils/SelectPosition";

const othello = new OthelloBoard();  //OthelloBoardクラスのインスタンスを生成
export const Board = () => {
const [othelloBoard, setOthelloBoard] = useState(othello.board); // オセロボードの状態をstateで管理する
const [isDisabled, setIsDisabled] = useState(false);  // 対戦相手が石を置くまで操作できないようにする
const rowArr = [0, 1, 2, 3, 4, 5]; // オセロのX軸のindex
const player = "x"; // プレイヤー
const opponent = "o"; // 対戦相手

//マスをクリックした時の処理
function clickSquare(row, index) {
// 石が置ける場所をチェックする
const putPositionArr = othello.isPutPosition(player);  / /プレイヤーが石を置ける箇所を取得
const isPut = othello.putStone(row, index, player); // 実際に石を置く
const newArray = [...othelloBoard];// newArrayに変更を代入する
setOthelloBoard(newArray); //変更された内容をsetOthelloBoardで更新する
}
function wait() {
    return new Promise((resolve) => {
    setTimeout(function () {
    resolve();
    }, 1000);
    });
    }
    
    // 非同期処理なのでasyncをつける
    async function clickSquare(row, index) {
    const isPut = othello.putStone(row, index, player);
    
    const newArray = [...othelloBoard];
    setOthelloBoard(newArray);
    
    // 石を置ける箇所がなければ処理を終了する
    if (!isPut) {
    return;
    }
    
    setIsDisabled(true);  // 相手が石を置くまでマスをクリックできないようにする
    
    await wait();  // 1秒待つ
    
    const opponentPutArr = othello.isPutPosition(opponent);  // 対戦相手の石を置ける箇所を取得
    
    const putPosition = opponentSelect(opponent, opponentPutArr); // 石を置く箇所の優先順位を決める
    
    const select = selectPosition(putPosition, opponent, othello.checkStone, othello.board); // より多く返せる箇所を選択
    
    othello.putStone(select[0], select[1], opponent); // 対戦相手の石を置く
    setIsDisabled(false); // マスをdisabledを解除
    const _newArray = [...othelloBoard];
    setOthelloBoard(_newArray);
    }
return (
<div classname="container">
<div classname="board">
        {rowArr.map((index) => {
return (
<row key="{index}" array="{rowArr}" board="{othelloBoard}" row="{rowArr[index]}" isputstone="{putPositionArr}" onclick="{clickSquare}" disabled="{isDisabled}">
);
})}
</row></div>
</div>
);
};