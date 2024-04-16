import AutoType from "./AutoType";


export default function Nav() {
    return (
        <div className="flex justify-between bg-black h-full w-full space-x-2 px-10 pt-5 pb-5">

            <ul className="space-x-2 item-center text-green-400">
                <li className="item-center text-xl font-bold">
                    <AutoType />
                </li>
            </ul>

            <ul className="item-center flex gap-6 text-green-400 text-xl">    
                <li className="">
                    <a href="#" className="">About.txt</a>
                </li>
                <li className="">
                    <a href="#" className="">Skills.txt</a>
                </li>
                <li className="">
                    <a href="#" className="">Education.txt</a>
                </li>
                <li className="">
                    <a href="#" className="">Certificates.txt</a>
                </li>
            </ul>
        </div>
    );
}

