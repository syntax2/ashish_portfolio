import Link from "next/link";
import { Button} from "./ui/button";

//components
import Nav from "./Nav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between item-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Ashish<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex item-center gap-8"></div>
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
                </div>
            </header>
    )
}

export default Header