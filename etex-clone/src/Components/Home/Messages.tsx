import pm from "../../Assets/Abiy.webp";
import quote from "../../Assets/qoute.webp";
import { motion } from "framer-motion";

export default function Messages() {
  return (
    <div className="bg-[#0B1236] px-4  py-10">
      <div className="font-frizon text-3xl md:text-4xl text-[#00EBDC] text-center mb-10">
        MESSAGE FROM THE LEADERS
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center  w-full  ">
        {/* Prime Minister's Image */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          className=" flex justify-center"
        >
          <img src={pm} alt="Abiy Ahmed" className="h-96 object-contain" />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 10, opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-full md:w-1/2 m-10"
        >
          <div className="flex items-start gap-4 mb-4 mr-10 md:mr-2">
            <img src={quote} alt="Quote Icon" className="h-10 w-10" />
            <p className="text-white font-mono text-lg md:text-xl leading-relaxed">
              We have made significant strides as a nation since embarking on our digital journey. To thrive in the digital economy, we must support innovators and build strong digital enablers. We aim to position Ethiopia as a leader in Africa’s digital economy, encouraging global partnerships and empowering our youth to drive the digital revolution.
            </p>
          </div>

          <div className="text-[#f9f70c] font-bold font-mono text-2xl md:text-4xl text-right mt-6 mr-4">
            H.E. Abiy Ahmed (PhD)
          </div>
          <div className="text-white font-mono text-lg md:text-xl text-right mt-2 mr-4">
            Prime Minister of Ethiopia
          </div>
        </motion.div>
      </div>
    </div>
  );
}



        {/* Message Text */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 10, opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-full md:w-1/2 mx-10"
        >
          <div className="flex items-start gap-4 mb-4 mr-10 md:mr-2">
            <img src={quote} alt="Quote Icon" className="h-10 w-10" />
            <p className="text-white font-mono text-lg md:text-xl leading-relaxed">
              We have made significant strides as a nation since embarking on our digital journey. To thrive in the digital economy, we must support innovators and build strong digital enablers. We aim to position Ethiopia as a leader in Africa’s digital economy, encouraging global partnerships and empowering our youth to drive the digital revolution.
            </p>
          </div>

          <div className="text-[#f9f70c] font-bold font-mono text-2xl md:text-4xl text-right mt-6 mr-4">
            H.E. Abiy Ahmed (PhD)
          </div>
          <div className="text-white font-mono text-lg md:text-xl text-right mt-2 mr-4">
            Prime Minister of Ethiopia
          </div>
        </motion.div>