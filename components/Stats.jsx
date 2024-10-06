"use client";
import { Section } from "lucide-react";
import CountUp from "react-countup";

const stats = [
    {
        num: 1.5,
        text: "Years of experience"
    },
    {
        num: 18,
        text: "Projects completed"
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 400,
        text: "Code commits",
    }
];

const Stats = () => {
    return (
        <Section>
            <div className="container mx-auto">
                <div>
                    {stats.map((item, index) => (
                        <div key={index}>
                            <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className="text-4xl xl:text-6xl font-extrabold" 
                            />
                            <p>{item.text}</p> {/* Added text display */}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Stats;