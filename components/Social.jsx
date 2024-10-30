import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaBlog, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/syntax2" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ashish-kadian08/" },
    { icon: <FaBlog />, path: "https://ashishkadian.hashnode.dev/" },
    { icon: <FaTwitter />, path: "https://x.com/AshishKadianak?t=49rQkgww10_re5IMArnYsA&s=09" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {/* Social icons go here */}
            {socials.map((item,index) => {
                return (
                    <Link key={index} 
                        href={item.path} 
                        className={iconStyles}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
};

export default Social;
