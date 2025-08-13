import { motion } from "framer-motion";
import { useAgendaStore } from "../../Store/agendaStore"

export default function ExecutiveTrack() {
    const { selectedDay } = useAgendaStore();
    
    return (
        <section className="bg-[#0B1236] py-8 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-[#F9F70C] font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 md:mb-12">
                    EXECUTIVE TRACK – Cybersecurity Focused
                </h1>
                
                {selectedDay === "day1" && (
                    <div className="space-y-6">
                       
                        <ScheduleItem time="08:30 – 09:30" content="Registration, Refreshments and Stage Performance" />
                        <ScheduleItem  time="09:30 – 09:35" content={<><span className="text-[#00EBDC]">Grand Opening:</span> Guest of Honor Formal reception accompanied by a ceremonial marching band</>} />
                        <ScheduleItem time="10:00 – 10:15" content={<><span className="text-[#00EBDC]">Grand Opening:</span> Guest of Honor & Ministries Visit the Booth</>} />
                        <ScheduleItem time="10:15 – 10:25" content={
                            <>
                                <p>Welcome Remarks by the <span className="font-bold">MC, Hosts & Government Officials</span></p>
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                    <li><span className="font-bold">H.E Tigist Hamid</span>, INSA</li>
                                    <li><span className="font-bold">H.E Taye Atskeselassie</span>, President of the FDRE</li>
                                </ul>
                            </>
                        } />
                        <ScheduleItem time="10:25 – 10:45" content={<><span className="text-[#00EBDC]">Opening Documentary Video:</span> Journey of Ethiopia's Digital Transformation</>} />
                        <ScheduleItem time="10:45 – 11:30" content={
                            <>
                                <p><span className="text-[#00EBDC]">Keynote 1:</span> Securing Digital Future: Building Cyber Resilience by Design</p>
                                <ul className="list-disc list-inside ml-4 mt-2">
                                    <li><span className="font-bold">H.E Dr. Mohamed AlKuwaiti,</span> UAE Cyber Security Council</li>
                                </ul>
                            </>
                        } />
                        <ScheduleItem time="10:45 – 11:30" content={
                            <>
                                <p><span className="text-[#00EBDC]">Panel Discussion 1:</span> Global Standards, Local Realities: Harmonizing Cybersecurity Frameworks Across Borders</p>
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                    <li><span className="font-bold">Christine Sund,</span> Senior Advisor, ITU</li>
                                    <li><span className="font-bold">Alaa Mousawi,</span> Chief Data Scientist, NYC Council</li>
                                    <li><span className="font-bold">Jackson Cheboi,</span> Regional Cybercrime Specialized Officer, INTERPOL</li>
                                </ul>
                                <div className="mt-4">
                                    <p className="font-bold">Moderator</p>
                                    <ul className="list-disc list-inside ml-4">
                                        <li><span className="font-bold">Dr. Abiyot Bayu,</span> Senior Advisor for the Minister, MinT</li>
                                    </ul>
                                </div>
                            </>
                        } />
                    </div>
                )}
                
                {selectedDay === "day2" && (
                    <div className="space-y-6">
                        <ScheduleItem time="08:00 – 09:00" content="Registration and Refreshments" />
                        <ScheduleItem time="09:00 – 09:40" content={
                            <>
                                <p><span className="text-[#00EBDC]">Opening Ceremony:</span> Opening Ceremony by</p>
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                    <li><span className="font-bold">H.E. Mahmoud Ali Youssouf,</span> Chairperson of the AU Commission</li>
                                    <li><span className="font-bold">H.E. João Manuel Gonçalves Lourenço,</span> Chairperson of the AU</li>
                                    <li><span className="font-bold">Keynote speech:</span> The Role of AI in Shaping Africa's Future By Guest of Honor</li>
                                </ul>
                            </>
                        } />
                        <ScheduleItem time="09:40 – 10:10" content={
                            <>
                                <p><span className="text-[#00EBDC]">Networking Break:</span> Group picture and Health Break</p>
                                <ul className="list-disc list-inside ml-4 mt-2">
                                    <li><span className="font-bold">H.E. Mahmoud Ali Youssouf,</span> African Union Commission - Chairperson</li>
                                </ul>
                            </>
                        } />
                        <ScheduleItem time="10:10 – 11:40" content={
                            <>
                                <p><span className="text-[#00EBDC]">Panel Discussion 1:</span> High-Level Policy Dialogue Collaborative Strategies for AI Adoption in Africa</p>
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                    <li><span className="font-bold">H.E. Lerato D. Mataboge,</span> Commissioner for Infrastructure and Energy, AUC</li>
                                    <li><span className="font-bold">H.E Amandeep Gill,</span> UN Under-Secretary General on Digital and Emerging Technologies</li>
                                    <li><span className="font-bold">Dr. Gedion Timotheos,</span> Minister of Ethiopian Foreign Affairs</li>
                                    <li><span className="font-bold">H.E Solly Malatsi,</span> Minister of Communications and Digital Technologies, South Africa</li>
                                </ul>
                                <div className="mt-4">
                                    <p className="font-bold">Moderator</p>
                                    <ul className="list-disc list-inside ml-4">
                                        <li><span className="font-bold">Billene Seyoum,</span> Press Secretary of Ethiopia's Prime Minister</li>
                                    </ul>
                                </div>
                            </>
                        } />
                    </div>
                )}
            </div>
        </section>
    )
}

interface ScheduleItemProps {
    time: string;
    content: React.ReactNode;
}

function ScheduleItem({ time, content }: ScheduleItemProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
            <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:190,opacity:1}}
                transition={{duration:1}}
                viewport={{once:true}}
                className="flex-shrink-0"
            >
                <p className="text-[#00EBDC] font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">{time}</p>
            </motion.div>
            <div className="flex-shrink-0 hidden ml-44 sm:block">
                <p className="text-white">:</p>
            </div>
            <motion.div
                initial={{x:200,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                viewport={{once:true}}
                className="text-white text-sm sm:text-base md:text-lg leading-relaxed flex-1"
            >
                {content}
            </motion.div>
        </div>
    )
}
