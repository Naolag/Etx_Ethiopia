import { useAgendaStore } from "../../Store/agendaStore";
import { motion } from "framer-motion";

export default function Hero() {
  const { selectedDay, setSelectedDay } = useAgendaStore();
  const isDay2 = selectedDay === "day2";

  return (
    <section className="bg-[#0B1236] px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-frizon text-2xl sm:text-3xl md:text-4xl text-[#00EBDC] text-start mb-6 md:mb-10"
        >
          Agenda
        </motion.p>

        <div className="flex items-center gap-3 sm:gap-4 justify-center">
          <p className="text-[#F9F70C] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold font-serif">Day 1</p>

          <div 
            className={`w-12 h-7 sm:w-14 sm:h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 bg-gray-400`} 
            onClick={() => setSelectedDay(isDay2 ? "day1" : "day2")}
          >
            <div className={`bg-[#00d2d3] w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md transform transition-transform duration-300 ${isDay2 ? "translate-x-5 sm:translate-x-6" : "translate-x-0"}`}></div>
          </div>

          <p className="text-[#F9F70C] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold font-serif">Day 2</p>
        </div>

        <div className="bg-[#00EBDC] w-full max-w-2xl mx-auto h-12 sm:h-14 rounded-2xl sm:rounded-3xl flex items-center mt-6 md:mt-8">
          <p className="ml-4 sm:ml-6 md:ml-10 text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#070C23] font-serif">Time</p>
          <div className="h-full w-px bg-black ml-4 sm:ml-6 md:ml-16" />
          <p className="text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#070C23] font-serif ml-auto mr-4 sm:mr-6 md:mr-10">Session</p>
        </div>
      </div>
    </section>
  );
}
