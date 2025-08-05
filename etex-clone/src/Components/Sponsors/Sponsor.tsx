import tele from "../../Assets/tele.png"
import pre from "../../Assets/presight.png"
import huewei from "../../Assets/Huawei.png"
import meta from "../../Assets/meta.png"
import CEC from ""
export default function Sponsor(){
    return(
        <section className="bg-[#0B1236]">
            <div className="font-frizon text-4xl md:text-5xl text-[#00EBDC]">
                <div>
                    <p className="text-center">Title Sponsor</p>
                    <img src={tele} alt="tele-logo" className="mx-auto  h-24 mt-8"/>
                </div>
                <div>
                    <p className="text-center mt-20">AI Partner</p>
                    <img src={pre} alt="tele-logo" className="mx-auto  h-32 mt-4"/>
                </div>
                <div>
                    <p className="text-center mt-20">Digital Transformation Partner</p>
                    <img src={huewei} alt="tele-logo" className="mx-auto  h-96"/>
                </div>
                <div>
                    <p className="text-center ">Knowledge Partner</p>
                    <img src={meta} alt="tele-logo" className="mx-auto  h-60 mt-4"/>
                </div>
                <div>
                    <p className="text-center ">platinum Sponsor</p>
                    <div>
                        <div className="w-40 h-32 bg-white rounded-2xl mx-auto mt-4">
                            <img src={meta} alt="tele-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}