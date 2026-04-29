import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Competition() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      viewport={{once: false}}
    >
      {/*1*/}
<div className="w-full flex flex-col gap-6">
      <section
      id="comp"
      className="py-10 flex gap-10 justify-between items-center p-5">
        {/*kiri*/}
        <div >
          <p className="text-5xl text-red-900 font-serif font-bold">IT COMPETITION</p>
          <p className="text-red-900 font-sans text-3xl">"From Creation To Innovation"</p> <br />
          <p className="text-1xl font-sans">Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”, 
            Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.</p> <br />
          <div className="flex gap-3">
            <Button label="info selengkapnya" variant="primary"></Button>
            <Button label="hubungi panitia" variant="outline"></Button>
          </div>
        </div>

      {/*kanan*/}
        <div>
          <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png" alt="maskot" />
        </div>
      </section>
</div>
    {/*2*/}
    <div>
      <section className="py-24 px-5 bg-white">
        <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95, filter: "blur(10px)" }} 
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} 
            viewport={{ once: false, amount: 0.1 }} 
            transition={{ 
            duration: 1.8, 
            delay: 0.2, 
            }}
            className="max-w-5xl mx-auto text-center"
            >;

        <h2 className="text-5xl font-bold text-red-900 mb-8 uppercase">
        DESKRIPSI KOMPETISI
        </h2>
        <p className="text-gray-700 text-xl leading-relaxed">
        Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST (Infomatics Vocational Festival) 
        2026 adalah diantaranya National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition.
        Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas 
        guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini 
        akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial.
        </p>
        </motion.div>
      </section>
  </div>

 {/*3*/}
  <div>
    <section>
      <motion.div
        initial={{ opacity: 0, filter:"blur(10px)"}}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false }}
        className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-900 uppercase">daftar kompetisi</h2>
        <p className="text-gray-500">Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.</p>
      </motion.div>
{/*grid*/}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Kartu 1 */}
    <motion.div 
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false }}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group bg-white"
    >
      <img src="https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png" className="w-full transition-transform duration-700 group-hover:scale-110" alt="Poster" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">Poster Design</h3>
        <p className="text-gray-600 text-sm mb-4">Kompetisi desain poster.</p>
        <Button label="INFO" variant="primary" className="w-full" />
      </div>
    </motion.div>

    {/* Kartu 2 */}
    <motion.div 
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false }}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group bg-white"
    >
      <img src="https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png" className="w-full transition-transform duration-700 group-hover:scale-110" alt="UIUX" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
        <p className="text-gray-600 text-sm mb-4">Kompetisi UI/UX Design.</p>
        <Button label="INFO" variant="primary" className="w-full" />
      </div>
    </motion.div>

    {/* Kartu 3 */}
    <motion.div 
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false }}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group bg-white"
    >
      <img src="https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png" className="w-full transition-transform duration-700 group-hover:scale-110" alt="Web" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">Web Design</h3>
        <p className="text-gray-600 text-sm mb-4">Kompetisi web design.</p>
        <Button label="INFO" variant="primary" className="w-full" />
      </div>
    </motion.div>

    </div>
    </section>
  </div>
</motion.div>   
);
}
