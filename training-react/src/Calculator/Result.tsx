
import { FC } from "react";

type Props = {
    first: any[];
    last: any[];
};

const Result: FC<Props> = ({ first, last }: Props) => {
    return (
        <div className="border-t-2 border-l-2 border-r-2 w-1/3 h-[80px] flex flex-col bg-black text-white">
            <p className="px-2 py-1 flex justify-end text-lg h-[40px]">{last}</p>
            <p className="px-2 pt-1 flex justify-end text-lg h-[40px]">{first}</p>
        </div>
    );
};

export default Result;