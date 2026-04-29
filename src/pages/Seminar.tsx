import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Seminar() {
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
    className="pt-5 py-10 flex gap-10 justify-between items-center p-5" 
  >
    {/* Kiri */}
    <div className="w-2/3 flex flex-col gap-6">
      <h1 className="text-5xl text-red-900 font-serif font-bold uppercase">
        IT SEMINAR
      </h1>
      <p className="text-red-900 font-sans text-3xl">
        “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
      </p>
      <p className="text-1xl font-sans leading-relaxed">
      Seminar nasional yang membahas strategi dan arsitektur teknologi 
      untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.
      Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan 
      pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.
      </p>
      <div className="flex gap-3">
        <Button label="Daftar Sekarang" variant="primary"></Button>
      </div>
    </div>

    {/* Kanan */}
    <div className="w-1/3">
      <img 
        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" 
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
        Tentang IT Seminar
        </h2>
        <p className="text-gray-700 text-xl leading-relaxed">
        Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, 
        Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan 
        antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi 
        utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi 
        Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur 
        Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi 
        peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi
        sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
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
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-5">
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
          src="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Dery Agung" 
        />
      </div>

      <div className="text-center p-5">
        <h3 className="text-2xl font-bold text-red-900 mb-1">Dery Agung Triyadi</h3>
        <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider">AWS Indonesia</p>
        <Button label="INFO SPEAKER" variant="primary" className="px-10" />
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
          src="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Sowam Habibi" 
        />
      </div>

      <div className="text-center p-5">
        <h3 className="text-2xl font-bold text-red-900 mb-1">Sowam Habibi</h3>
        <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider">Google Indonesia</p>
        <Button label="INFO SPEAKER" variant="primary" className="px-10" />
      </div>
    </motion.div>

    </div>

    </section>
  </div>
</motion.div>
  );
}
