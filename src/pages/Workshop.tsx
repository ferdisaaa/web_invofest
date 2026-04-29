import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Workshop() {
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
    className="pt-13 py-10 flex gap-10 justify-between items-center p-5" 
  >
    {/* Kiri */}
    <div className="w-2/3 flex flex-col gap-6">
      <h1 className="text-5xl text-red-900 font-serif font-bold uppercase">
        IT WORKSHOP
      </h1>
      <p className="text-red-900 font-sans text-3xl">
        “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
      </p>
      <p className="text-1xl font-sans leading-relaxed">
      IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan
      masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi
      ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
      </p>
      <div className="flex gap-3">
        <Button label="Daftar Sekarang" variant="primary"></Button>
      </div>
    </div>

    {/* Kanan */}
    <div className="w-1/3">
      <img 
        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png" 
        alt="maskot" 
        className="w-full h-auto object-contain" 
      />
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
        Tentang IT WORKSHOP
        </h2>
        <p className="text-gray-700 text-xl leading-relaxed">
        Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” 
        ini didesain khusus untuk Generasi Z, para digital natives yang berada di persimpangan antara inovasi teknologi
        dan tantangan keberlanjutan global. Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) 
        bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan. 
        Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk 
        menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.
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
        <h2 className="text-4xl font-bold text-red-900 uppercase">Temui Pembicara Khusus kami</h2>
      </motion.div>
{/*grid*/}
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-5">
      <motion.div 
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false }}
      className="flex flex-col items-center group"
    >
      {/* Container Gambar Bulat */}
      <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-red-900 shadow-lg mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
        <img 
          src="https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Lhuqita Fazry" 
        />
      </div>

      <div className="text-center p-5">
        <h3 className="text-2xl font-bold text-red-900 mb-1">Lhuqita Fazry</h3>
        <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider">Mobile Development</p>
      </div>
    </motion.div>

        {/* Kartu 2 */}
    <motion.div 
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false }}
      className="flex flex-col items-center group"
    >
      {/* Container Gambar*/}
      <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-red-900 shadow-lg mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
        <img 
          src="https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="M Dendi Purwanto" 
        />
      </div>

      <div className="text-center p-5">
        <h3 className="text-2xl font-bold text-red-900 mb-1">M Dendi Purwanto</h3>
        <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider">Artificial Intelligence</p>
      </div>
    </motion.div>

    {/* Kartu 3 */}
    <motion.div 
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false }}
      className="flex flex-col items-center group"
    >
      {/* Container Gambar*/}
      <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-red-900 shadow-lg mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
        <img 
          src="https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Danang Avan M" 
        />
      </div>

      <div className="text-center p-5">
        <h3 className="text-2xl font-bold text-red-900 mb-1">Danang Avan M</h3>
        <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider">Cybersecurity</p>
      </div>
    </motion.div>
</div>

    </section>
  </div>
</motion.div>
  );
}
