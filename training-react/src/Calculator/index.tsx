import { FC, useState } from "react";
import Result from "./Result";
import { data } from "./data";

const Calculator: FC = () => {
    const [first, setFirst] = useState<any[]>([]);
    const [last, setLast] = useState<any[]>([]);
    const [backGround, setBackGround] = useState<string>("white");
    const [color, setColor] = useState<string>("black");
    const [result, setResult] = useState<any[]>([]);

    const handleClick = (item: string): void => {
        if (
            item === "1" ||
            item === "2" ||
            item === "3" ||
            item === "4" ||
            item === "5" ||
            item === "6" ||
            item === "7" ||
            item === "8" ||
            item === "9" ||
            item === "."
        ) {
            setFirst((first) => [...first, item]);
        }
        if (item === "/" || item === "*" || item === "+" || item === "-") {
            setLast(first);
            setResult(first);
            setLast((last) => [...last, item]);
            setFirst([]);
        }
        if (item === "Delete") {
            setFirst(first.slice(0, first.length - 1));
        }
        if (item === "Clear") {
            setFirst([]);
            setLast([]);
        }
        if (item === "😋") {
            setBackGround(backGround === "white" ? "blue" : "white");
            setColor(color === "black" ? "white" : "black");
        }
        if (item === "=") {
            if (
                last[0] === "+" ||
                last[0] === "-" ||
                last[0] === "*" ||
                last[0] === "/" ||
                last[last.length] === "+" ||
                last[last.length] === "-" ||
                last[last.length] === "*" ||
                last[last.length] === "/"
            ) {
                setLast(["Error"]);
            } else {
                if (last[last.length - 1] === "+") {
                    const numberFirst: number = Number(
                        result.toString().replaceAll(",", "")
                    );
                    const numberLast: number = Number(
                        first.toString().replaceAll(",", "")
                    );
                    setLast([numberFirst + numberLast]);
                    setFirst([`${numberFirst} + ${numberLast}`]);
                }
                if (last[last.length - 1] === "-") {
                    const numberFirst: number = Number(
                        result.toString().replaceAll(",", "")
                    );
                    const numberLast: number = Number(
                        first.toString().replaceAll(",", "")
                    );
                    setLast([numberFirst - numberLast]);
                    setFirst([`${numberFirst} - ${numberLast}`]);
                }
                if (last[last.length - 1] === "*") {
                    const numberFirst: number = Number(
                        result.toString().replaceAll(",", "")
                    );
                    const numberLast: number = Number(
                        first.toString().replaceAll(",", "")
                    );
                    setLast([numberFirst * numberLast]);
                    setFirst([`${numberFirst} x ${numberLast}`]);
                }
                if (last[last.length - 1] === "/") {
                    const numberFirst: number = Number(
                        result.toString().replaceAll(",", "")
                    );
                    const numberLast: number = Number(
                        first.toString().replaceAll(",", "")
                    );
                    setLast([numberFirst / numberLast]);
                    setFirst([`${numberFirst} / ${numberLast}`]);
                }
            }
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl border-t-2 border-l-2 border-r-2 w-1/3 text-center py-3" style={{ backgroundColor: 'purple', color: 'white' }}>
                Calculator
            </h1>
            <Result first={first} last={last} />
            <div
                className="h-1/2 w-1/3"
                style={{ background: backGround, color: color }}
            >
                {data.map((item, index) => {
                    return (
                        <button
                            className="w-1/3 border-2 h-1/5 text-lg"
                            key={index}
                            onClick={() => handleClick(item.result)}
                            style={{ background: item.background }}
                        >
                            {item.result}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Calculator;