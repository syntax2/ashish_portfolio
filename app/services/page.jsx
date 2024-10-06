"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

// TODO: Replace with actual service page links when they are developed
const GITHUB_LINK = "https://github.com/syntax2";



const services = [
    {
        num: '01',
        title: 'Cloud Infrastructure Optimization',
        description: 'Streamline your AWS infrastructure for peak performance and cost-efficiency. Reduce cloud spend by up to 40% while improving system responsiveness.',
        href: GITHUB_LINK
        // href: "/services/cloud-optimization"
    },
    {
        num: '02',
        title: 'CI/CD Pipeline Engineering',
        description: 'Implement cutting-edge CI/CD pipelines that slash deployment times by up to 85% and boost release frequency by 300%.',
        href: GITHUB_LINK
    },
    {
        num: '03',
        title: 'Kubernetes & Containerization',
        description: 'Migrate to a containerized architecture, improving scalability by 400% and reducing resource utilization by 50%.',
        href: GITHUB_LINK
    },
    {
        num: '04',
        title: 'DevSecOps Implementation',
        description: 'Integrate robust security practices throughout your development lifecycle, reducing potential security threats by 95%.',
        href: GITHUB_LINK
    },
    {
        num: '05',
        title: 'Monitoring & Observability',
        description: 'Implement advanced monitoring solutions like Prometheus and Grafana, increasing issue detection speed by 90%.',
        href: GITHUB_LINK
    }
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            <div className="flex-1 flex flex-col justify-center gap-6">
                                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                    {/* top */}
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                                            {service.num}
                                        </div>
                                        <Link 
                                            href={service.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                        >
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        </Link>
                                    </div>
                                    {/* title */}
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                        {service.title}
                                    </h2>
                                    {/* description */}
                                    <p className="text-white/60">{service.description}</p>
                                    {/* border */}
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;