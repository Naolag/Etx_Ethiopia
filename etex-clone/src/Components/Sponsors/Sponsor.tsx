import tele from "../../Assets/tele.png"
import pre from "../../Assets/presight.png"
import huewei from "../../Assets/Huawei.png"
import meta from "../../Assets/meta.png"
import CEC from "../../Assets/CEC.png"
import ELINC from "../../Assets/ELINC.png"
import COOP from "../../Assets/COOP.png"
import CBE from "../../Assets/CBE.png"
import Airlines from   "../../Assets/Airlines.png"
import Arifpay from "../../Assets/ArifPay.png"
import Oracle from "../../Assets/Oracle.png" 
import Safaricom from "../../Assets/Safaricom.png"
import Ethswitch from "../../Assets/ETHSWITCH.png"
import Tinnoware from "../../Assets/Innoware.png"
import Raras from "../../Assets/Raras.png"
import Mkdss from "../../Assets/MKdss.png"
import Toppan from "../../Assets/Toppan.png"
import Awash from "../../Assets/Awash.png"
export default function Sponsor(){
    return(
        <section className="bg-[#0B1236] min-w-[320px]">
            <div className="font-frizon text-3xl md:text-5xl text-[#00EBDC]">
                <div>
                    <p className="text-center">Title Sponsor</p>
                    <img src={tele} alt="tele-logo" className="mx-auto h-16 md:h-24 mt-8"/>
                </div>
                <div>
                    <p className="text-center mt-20">AI Partner</p>
                    <img src={pre} alt="presight-logo" className="mx-auto  h-32 mt-4"/>
                </div>
                <div>
                    <p className="text-center text-2xl md:text-4xl mt-20">Digital Transformation Partner</p>
                    <img src={huewei} alt="huewei-logo" className="mx-auto  h-60"/>
                </div>
                <div>
                    <p className="text-center ">Knowledge Partner</p>
                    <img src={meta} alt="meta-logo" className="ml-20 sm:mx-auto  h-40 "/>
                </div>
                <div>
                    <p className="text-center ">platinum Sponsor</p>
                    <div className="grid grid-col-2 lg:flex justify-items-center justify-center lg:gap-16 items-center">
                        <div className="w-60 md:w-80 h-28 bg-white rounded-3xl items-center justify-center flex  mt-8 ">
                            <img src={CEC} alt="CEC-logo" className="h-20"/>
                            <div className="h-32 w-px bg-black"/>
                            <img src={ELINC} alt="ELinc-logo" className="h-[60%]"/>
                        </div>
                        <div className="w-60 md:w-80 h-28 bg-white rounded-3xl items-center justify-center flex  mt-8 ">
                            <img src={COOP} alt="COOP-logo" className="h-16 md:h-20"/>
                        </div>
                        <div className="w-60 md:w-80 h-28 bg-white rounded-3xl items-center justify-center flex  mt-8 ">
                            <img src={CBE} alt="CBE-logo" className="h-16 md:h-20"/>
                        </div>
                    </div>
                    <div className=" md:flex justify-center items-center gap-20 mt-8">
                        <div>
                            <p className="text-center mt-20 text-2xl md:text-5xl">Airline Partner</p>
                            <img src={Airlines} alt="presight-logo" className="mx-auto  h-60 "/>
                        </div>
                        <div>
                            <p className="text-center mb-10 text-2xl md:text-5xl">Fintech Partner</p>
                            <img src={Arifpay} alt="presight-logo" className="mx-auto h-28 md:h-32 "/>
                        </div>
                    </div>
                    <div>
                        <p className="text-center mt-20">Gold Sponsors</p>
                        <div className="grid grid-cols-2  lg:grid-cols-4  justify-items-center items-center md:max-w-[60%] justify-items-center mx-auto mt-10">
                        <img src={Oracle} alt="Oracle-logo" className="w-32 sm:w-40 md:w-80 "/>
                        <img src={Safaricom} alt="Safaricom-logo" className=" h-32 md:h-40 "/>
                        <img src={Ethswitch} alt="Ethswitch-logo" className="  h-40 "/>
                        <img src={Tinnoware} alt="T-innoware-logo" className=" h-40 "/>
                        <img src={Raras} alt="Raras-logo" className="w-32 mr-2 sm:w-auto h-40 "/>
                        <div className="bg-white rounded-3xl items-center justify-center flex mr-8  mt-8 w-40 md:w-60 lg:w-44 xl:w-52 h-28">
                           <img src={Mkdss} alt="MKDSS-logo" className=" mr-4 h-40 "/>
                        </div>
                       <div className="bg-white rounded-3xl items-center justify-center flex  mt-8 w-36 md:w-60 lg:w-44 xl:w-52 h-28">
                           <img src={Toppan} alt="Toppan-logo" className="  h-60 "/>
                        </div>
                        <div className="bg-white rounded-3xl items-center justify-center flex  mt-8 w-36 md:w-60 lg:w-44 xl:w-52 h-28">
                            <img src={Awash} alt="Awash-logo" className=" h-36"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}